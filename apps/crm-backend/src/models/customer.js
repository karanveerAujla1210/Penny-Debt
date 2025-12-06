const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  basic: {
    fullName: { type: String },
    gender: { type: String, enum: ['MALE', 'FEMALE', 'OTHER', 'NA'] },
    dob: { type: Date },
    maritalStatus: { type: String, enum: ['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED'] },
    primaryMobile: { type: String },
    whatsappMobile: { type: String },
    email: { type: String }
  },
  kyc: {
    pan: { type: String },
    aadhaar: { type: String },
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
    rentOrHomeEmi: Number,
    utilities: Number,
    groceries: Number,
    schoolFees: Number,
    transport: Number,
    insurance: Number,
    otherLabel: String,
    otherAmount: Number,
    total: Number
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

CustomerSchema.pre('save', function (next) { this.updatedAt = Date.now(); next(); });

module.exports = mongoose.model('Customer', CustomerSchema);
