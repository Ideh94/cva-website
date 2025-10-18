// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 5000;
const adminAuthRoutes = require('./routes/adminAuth');
const newsRoutes = require('./routes/news');
const contactRoute = require('./routes/contact');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/admin', adminAuthRoutes);
app.use('/api/contact', contactRoute);
app.use('/api/news', newsRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the CVA server!');
});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:5000');
});

cron.schedule('0 */6 * * *', async () => {
    await axios.get('http://localhost:5000/api/news/fetch-news');
    console.log('News fetched at', new Date());
});