import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Product1 from "../assets/images/products-1.webp";
import Product2 from "../assets/images/products-2.webp";
import Product3 from "../assets/images/products-3.webp";
import Product4 from "../assets/images/products-4.webp";

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-overlay">
        <h2>Our Products</h2>
        <div className="underline"></div>
      </div>
      <div className="products-cards-container">
        <div className="product-card">
          <img src={Product1} alt="Fresh Poundo" loading="lazy" />
          <div className="product-card-content">
            <h4>Yam Flour</h4>
            <p>Traditional Nigerian staple made from premium yam flour, perfect for making pounded yam.</p>
          </div>
        </div>

        <div className="product-card">
          <img src={Product2} alt="Parboiled Rice" loading="lazy" />
          <div className="product-card-content">
            <h4> Parboiled Rice</h4>
            <p>Locally grown, high-quality rice cultivated using sustainable farming practices for superior taste.</p>
          </div>
        </div>

        <div className="product-card">
          <img src={Product3} alt="Fresh Fish" loading="lazy" />
          <div className="product-card-content">
            <h4>Fresh Fish</h4>
            <p>Rich in protein and essential nutrients, our fresh fish is perfect for grilling, frying, steaming, or cooking in soups and stews.</p>
          </div>
        </div>

        <div className="product-card">
          <img src={Product4} alt="Smoked Catfish" loading="lazy" />
          <div className="product-card-content">
            <h4>Smoked Fish</h4>
            <p>Premium traditionally smoked catfish, carefully processed to preserve its rich flavor and aroma. </p>
          </div>
        </div>
      </div>
      <div className="product-cta-wrapper">
        <Link to="/ourbusinesses" className="cta-button">
          View All Products
          <span className="arrow-icon">&#8594;</span>
        </Link>
      </div>
    </section>
  );
};

export default Products;
