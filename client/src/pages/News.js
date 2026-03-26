import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./News.css";

function News() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  const news = [
    {
      title: "5 Ways Technology Is Transforming Agriculture",
      text: "Discover how smart platforms and traceability tools are revolutionizing the agri-value chain across Nigeria.",
      link: "#",
    },
    {
      title: "Why Hybrid Distribution Is the Future",
      text: "Learn how CVA's hybrid logistics model empowers both manufacturers and retailers for nationwide reach.",
      link: "#",
    },
    {
      title: "Training Farmers for Digital Age",
      text: "Explore how CVA’s workshops prepare farmers for technology-enabled farming and smarter delivery systems.",
      link: "#",
    },
  ];

  return (
    <section className="news-wrapper">
      <div data-aos="fade-up">
        <h2 className="news-heading">Latest News</h2>
        <div className="news-underline" />
      </div>

      <div className="news-grid">
        {news.map((item, id) => (
          <article key={id} className="news-card" data-aos="fade-up" data-aos-delay={id * 100}>
            <div className="news-card-inner">
              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <a className="read-more" href={item.link}>
                Read more
                <span className="arrow-icon">&#8594;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default News;
