import SlideShow from '../components/SlideShow';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to CVA Multi Services Nigeria Ltd.</h1>
          <p>We empower businesses with innovative solutions in distribution, agriculture, logistics, and consulting.</p>
          <a href="/contact" className="cta-button">Contact Us</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>About CVA Multi Services Nigeria Ltd.</h2>
          <p>
            CVA Multi Services Nigeria Ltd. is a dynamic company offering integrated services in
            agriculture, logistics, technology, and business consulting. Our mission is to build
            scalable and sustainable supply chains that empower producers, distributors, and consumers.
          </p>
          <p>
            With a focus on innovation and impact, we support farmers, SMEs, and manufacturers with tools
            that improve traceability, reduce cost, and optimize delivery across Nigeria’s agri-value chain.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Services</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Agro Distribution</h3>
            <p>Efficient hybrid logistics for manufacturers, farmers, and retailers.</p>
          </div>
          <div className="feature-item">
            <h3>Consulting & Training</h3>
            <p>Capacity-building for aquaculture, agri-business, and value chains.</p>
          </div>
          <div className="feature-item">
            <h3>Smart Technology</h3>
            <p>Digital platforms to trace and manage supply networks with ease.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <SlideShow />
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"CVA helped us scale distribution across 3 states with real-time data. Their support is top-notch!"</p>
            <h4>- GreenFarm Ltd.</h4>
          </div>
          <div className="testimonial">
            <p>"Their consulting team revolutionized our aquaculture system and trained our entire staff."</p>
            <h4>- RiverFresh Farms</h4>
          </div>
          <div className="testimonial">
            <p>"Thanks to CVA’s platform, we now manage logistics and payments seamlessly."</p>
            <h4>- AquaGrow Nigeria</h4>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h2>Latest From Our Blog</h2>
        <div className="blog-list">
          <div className="blog-post">
            <h3>5 Ways Technology Is Transforming Agriculture</h3>
            <p>Discover how smart platforms and traceability tools are revolutionizing the agri-value chain across Nigeria.</p>
            <a href="Blog">Read More</a>
          </div>
          <div className="blog-post">
            <h3>Why Hybrid Distribution Is the Future</h3>
            <p>Learn how CVA's hybrid logistics model empowers both manufacturers and retailers for nationwide reach.</p>
            <a href="Blog">Read More</a>
          </div>
          <div className="blog-post">
            <h3>Training Farmers for Digital Age</h3>
            <p>Explore how CVA’s workshops prepare farmers for technology-enabled farming and smarter delivery systems.</p>
            <a href="Blog">Read More</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
