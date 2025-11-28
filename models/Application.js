const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  dob: { type: Date },
  pan: { type: String },
  debts: [{
    type: { type: String, required: true },
    bank: { type: String, required: true },
    amount: { type: Number, required: true },
    emi: { type: Number },
    overdue: { type: Number }
  }],
  monthlyIncome: { type: Number },
  employmentType: { type: String },
  documents: [{ type: String }],
  status: { type: String, default: 'PENDING', enum: ['PENDING', 'REVIEWING', 'APPROVED', 'REJECTED'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
