// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login, getAuthenticatedUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getAuthenticatedUser);

module.exports = router;
