import React from "react";
import siteLogo from "../assets/cribe-logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="header-site-logo">
            <img src={siteLogo} width="100%" />
          </div>
          <div className="header-navigation">
            <ul>
              <li>
                <NavLink className="links navlink">Home</NavLink>
              </li>
              <li>
                <NavLink className="links navlink">About me</NavLink>
              </li>
              <li>
                <NavLink className="links navlink">My Projects</NavLink>
              </li>
              <li>
                <NavLink className="links navlink">Contact me</NavLink>
              </li>
              <li>
                <NavLink className="links navlink">Download My CV</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
