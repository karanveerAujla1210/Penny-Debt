const express = require('express');
const router = express.Router();
const Testimonial = require('../../../models-website/Testimonial');

router.get('/', async (req, res) => {
	try {
		const items = await Testimonial.find().sort({ createdAt: -1 }).limit(200);
		res.json(items);
	} catch (err) {
		console.error('testimonials list error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
