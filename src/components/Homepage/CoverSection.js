import React from "react";
import myPhoto from "../../assets/mypic.png";
import { NavLink } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

const CoverSection = () => {
  return (
    <>
      <div className="cover-box">
        <h1>
          Meet <span id="special-text">LAWAL</span> Oluwatobi Israel
        </h1>
        <div className="image-box">
          <div className="img">
            <img src={myPhoto} width="100%" />
          </div>
          <div className="description">
            <p>Fullstack Developer & An Experienced Writer</p>
          </div>
        </div>
        <NavLink className="btn">
          GitHub <BsBoxArrowUpRight className="icons" />
        </NavLink>
      </div>
    </>
  );
};

export default CoverSection;
