import React from "react";
import { FaBox } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="resume">
      <div className="section-title">
        <h4>
          <FaBox /> RESUME
        </h4>
      </div>
      <div className="resume-details">
        <h2>
          Education & <span id="special-text">Experience</span>
        </h2>
        <div className="resume-list"></div>
      </div>
    </div>
  );
};

export default Resume;
