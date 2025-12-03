import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/icons/cva-logo-text.svg';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} ref={navbarRef}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={Logo} alt="CVA Logo" className="logo-image" />
        </a>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <span className='navbar-links-container'>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/ourbusinesses" className={location.pathname === '/ourbusinesses' ? 'active' : ''} onClick={() => setIsOpen(false)}>Our Businesses</Link></li>
            <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={() => setIsOpen(false)}>News</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;