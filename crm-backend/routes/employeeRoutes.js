const express = require('express');
const router = express.Router();
const { createEmployee, getAllEmployees } = require('../controllers/employeeController');
const { jwtAuth, roleAuth } = require('../middleware/authMiddleware');

// All routes in this file are prefixed with /api/employees

// @route   GET /api/employees
// @desc    Get all employees
// @access  Private, Roles: HR, Admin
router.get('/', jwtAuth, roleAuth(['HR', 'Admin']), getAllEmployees);

// @route   POST /api/employees
// @desc    Create a new employee
// @access  Private, Roles: HR, Admin
router.post('/', jwtAuth, roleAuth(['HR', 'Admin']), createEmployee);

module.exports = router;
