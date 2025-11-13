import React from "react";
import "./Home.css";
import Hero from "../components/Hero";

const Home = () => {
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
          <div className="our-businesses-underline"></div>
          <div className="business-cards-container">
            <div className="business-card">
              <img
               src="/assets/ourbusinesses-1.png"
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
               src="/assets/ourbusinesses-2.png"
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
               src="/assets/ourbusinesses-3.png"
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
               src="/assets/ourbusinesses-4.png"
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

      <section className="Products-section">
        <div className="Products-overlay">
          <div className="rounded-background"> </div>
          <h2>Our Products</h2>
          <div className="underline"></div>
        </div>
        <div className="products-cards-container">
          <div className="product-card">
            <img
             src="/assets/product-1"
             alt="product 1"/>
            <h4>Fresh Poundo</h4>
          </div>
        </div>
        <div className="products-cta">
          <a href="/ourbusinesses" className="learn-more-button">
            View All Products
          </a>
          <div className="arrow-icon">&#8594;</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
