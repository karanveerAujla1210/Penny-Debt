const express = require('express');
const { body, validationResult } = require('express-validator');
const LoanApplication = require('../models-website/LoanApplication');

const router = express.Router();

// Submit loan application (from public website)
router.post('/', [
  body('name').trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('phone').isMobilePhone(),
  body('amount').isNumeric()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
    }

    const { name, email, phone, amount, product, purpose, tenure, rate, consent, referral, honey, ...rest } = req.body;

    // Basic honeypot check
    if (honey) {
      // treat as spam, accept silently
      return res.status(200).json({ message: 'Application received' });
    }

    const application = new LoanApplication({
      name,
      email,
      phone,
      amount: Number(amount),
      product: product || 'unknown',
      purpose,
      tenure: tenure ? Number(tenure) : undefined,
      rate: rate ? Number(rate) : undefined,
      consent: !!consent,
      referral,
      details: rest
    });

    const saved = await application.save();

    return res.status(201).json({ message: 'Application submitted successfully', id: saved._id });
  } catch (err) {
    console.error('Loan application submit error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// GET list of applications (basic)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 100 } = req.query;
    const p = Math.max(1, parseInt(page));
    const l = Math.min(1000, Math.max(1, parseInt(limit)));

    const total = await LoanApplication.countDocuments();
    const apps = await LoanApplication.find()
      .sort({ createdAt: -1 })
      .skip((p - 1) * l)
      .limit(l)
      .lean();

    res.json({ total, page: p, limit: l, applications: apps });
  } catch (err) {
    console.error('Get loan applications error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
