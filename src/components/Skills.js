import React from "react";

const Skills = () => {
  const skillsData = {
    proficient: [
      "C#",
      "Python",
      "Java",
      "SQL",
      "TypeScript/JavaScript",
      "HTML/CSS",
      "Git",
    ],
    experienced: ["C++", "C", "R", "VBA", "Microsoft Office"],
    frameworks: [
      ".NET",
      "Angular",
      "React",
      "Django",
      "Unity Cross-Platform Game Engine",
    ],
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Proficient</h3>
          <ul className="skill-list">
            {skillsData.proficient.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Experienced</h3>
          <ul className="skill-list">
            {skillsData.experienced.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frameworks & Tools</h3>
          <ul className="skill-list">
            {skillsData.frameworks.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
