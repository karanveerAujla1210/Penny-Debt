const express = require('express');
const router = express.Router();
const controller = require('../../controllers/customers');
const { checkPermission, logAction } = require('../../middleware/rbac');
const { validateRequest } = require('../../middleware/validate');
const validators = require('../../validators/customers');

router.post('/', checkPermission('create:customer'), validators.createCustomer, validateRequest, async (req, res, next) => {
  try {
    const result = await controller.createCustomer(req, res, next);
    // controller handles response
  } catch (err) {
    next(err);
  }
});

router.get('/', checkPermission('view:customer'), controller.listCustomers);
router.get('/:id', checkPermission('view:customer'), controller.getCustomer);

router.put('/:id', checkPermission('update:customer'), validators.updateCustomer, validateRequest, async (req, res, next) => {
  try {
    await controller.updateCustomer(req, res, next);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', checkPermission('delete:customer'), async (req, res, next) => {
  try {
    await controller.deleteCustomer(req, res, next);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
