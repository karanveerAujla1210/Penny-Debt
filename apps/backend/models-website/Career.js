const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  position: { type: String },
  experience: { type: String },
  resumeUrl: { type: String },
  coverLetter: { type: String },
  status: { 
    type: String, 
    enum: ['applied', 'reviewing', 'shortlisted', 'interviewed', 'hired', 'rejected'],
    default: 'applied'
  },
  notes: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Career', careerSchema);