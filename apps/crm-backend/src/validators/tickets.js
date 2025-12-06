const { body } = require('express-validator');

exports.createTicket = [
  body('customerId').notEmpty().withMessage('customerId is required'),
  body('type').optional().isString(),
  body('priority').optional().isIn(['LOW','MEDIUM','HIGH','CRITICAL'])
];

exports.updateTicket = [
  body('status').optional().isIn(['OPEN','IN_PROGRESS','WAITING','RESOLVED']),
  body('priority').optional().isIn(['LOW','MEDIUM','HIGH','CRITICAL'])
];
