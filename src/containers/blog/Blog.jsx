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
          <Article imgSRC={blog01}/>
        </div>
        <div className="gpt3__blog-contaiber_groupB">
          <Article imgSRC={blog01}/>
          <Article imgSRC={blog01}/>
          <Article imgSRC={blog01}/>
          <Article imgSRC={blog01}/>
        </div>
      </div>
    </div>
  );
}

export default Blog;
