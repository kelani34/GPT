import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";
function WhatGPT3() {
  return (
    <>
      <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <div className="gpt3__whatgot3-feature">
          <Feature />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            The possibilities beyond your imagination
          </h1>
          <p>Explore the library</p>
          <div className="gpt3__whatgpt3-container">
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatGPT3;
