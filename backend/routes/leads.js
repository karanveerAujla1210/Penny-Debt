const express = require('express');
const { body, validationResult } = require('express-validator');
const supabase = require('../models/database');

const router = express.Router();

// Submit debt relief application
router.post('/submit', [
  body('name').trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('phone').isMobilePhone(),
  body('totalDebt').isNumeric().isFloat({ min: 10000 }),
  body('monthlyIncome').isNumeric().isFloat({ min: 5000 }),
  body('loanType').isIn(['personal', 'credit-card', 'medical', 'business', 'multiple', 'other']),
  body('employmentStatus').isIn(['employed', 'self-employed', 'unemployed', 'retired', 'student']),
  body('city').trim().isLength({ min: 2 }),
  body('pincode').isLength({ min: 6, max: 6 }).isNumeric(),
  body('agreeToTerms').isBoolean().equals('true')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
    }

    const {
      name, email, phone, totalDebt, monthlyIncome,
      loanType, employmentStatus, city, pincode,
      message, source, leadType, emailVerified
    } = req.body;

    // Check if email is verified
    if (emailVerified) {
      const { data: verifiedRows } = await supabase
        .from('verified_emails')
        .select('*')
        .eq('email', email);
      
      if (!verifiedRows || verifiedRows.length === 0) {
        return res.status(400).json({ message: 'Email not verified' });
      }
    }

    // Insert debt application
    const { data: result, error } = await supabase
      .from('debt_applications')
      .insert({
        name, email, phone, 
        total_debt: totalDebt, 
        monthly_income: monthlyIncome,
        loan_type: loanType, 
        employment_status: employmentStatus, 
        city, pincode,
        message: message || null, 
        source: source || 'website', 
        lead_type: leadType || 'debt_relief',
        status: 'new'
      })
      .select()
      .single();

    if (error) throw error;

    // Log activity
    await supabase
      .from('lead_activities')
      .insert({
        lead_id: result.id,
        lead_type: 'debt_application',
        activity_type: 'note',
        subject: 'Application Submitted',
        description: 'New debt relief application submitted from website'
      });

    res.status(201).json({ 
      message: 'Application submitted successfully',
      applicationId: result.id
    });
  } catch (error) {
    console.error('Submit application error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all applications (for CRM)
router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 50 } = req.query;
    const offset = (page - 1) * limit;

    let query = supabase
      .from('debt_applications')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + parseInt(limit) - 1);

    if (status) {
      query = query.eq('status', status);
    }

    const { data: applications, count: total, error } = await query;
    
    if (error) throw error;

    res.json({
      applications,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;