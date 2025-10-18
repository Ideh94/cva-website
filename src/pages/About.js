import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About CVA Multi Services Nigeria Ltd.</h1>
        <p>Empowering Africa’s business ecosystem with traceable and scalable solutions in agriculture, logistics, and consulting.</p>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            CVA Multi Services Nigeria Ltd. is a strategic B2B company that provides integrated solutions in distribution,
            logistics, agri-consulting, and empowerment programs. We leverage technology and partnerships to bridge gaps
            between producers and markets across Nigeria.
          </p>

          <h2>Our Mission</h2>
          <p>
            To drive inclusive growth by providing scalable, smart, and sustainable services that empower individuals,
            businesses, and communities.
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
