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
      </main>
    </>
  );
}

export default App;
