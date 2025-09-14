import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Login Operator",
      company: "Giesecke+Devrient",
      location: "Markham, Canada",
      date: "Feb. 2025 – Present",
      description: [
        "Sorted and matched production logs from SAP and IQ systems with CDP reports for distribution across service production departments. Responded promptly to inquiries from Operations, IT, Sales, and RMG.",
        "Monitored SAP and IQ systems for stock usage and material integrity data, ensuring accurate and timely reporting.",
        "Addressed operational issues within SAP and IQ, including SLA data changes and order deletions, by coordinating with internal teams. Generated reports and performed various administrative tasks to support production operations.",
      ],
    },
    {
      title: "Software Developer",
      company: "LingoTok (Startup)",
      location: "Remote",
      date: "Jun. 2024 – Dec. 2024",
      description: [
        "Developed a full-stack, AI-powered video-based language learning platform using Python and React, integrating interactive video quizzes, personalized learning paths, and weekly progress reports.",
        "Built and optimized backend services with Python and Node.js, implementing asynchronous task processing for real-time video handling, transcription, data analysis, and multilingual subtitle generation.",
        "Optimized the server architecture and database queries, resulting in a 30% increase in throughput, which enhanced overall performance and user experience.",
      ],
    },
    {
      title: "Software Developer",
      company: "SOTI",
      location: "Mississauga, Canada",
      date: "May 2022 – Aug. 2023",
      description: [
        "Developed the latest Apple Shared iPad MDM (Mobile Device Management) features, achieving a 100% compliance rate with company standards.",
        "Integrated the newest features of the Apple DDM (Declarative Device Management) protocol, contributing to a 20% improvement in device management efficiency.",
        "Built an end-to-end device management web solution in C# using .NET framework, delivered the final product 4 weeks ahead of schedule.",
        "Detected, reported, investigated, and resolved product defects across the full tech stack, developed frontend features using Angular, including a DNS configuration interface and IKEv2 payload visualization.",
        "Leveraged knowledge in C#, .NET, Angular, TypeScript/JavaScript, HTML/CSS, SQL, NodeJS, REST APIs, JSON, maintained high standards of quality for code, technical documentation, and deliverables within a source code control (Git), product development (Jira), and Continuous Integration/Continuous Delivery (CI/CD).",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="experience-company">{exp.company}</h3>
                <div className="experience-title">{exp.title}</div>
                <div className="experience-location">{exp.location}</div>
              </div>
              <div className="experience-date">{exp.date}</div>
            </div>
            <div className="experience-description">
              <ul>
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
