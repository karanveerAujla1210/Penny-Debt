const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userType: { type: String, enum: ['CUSTOMER', 'EMPLOYEE'], required: true },
  email: { type: String, required: true, index: true, unique: true },
  phone: { type: String },
  passwordHash: { type: String },
  status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'BLOCKED'], default: 'ACTIVE' },
  roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

UserSchema.pre('save', function (next) { this.updatedAt = Date.now(); next(); });

module.exports = mongoose.model('User', UserSchema);
