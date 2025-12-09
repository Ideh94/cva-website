import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

import axios from 'axios';
import API_BASE_URL from '../api/config';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await axios.post(`${API_BASE_URL}/api/contact`, formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>Have questions or want to partner with us? We'd love to hear from you.</p>
        </div>
      </section>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info-section">
          <div className="contact-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-details">
              <h3>Visit Us</h3>
              <p>Plot 4 Paradise Close, Iwofe Road,<br />Port Harcourt, Rivers State, Nigeria</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <div className="contact-details">
              <h3>Call Us</h3>
              <p><a href="tel:+2347038100100">+234 703 810 0100</a></p>
              <p><a href="tel:+2347033754215">+234 703 375 4215</a></p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <h3>Email Us</h3>
              <p><a href="mailto:info@cva.com.ng">info@cva.com.ng</a></p>
              <p><a href="mailto:support@cva.com.ng">support@cva.com.ng</a></p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          <p>Fill out the form below and our team will get back to you within 24 hours.</p>

          {submitted && (
            <div className="success-message">
              <FaCheckCircle /> Thank you! Your message has been sent successfully.
            </div>
          )}

          {error && (
            <div className="error-message" style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', fontWeight: '500' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us more about your inquiry..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
