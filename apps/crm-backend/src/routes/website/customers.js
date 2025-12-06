const express = require('express');
const router = express.Router();
const Customer = require('../../../models-website/Customer');

router.post('/create', async (req, res) => {
	try {
		const payload = req.body || {};
		const customer = await Customer.create(payload);
		res.status(201).json(customer);
	} catch (err) {
		console.error('customer create error', err);
		res.status(500).json({ error: err.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const list = await Customer.find().sort({ createdAt: -1 }).limit(200);
		res.json(list);
	} catch (err) {
		console.error('customer list error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
