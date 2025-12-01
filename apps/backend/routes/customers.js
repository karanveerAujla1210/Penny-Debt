const express = require('express');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const Customer = require('../../models/Customer');

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
    const existingCustomer = await Customer.findOne({ email });

    if (existingCustomer) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const saltRounds = 12;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // Create customer with hashed password
    const customer = new Customer({
      fullName: full_name,
      email,
      phone: mobile || '',
      passwordHash: password_hash,
      status: 'new'
    });

    const result = await customer.save();

    res.status(201).json({ 
      message: 'Account created successfully',
      customerId: result._id
    });
  } catch (error) {
    console.error('Customer signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Customer login
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find customer by email
    const customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if passwordHash exists and compare
    if (!customer.passwordHash) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, customer.passwordHash);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      message: 'Login successful',
      token: 'token_' + customer._id,
      user: {
        id: customer._id,
        email: customer.email,
        name: customer.fullName,
        role: 'customer'
      }
    });
  } catch (error) {
    console.error('Customer login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;