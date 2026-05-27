import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="nav-logo">MC</div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="hero">
          <p className="accent">Hi, my name is</p>
          <h1>Marc Chrétien</h1>
          <h2>Developer & Data Professional</h2>
          <p>
            I build data-driven web applications and digital solutions with over
            a decade of experience in C#, SQL, and modern web technologies.
          </p>
          <a href="#about" className="btn">
            Learn More
          </a>
        </section>

        <section id="about">
          <h3 className="section-title">About Me</h3>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a developer with a strong background in data and enterprise
                systems, transitioning into modern web development. I've worked
                with C#, SQL Server, VBA, and Power BI, and I'm now expanding
                into React, Node.js, and cloud technologies.
              </p>
              <p>
                I enjoy building things that are both technically solid and easy
                to use — bridging the gap between complex data and clean
                interfaces.
              </p>
            </div>
          </div>
        </section>
        <section id="skills">
          <h3 className="section-title">Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <ul>
                <li>C#</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>VBA</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Frontend</h4>
              <ul>
                <li>React</li>
                <li>HTML & CSS</li>
                <li>Vite</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Data & BI</h4>
              <ul>
                <li>SQL Server</li>
                <li>Power BI</li>
                <li>Microsoft Fabric</li>
              </ul>
            </div>
            <div className="skill-category">
              <h4>Tools</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Azure DevOps</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="projects">
          <h3 className="section-title">Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h4>Portfolio Website</h4>
                <div className="project-links">
                  <a
                    href="https://github.com/Marc-Chretien/portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <p>
                Personal portfolio built with React and Vite. Deployed on GitHub
                Pages.
              </p>
              <div className="project-tags">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
              </div>
            </div>

            <div className="project-card project-placeholder">
              <div className="project-header">
                <h4>Coming Soon</h4>
              </div>
              <p>Next project in progress — check back soon.</p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h3 className="section-title">Contact</h3>
          <div className="contact-content">
            <p>
              I'm currently open to new opportunities. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>
            <a href="mailto:marc@marchretien.dev" className="btn">
              Say Hello
            </a>
            <div className="social-links">
              <a
                href="https://github.com/Marc-Chretien"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/marc-chretien"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
