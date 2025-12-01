const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const stats = {
      clientsServed: 5000,
      debtResolved: '₹500Cr+',
      successRate: '95%',
      avgSavings: '60%'
    };
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
