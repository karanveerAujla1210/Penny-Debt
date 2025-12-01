const express = require('express');
const router = express.Router();
const db = require('../db');

// POST: Create a new loan
router.post('/', (req, res) => {
  const { applicant_name, pan_card, loan_amount, disbursement_date, status } = req.body;

  if (!applicant_name || !pan_card || !loan_amount || !disbursement_date || !status) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const processing_fee = loan_amount * 0.10;
  const gst_on_fee = processing_fee * 0.18;
  const net_disbursed = loan_amount - processing_fee - gst_on_fee;
  const interest_amount = loan_amount * 0.20;
  const repayment_amount = loan_amount + interest_amount;
  const installment_count = 14;
  const installment_amount = repayment_amount / installment_count;

  const query = `
    INSERT INTO loans
    (applicant_name, pan_card, loan_amount, processing_fee, gst_on_fee, net_disbursed, interest_amount,
     repayment_amount, installment_count, installment_amount, disbursement_date, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    applicant_name,
    pan_card,
    loan_amount,
    processing_fee.toFixed(2),
    gst_on_fee.toFixed(2),
    net_disbursed.toFixed(2),
    interest_amount.toFixed(2),
    repayment_amount.toFixed(2),
    installment_count,
    installment_amount.toFixed(2),
    disbursement_date,
    status
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Insert error:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Loan created successfully', loan_id: result.insertId });
  });
});

// GET: View all loans
router.get('/', (req, res) => {
  db.query('SELECT * FROM loans ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.error('DB error:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

module.exports = router;
