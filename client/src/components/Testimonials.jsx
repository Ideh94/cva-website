import React from "react";
import "../components/Testimonials.css";

import customer1 from "../assets/images/testimonial-1.png";
import customer2 from "../assets/images/testimonial-2.png";
import customer3 from "../assets/images/testimonial-3.png";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
      text: "CVA helped us scale distribution across 3 states..",
      source: "GreenFarm Ltd.",
      variant: "left",
    },
    {
      img: customer2,
      text: "Their consulting team revolutionized our aquaculture system..",
      source: "GreenFarm Ltd.",
      variant: "middle",
    },
    {
      img: customer3,
      text: "Thanks to CVA’s platform, we now manage logistics...",
      source: "AquaGrow Nigeria",
      variant: "right",
    },
  ];

  return (
    <section className="testimonial-wrapper">
       <div className="testimonial-head">
            <h2 className="testimonial-title">
                What our customers say
            </h2>
            <div className="testimonial-underline"></div>
      </div>
      

      {/* Shapes */}
      <div className="testimonial-shapes">
        <div className="shape-star" data-aos="fade-up"></div>

        <div className="shape-tri-right" data-aos="fade-up"></div>
        <div className="shape-tri-middle"data-aos="fade-up"></div>
        <div className="shape-tri-left" data-aos="fade-up"></div>
      </div>

      {/* Cards */}
      <div className="testimonial-cards-container">
        {testimonials.map((item, id) => (
          <div className={`testimonial-card ${item.variant}`}>
            <img src={item.img} alt="" className={`testimonial-card-img ${item.variant}`}/>
            <div className={`testimonial-card-circle-inner-card ${item.variant}`} >
              <h3>{item.text}</h3>
              <p>{item.source}</p>
            </div>
          </div>
          
          
        ))}
      </div>
    </section>
  );
}
