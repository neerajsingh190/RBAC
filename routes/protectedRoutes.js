const express = require('express');
const protect = require('../middlewares/authMiddleware');
const verifyRole = require('../middlewares/roleMiddleware');

const router = express.Router();

// Admin-only route
router.get('/admin', protect, verifyRole(['Admin']), (req, res) => {
  res.status(200).json({ message: "Welcome, Admin!" });
});

// Moderator and Admin route
router.get('/moderator', protect, verifyRole(['Moderator', 'Admin']), (req, res) => {
  res.status(200).json({ message: "Welcome, Moderator!" });
});

// User route (accessible to all authenticated users)
router.get('/user', protect, (req, res) => {
  res.status(200).json({ message: "Welcome, User!" });
});

module.exports = router;

