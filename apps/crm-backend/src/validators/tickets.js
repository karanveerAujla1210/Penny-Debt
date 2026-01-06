const { body, param } = require('express-validator');

exports.createTicket = [
  body('customerId').isMongoId().withMessage('Invalid customer ID'),
  
  body('type')
    .isIn(['QUERY', 'COMPLAINT', 'TECHNICAL', 'PAYMENT', 'DOCUMENT', 'OTHER'])
    .withMessage('Invalid ticket type'),
  
  body('priority')
    .optional()
    .isIn(['LOW', 'MEDIUM', 'HIGH', 'URGENT'])
    .withMessage('Invalid priority'),
  
  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('Subject must be 5-200 characters'),
  
  body('description')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Description must be 10-2000 characters')
];

exports.updateTicket = [
  param('id').isMongoId().withMessage('Invalid ticket ID'),
  
  body('status')
    .optional()
    .isIn(['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'])
    .withMessage('Invalid status')
];

module.exports = exports;
