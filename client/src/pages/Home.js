import SlideShow from '../components/SlideShow';
import { theme } from "../constants/theme";
import './Home.css';

function Home() {
  return (
    <div
      className="home"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text.primary,
        fontFamily: theme.typography.fontFamily,
      }}
    >

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.text.inverse,
          padding: theme.spacing.xxl,
          textAlign: 'center',
        }}
      >
        <div className="hero-content">
          <h1
            style={{
              fontSize: theme.typography.sizes.hero,
              fontWeight: theme.typography.weight.bold,
              marginBottom: theme.spacing.md,
            }}
          >
            Welcome to CVA Multi Services Nigeria Ltd.
          </h1>
          <p
            style={{
              fontSize: theme.typography.sizes.lg,
              marginBottom: theme.spacing.lg,
            }}
          >
            We empower businesses with innovative solutions in distribution, agriculture, logistics, and consulting.
          </p>
          <a
            href="/contact"
            className="cta-button"
            style={{
              backgroundColor: theme.colors.accent,
              color: theme.colors.text.inverse,
              padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
              borderRadius: theme.radius.md,
              textDecoration: 'none',
              fontWeight: theme.typography.weight.semibold,
              boxShadow: theme.shadow.md,
            }}
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        className="about"
        style={{
          backgroundColor: theme.colors.surface,
          padding: theme.spacing.xxl,
          textAlign: 'center',
        }}
      >
        <div className="about-content">
          <h2
            style={{
              fontSize: theme.typography.sizes.xxl,
              color: theme.colors.primaryDark,
              marginBottom: theme.spacing.md,
            }}
          >
            About CVA Multi Services Nigeria Ltd.
          </h2>
          <p style={{ marginBottom: theme.spacing.md }}>
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
      <section
        className="features"
        style={{
          padding: theme.spacing.xxl,
          backgroundColor: theme.colors.background,
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: theme.typography.sizes.xxl,
            color: theme.colors.primaryDark,
            marginBottom: theme.spacing.xl,
          }}
        >
          Services
        </h2>
        <div className="feature-list">
          {[
            { title: 'Agro Distribution', text: 'Efficient hybrid logistics for manufacturers, farmers, and retailers.' },
            { title: 'Consulting & Training', text: 'Capacity-building for aquaculture, agri-business, and value chains.' },
            { title: 'Smart Technology', text: 'Digital platforms to trace and manage supply networks with ease.' },
          ].map((item, index) => (
            <div
              key={index}
              className="feature-item"
              style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: theme.radius.lg,
                boxShadow: theme.shadow.sm,
                padding: theme.spacing.lg,
                textAlign: 'center',
                margin: theme.spacing.md,
              }}
            >
              <h3
                style={{
                  color: theme.colors.primary,
                  fontSize: theme.typography.sizes.lg,
                  marginBottom: theme.spacing.sm,
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: theme.colors.text.secondary }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="testimonials"
        style={{
          backgroundColor: theme.colors.primaryLight,
          color: theme.colors.text.inverse,
          padding: theme.spacing.xxl,
          textAlign: 'center',
        }}
      >
        <SlideShow />
        <h2 style={{ fontSize: theme.typography.sizes.xxl, marginBottom: theme.spacing.xl }}>
          What Our Clients Say
        </h2>
        <div className="testimonial-list">
          {[
            { text: '"CVA helped us scale distribution across 3 states with real-time data. Their support is top-notch!"', author: 'GreenFarm Ltd.' },
            { text: '"Their consulting team revolutionized our aquaculture system and trained our entire staff."', author: 'RiverFresh Farms' },
            { text: '"Thanks to CVA’s platform, we now manage logistics and payments seamlessly."', author: 'AquaGrow Nigeria' },
          ].map((t, index) => (
            <div
              key={index}
              className="testimonial"
              style={{
                backgroundColor: theme.colors.surface,
                color: theme.colors.text.primary,
                borderRadius: theme.radius.md,
                padding: theme.spacing.lg,
                margin: theme.spacing.md,
                boxShadow: theme.shadow.md,
              }}
            >
              <p style={{ fontStyle: 'italic' }}>{t.text}</p>
              <h4
                style={{
                  color: theme.colors.primaryDark,
                  marginTop: theme.spacing.sm,
                }}
              >
                - {t.author}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section
        className="blog"
        style={{
          backgroundColor: theme.colors.surface,
          padding: theme.spacing.xxl,
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: theme.typography.sizes.xxl,
            color: theme.colors.primaryDark,
            marginBottom: theme.spacing.xl,
          }}
        >
          Latest From Our Blog
        </h2>
        <div className="blog-list">
          {[
            {
              title: '5 Ways Technology Is Transforming Agriculture',
              text: 'Discover how smart platforms and traceability tools are revolutionizing the agri-value chain across Nigeria.',
            },
            {
              title: 'Why Hybrid Distribution Is the Future',
              text: 'Learn how CVA\'s hybrid logistics model empowers both manufacturers and retailers for nationwide reach.',
            },
            {
              title: 'Training Farmers for Digital Age',
              text: 'Explore how CVA’s workshops prepare farmers for technology-enabled farming and smarter delivery systems.',
            },
          ].map((post, index) => (
            <div
              key={index}
              className="blog-post"
              style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: theme.radius.lg,
                boxShadow: theme.shadow.sm,
                padding: theme.spacing.lg,
                margin: theme.spacing.md,
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  color: theme.colors.primary,
                  fontSize: theme.typography.sizes.lg,
                  marginBottom: theme.spacing.sm,
                }}
              >
                {post.title}
              </h3>
              <p style={{ color: theme.colors.text.secondary, marginBottom: theme.spacing.md }}>
                {post.text}
              </p>
              <a
                href="Blog"
                style={{
                  color: theme.colors.accent,
                  fontWeight: theme.typography.weight.semibold,
                  textDecoration: 'none',
                }}
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
