const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../../../models-website/User');
const Employee = require('../../../models-website/Employee');
const { JWT_SECRET, JWT_EXPIRE } = require('../../config/env');

// Helper to create JWT
function createToken(payload) {
	return jwt.sign(payload, process.env.JWT_SECRET || JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || JWT_EXPIRE });
}

// Customer login by phone - if user not found, create a lightweight customer record
router.post('/customer-login', async (req, res) => {
	try {
		const { phone } = req.body;
		if (!phone) return res.status(400).json({ error: 'phone is required' });

		let user = await User.findOne({ phone });
		if (!user) {
			const defaultPassword = Math.random().toString(36).slice(-8);
			const hashed = await bcrypt.hash(defaultPassword, 10);
			user = await User.create({ name: 'Website Customer', phone, password: hashed, role: 'customer' });
		}

		const token = createToken({ id: user._id, role: user.role, email: user.email || null });
		res.json({ token, role: user.role });
	} catch (err) {
		console.error('customer-login error', err);
		res.status(500).json({ error: err.message });
	}
});

// Employee login by email (simple): expect employee exists and password matches
router.post('/employee-login', async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email) return res.status(400).json({ error: 'email is required' });

		const employee = await Employee.findOne({ email });
		if (!employee) return res.status(401).json({ error: 'Invalid credentials' });

		if (password) {
			const match = await bcrypt.compare(password, employee.password);
			if (!match) return res.status(401).json({ error: 'Invalid credentials' });
		}

		const token = createToken({ id: employee._id, role: employee.role, email: employee.email });
		res.json({ token, role: employee.role });
	} catch (err) {
		console.error('employee-login error', err);
		res.status(500).json({ error: err.message });
	}
});

// Admin login by username - fallback simple flow
router.post('/admin-login', async (req, res) => {
	try {
		const { username, password } = req.body;
		// Try to find employee with role 'admin' and matching username (email or employeeId)
		const admin = await Employee.findOne({ $or: [{ email: username }, { employeeId: username }], role: 'admin' });
		if (!admin) return res.status(401).json({ error: 'Invalid credentials' });

		if (password) {
			const match = await bcrypt.compare(password, admin.password);
			if (!match) return res.status(401).json({ error: 'Invalid credentials' });
		}

		const token = createToken({ id: admin._id, role: admin.role, email: admin.email });
		res.json({ token, role: admin.role });
	} catch (err) {
		console.error('admin-login error', err);
		res.status(500).json({ error: err.message });
	}
});

// Generic register for website customers (optional)
router.post('/register', async (req, res) => {
	try {
		const { name, email, phone, password } = req.body;
		if (!name || !email || !password) return res.status(400).json({ error: 'name, email and password required' });

		const existing = await User.findOne({ email });
		if (existing) return res.status(409).json({ error: 'Email already in use' });

		const hashed = await bcrypt.hash(password, 10);
		const user = await User.create({ name, email, phone, password: hashed, role: 'customer' });
		const token = createToken({ id: user._id, role: user.role, email: user.email });
		res.status(201).json({ token, role: user.role });
	} catch (err) {
		console.error('register error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
