const express = require('express');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const supabase = require('../models/database');

const router = express.Router();

// Customer signup
router.post('/signup', [
  body('full_name').trim().isLength({ min: 2 }),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('mobile').optional().isMobilePhone()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
    }

    const { full_name, email, password, mobile } = req.body;

    // Check if email already exists
    const { data: existingUsers } = await supabase
      .from('customers')
      .select('id')
      .eq('email', email);

    if (existingUsers && existingUsers.length > 0) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const saltRounds = 12;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // Insert customer
    const { data: result, error } = await supabase
      .from('customers')
      .insert({
        full_name,
        email,
        password_hash,
        mobile: mobile || null
      })
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({ 
      message: 'Account created successfully',
      customerId: result.id
    });
  } catch (error) {
    console.error('Customer signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;