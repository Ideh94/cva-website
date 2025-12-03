import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import News from "./News";
import Products from "../components/Products";
import Business from "../components/OurBusinesses.jsx"
import { Link } from "react-router-dom";
const Home = () => {

  return (
    <div className="home-page">
      <Hero />
      <section className="about-section">
        <div className="about-overlay">
         
          <h2>Who we are</h2>
          <div className="underline"></div>

          <div className="about-card">
            <p>
              CVA Group is a dynamic Nigerian enterprise dedicated to meeting the
              essential needs of individuals, families, and businesses. We operate
              across multiple sectors all with one purpose: to
              strengthen local value chains, create jobs, and foster community
              development.
            </p>
          </div>
        </div>
      </section>
      <Business/>
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
          
            <Link to="/contact" className="contact-button">
              Contact Us
            </Link>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
