import React from "react";
import "./article.css";

function Article({ imgSRC, date, title }) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgSRC} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read more...</p>
      </div>
    </div>
  );
}

export default Article;
