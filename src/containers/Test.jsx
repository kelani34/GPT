import React from "react";
import { useState } from "react";

const Test = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <div className={`navbar ${navbarOpen ? " showMenu" : ""}`}> HIII</div>
    </div>
  );
};

export default Test;
