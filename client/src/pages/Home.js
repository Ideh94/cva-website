import { useState, useEffect } from "react";
import { homeStyles as s, homeAnimations } from "../constants/homeStyles";

// ====== Data Constants ======
const features = [
  { icon: "", title: "Fish Production", text: "Efficient hybrid logistics for manufacturers, farmers, and retailers." },
  { icon: "", title: "Rice Farming", text: "Capacity-building for aquaculture, agri-business, and value chains." },
  { icon: "", title: "Processing & Packaging", text: "Digital platforms to trace and manage supply networks with ease." },
  { icon: "", title: "Seasonings", text: "Digital platforms to trace and manage supply networks with ease." },
  { icon: "", title: "Agro Distribution", text: "Digital platforms to trace and manage supply networks with ease." },
  { icon: "", title: "Logistics", text: "Digital platforms to trace and manage supply networks with ease." },
  { icon: "", title: "Training Academy", text: "Digital platforms to trace and manage supply networks with ease." },
  { icon: "", title: "Modern Farm Set-Up & Construction", text: "Digital platforms to trace and manage supply networks with ease." },
  { icon: "", title: "Real Estate", text: "Digital platforms to trace and manage supply networks with ease." },


];

const blogPosts = [
  {
    title: '5 Ways Technology Is Transforming Agriculture',
    text: 'Discover how smart platforms and traceability tools are revolutionizing the agri-value chain across Nigeria.'
  },
  {
    title: 'Why Hybrid Distribution Is the Future',
    text: 'Learn how CVA\'s hybrid logistics model empowers both manufacturers and retailers for nationwide reach.'
  },
  {
    title: 'Training Farmers for Digital Age',
    text: 'Explore how CVA’s workshops prepare farmers for technology-enabled farming and smarter delivery systems.'
  },
];

const testimonialsData = [
  { text: "CVA helped us scale distribution across 3 states...", author: "GreenFarm Ltd.", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { text: "Their consulting team revolutionized our aquaculture system...", author: "RiverFresh Farms", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
  { text: "Thanks to CVA’s platform, we now manage logistics...", author: "AquaGrow Nigeria", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
  { text: "CVA’s hybrid logistics solutions have streamlined...", author: "AgroMax Ltd.", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
];

// ====== Home Component ======
function Home() {
  const [ctaHover, setCtaHover] = useState(false);
  const [featureHover, setFeatureHover] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={s.container}>
      {/* Inject animations */}
      <style>{homeAnimations}</style>

      {/* Hero Section */}
      <section style={s.hero}>
        <div style={s.heroBackground}></div>
        <div style={s.heroContent}>
          <h1 style={s.heroTitle}>
            Welcome to <span style={s.heroAccentText}>CVA Multi Services</span>
          </h1>
          <p style={s.heroParagraph}>
            A diversified Nigerian company dedicated to meeting the needs of individuals and businesses through value-added products and services.
          </p>
          <a
            href="/contact"
            style={{ ...s.heroCTAone.base, ...(ctaHover ? s.heroCTAone.hover : {}) }}
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
          >
            Contact Us
          </a>
          <a
            href="/about"
            style={{ ...s.heroCTAtwo.base, ...(ctaHover ? s.heroCTAtwo.hover : {}) }}
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
          >
            Learn more
          </a>
        </div>
        <div style={s.heroFadeBottom}></div>
      </section>

      {/* About Section */}
      <section style={s.aboutSection}>
        <h2 style={s.sectionTitle}>Who we are</h2>
        {/* Section Divider */}
        <div style={s.sectionDivider}></div>
        <p style={s.aboutText}>
          We offer integrated services in agriculture, logistics, technology, and business consulting to empower producers, distributors, and consumers across Nigeria.
        </p>
        <a href="/about" style={s.aboutLink}>Read More →</a>
      </section>

      {/* Our Businesses */}
      <section style={s.ourbusinessesSection}>
        <h2 style={s.sectionTitle}>Our Businesses</h2>
        {/* Section Divider*/}

      </section>


      {/* Features Section */}
      <section style={s.featuresSection}>
        <div style={s.featureList}>
          {features.map((item, i) => (
            <div
              key={i}
              style={{ ...s.featureItem.base, ...(featureHover[i] ? s.featureItem.hover : {}) }}
              onMouseEnter={() => setFeatureHover({ ...featureHover, [i]: true })}
              onMouseLeave={() => setFeatureHover({ ...featureHover, [i]: false })}
            >
              <div style={s.featureIcon}>{item.icon}</div>
              <h3 style={s.featureTitle}>{item.title}</h3>
              <p style={s.featureText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel testimonials={testimonialsData} />

      {/* Blog Section */}
      <section style={s.blogSection}>
        <h2 style={s.blogSectionTitle}>Latest From Our Blog</h2>

        {/* Section Divider */}
        <div style={s.sectionDivider}></div>

        <div style={s.blogListResponsive(windowWidth)}>
          {blogPosts.map((post, index) => (
            <div key={index} style={s.blogPostCard}>
              {post.image && (
                <img src={post.image} alt={post.title} style={s.blogPostImage} />
              )}
              <h3 style={s.blogPostTitle}>{post.title}</h3>
              <p style={s.blogPostText}>{post.text}</p>
              <a href="/blog" style={s.blogPostLink}>Read More →</a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// ====== Testimonials Carousel Component ======
function TestimonialsCarousel({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(window.innerWidth < 768 ? 1 : 2);

  useEffect(() => {
    const handleResize = () => setItemsPerView(window.innerWidth < 768 ? 1 : 2);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [paused, testimonials.length]);

  const prevTestimonial = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <div
      style={s.testimonialsContainer}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2 style={s.sectionTitle}>What Our Clients Say</h2>
      <div style={s.sectionDivider}></div>

      {/* Buttons */}
      <button
        onClick={prevTestimonial}
        style={{ ...s.testimonialButton.base, ...s.testimonialButton.left }}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, s.testimonialButton.hover)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, s.testimonialButton.base)}
      >
        ◀
      </button>

      <button
        onClick={nextTestimonial}
        style={{ ...s.testimonialButton.base, ...s.testimonialButton.right }}
        onMouseEnter={(e) => Object.assign(e.currentTarget.style, s.testimonialButton.hover)}
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, s.testimonialButton.base)}
      >
        ▶
      </button>


      <div
        style={{
          ...s.testimonialSlider,
          transform: `translateX(-${current * (100 / itemsPerView)}%)`,
        }}
      >
        {testimonials.map((t, index) => (
          <div
            key={index}
            style={{ ...s.testimonialCard.base, flex: `0 0 ${100 / itemsPerView}%` }}
          >
            <img src={t.avatar} alt={t.author} style={s.testimonialAvatar} />
            <p style={s.testimonialText}>“{t.text}”</p>
            <h4 style={s.testimonialAuthor}>{t.author}</h4>
          </div>
        ))}
      </div>

      <div style={s.testimonialDotsContainer}>
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              ...s.testimonialDot,
              backgroundColor: index === current ? s.testimonialDot.activeColor : s.testimonialDot.inactiveColor,
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}


export default Home;
