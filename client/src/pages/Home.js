import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import News from "./News";
import Products from "../components/Products";
import Business from "../components/OurBusinesses.jsx"
import { Link } from "react-router-dom";
import AboutImg from "../assets/images/rice-farming.jpg";
const Home = () => {

  return (
    <div className="home-page">
      <Hero />
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <span className="eyebrow">DEDICATED TO EXCELLENCE</span>
            <h2>Who we are</h2>
            <div className="underline"></div>
            <p>
              CVA Group is a dynamic Nigerian enterprise dedicated to meeting the
              essential needs of individuals, families, and businesses.
            </p>
            <p>
              We operate across multiple sectors including agriculture, food processing, 
              construction, and logistics, all with one purpose: to strengthen local 
              value chains, create jobs, and foster sustainable community development.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Core Sectors</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Local Commitment</span>
              </div>
            </div>
            <Link to="/about" className="learn-more-btn">
              Explore Our Story <span className="arrow">→</span>
            </Link>
          </div>
          <div className="about-image-container">
            <div className="about-image-wrapper">
              <img src={AboutImg} alt="CVA Rice Farming" className="about-main-image" />
              <div className="image-experience-badge">
                <span className="badge-number">CVA</span>
                <span className="badge-text">Group</span>
              </div>
            </div>
            <div className="image-decoration"></div>
          </div>
        </div>
      </section>
      <Business/>
      <Products />
      <Testimonials />
      <News />
      <section className="contact-section">
        <div className="contact-overlay">
          <h2>Partner with CVA Group</h2>
          <p className="contact-paragraph">
            Together, we can build sustainable solutions that empower
            communities and drive economic growth across Nigeria.
          </p>
          
            <Link to="/contact" className="contact-button">
              Contact Us
            </Link>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
