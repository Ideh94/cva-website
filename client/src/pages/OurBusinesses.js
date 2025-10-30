import React from 'react';
import './OurBusinesses.css';

function OurBusinesses() {
  return (
    <div className="OurBusinesses-page">
      <h1>Our Businesses</h1>
      <p>At CVA Multi Services Nigeria Ltd, we offer strategic and value-driven services across sectors.</p>

      <div className="OurBusinesses-grid">
        <div className="OurBusinesses-card">
          <h3>Agro Distribution</h3>
          <p>We bridge manufacturers and retailers by distributing agricultural products nationwide.</p>
        </div>

        <div className="OurBusinesses-card">
          <h3>Logistics Management</h3>
          <p>Providing efficient and traceable logistics for agri-value chains, using our hybrid platform.</p>
        </div>

        <div className="OurBusinesses-card">
          <h3>Training & Empowerment</h3>
          <p>Empowering farmers and agro-entrepreneurs through tailored training and capacity-building programs.</p>
        </div>


        <div className="OurBusinesses-card">
          <h3>Tech Integration</h3>
          <p>We help agro-based businesses scale through technology platforms and digital distribution tools.</p>
        </div>
      </div>
    </div>
  );
}

export default OurBusinesses;
