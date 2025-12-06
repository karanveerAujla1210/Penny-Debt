const express = require('express');
const router = express.Router();
const Career = require('../../../models-website/Career');

router.post('/submit', async (req, res) => {
	try {
		const payload = req.body || {};
		const career = await Career.create(payload);
		res.status(201).json(career);
	} catch (err) {
		console.error('career submit error', err);
		res.status(500).json({ error: err.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const items = await Career.find().sort({ createdAt: -1 });
		res.json(items);
	} catch (err) {
		console.error('career list error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
