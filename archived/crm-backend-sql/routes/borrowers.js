const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all borrowers
router.get('/', (req, res) => {
  db.query('SELECT * FROM borrowers', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Add new borrower
router.post('/', (req, res) => {
  const { name, email, phone } = req.body;
  db.query('INSERT INTO borrowers (name, email, phone) VALUES (?, ?, ?)', [name, email, phone], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Borrower added successfully', id: results.insertId });
  });
});

module.exports = router;
