const express = require('express');
const router = express.Router();
const Service = require('../../../models-website/Service');

router.get('/', async (req, res) => {
	try {
		const items = await Service.find().sort({ createdAt: -1 });
		res.json(items);
	} catch (err) {
		console.error('services list error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
