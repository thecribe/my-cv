import React from "react";
import { FaHome } from "react-icons/fa";

const Introduction = () => {
  return (
    <>
      <div className="introduction">
        <div className="section-title">
          <h4>
            <FaHome /> INTRODUCTION
          </h4>
        </div>
        <div className="hero-text">
          <h1>
            Say Hi from <span id="special-text">ISRAEL</span>, Webflow Designer
            and Developer
          </h1>
          <p>
            I design and code beautifully simple things and i love what i do.
            Just simple like that!
          </p>
          <div className="spacing"></div>
          <div className="data-counter">
            <div className="experience">
              <h1>10+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="projects">
              <h1>180+</h1>
              <p>PROJECTS COMPLETED ALL ACROSS THE GLOBE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
