import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import FishFarming from "../assets/images/ourbusinesses-1.png";
import RiceFarming from "../assets/images/ourbusinesses-2.png";
import FoodProcessing from "../assets/images/ourbusinesses-3.png";
import Construction from "../assets/images/ourbusinesses-4.png";
import './OurBusinesses.css';

const OurBusinesses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="our-businesses-page">
      {/* Hero Section */}
      <section className="businesses-hero">
        <div className="businesses-hero-content">
          <h1>Our Businesses</h1>
          <p>Driving sustainable growth and innovation across Nigeria's key economic sectors.</p>
        </div>
      </section>

      {/* Fish Farming Section */}
      <section className="business-detail-section">
        <div className="business-image-container">
          <img src={FishFarming} alt="Fish Farming Operations" />
        </div>
        <div className="business-info">
          <h2>Fish Farming</h2>
          <p>
            At CVA Group, we are revolutionizing aquaculture with modern fish farming techniques. 
            Our facilities are designed to produce high-quality, protein-rich fish to meet the growing 
            demand in Nigeria and beyond. We prioritize sustainability, ensuring our practices are 
            environmentally friendly while maximizing yield.
          </p>
          <ul className="business-features">
            <li><FaCheckCircle className="feature-icon" /> Modern Aquaculture Facilities</li>
            <li><FaCheckCircle className="feature-icon" /> Sustainable Feed Production</li>
            <li><FaCheckCircle className="feature-icon" /> High-Quality Fingerlings</li>
          </ul>
        </div>
      </section>

      {/* Rice Farming Section */}
      <section className="business-detail-section reverse">
        <div className="business-image-container">
          <img src={RiceFarming} alt="Rice Farming Fields" />
        </div>
        <div className="business-info">
          <h2>Rice Farming</h2>
          <p>
            Our rice farming operations are at the heart of our commitment to food security. 
            We cultivate extensive hectares of land using mechanized farming methods to produce 
            premium quality rice. By investing in local production, we are reducing import 
            dependence and empowering local farmers through out-grower schemes.
          </p>
          <ul className="business-features">
            <li><FaCheckCircle className="feature-icon" /> Large-Scale Cultivation</li>
            <li><FaCheckCircle className="feature-icon" /> Mechanized Farming</li>
            <li><FaCheckCircle className="feature-icon" /> Community Empowerment</li>
          </ul>
        </div>
      </section>

      {/* Food Processing Section */}
      <section className="business-detail-section">
        <div className="business-image-container">
          <img src={FoodProcessing} alt="Food Processing Plant" />
        </div>
        <div className="business-info">
          <h2>Food Processing & Packaging</h2>
          <p>
            Value addition is central to our strategy. Our state-of-the-art food processing 
            facilities transform raw agricultural produce into hygienic, consumer-ready products. 
            From cleaning and sorting to packaging, we ensure that every product that leaves our 
            factory meets the highest standards of quality and safety.
          </p>
          <ul className="business-features">
            <li><FaCheckCircle className="feature-icon" /> Modern Processing Equipment</li>
            <li><FaCheckCircle className="feature-icon" /> Hygienic Packaging Standards</li>
            <li><FaCheckCircle className="feature-icon" /> Quality Control Assurance</li>
          </ul>
        </div>
      </section>

      {/* Construction Section */}
      <section className="business-detail-section reverse">
        <div className="business-image-container">
          <img src={Construction} alt="Construction Projects" />
        </div>
        <div className="business-info">
          <h2>Construction</h2>
          <p>
            Beyond agriculture, CVA Group is a key player in the construction industry. 
            We deliver high-quality infrastructure projects, including residential, commercial, 
            and industrial buildings. Our team of engineers and architects is dedicated to 
            building structures that stand the test of time.
          </p>
          <ul className="business-features">
            <li><FaCheckCircle className="feature-icon" /> Residential & Commercial Projects</li>
            <li><FaCheckCircle className="feature-icon" /> Civil Engineering Expertise</li>
            <li><FaCheckCircle className="feature-icon" /> Timely Project Delivery</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="businesses-cta-section">
        <h2>Ready to Partner With Us?</h2>
        <p>Explore opportunities to collaborate and grow with CVA Group.</p>
        <Link to="/contact" className="cta-button-large">
          Contact Us Today
        </Link>
      </section>
    </div>
  );
};

export default OurBusinesses;
