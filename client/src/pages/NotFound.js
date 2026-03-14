import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <div className="error-code">404</div>
        <div className="error-icon">
          <FaExclamationTriangle />
        </div>
        <h1>Page Not Found</h1>
        <p>
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <Link to="/" className="back-home-btn">
          <FaHome /> Back to Homepage
        </Link>
      </div>
      <div className="notfound-decoration">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default NotFound;
