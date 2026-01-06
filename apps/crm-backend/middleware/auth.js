const jwt = require('jsonwebtoken');
const User = require('../models/User');

const standardError = (code, message, statusCode = 401) => ({
  success: false,
  code,
  message,
  statusCode
});

const authMiddleware = async (req, res, next) => {
  try {
    // Extract token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json(standardError('AUTH_NO_TOKEN', 'Authentication token missing'));
    }

    const token = authHeader.split(' ')[1];
    
    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'dev-jwt-secret');
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json(standardError('AUTH_TOKEN_EXPIRED', 'Token has expired'));
      }
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json(standardError('AUTH_INVALID_TOKEN', 'Invalid token'));
      }
      throw error;
    }

    // Get user with roles
    const user = await User.findById(decoded.sub || decoded.userId || decoded.id)
      .populate('roles')
      .lean();

    if (!user) {
      return res.status(401).json(standardError('AUTH_USER_NOT_FOUND', 'User not found'));
    }

    if (user.status !== 'ACTIVE') {
      return res.status(403).json(standardError('AUTH_USER_INACTIVE', 'User account is inactive', 403));
    }

    // Attach user to request
    req.user = {
      _id: user._id,
      email: user.email,
      userType: user.userType,
      roles: user.roles || [],
      permissions: []
    };

    // Flatten permissions from all roles
    if (user.roles && user.roles.length > 0) {
      user.roles.forEach(role => {
        if (role.permissions) {
          req.user.permissions.push(...role.permissions);
        }
      });
      // Remove duplicates
      req.user.permissions = [...new Set(req.user.permissions)];
    }

    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json(standardError('AUTH_ERROR', 'Authentication failed', 500));
  }
};

module.exports = authMiddleware;
