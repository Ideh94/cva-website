import React from "react";
import "./Hero.css";
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
          <button className="contact">Contact Us</button>
          <button className="learn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/assets/hero-image1.png"
          alt="Hero Illustration"
          style={{ width: "25.55rem", display:"block"}}
        />
      </div>
    </section>
  );
};

export default Hero;