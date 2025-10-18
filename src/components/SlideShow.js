// src/components/SlideShow.js
import React, { useState, useEffect } from 'react';
import './SlideShow.css';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg'
];

function SlideShow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <img src={images[current]} alt={`Slide ${current + 1}`} className="slideshow-image" />
    </div>
  );
}

export default SlideShow;
