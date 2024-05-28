// backend/controllers/orderController.js
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { products } = req.body;
  try {
    const newOrder = new Order({
      user: req.user.id,
      products,
    });
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('products');
    res.json(orders);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    let order = await Order.findById(id);
    if (!order) return res.status(404).json({ msg: 'Order not found' });
    if (order.user.toString() !== req.user.id) return res.status(401).json({ msg: 'User not authorized' });

    await Order.findByIdAndRemove(id);
    res.json({ msg: 'Order removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
