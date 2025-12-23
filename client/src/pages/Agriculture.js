import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaCheckCircle, FaSeedling, FaFish, FaTractor, FaWater, FaUsers, FaChartLine } from 'react-icons/fa';
import FishFarming from "../assets/images/ourbusinesses-1.png";
import RiceFarming from "../assets/images/ourbusinesses-2.png";
import './BusinessDetail.css';

const Agriculture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaFish className="service-icon" />,
      title: "Fish Farming",
      description: "Modern aquaculture facilities producing high-quality, protein-rich catfish and tilapia using sustainable farming practices."
    },
    {
      icon: <FaSeedling className="service-icon" />,
      title: "Rice Cultivation",
      description: "Large-scale rice farming operations using mechanized methods to produce premium quality Nigerian rice."
    },
    {
      icon: <FaTractor className="service-icon" />,
      title: "Mechanized Farming",
      description: "State-of-the-art agricultural machinery and equipment for efficient land preparation and harvesting."
    },
    {
      icon: <FaWater className="service-icon" />,
      title: "Irrigation Systems",
      description: "Advanced irrigation infrastructure ensuring year-round crop production and optimal water management."
    }
  ];

  const features = [
    "Modern Aquaculture Facilities",
    "Sustainable Feed Production",
    "High-Quality Fingerlings",
    "Large-Scale Rice Cultivation",
    "Mechanized Farming Equipment",
    "Out-grower Support Programs",
    "Water Management Systems",
    "Post-Harvest Processing"
  ];

  return (
    <div className="business-page">
      {/* Hero Section */}
      <section className="business-hero">
        <div className="business-hero-content">
          <FaLeaf className="hero-icon" />
          <h1>Agriculture & Farming</h1>
          <p>
            Leading Nigeria's agricultural revolution through innovative fish farming and 
            mechanized rice cultivation, contributing to national food security and 
            sustainable development.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="business-overview">
        <div className="overview-content">
          <div className="overview-text">
            <h2>Transforming Nigeria's Agricultural Landscape</h2>
            <p>
              At CVA Group, we are committed to revolutionizing Nigeria's agricultural sector. 
              Our integrated farming approach combines modern fish farming techniques with 
              mechanized rice cultivation to maximize productivity while ensuring sustainability.
            </p>
            <p>
              Through strategic investments in technology and infrastructure, we have established 
              ourselves as a leading agricultural enterprise, contributing significantly to Nigeria's 
              food security goals and empowering local communities through our out-grower programs.
            </p>
          </div>
          <div className="overview-image">
            <img src={FishFarming} alt="Fish Farming Operations at CVA Group" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2>Our Agricultural Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Hectares Under Cultivation</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Tons Annual Production</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">200+</div>
            <div className="stat-label">Jobs Created</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Out-grower Partners</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Our Agricultural Services</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <FaCheckCircle className="feature-check" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Rice Farming Highlight */}
      <section className="business-overview">
        <div className="overview-content" style={{ flexDirection: 'row-reverse' }}>
          <div className="overview-text">
            <h2>Premium Rice Production</h2>
            <p>
              Our rice farming operations are at the heart of our commitment to food security. 
              We cultivate extensive hectares of land using mechanized farming methods to produce 
              premium quality rice that meets international standards.
            </p>
            <p>
              By investing in local production, we are reducing import dependence and empowering 
              local farmers through our comprehensive out-grower schemes, providing training, 
              inputs, and guaranteed market access.
            </p>
          </div>
          <div className="overview-image">
            <img src={RiceFarming} alt="Rice Farming at CVA Group" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="business-cta">
        <h2>Partner With Us in Agriculture</h2>
        <p>
          Whether you're an investor, farmer, or business looking for premium agricultural 
          products, we'd love to explore collaboration opportunities.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">
            <FaUsers /> Get in Touch
          </Link>
          <Link to="/ourbusinesses" className="cta-button secondary">
            <FaChartLine /> Explore Other Businesses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;
