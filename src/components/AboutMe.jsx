import React from "react";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "Responsive UI",
  "API Integration",
  "Performance"
];

function AboutMe() {
  return (
    <section id="about">

      <div className="about-header">

        <span className="section-label">
          ABOUT
        </span>

        <h1>
          Creating interfaces
          that people actually
          enjoy using.
        </h1>

      </div>

      <div className="about-grid">

        <div className="about-text">

          <p>
            I’m a frontend engineer focused on
            building responsive, scalable and
            modern web experiences.
          </p>

          <p>
            I enjoy transforming ideas into
            interfaces that feel fast,
            intuitive and polished.
          </p>

        </div>

        <div className="skills-card">

          <h3>Core Skills</h3>

          <div className="skills">

            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-pill"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutMe;