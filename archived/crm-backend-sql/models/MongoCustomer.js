const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const mongoCustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  subscriptionStatus: { 
    type: String, 
    enum: ['active', 'expired', 'pending', 'cancelled'],
    default: 'pending'
  },
  subscriptionStart: Date,
  subscriptionEnd: Date,
  documents: [{
    name: String,
    url: String,
    type: String,
    uploadedAt: { type: Date, default: Date.now }
  }],
  dashboardData: {
    totalDebt: { type: Number, default: 0 },
    settledAmount: { type: Number, default: 0 },
    monthlyPayment: { type: Number, default: 0 },
    progressPercentage: { type: Number, default: 0 },
    nextPaymentDate: Date,
    assignedAdvisor: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
  },
  role: { type: String, default: 'customer' },
  status: { 
    type: String, 
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  isActive: { type: Boolean, default: true },
  lastLogin: Date,
  emailVerified: { type: Boolean, default: false },
  phoneVerified: { type: Boolean, default: false }
}, { 
  timestamps: true 
});

// Hash password before saving
mongoCustomerSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
mongoCustomerSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const MongoCustomer = mongoose.model('MongoCustomer', mongoCustomerSchema);

module.exports = MongoCustomer;