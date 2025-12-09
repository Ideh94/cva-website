import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../api/config';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import './NewsPage.css';

// Import images (using placeholders/existing assets for now)
import HeroImage from "../assets/images/hero-image1.png";
import RiceFarming from "../assets/images/rice-farming.jpg";
import Training from "../assets/images/training-academy.jpg";
import TechAgri from "../assets/images/ourbusinesses-3.png"; // Food processing represents tech in ag

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      title: "5 Ways Technology Is Transforming Agriculture in Nigeria",
      excerpt: "Discover how smart platforms, drones, and traceability tools are revolutionizing the agri-value chain, increasing yields and ensuring food security across the nation.",
      image: TechAgri,
      date: "December 1, 2025",
      author: "CVA Editorial",
      category: "Technology"
    },
    {
      id: 2,
      title: "Why Hybrid Distribution Is the Future of Logistics",
      excerpt: "Learn how CVA's hybrid logistics model empowers both manufacturers and retailers for nationwide reach, reducing costs and improving delivery times.",
      image: HeroImage,
      date: "November 28, 2025",
      author: "Logistics Team",
      category: "Logistics"
    },
    {
      id: 3,
      title: "Empowering Farmers Through Digital Training",
      excerpt: "Explore how CVA’s workshops are preparing the next generation of farmers for technology-enabled farming and smarter delivery systems.",
      image: Training,
      date: "November 15, 2025",
      author: "Community Outreach",
      category: "Development"
    }
  ]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/news/blog`);
        if (response.data && response.data.articles) {
          const apiNews = response.data.articles.map((article, index) => ({
            id: index + 4, // Start IDs after hardcoded ones
            title: article.title,
            excerpt: article.description || "Read more about this topic...",
            image: article.urlToImage || HeroImage, // Fallback image
            date: new Date(article.publishedAt).toLocaleDateString(),
            author: article.author || article.source.name || "CVA News",
            category: "General"
          })).slice(0, 6); // Limit to 6 items

          // Combine with hardcoded or replace? Let's append for now to show both
          setNewsItems(prev => [...prev, ...apiNews]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="news-hero-content">
          <h1>News & Insights</h1>
          <p>Stay updated with the latest developments, success stories, and industry insights from CVA Group.</p>
        </div>
      </section>

      <div className="news-container">
        {/* Featured Article */}
        <article className="featured-article">
          <div className="featured-image">
            <img src={RiceFarming} alt="Rice Farming Success" />
          </div>
          <div className="featured-content">
            <span className="article-tag">Featured Story</span>
            <h2>Boosting Local Rice Production: A Success Story</h2>
            <div className="article-meta">
              <span><FaCalendarAlt /> December 3, 2025</span>
              <span><FaUser /> CVA Agriculture</span>
            </div>
            <p>
              Our recent initiative to support local rice farmers has yielded record-breaking harvests. 
              By providing high-quality seeds, modern machinery, and expert guidance, we are not just 
              farming rice; we are cultivating prosperity for rural communities and ensuring food 
              sufficiency for Nigeria.
            </p>
            <Link to="#" className="read-more-btn">
              Read Full Story <span>&rarr;</span>
            </Link>
          </div>
        </article>

        {/* News Grid */}
        <div className="news-articles-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-article-card">
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <span className="article-tag">{item.category}</span>
                <h3>{item.title}</h3>
                <div className="article-meta">
                  <span>{item.date}</span>
                </div>
                <p>{item.excerpt}</p>
                <Link to="#" className="read-more-btn">
                  Read Article <span>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
