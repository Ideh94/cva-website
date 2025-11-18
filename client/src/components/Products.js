import React from "react";
import "./Products.css";
import Product1 from "../assets/images/products-1.png";
import Product2 from "../assets/images/products-2.png";
import Product3 from "../assets/images/products-3.png";
import Product4 from "../assets/images/products-4.png";
import Product5 from "../assets/images/products-5.png";

const Products = () => {
  return (
    <section className="Products-section">
      <div className="Products-overlay">
        <h2>Our Products</h2>
        <div className="underline"></div>
      </div>
      <div className="products-cards-container">
        <div className="product-card">
          <img src={Product1} alt="Fresh Poundo" />
          <h4>Fresh Poundo</h4>
          <p>Traditional Nigeri san staple made from premium yam flour, perfect for making authentic pounded yam.</p>
        </div>

        <div className="product-card">
          <img src={Product2} alt="Organic Rice" />
          <h4>Organic Rice</h4>
          <p>Locally grown, high-quality rice cultivated using sustainable farming practices for superior taste.</p>
        </div>

        <div className="product-card">
          <img src={Product3} alt="Organic Sugar" />
          <h4>Organic Sugar</h4>
          <p>Natural sweetener derived from organic sugarcane, perfect for cooking and baking.</p>
        </div>

        <div className="product-card">
          <img src={Product4} alt="Organic Flour" />
          <h4>Organic Flour</h4>
          <p>Premium wheat flour milled from organically grown grains, ideal for all your baking needs.</p>
        </div>

        <div className="product-card">
          <img src={Product5} alt="Organic Salt" />
          <h4>Organic Salt</h4>
          <p>Pure, mineral-rich sea salt harvested using traditional methods for authentic flavor.</p>
        </div>
      </div>
      <div className="product-cta-wrapper">
        <a href="/ourbusinesses" className="products-cta">
          View All Products
          <span className="arrow-icon">&#8594;</span>
        </a>
      </div>
    </section>
  );
};

export default Products;
