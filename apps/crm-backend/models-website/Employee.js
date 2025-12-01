const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { 
    type: String, 
    enum: ['admin', 'advisor', 'ceo', 'coo', 'cto', 'compliance', 'counsellor', 
           'credit', 'finance', 'hr', 'legal', 'operations', 'recovery', 
           'support', 'teamlead', 'tech', 'verifier', 'manager', 'employee'],
    required: true
  },
  department: { type: String },
  designation: { type: String },
  joiningDate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  lastLogin: { type: Date },
  permissions: [{ type: String }],
  reportingTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);
