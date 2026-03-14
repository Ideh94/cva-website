import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaIndustry, FaCheckCircle, FaBox, FaCogs, FaThermometerHalf, FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa';
import FoodProcessingImg from "../assets/images/ourbusinesses-3.webp";
import './BusinessDetail.css';

const FoodProcessing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaCogs className="service-icon" />,
      title: "Rice Processing",
      description: "State-of-the-art rice milling and processing facilities producing clean, stone-free, premium quality rice."
    },
    {
      icon: <FaBox className="service-icon" />,
      title: "Packaging Solutions",
      description: "Modern packaging facilities ensuring products are hygienically sealed and ready for retail distribution."
    },
    {
      icon: <FaThermometerHalf className="service-icon" />,
      title: "Quality Control",
      description: "Rigorous quality assurance processes at every stage ensuring only the finest products reach consumers."
    },
    {
      icon: <FaShieldAlt className="service-icon" />,
      title: "Food Safety",
      description: "Adherence to international food safety standards with NAFDAC-approved processing facilities."
    }
  ];

  const features = [
    "Modern Processing Equipment",
    "Hygienic Packaging Standards",
    "NAFDAC Certified Facilities",
    "Quality Control Assurance",
    "Clean & Stone-Free Rice",
    "Multiple Packaging Sizes",
    "Bulk Processing Capacity",
    "Export-Ready Products"
  ];

  return (
    <div className="business-page">
      {/* Hero Section */}
      <section className="business-hero">
        <div className="business-hero-content">
          <FaIndustry className="hero-icon" />
          <h1>Food Processing & Packaging</h1>
          <p>
            Transforming raw agricultural produce into premium, consumer-ready products 
            through our state-of-the-art processing facilities that meet international 
            quality and safety standards.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="business-overview">
        <div className="overview-content">
          <div className="overview-text">
            <h2>Adding Value Through Processing Excellence</h2>
            <p>
              Value addition is central to our strategy at CVA Group. Our state-of-the-art 
              food processing facilities transform raw agricultural produce into hygienic, 
              consumer-ready products that meet the highest standards of quality and safety.
            </p>
            <p>
              From cleaning and sorting to milling and packaging, every product that leaves 
              our factory undergoes rigorous quality control to ensure consumers receive 
              only the finest products. Our processing capabilities allow us to serve both 
              retail and commercial markets effectively.
            </p>
          </div>
          <div className="overview-image">
            <img src={FoodProcessingImg} alt="Food Processing Plant at CVA Group" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2>Our Processing Capabilities</h2>
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
            <div className="stat-number">10K+</div>
            <div className="stat-label">Tons Processing Capacity</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Quality Compliance Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Distribution Partners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5</div>
            <div className="stat-label">Product Categories</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Processing Standards</h2>
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
        <h2>Quality Products for Your Business</h2>
        <p>
          Looking for reliable, high-quality processed food products? Partner with CVA Group 
          for consistent supply and exceptional quality.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">
            <FaUsers /> Contact Sales
          </Link>
          <Link to="/ourbusinesses" className="cta-button secondary">
            <FaChartLine /> Explore Other Businesses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FoodProcessing;
