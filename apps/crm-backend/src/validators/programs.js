const { body, param } = require('express-validator');

exports.createProgram = [
  body('caseId').isMongoId().withMessage('Invalid case ID'),
  
  body('config.programType')
    .isIn(['FULL', 'PARTIAL', 'EMI_RESTRUCTURE', 'LEGAL_ONLY'])
    .withMessage('Invalid program type'),
  
  body('config.sipAmount')
    .isFloat({ min: 1000, max: 500000 })
    .withMessage('SIP amount must be between ₹1,000 and ₹5,00,000'),
  
  body('config.expectedDuration')
    .optional()
    .isInt({ min: 3, max: 72 })
    .withMessage('Duration must be between 3 and 72 months'),
  
  body('config.strategy')
    .optional()
    .isIn(['AVALANCHE', 'SNOWBALL', 'CUSTOM'])
    .withMessage('Invalid strategy'),
  
  body('loans')
    .isArray({ min: 1 })
    .withMessage('At least one loan must be included'),
  
  body('loans.*.loanId')
    .isMongoId()
    .withMessage('Invalid loan ID'),
  
  body('loans.*.priority')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Priority must be positive'),
  
  body('loans.*.expectedSettlementPct')
    .optional()
    .isFloat({ min: 20, max: 100 })
    .withMessage('Settlement % must be between 20% and 100%')
];

exports.updateProgram = [
  param('id').isMongoId().withMessage('Invalid program ID'),
  
  body('config.sipAmount')
    .optional()
    .isFloat({ min: 1000, max: 500000 })
    .withMessage('SIP amount must be between ₹1,000 and ₹5,00,000'),
  
  body('status')
    .optional()
    .isIn(['DRAFT', 'ACTIVE_PENDING_MANDATE', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'CANCELLED'])
    .withMessage('Invalid status')
];

module.exports = exports;
