const Employee = require('../models/Employee');

// @desc    Create a new employee
// @route   POST /api/employees
// @access  Private/Admin/HR
const createEmployee = async (req, res) => {
  const { name, email, password, phone, role, department, salary, manager } = req.body;

  try {
    const employeeExists = await Employee.findOne({ email });

    if (employeeExists) {
      return res.status(400).json({ message: 'Employee already exists' });
    }

    const employee = await Employee.create({
      name,
      email,
      password,
      phone,
      role,
      department,
      salary,
      manager,
    });

    if (employee) {
      res.status(201).json({
        _id: employee._id,
        name: employee.name,
        email: employee.email,
        role: employee.role,
        department: employee.department,
      });
    } else {
      res.status(400).json({ message: 'Invalid employee data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Get all employees
// @route   GET /api/employees
// @access  Private/Admin/HR
const getAllEmployees = async (req, res) => {
  try {
    // Exclude password from the result
    const employees = await Employee.find({}).select('-password').populate('manager', 'name email');
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
};
