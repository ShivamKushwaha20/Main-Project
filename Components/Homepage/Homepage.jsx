import React, { useRef } from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="hero-container">
        <div className="right-container">
          <h1 className="header-tagline">Hello</h1>
          <h2 className="header-subtagline">Developer</h2>
          <h2 className="header-subtagline2">Shivam Here..</h2>
          <NavLink to="/project" className="checkwork-btn global-btn">See my work</NavLink>
        </div>
     </div>
    </>
  );
};

export default Homepage;
