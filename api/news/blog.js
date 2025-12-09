// Vercel Serverless API for News/Blog
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-Type, Date, X-Api-Version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const API_KEY = process.env.NEWS_API_KEY;
      const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`;
      
      const response = await fetch(NEWS_URL);
      const data = await response.json();
      
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching news:', error.message);
      return res.status(500).json({ error: 'Failed to fetch news' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
