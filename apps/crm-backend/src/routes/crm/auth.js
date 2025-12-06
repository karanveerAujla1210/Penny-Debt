const express = require('express');
const router = express.Router();

let Employee;
try { Employee = require('../../../models-website/Employee'); } catch (e) { Employee = null; }

router.get('/', async (req, res) => {
  try {
    const count = Employee ? await Employee.countDocuments() : 0;
    res.json({ ok: true, name: 'crm-auth', hasModel: !!Employee, employeeCount: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldCrmAuthRoute = require('../../../routes/crm/auth');
module.exports = oldCrmAuthRoute;
