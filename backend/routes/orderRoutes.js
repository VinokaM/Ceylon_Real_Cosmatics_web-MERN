const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Save a new order
router.post('/new', async (req, res) => {
    try {
        const { customerName, phone, address, items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: 'Order items are required' });
        }

        // Calculate the total amount
        const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

        // Create a new order
        const newOrder = new Order({
            customerName,
            phone,
            address,
            items,
            totalAmount
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order saved successfully!', orderId: newOrder._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to save the order', error });
    }
});
// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('items.productId');
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch orders', error });
    }
});

// Get a specific order by ID
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('items.productId');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch the order', error });
    }
});

module.exports = router;
