import axios from 'axios';

async function fetchNews() {
  try {
    const res = await axios.get('http://localhost:5000/api/news/fetch-news');
    console.log(`✅ News fetched at ${new Date().toLocaleString()}`);
  } catch (err) {
    console.error('❌ Failed to fetch news:', err.message);
  }
}

fetchNews();
