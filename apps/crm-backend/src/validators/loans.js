const { body, param } = require('express-validator');

exports.createLoan = [
  body('customerId').isMongoId().withMessage('Invalid customer ID'),
  body('caseId').isMongoId().withMessage('Invalid case ID'),
  
  body('lender.name').notEmpty().withMessage('Lender name required'),
  body('lender.category')
    .isIn(['BANK', 'NBFC', 'FINTECH', 'CARD'])
    .withMessage('Invalid lender category'),
  
  body('details.productType')
    .isIn(['CREDIT_CARD', 'PERSONAL_LOAN', 'BUSINESS_LOAN', 'BNPL', 'AUTO_LOAN', 'HOME_LOAN', 'LINE_OF_CREDIT'])
    .withMessage('Invalid product type'),
  
  body('details.originalAmount')
    .isFloat({ min: 1000 })
    .withMessage('Original amount must be at least ₹1,000'),
  
  body('details.currentOutstanding')
    .isFloat({ min: 0 })
    .withMessage('Outstanding must be positive')
    .custom((value, { req }) => {
      if (value > req.body.details.originalAmount * 2) {
        throw new Error('Outstanding cannot be more than 2x original amount');
      }
      return true;
    }),
  
  body('details.emiAmount')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('EMI must be positive'),
  
  body('status.dpdStatus')
    .optional()
    .isIn(['CURRENT', 'DPD_30', 'DPD_60', 'DPD_90', 'WRITE_OFF', 'SETTLED'])
    .withMessage('Invalid DPD status')
];

exports.updateLoan = [
  param('id').isMongoId().withMessage('Invalid loan ID'),
  body('details.currentOutstanding')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Outstanding must be positive')
];

module.exports = exports;
