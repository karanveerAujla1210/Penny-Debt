const { body } = require('express-validator');

exports.createProgram = [
  body('caseId').notEmpty().withMessage('caseId is required'),
  body('status').optional().isIn(['ACTIVE','COMPLETED','CANCELLED']),
  body('config').optional().isObject()
];

exports.updateProgram = [
  body('status').optional().isIn(['ACTIVE','COMPLETED','CANCELLED']),
  body('config').optional().isObject()
];
