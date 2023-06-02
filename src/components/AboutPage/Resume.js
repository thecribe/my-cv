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
        <div className="resume-list">
          <div className="single">
            <div className="single-inner-div">
              <p>2019-present</p>
              <h3>Framer Desinger & Developer</h3>
              <p>Brunodee Agency</p>
              <h3>Framer Desinger & Developer</h3>
              <p>Brunodee Agency</p>
            </div>
          </div>
          <div className="single">
            <div className="single-inner-div">
              <p>2019-present</p>
              <h3>Framer Desinger & Developer</h3>
              <p>Brunodee Agency</p>
              <h3>Framer Desinger & Developer</h3>
              <p>Brunodee Agency</p>
              <h3>Framer Desinger & Developer</h3>
              <p>Brunodee Agency</p>
            </div>
          </div>
          <div className="single">
            <div className="single-inner-div">
              <p>2019-present</p>
              <h3>Framer Desinger & Developer</h3>
              <p>Brunodee Agency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
