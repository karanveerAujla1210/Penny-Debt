const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models-website/Contact');

const router = express.Router();

// Submit contact form
router.post('/', [
  body('fullName').trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('subject').trim().isLength({ min: 3 }),
  body('message').trim().isLength({ min: 5 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
    }

    const { fullName, email, phone, subject, message, source } = req.body;

    const contact = new Contact({
      fullName,
      email,
      phone: phone || '',
      subject,
      message,
      source: source || 'website'
    });

    const saved = await contact.save();

    res.status(201).json({ message: 'Contact received', id: saved._id });
  } catch (err) {
    console.error('Contact submit error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET contacts (CRM)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 100 } = req.query;
    const p = Math.max(1, parseInt(page));
    const l = Math.min(1000, Math.max(1, parseInt(limit)));

    const total = await Contact.countDocuments();
    const rows = await Contact.find()
      .sort({ createdAt: -1 })
      .skip((p - 1) * l)
      .limit(l)
      .lean();

    res.json({ total, page: p, limit: l, contacts: rows });
  } catch (err) {
    console.error('Get contacts error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
