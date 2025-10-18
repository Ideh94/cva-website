import React from 'react';
import './Contact.css';

function Contact() {
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

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
