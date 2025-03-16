const express = require('express');
const router = express.Router();

// In-memory storage for notifications
let notifications = [];

// POST request to add a new notification
router.post('/api/notifications', (req, res) => {
    const { topic, description, recipient, timestamp } = req.body;

    if (!topic || !description || !recipient || !timestamp) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    notifications.push({ topic, description, recipient, timestamp });
    res.status(201).json({ message: 'Notification added successfully!' });
});

// GET request to fetch notifications for a specific user
router.get('/api/notifications/:recipient', (req, res) => {
    const { recipient } = req.params;
    const userNotifications = notifications.filter(
        (note) => note.recipient === recipient
    );

    res.status(200).json(userNotifications);
});

module.exports = router;
