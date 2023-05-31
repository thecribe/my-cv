import React from "react";
import Single from "../Single";

const Education = (props) => {
  const education = [...props.education];

  return (
    <div className="education">
      <div className="section-container">
        <div className="container-header">
          <h4>2019-2023</h4>
          <h2>Institutional Qualifications</h2>
        </div>
        <div className="institutions container">
          {education.map((edu, i) => (
            <Single
              key={i}
              degree={edu.degree}
              school={edu.school}
              date={edu.date}
              details={edu.details}
            />
          ))}
        </div>
      </div>
      <div className="section-container">
        <div className="container-header">
          <h4>2019-2023</h4>
          <h2>Other Certifications</h2>
        </div>
        <div className="certifications container">
          {education.map((edu, i) => (
            <Single
              key={i}
              degree={edu.degree}
              school={edu.school}
              date={edu.date}
              details={edu.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
