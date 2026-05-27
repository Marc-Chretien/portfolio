function Skills() {
  return (
    <section id="skills" className="fade-in">
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
  );
}
export default Skills;
