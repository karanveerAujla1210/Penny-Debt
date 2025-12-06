const { body } = require('express-validator');

exports.createCustomer = [
  body('name').isString().trim().notEmpty().withMessage('name is required'),
  body('email').optional().isEmail().withMessage('invalid email'),
  body('phone').optional().isString().trim()
];

exports.updateCustomer = [
  body('name').optional().isString().trim(),
  body('email').optional().isEmail(),
  body('phone').optional().isString().trim()
];
