import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import './OurBusinesses.css';


function OurBusinesses() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="OurBusinesses-page">
      <section className="OurBusinesses-hero">
        <h1>Our Businesses</h1>
        <p>At CVA Multi Services Nigeria Ltd, we offer strategic and value-driven services across sectors.</p>
      </section>

      <div className="OurBusinesses-grid">

        <div className="OurBusinesses-card" data-aos="fade-up">
          <h3>Fish Production</h3>
          <p>We engage in sustainable fish farming practices to ensure a steady supply of high-quality fish.</p>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fish Production" className='avatar'/>
        </div>

        <div className="OurBusinesses-card" data-aos="fade-up">
          <h3>Rice Farming</h3>
          <p>Our rice farming initiatives focus on high-yield varieties and eco-friendly practices.</p>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rice Farming" className='avatar'/>
        </div>

        <div className="OurBusinesses-card" data-aos="fade-up">
          <h3>Seasonings</h3>
          <p>We produce a range of natural seasonings to enhance the flavor of your dishes.</p>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Seasonings" className='avatar'/>
        </div>

        <div className="OurBusinesses-card" data-aos="fade-up">
          <h3>Processing</h3>
          <p>Our processing facilities ensure that all products meet the highest quality standards.</p>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Processing" />
        </div>

        <div className="OurBusinesses-card" data-aos="fade-up">
          <h3>Packaging</h3>
          <p>We offer innovative packaging solutions to preserve product freshness and quality.</p>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Packaging" className='avatar'/>
        </div>

        <div className="OurBusinesses-card" data-aos="fade-up">
          <h3>Agro Distribution</h3>
          <p>Our agro distribution network ensures that products reach consumers efficiently and sustainably.</p>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Agro Distribution" className='avatar'/>
        </div>

        <div className="OurBusinesses-card" data-aos="fade-up">
          <h3>Logistics</h3>
          <p>We provide comprehensive logistics solutions to streamline the supply chain process.</p>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Logistics" className='avatar'/>
        </div>

        <div className="OurBusinesses-card" data-aos="fade-up">
          <h3>Construction</h3>
          <p>Our construction services focus on sustainable building practices and innovative design.</p>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Construction" className='avatar'/>
        </div>

        <div className="OurBusinesses-card" data-aos="fade-up">
          <h3>Training Academy</h3>
          <p>We offer training programs to empower individuals with skills in agriculture and business management.</p>
          <img src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Training Academy" className='avatar' />
        </div>
      </div>
    </div>
  );
}

export default OurBusinesses;
