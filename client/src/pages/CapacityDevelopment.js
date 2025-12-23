import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaCheckCircle, FaChalkboardTeacher, FaHandsHelping, FaLightbulb, FaCertificate, FaUsers, FaChartLine } from 'react-icons/fa';
import TrainingAcademy from "../assets/images/training-academy.jpg"; // Small enough as is
import './BusinessDetail.css';

const CapacityDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaChalkboardTeacher className="service-icon" />,
      title: "Agricultural Training",
      description: "Comprehensive training programs in modern farming techniques, aquaculture, and crop management."
    },
    {
      icon: <FaLightbulb className="service-icon" />,
      title: "Entrepreneurship Development",
      description: "Business skills training to help participants start and manage successful agribusiness ventures."
    },
    {
      icon: <FaHandsHelping className="service-icon" />,
      title: "Youth Empowerment",
      description: "Targeted programs to engage youth in agriculture and create sustainable livelihoods."
    },
    {
      icon: <FaCertificate className="service-icon" />,
      title: "Certification Programs",
      description: "Recognized certifications that validate skills and enhance employment opportunities."
    }
  ];

  const features = [
    "Hands-On Practical Training",
    "Expert Instructors & Mentors",
    "Modern Training Facilities",
    "Certificate on Completion",
    "Post-Training Support",
    "Job Placement Assistance",
    "Networking Opportunities",
    "Continuous Learning Resources"
  ];

  const programs = [
    {
      title: "Fish Farming Masterclass",
      duration: "4 Weeks",
      description: "Complete training on catfish and tilapia farming from fingerlings to market-ready fish."
    },
    {
      title: "Rice Production & Processing",
      duration: "3 Weeks",
      description: "Learn modern rice cultivation, harvesting, and post-harvest processing techniques."
    },
    {
      title: "Agribusiness Management",
      duration: "2 Weeks",
      description: "Business planning, financial management, and marketing for agricultural enterprises."
    }
  ];

  return (
    <div className="business-page">
      {/* Hero Section */}
      <section className="business-hero">
        <div className="business-hero-content">
          <FaGraduationCap className="hero-icon" />
          <h1>Capacity Development</h1>
          <p>
            Empowering the next generation of agricultural entrepreneurs through 
            world-class training programs, mentorship, and hands-on experience 
            at our state-of-the-art training facilities.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="business-overview">
        <div className="overview-content">
          <div className="overview-text">
            <h2>Investing in People, Growing the Future</h2>
            <p>
              At CVA Group, we believe that Nigeria's agricultural potential can only be 
              realized through a skilled and empowered workforce. Our capacity development 
              programs are designed to transfer knowledge, build skills, and create 
              opportunities for sustainable livelihoods.
            </p>
            <p>
              Through our training academy, we have equipped hundreds of young Nigerians 
              with practical skills in aquaculture, crop production, and agribusiness 
              management, helping them transform their lives and contribute to national 
              food security.
            </p>
          </div>
          <div className="overview-image">
            <img src={TrainingAcademy} alt="CVA Group Training Academy" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2>Our Training Programs</h2>
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
            <div className="stat-label">Graduates Trained</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">85%</div>
            <div className="stat-label">Employment Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Training Programs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Businesses Started</div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="features-section">
        <h2>Featured Programs</h2>
        <div className="services-grid">
          {programs.map((program, index) => (
            <div key={index} className="service-card">
              <h3>{program.title}</h3>
              <p style={{ 
                color: 'var(--primary-green)', 
                fontWeight: '600', 
                marginBottom: '0.5rem',
                fontSize: '0.9rem'
              }}>
                Duration: {program.duration}
              </p>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>What Sets Us Apart</h2>
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
        <h2>Ready to Learn & Grow?</h2>
        <p>
          Whether you're looking to develop new skills, start an agribusiness, or 
          partner with us for training programs, we'd love to hear from you.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary">
            <FaUsers /> Enroll Now
          </Link>
          <Link to="/ourbusinesses" className="cta-button secondary">
            <FaChartLine /> Explore Other Businesses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CapacityDevelopment;
