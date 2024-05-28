// backend/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const { createOrder, getUserOrders, deleteOrder } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Customer routes
router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getUserOrders);
router.delete('/:id', authMiddleware, deleteOrder);

module.exports = router;
