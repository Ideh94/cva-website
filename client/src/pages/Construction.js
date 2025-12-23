import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHardHat, FaCheckCircle, FaBuilding, FaRoad, FaHome, FaTools, FaUsers, FaChartLine } from 'react-icons/fa';
import ConstructionImg from "../assets/images/ourbusinesses-4.png";
import './BusinessDetail.css';

const Construction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaBuilding className="service-icon" />,
      title: "Commercial Buildings",
      description: "Design and construction of modern office complexes, shopping centers, and commercial facilities."
    },
    {
      icon: <FaHome className="service-icon" />,
      title: "Residential Projects",
      description: "Quality residential developments from single-family homes to large housing estates."
    },
    {
      icon: <FaRoad className="service-icon" />,
      title: "Civil Engineering",
      description: "Road construction, drainage systems, and essential infrastructure development projects."
    },
    {
      icon: <FaTools className="service-icon" />,
      title: "Industrial Facilities",
      description: "Warehouses, factories, and specialized industrial structures built to specification."
    }
  ];

  const features = [
    "Residential & Commercial Projects",
    "Civil Engineering Expertise",
    "Timely Project Delivery",
    "Quality Materials & Workmanship",
    "Experienced Engineering Team",
    "Modern Construction Techniques",
    "Safety Compliance Standards",
    "Post-Construction Support"
  ];

  return (
    <div className="business-page">
      {/* Hero Section */}
      <section className="business-hero">
        <div className="business-hero-content">
          <FaHardHat className="hero-icon" />
          <h1>Construction Services</h1>
          <p>
            Building Nigeria's future with excellence. From residential estates to commercial 
            complexes and civil infrastructure, we deliver quality construction projects 
            that stand the test of time.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="business-overview">
        <div className="overview-content">
          <div className="overview-text">
            <h2>Building Excellence, Creating Landmarks</h2>
            <p>
              Beyond agriculture, CVA Group is a key player in Nigeria's construction industry. 
              We deliver high-quality infrastructure projects including residential, commercial, 
              and industrial buildings that meet international standards.
            </p>
            <p>
              Our team of experienced engineers, architects, and project managers is dedicated 
              to building structures that combine aesthetic appeal with structural integrity. 
              We pride ourselves on timely delivery, quality workmanship, and adherence to 
              the highest safety standards.
            </p>
          </div>
          <div className="overview-image">
            <img src={ConstructionImg} alt="Construction Projects by CVA Group" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2>Our Construction Services</h2>
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
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">300+</div>
            <div className="stat-label">Skilled Workers</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose CVA Construction</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <FaCheckCircle className="feature-check" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="business-cta">
        <h2>Start Your Construction Project With Us</h2>
        <p>
          Have a construction project in mind? Let's discuss how CVA Group can bring 
          your vision to life with quality and excellence.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">
            <FaUsers /> Request a Quote
          </Link>
          <Link to="/ourbusinesses" className="cta-button secondary">
            <FaChartLine /> Explore Other Businesses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Construction;
