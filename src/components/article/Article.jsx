import React from "react";
import "./article.css";

function Article({ imgSRC }) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgSRC} alt="blog image" />
      </div>
    </div>
  );
}

export default Article;
