const mongoose = require('mongoose');

const mongoLeadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true,
    lowercase: true,
    trim: true
  },
  phone: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  totalDebt: { type: Number },
  monthlyIncome: { type: Number },
  loanType: { 
    type: String,
    enum: ['Personal Loan', 'Business Loan', 'Home Loan', 'Car Loan', 'Credit Card', 'Other'],
    default: 'Personal Loan'
  },
  employmentStatus: {
    type: String,
    enum: ['Employed', 'Self-Employed', 'Unemployed', 'Retired', 'Student'],
    default: 'Employed'
  },
  city: String,
  state: String,
  pincode: String,
  message: String,
  source: { 
    type: String, 
    enum: ['website', 'referral', 'social_media', 'advertisement', 'direct'],
    default: 'website' 
  },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'qualified', 'converted', 'rejected', 'follow_up'],
    default: 'new' 
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  assignedTo: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Employee' 
  },
  followUpDate: Date,
  notes: [{
    content: String,
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    addedAt: { type: Date, default: Date.now }
  }],
  emailVerified: { type: Boolean, default: false },
  phoneVerified: { type: Boolean, default: false },
  convertedToCustomer: { type: Boolean, default: false },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'MongoCustomer' }
}, { 
  timestamps: true 
});

// Indexes for better performance
mongoLeadSchema.index({ email: 1 });
mongoLeadSchema.index({ phone: 1 });
mongoLeadSchema.index({ status: 1 });
mongoLeadSchema.index({ assignedTo: 1 });
mongoLeadSchema.index({ createdAt: -1 });

const MongoLead = mongoose.model('MongoLead', mongoLeadSchema);

module.exports = MongoLead;