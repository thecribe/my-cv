import React from "react";

const Single = (props) => {
  return (
    <div className="inner-div">
      <div className="single">
        <h2>{props.degree}</h2>
        <h5>
          {props.school} ({props.date})
        </h5>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default Single;
