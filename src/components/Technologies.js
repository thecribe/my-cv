import React from "react";
import img1 from "../assets/tech/html5.png";
import img2 from "../assets/tech/bootstrap.png";
import img3 from "../assets/tech/css-3.png";
import img4 from "../assets/tech/java-script.png";
import img5 from "../assets/tech/logo-2018-black.png";
import img6 from "../assets/tech/mysql.png";
import img7 from "../assets/tech/nodejs.png";
import img8 from "../assets/tech/physics.png";
import img9 from "../assets/tech/redux.svg";
import img10 from "../assets/tech/sass.png";

const Technologies = () => {
  return (
    <>
      <div className="tech-img-box">
        <img src={img1} alt="" width="100%" />
        <h4>HTML 5</h4>
      </div>
      <div className="tech-img-box">
        <img src={img3} alt="" width="100%" />
        <h4>CSS</h4>
      </div>
      <div className="tech-img-box">
        <img src={img2} alt="" width="100%" />
        <h4>Bootstrap</h4>
      </div>
      <div className="tech-img-box">
        <img src={img10} alt="" width="100%" />
        <h4>Sass</h4>
      </div>
      <div className="tech-img-box">
        <img src={img4} alt="" width="100%" />
        <h4>Javascript</h4>
      </div>
      <div className="tech-img-box">
        <img src={img8} alt="" width="100%" />
        <h4>React JS</h4>
      </div>
      <div className="tech-img-box">
        <img src={img9} alt="" width="100%" />
        <h4>Redux</h4>
      </div>
      <div className="tech-img-box">
        <img src={img7} alt="" width="100%" />
        <h4>Node JS</h4>
      </div>
      <div className="tech-img-box">
        <img src={img6} alt="" width="100%" />
        <h4>MYSQL</h4>
      </div>
      <div className="tech-img-box">
        <img src={img5} alt="" width="100%" />
        <h4>MariaDB</h4>
      </div>
    </>
  );
};

export default Technologies;
