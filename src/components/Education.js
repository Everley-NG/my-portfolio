import React from "react";

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-item">
        <h3 className="education-school">Wilfrid Laurier University</h3>
        <div className="education-degree">
          Honours Bachelor of Science | Professional Experience Program (PEP)
          Co-op
        </div>
        <div className="education-location">Waterloo, Canada</div>
        <div className="education-details">
          <p>
            <strong>Major:</strong> Computer Science
          </p>
          <p>
            <strong>Minor:</strong> User Experience Design
          </p>
          <p>
            <strong>Duration:</strong> Sept. 2019 – Jun. 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
