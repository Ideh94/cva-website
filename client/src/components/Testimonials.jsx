import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";

import customer1 from "../assets/images/testimonial-1.webp";
import customer2 from "../assets/images/testimonial-2.webp";
import customer3 from "../assets/images/testimonial-3.webp";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);

  const testimonials = [
    {
      img: customer1,
      text: "CVA helped us scale distribution across 3 states. Their network and expertise were invaluable to our growth strategy. The platform is intuitive and their support team is exceptional.",
      name: "Adebayo Okonkwo",
      company: "GreenFarm Ltd.",
      role: "CEO",
    },
    {
      img: customer2,
      text: "Their consulting team revolutionized our aquaculture system. We've seen a 40% increase in yield since partnering with them. The ROI has been phenomenal and continues to grow.",
      name: "Chinwe Eze",
      company: "BlueWater Fisheries",
      role: "Operations Manager",
    },
    {
      img: customer3,
      text: "Thanks to CVA's platform, we now manage logistics seamlessly. It's a game-changer for our supply chain efficiency. Real-time tracking and automated reporting have transformed our operations.",
      name: "Ibrahim Yusuf",
      company: "AquaGrow Nigeria",
      role: "Logistics Director",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header" data-aos="fade-up">
          <h2>What Our Customers Say</h2>
          <div className="underline"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              className="testimonial-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="testimonial-quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L14.017 18C14.017 15.2386 16.2556 13 19.017 13H21V21H14.017ZM3.01703 21L3.01703 18C3.01703 15.2386 5.2556 13 8.01703 13H10V21H3.01703ZM19.017 11C15.151 11 12.017 14.134 12.017 18V21C12.017 22.1046 12.9124 23 14.017 23H21C22.1046 23 23 22.1046 23 21V13C23 11.8954 22.1046 11 21 11H19.017ZM8.01703 11C4.15103 11 1.01703 14.134 1.01703 18V21C1.01703 22.1046 1.91243 23 3.01703 23H10C11.1046 23 12 22.1046 12 21V13C12 11.8954 11.1046 11 10 11H8.01703Z" fill="currentColor" fillOpacity="0.1"/>
                </svg>
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-author">
                  <div className="author-image-wrapper">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name} 
                      className="author-image" 
                      loading="lazy" 
                    />
                  </div>
                  <div className="author-details">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
