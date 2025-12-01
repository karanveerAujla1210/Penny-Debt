const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  passwordHash: { type: String },
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  totalDebt: { type: Number, default: 0 },
  monthlyIncome: { type: Number },
  employmentStatus: String,
  assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'in-progress', 'settled', 'closed'],
    default: 'new'
  },
  documents: [{
    name: String,
    url: String,
    uploadedAt: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', customerSchema);