const jwt = require('jsonwebtoken');
const { User, Role } = require('../models');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-jwt-secret';

/**
 * Middleware to authenticate requests using Bearer JWT.
 * - Verifies token
 * - Loads User and Role names and attaches `req.user` with `.roles` as array of role names
 */
async function authMiddleware(req, res, next) {
  try {
    const auth = req.headers && (req.headers.authorization || req.headers.Authorization);
    if (!auth || !auth.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const token = auth.slice(7).trim();
    let payload;
    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    const userId = payload.sub || payload.userId || payload.id;
    if (!userId) return res.status(401).json({ error: 'Invalid token payload' });

    const user = await User.findById(userId).populate('roles').lean();
    if (!user) return res.status(401).json({ error: 'User not found' });

    // Normalize roles into array of role names
    const roleNames = (user.roles || []).map(r => (r && (r.name || r.role || r._id)) ).filter(Boolean);

    req.user = {
      _id: user._id,
      email: user.email,
      userType: user.userType || user.type || null,
      roles: roleNames
    };

    next();
  } catch (err) {
    console.error('Auth middleware error:', err && err.message);
    res.status(500).json({ error: 'Auth internal error' });
  }
}

module.exports = { authMiddleware };
