const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  basic: {
    fullName: { type: String, required: true },
    gender: { type: String, enum: ['MALE', 'FEMALE', 'OTHER', 'NA'] },
    dob: Date,
    maritalStatus: { type: String, enum: ['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED'] },
    primaryMobile: { type: String, required: true },
    whatsappMobile: String,
    email: String
  },

  kyc: {
    pan: String,
    aadhaar: String,
    panVerified: { type: Boolean, default: false },
    aadhaarVerified: { type: Boolean, default: false }
  },

  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    pincode: String
  },

  employment: {
    type: { type: String, enum: ['SALARIED', 'SELF_EMPLOYED', 'UNEMPLOYED', 'STUDENT', 'RETIRED'] },
    employerName: String,
    industry: String,
    monthlyNetIncome: Number,
    variableIncome: Number,
    salaryBank: String,
    salaryCreditDate: Number
  },

  household: {
    householdType: { type: String, enum: ['NUCLEAR', 'JOINT', 'SINGLE'] },
    dependentsCount: Number,
    spouseWorking: { type: String, enum: ['YES', 'NO', 'NA'] },
    spouseIncome: Number
  },

  expenses: {
    rentOrHomeEmi: { type: Number, default: 0 },
    utilities: { type: Number, default: 0 },
    groceries: { type: Number, default: 0 },
    schoolFees: { type: Number, default: 0 },
    transport: { type: Number, default: 0 },
    insurance: { type: Number, default: 0 },
    otherLabel: String,
    otherAmount: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
  },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Indexes
customerSchema.index({ userId: 1 });
customerSchema.index({ 'basic.primaryMobile': 1 });
customerSchema.index({ 'basic.email': 1 });
customerSchema.index({ 'kyc.pan': 1 }, { sparse: true });
customerSchema.index({ createdAt: -1 });
// Legacy file replaced with shim to prefer canonical `src/models/customer.js`.
// Original backed up to `Customer.bak.js`.
try {
  module.exports = require('../src/models/customer');
} catch (err) {
  module.exports = require('./Customer.bak');
}
