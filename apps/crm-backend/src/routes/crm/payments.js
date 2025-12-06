const express = require('express');
const router = express.Router();
const controller = require('../../controllers/payments');
const { checkPermission } = require('../../middleware/rbac');
const { validateRequest } = require('../../middleware/validate');
const validators = require('../../validators/payments');

router.post('/', checkPermission('create:payment'), validators.createPayment, validateRequest, controller.createPayment);
router.get('/', checkPermission('view:payment'), controller.listPayments);
router.get('/:id', checkPermission('view:payment'), controller.getPayment);
router.put('/:id', checkPermission('update:payment'), validators.updatePayment, validateRequest, controller.updatePayment);
router.delete('/:id', checkPermission('delete:payment'), controller.deletePayment);

module.exports = router;
