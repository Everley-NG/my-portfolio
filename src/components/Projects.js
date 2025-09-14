import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Hybrid Collaborative Content Models",
      date: "Aug. 2024",
      description:
        "Explored and implemented hybrid collaborative content models for enhancing user engagement and content recommendation systems.",
      techStack: "Jupyter Notebook, Machine Learning, Python",
      link: "https://github.com/Everley-NG/Hybrid-Collaborative-Content-models",
    },
    {
      title: "iOS 3D Mobile Gaming Application",
      date: "Mar. 2023 – Jul. 2023",
      description:
        "Developed a 3D mobile game for iOS using Unity, focusing on immersive gameplay mechanics, interactive 3D environments, and smooth performance optimization for mobile devices. Implemented game logic, physics interactions, and touch-based controls to enhance user engagement.",
      techStack: "Unity, C++, C#, XCode, iOS",
      link: "https://github.com/Everley-NG/IOS-3D-Mobile-Gaming-Application",
    },
    {
      title: "GroupPrompt Project Management iOS Application",
      date: "Jan. 2022 – Apr. 2022",
      description:
        "Developed a project management application in C++ to enable teams to easily visualize and organize ticket assignments in Gantt charts. The chart allows multiple edits and updates at the same time.",
      techStack:
        "XCode, Swift, C++, Firebase Realtime Database (a NoSQL JSON Database)",
      link: "https://github.com/Everley-NG/GroupPrompt",
    },
    {
      title: "Movie Collection Web Application",
      date: "Jan. 2022 – Apr. 2022",
      description:
        "Designed and implemented a web server facilitating user interaction with a database server for managing movie data based on the designed Entity Relationship Diagram (ERD). Optimized the server architecture and database queries, resulting in a 30% increase in throughput, which enhanced overall performance and user experience.",
      techStack: "MySQL, Database Server, PHP Scripts, Apache Server, HTML/CSS",
      link: "https://github.com/Everley-NG/MovieCollection",
    },
    {
      title: "OneApp Learning Management Web Application",
      date: "Jan. 2021 – Apr. 2021",
      description:
        "Created a web application aimed at connecting students, tutors, professors better and helping learners stay on track in self-paced courses in HTML/CSS. Users can upload or download files, send or receive messages to and from other users, as well as view or contribute to the information resource on the webpage. The backend (Django) can handle 50 requests per second.",
      techStack: "Python (Django), JavaScript, HTML/CSS",
      link: "https://github.com/Everley-NG/OneApp",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* <h3 className="project-title">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3> */}
            <h3 className="project-title">{project.title}</h3>
            <div className="project-date">{project.date}</div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              <strong>Tech Stack:</strong> {project.techStack}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
