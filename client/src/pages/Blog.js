import React, { useEffect, useState } from 'react';
import axios from 'axios';

function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => await axios.get('http://localhost:5000/api/news/blog')
      .then(res => setPosts(res.data.articles || []))
      .catch(err => console.error(err)))();
  }, []);

  return (
    <div className="news">
      <h1>Latest News</h1>
      {posts.map(({ title, publishedAt, url, description, urlToImage }, index) => (
        <div key={index} className="news-post">
          <h2>{title}</h2>
          <p><em>{new Date(publishedAt).toLocaleDateString()}</em></p>
          <p>{description}</p>
          {urlToImage && <img src={urlToImage} alt={description} width={200} height={200} style={{ background: "gray", maxWidth: "100%", height: "auto" }} />}
          <br />
          <a href={url} target="_blank" rel="noopener noreferrer">Read full article</a>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default News;
