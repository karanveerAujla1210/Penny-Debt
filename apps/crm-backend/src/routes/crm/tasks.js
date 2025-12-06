const express = require('express');
const router = express.Router();

let Task;
try { Task = require('../../../models-website/Task'); } catch (e) { Task = null; }

router.get('/', async (req, res) => {
  try {
    const list = Task ? await Task.find().sort({ createdAt: -1 }).limit(200) : [];
    res.json({ ok: true, items: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldTasksRoute = require('../../../routes/tasks');
module.exports = oldTasksRoute;
