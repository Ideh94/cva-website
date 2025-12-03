import React from 'react';
import { Link } from 'react-router-dom';
import FishFarming from "../assets/images/ourbusinesses-1.webp";
import RiceFarming from "../assets/images/ourbusinesses-2.webp";
import FoodProcessing from "../assets/images/ourbusinesses-3.webp";
import Construction from "../assets/images/ourbusinesses-4.webp";
import "./OurBusinesses.css";

const Business = () => {
    return (
        <section className="our-businesses-section">
            <div className="our-businesses-overlay">
                <h2>Our Businesses</h2>
                <div className="underline"></div>
                <div className="business-cards-container">
                    <div className="business-card">
                        <img
                            src={FishFarming}
                            alt="Fish Farming"
                            loading="lazy"
                        />
                        <div className="business-card-content">
                            <h4>Fish Farming</h4>
                            <p>
                                Supplying fresh, healthy fish through modern aquaculture.
                            </p>
                        </div>
                    </div>
                    <div className="business-card">
                        <img
                            src={RiceFarming}
                            alt="Rice Farming"
                            loading="lazy"
                        />
                        <div className="business-card-content">
                            <h4>Rice Farming</h4>
                            <p>
                                Reducing import dependence with locally grown, high-quality rice.
                            </p>
                        </div>
                    </div>
                    <div className="business-card">
                        <img
                            src={FoodProcessing}
                            alt="Food Processing"
                            loading="lazy"
                        />
                        <div className="business-card-content">
                            <h4>Food Processing & Packaging</h4>
                            <p>
                                Transforming raw produce into consumer-ready food products.
                            </p>
                        </div>
                    </div>
                    <div className="business-card">
                        <img
                            src={Construction}
                            alt="Construction"
                            loading="lazy"
                        />
                        <div className="business-card-content">
                            <h4>Construction</h4>
                            <p>
                                Building infrastructure that supports growth and development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="businesses-cta">
                    <Link to="/ourbusinesses" className="cta-button">
                        View All Businesses
                        <span className="arrow-icon">&#8594;</span>
                    </Link>
                </div>
            </div>
        </section>
    )
};
export default Business;
