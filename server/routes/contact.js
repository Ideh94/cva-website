const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received Contact Message:', name, email, message);
    res.status(200).json({ message: 'Message received!' });
});

module.exports = router;
