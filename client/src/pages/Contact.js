import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send formData to backend API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We're happy to hear from you! Reach out via the form below or using our contact information.</p>

      <div className="contact-info">
        <div>
          <strong>Email:</strong> info@cva.com.ng
        </div>
        <div>
          <strong>Phone:</strong> +234 703 810 0100, +234 703 375 4215
        </div>
        <div>
          <strong>Address:</strong> Plot 4 Paradise Close, Iwofe Road, Port Harcourt, River State, Nigeria
        </div>
      </div>

      {submitted && <p style={{ color: 'green', fontWeight: 'bold' }}>Thank you! Your message has been sent.</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
