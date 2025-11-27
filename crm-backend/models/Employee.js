const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: [
      'Employee',
      'Advisor',
      'Operations',
      'Legal',
      'Manager',
      'HR',
      'Finance',
      'Accounts',
      'Admin',
    ],
    default: 'Employee',
  },
  department: {
    type: String,
    required: true,
    enum: [
      'Advisory',
      'Operations',
      'Legal',
      'Human Resources',
      'Finance & Accounting',
      'Management',
      'Administration',
    ],
    default: 'Administration',
  },
  hireDate: {
    type: Date,
    default: Date.now,
  },
  salary: {
    type: Number,
    // This should be encrypted in a real-world scenario
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

// Hash password before saving
employeeSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
employeeSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
