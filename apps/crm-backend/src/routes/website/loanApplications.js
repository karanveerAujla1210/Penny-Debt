const express = require('express');
const router = express.Router();
const LoanApplication = require('../../../models-website/LoanApplication');

router.post('/submit', async (req, res) => {
	try {
		const payload = req.body || {};
		const app = await LoanApplication.create(payload);
		res.status(201).json(app);
	} catch (err) {
		console.error('loan application submit error', err);
		res.status(500).json({ error: err.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const { limit = 100 } = req.query;
		const apps = await LoanApplication.find().sort({ createdAt: -1 }).limit(parseInt(limit, 10));
		res.json(apps);
	} catch (err) {
		console.error('loan application list error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
