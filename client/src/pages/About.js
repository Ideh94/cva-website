import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About CVA Multi Services Nig Ltd.</h1>
        <p>Empowering Africa’s business ecosystem with traceable and scalable solutions in agriculture, logistics, and consulting.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            CVA Multi Services is a diversified Nigerian company dedicated to meeting the basic needs of individuals, families, and businesses through value-added products and services. With operations spanning agriculture, food processing, logistics, construction, and capacity development, we are driven by the mission to empower communities and strengthen local industries.
            Our focus is to provide affordable, high-quality, and locally sourced solutions that improve livelihoods, create jobs, and foster sustainable development across Nigeria.

          </p>

          <h2>Our Mission</h2>
          <p>
            To produce, process, and distribute high-quality goods and services through innovation, local value addition, and a commitment to excellence.
          </p>

          <h2>Our Vision</h2>
          <p>To be a leading provider of essential products and services that sustainably meet Nigeria’s basic needs and drive socio-economic development.

          </p>

          <h2>What Makes Us Different</h2>
          <ul>
            <li>✅ Hybrid traceable distribution networks</li>
            <li>✅ Capacity-building and training programs</li>
            <li>✅ Tech-enabled platforms for supply chain visibility</li>
            <li>✅ Strong government and private sector partnerships</li>
          </ul>
        </div>
        <section className="timeline-section">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Founded</h3>
                <p>CVA Multi Services Nigeria Ltd. was established with a vision to bridge agribusiness and distribution gaps in Nigeria.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>Expanded Operations</h3>
                <p>Launched operations across 5 states, partnering with major logistics and agro-service providers.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Digital Platform Launch</h3>
                <p>Introduced a hybrid traceable B2B distribution platform to streamline agri-product flow.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>National Recognition</h3>
                <p>Recognized as one of Nigeria’s top agro-distribution innovators by the National Agribusiness Council.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="about-image">
          <img src="/images/about-illustration.png" alt="" />
        </div>
      </section>
    </div>
  );
}

export default About;
