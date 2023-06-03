import React from "react";
import { FaPlane } from "react-icons/fa";

const Services = () => {
  return (
    <div className="services">
      <div className="section-title">
        <h4>
          <FaPlane /> SERVICES
        </h4>
      </div>
      <div className="services-details">
        <h2>
          My <span id="special-text">Specializations</span>
        </h2>
        <div className="services-list">
          <div className="single">
            <h3>Frontend Development</h3>
            <p>
              I created digital products with unique ideas use Figma & Framer
            </p>
            <p>24 Projects</p>
          </div>
          <div className="single">
            <h3>Backend Development</h3>
            <p>
              I created digital products with unique ideas use Figma & Framer
            </p>
            <p>24 Projects</p>
          </div>
          <div className="single">
            <h3>Wordpress</h3>
            <p>
              I created digital products with unique ideas use Figma & Framer
            </p>
            <p>24 Projects</p>
          </div>
          <div className="single">
            <h3>Content Writing</h3>
            <p>
              I created digital products with unique ideas use Figma & Framer
            </p>
            <p>24 Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
