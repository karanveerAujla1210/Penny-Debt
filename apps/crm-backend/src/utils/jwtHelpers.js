const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-jwt-secret';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

const signToken = (payload, opts = {}) => {
  try {
    const sub = payload._id || payload.id || payload.userId;
    const body = { ...payload };
    if (sub) body.sub = sub;
    return jwt.sign(body, JWT_SECRET, { expiresIn: JWT_EXPIRY, ...opts });
  } catch (error) {
    throw new Error('Token signing failed: ' + error.message);
  }
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Token verification failed: ' + error.message);
  }
};

module.exports = { signToken, verifyToken };
