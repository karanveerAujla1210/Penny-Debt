const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Create user
router.post('/', async (req, res) => {
  try {
    const { name, email, password, role, phone } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      phone
    });
    
    await user.save();
    
    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;
    
    res.status(201).json({ success: true, data: userResponse });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email, isActive: true });
    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
    
    // Update last login
    user.lastLogin = new Date();
    await user.save();
    
    // Remove password from response
    const userResponse = user.toObject();
    delete userResponse.password;
    
    res.json({ success: true, data: userResponse });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;