const express = require('express');
const router = express.Router();
const controller = require('../../controllers/tickets');
const { checkPermission } = require('../../middleware/rbac');
const { validateRequest } = require('../../middleware/validate');
const validators = require('../../validators/tickets');

function safeHandler(fn) {
	return async (req, res, next) => {
		try {
			if (typeof fn !== 'function') {
				return res.status(500).json({ error: 'Controller method not implemented' });
			}
			await fn(req, res, next);
		} catch (err) {
			next(err);
		}
	};
}

router.post(
	'/',
	checkPermission('create:ticket'),
	validators && validators.createTicket ? validators.createTicket : (req, res, next) => next(),
	validateRequest,
	safeHandler(controller.createTicket)
);

router.get('/', checkPermission('view:ticket'), safeHandler(controller.listTickets));
router.get('/:id', checkPermission('view:ticket'), safeHandler(controller.getTicket));

router.put(
	'/:id',
	checkPermission('update:ticket'),
	validators && validators.updateTicket ? validators.updateTicket : (req, res, next) => next(),
	validateRequest,
	safeHandler(controller.updateTicket)
);

router.delete('/:id', checkPermission('delete:ticket'), safeHandler(controller.deleteTicket));

module.exports = router;
