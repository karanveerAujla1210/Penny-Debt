const express = require('express');
const router = express.Router();
const Task = require('../models-website/Task');

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate('assignedTo', 'name email')
      .populate('assignedBy', 'name')
      .populate('customer', 'fullName')
      .populate('case', 'caseNumber');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get tasks by employee
router.get('/employee/:employeeId', async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.params.employeeId })
      .populate('customer', 'fullName')
      .populate('case', 'caseNumber');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create task
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update task
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Mark task as completed
router.patch('/:id/complete', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id, 
      { status: 'completed', completedAt: new Date() }, 
      { new: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
