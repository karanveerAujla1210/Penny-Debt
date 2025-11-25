const express = require('express');
const router = express.Router();

// Employee credentials
const EMPLOYEE_ACCOUNTS = {
  'admin@pennyanddebt.in': { password: 'PennyAdmin@2024#Secure', role: 'admin', name: 'Admin User' },
  'manager@pennyanddebt.in': { password: 'DebtManager$2024!Strong', role: 'manager', name: 'Manager User' },
  'sales1@pennyanddebt.in': { password: 'SalesLead#2024@Power', role: 'sales', name: 'Sales Lead' },
  'support@pennyanddebt.in': { password: 'Support&2024!Help', role: 'support', name: 'Support Agent' }
};

// Employee login
router.post('/employee-login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required' });
    }

    const employee = EMPLOYEE_ACCOUNTS[email.toLowerCase()];
    
    if (!employee || employee.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.json({
      success: true,
      message: 'Login successful',
      user: {
        email: email.toLowerCase(),
        role: employee.role,
        name: employee.name
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;