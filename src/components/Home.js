import React from "react";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Everley Ng</h1>
        <h2>Software Developer</h2>
        <p>
          Passionate software developer with expertise in full-stack
          development, mobile device management, and AI-powered applications.
          Currently working as a Login Operator at Giesecke+Devrient while
          pursuing innovative software solutions.
        </p>
        <a href="mailto:everleyng@gmail.com" className="email-button">
          Let's Connect!
        </a>
      </div>
    </section>
  );
};

export default Home;
