// Simple dev stub for website auth routes to avoid module-not-found during dev
const express = require('express');
const router = express.Router();

// Basic dev endpoints used by frontend services. These return mock tokens and roles
router.post('/customer-login', (req, res) => {
	res.json({ token: 'dev-customer-token', role: 'customer' });
});

router.post('/employee-login', (req, res) => {
	res.json({ token: 'dev-employee-token', role: 'employee' });
});

router.post('/admin-login', (req, res) => {
	res.json({ token: 'dev-admin-token', role: 'admin' });
});

module.exports = router;
