const express = require('express');
const router = express.Router();
const Lead = require('../../../models-website/Lead');

router.post('/submit', async (req, res) => {
	try {
		const payload = req.body || {};
		const lead = await Lead.create(payload);
		res.status(201).json(lead);
	} catch (err) {
		console.error('lead submit error', err);
		res.status(500).json({ error: err.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const { limit = 100 } = req.query;
		const leads = await Lead.find().sort({ createdAt: -1 }).limit(parseInt(limit, 10));
		res.json(leads);
	} catch (err) {
		console.error('lead list error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
