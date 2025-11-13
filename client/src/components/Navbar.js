import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">                              
          CVA
        </Link>
        
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li><Link to="/ourbusinesses" className={location.pathname === '/ourbusinesses' ? 'active' : ''}>Our Businesses</Link></li>
          <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>News</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;