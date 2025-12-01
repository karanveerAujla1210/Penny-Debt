const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all collections
router.get('/', (req, res) => {
  db.query('SELECT * FROM collections', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Add new collection
router.post('/', (req, res) => {
  const { loan_id, due_date, paid_date, amount_due, amount_paid, status, remarks } = req.body;
  db.query(
    'INSERT INTO collections (loan_id, due_date, paid_date, amount_due, amount_paid, status, remarks) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [loan_id, due_date, paid_date, amount_due, amount_paid, status, remarks],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Collection added successfully', id: results.insertId });
    }
  );
});

module.exports = router;
