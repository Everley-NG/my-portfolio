import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <div className="newsletter-bx">
          <h3>Let's Connect!</h3>
          <p>
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out if you'd like to collaborate or just want to
            chat!
          </p>
        </div>

        <div className="contact-info">
          <a href="mailto:everleyng@gmail.com" className="contact-button">
            <div className="contact-button-icon">📧</div>
            <h3 className="contact-button-title">Email</h3>
            <span className="contact-button-subtitle">everleyng@gmail.com</span>
          </a>

          <a href="tel:+12268992750" className="contact-button">
            <div className="contact-button-icon">📱</div>
            <h3 className="contact-button-title">Phone</h3>
            <span className="contact-button-subtitle">+1 (226) 899-2750</span>
          </a>

          <a
            href="https://www.linkedin.com/in/everleyng"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <div className="contact-button-icon">💼</div>
            <h3 className="contact-button-title">LinkedIn</h3>
            <span className="contact-button-subtitle">
              linkedin.com/in/everleyng
            </span>
          </a>

          <a
            href="https://github.com/Everley-NG"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <div className="contact-button-icon">💻</div>
            <h3 className="contact-button-title">GitHub</h3>
            <span className="contact-button-subtitle">
              github.com/Everley-NG
            </span>
          </a>

          <div className="contact-button" style={{ cursor: "default" }}>
            <div className="contact-button-icon">📍</div>
            <h3 className="contact-button-title">Location</h3>
            <span className="contact-button-subtitle">Toronto, ON, Canada</span>
          </div>
        </div>

        <div className="bio-section">
          <div className="bio-content">
            <p>
              I'm Everley Ng, a passionate Software Developer with over 2 years
              of industry experience. I thrive in fast-paced environments and
              enjoy solving practical problems efficiently, both independently
              and collaboratively. My commitment to continuous learning and
              innovation, combined with my technical expertise and professional
              experience, allows me to consistently deliver impactful solutions.
            </p>
            <p>
              In my previous roles, I have contributed to both corporate and
              startup environments. I gained valuable experience in Mobile
              Device Management (MDM), implementing Apple Shared iPad MDM
              features, integrating Apple Declarative Device Management (DDM)
              protocol features, and improving device management efficiency by
              20%. I have also built end-to-end web solutions in C# and .NET,
              achieving high-quality results ahead of schedule. Across projects,
              I have worked with technologies including C#, .NET, Angular,
              React, TypeScript/JavaScript, Python, Node.js, HTML/CSS, SQL, REST
              APIs, and JSON.
            </p>
            <p>
              Beyond professional roles, I led the development of LingoTok, a
              full-stack AI-powered language learning platform. Using Python,
              React, and Node.js, I implemented real-time video processing,
              interactive quizzes, and personalized progress reports, which
              strengthened both my full-stack development and user-centered
              design skills.
            </p>
            <p>
              As a Computer Science graduate with a minor in User Experience
              Design from Wilfrid Laurier University, I have experience in a
              wide range of programming languages and technologies, including
              C++, C, VBA, OpenGL, GLSL, and advanced tools such as GIMP and
              DaVinci Resolve. I am self-motivated and continuously explore
              emerging technologies to create efficient and innovative
              solutions.
            </p>
            <p>
              I am eager to apply my technical, problem-solving, teamwork, and
              communication skills to contribute to a forward-thinking
              development team. I would welcome the opportunity to discuss how I
              can support your projects and drive meaningful results.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Everley NG. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
