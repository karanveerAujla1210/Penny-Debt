const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

const validateLead = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('phone').isMobilePhone('en-IN').withMessage('Valid Indian phone number required'),
  body('debtAmount').optional().isNumeric().withMessage('Debt amount must be numeric'),
  handleValidationErrors
];

const validateApplication = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name required'),
  body('phone').isMobilePhone('en-IN').withMessage('Valid phone required'),
  body('debts').isArray({ min: 1 }).withMessage('At least one debt required'),
  body('debts.*.amount').isNumeric().withMessage('Debt amount must be numeric'),
  body('debts.*.creditor').trim().notEmpty().withMessage('Creditor name required'),
  handleValidationErrors
];

const validateLogin = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
  handleValidationErrors
];

const validateOTP = [
  body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
  body('otp').isLength({ min: 6, max: 6 }).isNumeric().withMessage('OTP must be 6 digits'),
  handleValidationErrors
];

module.exports = {
  validateLead,
  validateApplication,
  validateLogin,
  validateOTP,
  handleValidationErrors
};
