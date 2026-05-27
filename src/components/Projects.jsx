function Projects() {
  return (
    <section id="projects" className="fade-in">
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
  );
}
export default Projects;
