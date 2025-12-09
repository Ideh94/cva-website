// Vercel Serverless API for Admin Login
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// MongoDB connection cache for serverless
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  const connection = await mongoose.connect(process.env.MONGO_URI);
  cachedDb = connection;
  return cachedDb;
}

// Admin Schema
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Get or create Admin model
const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default async function handler(req, res) {
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
    const { email, password } = req.body;

    try {
      await connectToDatabase();
      
      // Check admin exists
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Match password
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      // Generate JWT
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
      });

      return res.json({ token, admin: { id: admin._id, email: admin.email } });

    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
