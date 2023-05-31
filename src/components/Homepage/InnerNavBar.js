import React, { useState } from "react";
import Education from "./InnerNavBar/Education";
import WhatIDo from "./InnerNavBar/WhatIDo";

const InnerNavBar = () => {
  const [navState, setNavState] = useState(1);

  const education = [
    {
      degree: "B.Sc. English",
      school: "Obafemi Awolowo University",
      date: "1990-2000",
      details:
        "Lorem Ipsum The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
    {
      degree: "B.Sc. English",
      school: "Obafemi Awolowo University",
      date: "1990-2000",
      details:
        "Lorem Ipsum The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
    {
      degree: "B.Sc. English",
      school: "Obafemi Awolowo University",
      date: "1990-2000",
      details:
        "Lorem Ipsum The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.",
    },
  ];
  return (
    <>
      <div className="section-nav-bar">
        <div
          className={["menu", navState === 1 && "menu-active"].join(" ")}
          onClick={() => setNavState(1)}
        >
          <h2>What I Do</h2>
        </div>
        <div
          className={["menu", navState === 0 && "menu-active"].join(" ")}
          onClick={() => setNavState(0)}
        >
          <h2>Education</h2>
        </div>
      </div>

      {navState === 0 ? <Education education={education} /> : <WhatIDo />}
    </>
  );
};

export default InnerNavBar;
