const express = require('express');
const router = express.Router();
const Blog = require('../models-website/Blog');

router.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 }).limit(limit);
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, isPublished: true });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
