const { body } = require('express-validator');

exports.createPayment = [
  body('loanId').notEmpty().withMessage('loanId is required'),
  body('amount').isNumeric().withMessage('amount must be a number'),
  body('method').optional().isString().trim()
];

exports.updatePayment = [
  body('amount').optional().isNumeric(),
  body('method').optional().isString().trim(),
  body('status').optional().isIn(['PENDING','COMPLETED','FAILED'])
];
