const express = require('express');
const router = express.Router();

let Employee;
try { Employee = require('../../../models-website/Employee'); } catch (e) { Employee = null; }

router.get('/', async (req, res) => {
  try {
    const list = Employee ? await Employee.find().sort({ createdAt: -1 }).limit(200) : [];
    res.json({ ok: true, items: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldEmployeesRoute = require('../../../routes/employees');
module.exports = oldEmployeesRoute;
