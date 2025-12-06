const express = require('express');
const router = express.Router();
const controller = require('../../controllers/tickets');
const { checkPermission } = require('../../middleware/rbac');
const { validateRequest } = require('../../middleware/validate');
const validators = require('../../validators/tickets');

router.post('/', checkPermission('create:ticket'), validators.createTicket, validateRequest, controller.createTicket);
router.get('/', checkPermission('view:ticket'), controller.listTickets);
router.get('/:id', checkPermission('view:ticket'), controller.getTicket);
router.put('/:id', checkPermission('update:ticket'), validators.updateTicket, validateRequest, controller.updateTicket);
router.delete('/:id', checkPermission('delete:ticket'), controller.deleteTicket);

module.exports = router;
