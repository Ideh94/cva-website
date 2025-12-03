import React from 'react';
import Logo from '../assets/icons/cva-logo.svg';
import { Link } from 'react-router-dom';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={Logo} alt="CVA Logo" style={{ width: '100px', height: '100px' }}/>
          <h3>CVA Group</h3>
          <p>A diversified Nigerian company driving sustainable growth through agriculture, food processing, construction, logistics, and capacity development.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/ourbusinesses">Our Businesses</Link></li>
            <li><Link to="/blog">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Businesses</h4>
          <ul>
            <li><Link to="/agriculture">Agriculture & Farming</Link></li>
            <li><Link to="/foodprocessing">Food Processing</Link></li>
            <li><Link to="/construction">Construction</Link></li>
            <li><Link to="/logistics">Logistics & Distribution</Link></li>
            <li><Link to="/capacitydevelopment">Capacity Development</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p><strong>Email:</strong> info@cva.com.ng</p>
          <p><strong>Phone:</strong> +234 703 810 0100</p>
          <p><strong>Address:</strong> Plot 4, Iwofe Road, Rivers State, Nigeria</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebookF/> <span className="social-text">Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram/> <span className="social-text">Instagram</span>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter/> <span className="social-text">Twitter</span>
            </a>
          </div>
        </div>
      </div>

     
      
    </footer>
  );
}

export default Footer;
