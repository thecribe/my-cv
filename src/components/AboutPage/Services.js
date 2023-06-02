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
      </div>
    </div>
  );
};

export default Services;
