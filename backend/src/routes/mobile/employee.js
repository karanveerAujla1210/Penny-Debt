const express = require('express');
const router = express.Router();

// Mobile employee endpoints
router.get('/dashboard', async (req, res) => {
  try {
    res.json({ message: 'Employee dashboard endpoint - Coming soon' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/tasks', async (req, res) => {
  try {
    res.json({ message: 'Employee tasks endpoint - Coming soon' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
