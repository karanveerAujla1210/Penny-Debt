const express = require('express');
const router = express.Router();
const OTP = require('../../../models-website/OTP');

// Simple OTP send (store code in DB). In production integrate SMS provider.
router.post('/send', async (req, res) => {
	try {
		const { phone } = req.body;
		if (!phone) return res.status(400).json({ error: 'phone required' });

		const code = Math.floor(100000 + Math.random() * 900000).toString();
		const ttl = 5 * 60; // 5 minutes
		const entry = await OTP.create({ phone, code, expiresAt: new Date(Date.now() + ttl * 1000) });

		// TODO: send code via SMS provider here

		res.json({ success: true, message: 'OTP generated', id: entry._id });
	} catch (err) {
		console.error('otp send error', err);
		res.status(500).json({ error: err.message });
	}
});

router.post('/verify', async (req, res) => {
	try {
		const { phone, code } = req.body;
		if (!phone || !code) return res.status(400).json({ error: 'phone and code required' });

		const entry = await OTP.findOne({ phone, code }).sort({ createdAt: -1 });
		if (!entry) return res.status(400).json({ error: 'Invalid OTP' });
		if (entry.expiresAt && entry.expiresAt < new Date()) return res.status(400).json({ error: 'OTP expired' });

		res.json({ success: true });
	} catch (err) {
		console.error('otp verify error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
