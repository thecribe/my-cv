import React from "react";
import CoverSection from "../components/Homepage/CoverSection";
import ArrowNavigation from "../components/ArrowNavigation/ArrowNavigation";
import SectionTitle from "../components/SectionTitle";

const Frontend = () => {
  return (
    <>
      <div className="homepage">
        <section className="cover">
          <div className="cover-section">
            <CoverSection />
          </div>
          <ArrowNavigation />
        </section>
        <section className="section box-shadow">
          <div className="section-one content-centered">
            <div className="section-title  ">
              <SectionTitle />
            </div>
            <div className="section-details">
              <h2>Experience, details</h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Frontend;
