const express = require('express');
const { body, validationResult } = require('express-validator');
const Lead = require('../../models/Lead');
const Activity = require('../../models/Activity');

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

    // Create debt application lead
    const lead = new Lead({
      name,
      email,
      phone,
      totalDebt,
      monthlyIncome,
      loanType,
      employmentStatus,
      city,
      pincode,
      message: message || undefined,
      source: source || 'website',
      status: 'new',
      emailVerified: emailVerified || false
    });

    const result = await lead.save();

    // Log activity
    await Activity.create({
      relatedId: result._id,
      type: 'debt_application',
      action: 'note',
      subject: 'Application Submitted',
      description: 'New debt relief application submitted from website'
    });

    res.status(201).json({ 
      message: 'Application submitted successfully',
      applicationId: result._id
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
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    let query = Lead.find();

    if (status) {
      query = query.where('status').equals(status);
    }

    const total = await Lead.countDocuments(query.getFilter());
    const applications = await query
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    res.json({
      applications,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;