const { body } = require('express-validator');

exports.createLoan = [
  body('customerId').notEmpty().withMessage('customerId is required'),
  body('principal').isNumeric().withMessage('principal must be a number'),
  body('interestRate').optional().isNumeric(),
  body('status').optional().isIn(['OPEN','CLOSED','DEFAULTED'])
];

exports.updateLoan = [
  body('principal').optional().isNumeric(),
  body('interestRate').optional().isNumeric(),
  body('status').optional().isIn(['OPEN','CLOSED','DEFAULTED'])
];
