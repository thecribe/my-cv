import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";

const SectionTitle = () => {
  return (
    <div className="title-design-box">
      <div className="title-design">
        <div className="first-box">
          <div className="inner-box">
            <h1>
              <BsPersonWorkspace />
            </h1>
          </div>
        </div>
        <div className="second-box">
          <h2>Job</h2>
          <h2>Experience</h2>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
