import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CVA Group</h3>
          <p>A diversified Nigerian company driving sustainable growth through agriculture, food processing, construction, logistics, and capacity development.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/ourbusinesses">Our Businesses</a></li>
            <li><a href="/blog">News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Businesses</h4>
          <ul>
            <li>Agriculture & Farming</li>
            <li>Food Processing</li>
            <li>Construction</li>
            <li>Logistics & Distribution</li>
            <li>Capacity Development</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p><strong>Email:</strong> info@cva.com.ng</p>
          <p><strong>Phone:</strong> +234 703 810 0100</p>
          <p><strong>Address:</strong> Plot 4, Iwofe Road, Rivers State, Nigeria</p>
        </div>
      </div>

      <div className="footer-divider"></div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CVA Multi Services Nigeria Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
