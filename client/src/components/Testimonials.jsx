import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Testimonials.css";

import customer1 from "../assets/images/testimonial-1.png";
import customer2 from "../assets/images/testimonial-2.png";
import customer3 from "../assets/images/testimonial-3.png";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Customers Say</h2>
          <div className="underline"></div>
          <p className="testimonials-subtitle">Don't just take our word for it</p>
        </div>

        <div className="testimonial-carousel">
          <button 
            className="carousel-button prev" 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="testimonial-card-large" key={currentIndex}>
            <div className="quote-decoration">
              <div className="quote-mark-large">"</div>
              <div className="quote-accent"></div>
            </div>

            <div className="testimonial-content">
              <p className="testimonial-text-large">{currentTestimonial.text}</p>
              
              <div className="testimonial-author-large">
                <div className="author-image-wrapper">
                  <img 
                    src={currentTestimonial.img} 
                    alt={currentTestimonial.name} 
                    className="author-image-large" 
                  />
                  <div className="image-border"></div>
                </div>
                <div className="author-details">
                  <h4 className="author-name-large">{currentTestimonial.name}</h4>
                  <p className="author-role-large">{currentTestimonial.role}</p>
                  <p className="author-company-large">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>

            <div className="card-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-dot"></div>
            </div>
          </div>

          <button 
            className="carousel-button next" 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
