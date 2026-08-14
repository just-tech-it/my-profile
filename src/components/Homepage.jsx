import React from "react";

function Homepage() {
  return (
    <>
      <section id="hero">

        <div className="hero-left">
          <span className="hero-label">
            AVAILABLE FOR WORK
          </span>

          <h1>
            Building digital
            <br />
            experiences that
            <br />
            feel alive.
          </h1>

          <p>
            Frontend Engineer crafting modern interfaces,
            seamless interactions, and scalable products.
          </p>

          <div className="hero-actions">
            <a href="#projects">View Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="glass-card">
            <div className="badge">2026</div>

            <h3>Dindo Esmani</h3>

            <p>
              React • UI Engineering • Motion Design
            </p>
          </div>
        </div>

      </section>

      <section id="projects">

        <div className="section-head">
          <span>SELECTED WORK</span>
          <h2>Featured Project</h2>
        </div>

        <article className="project-card">

          <div className="project-info">
            <h3>Hospital Admin Tool</h3>

            <p>
              Dashboard platform for managing medical
              records, analytics, and hospital workflows.
            </p>

            <div className="project-links">
              <a
                href="https://just-tech-it.github.io/hospital-admin-tool/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo →
              </a>

              <a
                href="https://github.com/just-tech-it/hospital-admin-tool"
                target="_blank"
                rel="noreferrer"
              >
                Source →
              </a>
            </div>

          </div>

          <div className="project-preview">

<div className="browser">

<div className="browser-top">
<div className="dot red"></div>
<div className="dot yellow"></div>
<div className="dot green"></div>
</div>

<div className="browser-content">

<h2>Hospital Dashboard</h2>

<p>
Patients • Analytics • Records
</p>

<div className="mini-ui">
<div></div>
<div></div>
<div></div>
</div>

</div>

</div>

</div>

        </article>

      </section>
    </>
  );
}

export default Homepage;