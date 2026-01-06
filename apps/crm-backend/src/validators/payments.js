const { body, param } = require('express-validator');

exports.createPayment = [
  body('customerId').isMongoId().withMessage('Invalid customer ID'),
  body('programId').isMongoId().withMessage('Invalid program ID'),
  
  body('paymentType')
    .isIn(['SIP', 'SETTLEMENT', 'FEE', 'REFUND'])
    .withMessage('Invalid payment type'),
  
  body('amount')
    .isFloat({ min: 1 })
    .withMessage('Amount must be at least ₹1'),
  
  body('scheduledDate')
    .optional()
    .isISO8601()
    .withMessage('Invalid date format')
];

exports.updatePayment = [
  param('id').isMongoId().withMessage('Invalid payment ID'),
  
  body('status')
    .optional()
    .isIn(['PENDING', 'SUCCESS', 'FAILED'])
    .withMessage('Invalid status'),
  
  body('paidDate')
    .optional()
    .isISO8601()
    .withMessage('Invalid date format')
];

module.exports = exports;
