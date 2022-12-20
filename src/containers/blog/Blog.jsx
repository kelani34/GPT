import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-contaiber_groupA">
          <Article
            imgSRC={blog01}
            date="Oct 26, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-contaiber_groupB">
          <Article
            imgSRC={blog02}
            date="Oct 26, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgSRC={blog03}
            date="Oct 26, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgSRC={blog04}
            date="Oct 26, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgSRC={blog05}
            date="Oct 26, 2022"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
