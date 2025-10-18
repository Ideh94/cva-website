const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.NEWS_API_KEY; // Replace with your actual key
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`;

router.get('/fetch-news', async (req, res) => {
  try {
    const response = await axios.get(NEWS_URL);
    const articles = response.data.articles;

    // Save articles locally or to a DB
    fs.writeFileSync(path.join('data', 'news.json'), JSON.stringify(articles, null, 2));

    res.status(200).json({ message: 'News fetched and saved', count: articles.length });
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

router.get('/blog', async (req, res) => {
  try {
    const response = await axios.get(NEWS_URL)
    res.status(200).json(response.data)
  } catch (error) {
    console.log('Error fetching blog:', error?.message);
    res.send(error?.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

module.exports = router;
