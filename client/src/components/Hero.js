import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        
        <h1>
          Welcome to <span>CVA Group</span>
        </h1>
        <p>
          We are a diversified Nigerian company driving sustainable growth
          through agriculture, food processing, construction, logistics, and
          capacity development.
        </p>

        <div className="buttons">
          <Link to="/contact">
            <button className="contact">Contact Us</button>
          </Link>
          <Link to="/about">
            <button className="learn">Learn More</button>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;