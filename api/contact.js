// Vercel Serverless API for Contact Form
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-Type, Date, X-Api-Version');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    console.log('Received Contact Message:', name, email, message);
    
    // In production, you could save this to a database or send an email
    return res.status(200).json({ message: 'Message received!' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
