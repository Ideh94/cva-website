import React from 'react';
import { Link } from 'react-router-dom';
import FishFarming from "../assets/images/ourbusinesses-1.png";
import RiceFarming from "../assets/images/ourbusinesses-2.png";
import FoodProcessing from "../assets/images/ourbusinesses-3.png";
import Construction from "../assets/images/ourbusinesses-4.png";
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
                        />
                        <div className="business-card-content">
                            <h3>Fish Farming</h3>
                            <p>
                                Supplying fresh, healthy fish through modern aquaculture.
                            </p>
                        </div>
                    </div>
                    <div className="business-card">
                        <img
                            src={RiceFarming}
                            alt="Rice Farming"
                        />
                        <div className="business-card-content">
                            <h3>Rice Farming</h3>
                            <p>
                                Reducing import dependence with locally grown, high-quality rice.
                            </p>
                        </div>
                    </div>
                    <div className="business-card">
                        <img
                            src={FoodProcessing}
                            alt="Food Processing"
                        />
                        <div className="business-card-content">
                            <h3>Food Processing & Packaging</h3>
                            <p>
                                Transforming raw produce into consumer-ready food products.
                            </p>
                        </div>
                    </div>
                    <div className="business-card">
                        <img
                            src={Construction}
                            alt="Construction"
                        />
                        <div className="business-card-content">
                            <h3>Construction</h3>
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
