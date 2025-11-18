import React from "react";
import "./Hero.css";
import HeroImage from "../assets/images/hero-image1.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h4>LET US HELP YOU</h4>
        <h1>
          GROW YOUR <span>BUSINESS</span>
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
      <div className="hero-image">
        <img
          src={HeroImage}
          alt="Hero Illustration"
          style={{ width: "25.55rem", display:"block"}}
        />
      </div>
    </section>
  );
};

export default Hero;