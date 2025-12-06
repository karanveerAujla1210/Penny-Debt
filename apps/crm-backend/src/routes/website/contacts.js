const express = require('express');
const router = express.Router();
const Contact = require('../../../models-website/Contact');

router.post('/submit', async (req, res) => {
	try {
		const payload = req.body || {};
		const contact = await Contact.create(payload);
		res.status(201).json(contact);
	} catch (err) {
		console.error('contact submit error', err);
		res.status(500).json({ error: err.message });
	}
});

router.get('/', async (req, res) => {
	try {
		const contacts = await Contact.find().sort({ createdAt: -1 }).limit(200);
		res.json(contacts);
	} catch (err) {
		console.error('contact list error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
