import React from "react";
import { FaHome, FaUser } from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      <div className="about">
        <div className="section-title">
          <h4>
            <FaUser /> ABOUT
          </h4>
        </div>
        <div className="about-details">
          <h2>
            Every great design begin with an even{" "}
            <span id="special-text">better story</span>
          </h2>
          <p>
            Since beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chopsone design
            problem at a time.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
