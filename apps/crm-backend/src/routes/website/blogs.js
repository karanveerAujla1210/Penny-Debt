const express = require('express');
const router = express.Router();
const Blog = require('../../../models-website/Blog');

router.get('/', async (req, res) => {
	try {
		const items = await Blog.find().sort({ publishedAt: -1 }).limit(200);
		res.json(items);
	} catch (err) {
		console.error('blogs list error', err);
		res.status(500).json({ error: err.message });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const item = await Blog.findById(req.params.id);
		if (!item) return res.status(404).json({ error: 'Blog not found' });
		res.json(item);
	} catch (err) {
		console.error('blog get error', err);
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
