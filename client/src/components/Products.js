import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Product1 from "../assets/images/products-1.png";
import Product2 from "../assets/images/products-2.png";
import Product3 from "../assets/images/products-3.png";
import Product4 from "../assets/images/products-4.png";

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-overlay">
        <h2>Our Products</h2>
        <div className="underline"></div>
      </div>
      <div className="products-cards-container">
        <div className="product-card">
          <img src={Product1} alt="Fresh Poundo" />
          <div className="product-card-content">
            <h4>Fresh Poundo</h4>
            <p>Traditional Nigerian staple made from premium yam flour, perfect for making authentic pounded yam.</p>
          </div>
        </div>

        <div className="product-card">
          <img src={Product2} alt="Organic Rice" />
          <div className="product-card-content">
            <h4>Organic Rice</h4>
            <p>Locally grown, high-quality rice cultivated using sustainable farming practices for superior taste.</p>
          </div>
        </div>

        <div className="product-card">
          <img src={Product3} alt="Organic Sugar" />
          <div className="product-card-content">
            <h4>Organic Sugar</h4>
            <p>Natural sweetener derived from organic sugarcane, perfect for cooking and baking.</p>
          </div>
        </div>

        <div className="product-card">
          <img src={Product4} alt="Organic Flour" />
          <div className="product-card-content">
            <h4>Organic Flour</h4>
            <p>Premium wheat flour milled from organically grown grains, ideal for all your baking needs.</p>
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
