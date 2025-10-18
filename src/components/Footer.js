// client/src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>POPULAR TOPICS</h3>
          <ul>
            <li>Medical Website Design</li>
            <li>Business Website Cost</li>
            <li>Small Business Website Design</li>
            <li>Create A Business YouTube Channel</li>
            <li>Website Revamp</li>
          </ul>
          <h4>SOCIAL</h4>
          <div className="social-icons">
            <a href="Facebook"><FaFacebookF /></a>
            <a href="Twitter"><FaTwitter /></a>
            <a href="Instagram"><FaInstagram /></a>
            <a href="Youtube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>POPULAR PIECES</h3>
          <ul>
            <li>How Much Does It Cost To Build A Website For A Small Business?</li>
            <li>Best Medical Website Design – 16 Examples (2025 update)</li>
            <li>How To Ask For A Testimonial: My Simple, Repeatable Process</li>
            <li>Website Revamp: How To Redesign Your Website</li>
            <li>How To Take A Professional Headshot</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>GET TO KNOW US</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>

          <div className="search-box">
            <input type="text" placeholder="Search ..." />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
