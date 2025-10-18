const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
require('dotenv').config();

// POST /api/admin/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: 'Invalid credentials' });

    // Match password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // Generate JWT
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({ token, admin: { id: admin._id, email: admin.email } });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
