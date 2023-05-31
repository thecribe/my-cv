import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="title-design-box">
      <div className="title-design">
        <div className="first-box">
          <div className="inner-box"></div>
        </div>
        <div className="second-box">
          <h2>{props.firstTitle}</h2>
          <h2>{props.secondTitle}</h2>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
