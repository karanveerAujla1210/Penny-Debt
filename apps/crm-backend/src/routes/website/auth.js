const express = require('express');
const router = express.Router();

// Import from old location (will be moved to controllers)
const oldAuthRoute = require('../../../routes/auth');

// Re-export old routes for now (backward compatibility)
module.exports = oldAuthRoute;

// TODO: Migrate to new controller structure
// const authController = require('../../controllers/website/authController');
// router.post('/register', authController.register);
// router.post('/login', authController.login);
// router.post('/logout', authController.logout);
// router.get('/me', authController.getMe);
