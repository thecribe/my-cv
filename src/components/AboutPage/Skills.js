import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills">
      <div className="section-title">
        <h4>
          <FaBriefcase /> SKILLS
        </h4>
      </div>
      <div className="skills-details">
        <h2>
          My <span id="special-text">Advantages</span>
        </h2>
      </div>
    </div>
  );
};

export default Skills;
