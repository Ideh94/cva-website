import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
import FishFarming from "../assets/images/ourbusinesses-1.png";
import RiceFarming from "../assets/images/ourbusinesses-2.png";
import FoodProcessing from "../assets/images/ourbusinesses-3.png";
import Construction from "../assets/images/ourbusinesses-4.png";
import Testimonials from "../components/Testimonials";
import News from "./News";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Hero />
      <section className="about-section">
        <div className="about-overlay">
          <div className="background-circle"></div>
          <h2>Who we are</h2>
          <div className="underline"></div>

          <div className="about-card">
            <p>
              CVA Group is a dynamic Nigerian enterprise dedicated to meeting the
              essential needs of individuals, families, and businesses. We operate
              across multiple sectors — from fish production and rice farming to
              construction, logistics, and training — all with one purpose: to
              strengthen local value chains, create jobs, and foster community
              development.
            </p>
          </div>
        </div>
      </section>
      <section className="our-businesses-section">
        <div className="our-businesses-overlay">

          <h2>Our Businesses</h2>
          <div className="underline"></div>
          <div className="business-cards-container">
            <div className="business-card">
              <img
               src={FishFarming}
               alt="Fish Farming"
               style={{width: "100%", height: "11.25rem"}}
               />
              <h3>Fish Farming</h3>
              <p>
                Supplying fresh, healthy fish through modern aquaculture.
              </p>
            </div>
            <div className="business-card">
              <img
               src={RiceFarming}
               alt="Rice Farming"
               style={{width: "100%", height: "11.25rem"}}
               />       
              <h3>Rice Farming</h3>
              <p>
                Reducing import dependence with locally grown, high-quality rice.
              </p>
            </div>
            <div className="business-card">
              <img
               src={FoodProcessing}
               alt="Construction" 
               style={{width: "100%", height: "180px"}}
               />
              <h3>Food Processing & Packaging</h3>
              <p>
               Transforming raw produce into consumer-ready food products.
              </p>
            </div>
            <div className="business-card">
              <img
               src={Construction}
               alt="Construction"
               style={{width: "100%", height: "11.25rem"}}
               />
              <h3>Construction</h3>
              <p>
                Building infrastructure that supports growth and development.
              </p>
            </div>
          </div>
          <div className="businesses-cta">
            <a href="/ourbusinesses" className="learn-more-button">
              View All Businesses
            </a>
            <div className="arrow-icon">&#8594;</div>
          </div>
        </div>
      </section>

      <Products />
      <Testimonials />
      <News />
      <section className="contact-section">
        <div className="contact-overlay">
          <h2>Partner with CVA Group</h2>
          <p className="contact-paragraph">
            Together, we can build sustainable solutions that empower
            communities and drive economic growth across Nigeria.
          </p>
          <div className="contact-cta" onClick={() => navigate("/contact")}>
            <a href="/contact" className="contact-button">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
