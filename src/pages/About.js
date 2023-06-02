import React from "react";
import siteLogo from "../assets/cribe-logo.png";
import {
  FaFacebook,
  FaGithub,
  FaInbox,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import SectionWrrapper from "../components/AboutPage/SectionWrrapper";
import AboutSection from "../components/AboutPage/AboutSection";
import Introduction from "../components/AboutPage/Introduction";
import Resume from "../components/AboutPage/Resume";

const About = () => {
  return (
    <>
      <div className="section-about">
        <div className="profile-preview">
          <div className="profile-container">
            <div className="profile-header">
              <div className="logo">
                <img src={siteLogo} width="100%" />
              </div>
              <div className="job-desc">
                <h5>
                  Frontend & <br />
                  Backend Developer
                </h5>
              </div>
            </div>
            <div className="profile-image"></div>
            <div className="profile-text">
              <h4>lawaloluwatobi128@gamil.com</h4>
              <h4>Based in Osun State, Nigeria</h4>
            </div>
            <p>@2022 TheCribe All rights reserved</p>
            <div className="socials">
              <div className="icon">
                <FaFacebook />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <FaGithub />
              </div>
            </div>
            <div className="call-to-action">
              <p>
                <FaInbox />
                Hire me
              </p>
            </div>
          </div>
        </div>
        <div className="profile-details">
          <div className="inner-div">
            <div className="inner-div-centered">
              <SectionWrrapper>
                <Introduction />
              </SectionWrrapper>
              <SectionWrrapper>
                <AboutSection />
              </SectionWrrapper>
              <SectionWrrapper>
                <Resume />
              </SectionWrrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
