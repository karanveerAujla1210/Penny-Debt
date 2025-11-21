// routes/masterLoans.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/master-loans
router.get('/', (req, res) => {
  const query = 'SELECT * FROM master_loan_csv LIMIT 10';
  db.query(query, (err, results) => {
    if (err) {
      console.error('MySQL error:', err.message);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
});

module.exports = router;
