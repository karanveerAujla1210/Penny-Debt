const { body, param, query } = require('express-validator');

exports.createLead = [
  body('leadSource')
    .isIn(['META', 'GOOGLE', 'REFERRAL', 'WHATSAPP', 'PARTNER', 'WEBSITE', 'OTHER'])
    .withMessage('Invalid lead source'),
  
  body('financialSnapshot.approxIncome')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Income must be positive'),
  
  body('financialSnapshot.approxEmi')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('EMI must be positive'),
  
  body('stress.stressLevel')
    .optional()
    .isIn(['LOW', 'MEDIUM', 'HIGH', 'EXTREME'])
    .withMessage('Invalid stress level'),
  
  body('stress.harassmentLevel')
    .optional()
    .isIn(['NONE', 'CALLS', 'THREATS', 'HOME_VISIT', 'EMPLOYER_CONTACT'])
    .withMessage('Invalid harassment level')
];

exports.updateLead = [
  param('id').isMongoId().withMessage('Invalid lead ID'),
  body('status')
    .optional()
    .isIn(['NEW', 'IN_PROGRESS', 'CONVERTED', 'REJECTED', 'NURTURE'])
    .withMessage('Invalid status')
];

module.exports = exports;
