function Contact() {
  return (
    <section id="contact" className="fade-in">
      <h3 className="section-title">Contact</h3>
      <div className="contact-content">
        <p>
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
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
  );
}
export default Contact;
