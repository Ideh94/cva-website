import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTruck, FaCheckCircle, FaShippingFast, FaWarehouse, FaMapMarkedAlt, FaClock, FaUsers, FaChartLine } from 'react-icons/fa';
import './BusinessDetail.css';

const Logistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaShippingFast className="service-icon" />,
      title: "Transportation",
      description: "Fleet of modern trucks and vehicles for reliable product transportation across Nigeria and beyond."
    },
    {
      icon: <FaWarehouse className="service-icon" />,
      title: "Warehousing",
      description: "Secure, climate-controlled storage facilities strategically located for efficient distribution."
    },
    {
      icon: <FaMapMarkedAlt className="service-icon" />,
      title: "Distribution Network",
      description: "Extensive distribution network reaching major markets and retail points nationwide."
    },
    {
      icon: <FaClock className="service-icon" />,
      title: "Just-In-Time Delivery",
      description: "Optimized delivery schedules ensuring products reach their destination fresh and on time."
    }
  ];

  const features = [
    "Modern Fleet of Vehicles",
    "Nationwide Coverage",
    "Real-Time Tracking",
    "Climate-Controlled Storage",
    "Efficient Route Planning",
    "Reliable Delivery Schedules",
    "Bulk Transportation Capacity",
    "Last-Mile Delivery Solutions"
  ];

  return (
    <div className="business-page">
      {/* Hero Section */}
      <section className="business-hero">
        <div className="business-hero-content">
          <FaTruck className="hero-icon" />
          <h1>Logistics & Distribution</h1>
          <p>
            Connecting producers to markets with our comprehensive logistics solutions. 
            We ensure your products reach their destination safely, efficiently, and on time 
            through our extensive transportation and distribution network.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="business-overview">
        <div className="overview-content">
          <div className="overview-text">
            <h2>Moving Nigeria Forward, One Delivery at a Time</h2>
            <p>
              CVA Group's logistics division is the vital link in our integrated value chain, 
              ensuring that agricultural products and processed goods reach markets efficiently. 
              Our modern fleet and strategic warehouse network span across Nigeria.
            </p>
            <p>
              From farm-gate collection to last-mile delivery, we provide end-to-end logistics 
              solutions that reduce wastage, ensure product freshness, and optimize supply chain 
              efficiency. Our commitment to reliability makes us the trusted logistics partner 
              for businesses across multiple sectors.
            </p>
          </div>
          <div className="overview-image" style={{ 
            background: 'linear-gradient(135deg, var(--primary-blue) 0%, #1e4a7a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '400px'
          }}>
            <FaTruck style={{ fontSize: '8rem', color: '#ffffff', opacity: 0.9 }} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2>Our Logistics Solutions</h2>
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
            <div className="stat-number">30+</div>
            <div className="stat-label">Vehicles in Fleet</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">36</div>
            <div className="stat-label">States Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">On-Time Delivery Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5K+</div>
            <div className="stat-label">Monthly Deliveries</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Logistics Advantages</h2>
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
        <h2>Need Reliable Logistics Solutions?</h2>
        <p>
          Whether you need transportation, warehousing, or distribution services, 
          CVA Group has the infrastructure and expertise to meet your logistics needs.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">
            <FaUsers /> Get a Quote
          </Link>
          <Link to="/ourbusinesses" className="cta-button secondary">
            <FaChartLine /> Explore Other Businesses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
