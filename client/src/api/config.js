// API Configuration
// In development, use the proxy or full URL
// In production (Vercel), use relative URLs which route to serverless functions

const API_BASE_URL = process.env.REACT_APP_API_URL || '';

export default API_BASE_URL;
