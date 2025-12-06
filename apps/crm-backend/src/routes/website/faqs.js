const express = require('express');
const router = express.Router();
const FAQ = require('../../../models-website/FAQ');

router.get('/', async (req, res) => {
	try {
		const items = await FAQ.find().sort({ priority: -1, createdAt: -1 });
		res.json(items);
	} catch (err) {
		console.error('faqs list error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
