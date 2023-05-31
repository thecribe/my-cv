import React from "react";
import CoverSection from "../components/Homepage/CoverSection";
import ArrowNavigation from "../components/ArrowNavigation/ArrowNavigation";
import SectionTitle from "../components/SectionTitle";
import JobDescription from "../components/JobDescription";
import Technologies from "../components/Technologies";
import InnerNavBar from "../components/Homepage/InnerNavBar";

const Frontend = () => {
  const job_desc = [
    {
      date: {
        start_date: 2019,
        end_date: "present",
      },
      role: "web developer",
      company: "Obafemi Awolowo University",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: {
        start_date: 2018,
        end_date: "present",
      },
      role: "web developer",
      company: "Obafemi Awolowo University",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: {
        start_date: 2017,
        end_date: "present",
      },
      role: "web developer",
      company: "Obafemi Awolowo University",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: {
        start_date: 2016,
        end_date: "present",
      },
      role: "web developer",
      company: "Obafemi Awolowo University",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: {
        start_date: 2015,
        end_date: "present",
      },
      role: "web developer",
      company: "Obafemi Awolowo University",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: {
        start_date: 2014,
        end_date: "present",
      },
      role: "web developer",
      company: "Obafemi Awolowo University",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      date: {
        start_date: 2013,
        end_date: "present",
      },
      role: "web developer",
      company: "Obafemi Awolowo University",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
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
              <SectionTitle firstTitle="Job" secondTitle="Experience" />
            </div>
            <div className="section-details">
              <JobDescription desc={job_desc} />
            </div>
          </div>
        </section>
        <section className="section bg-background">
          <div className="section-two">
            <div className="tech-img">
              <Technologies />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-three">
            <InnerNavBar />
          </div>
        </section>
      </div>
    </>
  );
};

export default Frontend;
