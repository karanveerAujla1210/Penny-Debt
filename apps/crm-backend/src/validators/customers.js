const { body, param } = require('express-validator');

exports.createCustomer = [
  body('userId').isMongoId().withMessage('Invalid user ID'),
  
  body('basic.fullName')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be 2-100 characters'),
  
  body('basic.primaryMobile')
    .matches(/^[6-9]\d{9}$/)
    .withMessage('Invalid Indian mobile number'),
  
  body('basic.email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Invalid email'),
  
  body('employment.monthlyNetIncome')
    .optional()
    .isFloat({ min: 5000 })
    .withMessage('Income must be at least ₹5,000'),
  
  body('expenses.rentOrHomeEmi')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Rent must be positive'),
  
  body('expenses.groceries')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Groceries must be positive')
];

exports.updateCustomer = [
  param('id').isMongoId().withMessage('Invalid customer ID'),
  
  body('basic.primaryMobile')
    .optional()
    .matches(/^[6-9]\d{9}$/)
    .withMessage('Invalid Indian mobile number'),
  
  body('kyc.pan')
    .optional()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
    .withMessage('Invalid PAN format'),
  
  body('kyc.aadhaar')
    .optional()
    .matches(/^\d{12}$/)
    .withMessage('Invalid Aadhaar format')
];

module.exports = exports;
