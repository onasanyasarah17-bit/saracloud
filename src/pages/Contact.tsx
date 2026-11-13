
import "../portfolio.css";

function Contact() {
  return (
    <main className="portfolio-site">
      <section className="portfolio-section contact-section">
  <div className="contact-hero">
    <div className="contact-intro">
      <p className="section-label">LET'S CONNECT</p>

      <h1>
        Open to opportunities.{" "}
        <span>Ready to collaborate.</span>
      </h1>

      <p className="hero-description">
       I'm open to work opportunities, collaborations, and projects where I can contribute, learn, and grow. Whether you're looking for someone eager to support your team, collaborate on innovative ideas, or help turn concepts into practical digital solutions, I'd love to connect. Let's create, learn, and make an impact together.
      </p>
    </div>
  </div>

  {/* Keep your existing contact cards and footer below */}
        {/* Contact cards */}
        <div className="hero-actions">
          <a
            className="gold-button"
            href="mailto:onasanyasarah17@gmail.com"
          >
            <span className="contact-icon" aria-hidden="true">
              ✉
            </span>

            <span className="contact-card-content">
              <strong>Email Me</strong>
              <small>
                Let's talk about your ideas, opportunities or
                just say hello.
              </small>
              <small className="contact-detail">
                onasanyasarah17@gmail.com
              </small>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              →
            </span>
          </a>

          <a
            className="text-button"
            href="https://github.com/onasanyasarah17-bit/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon" aria-hidden="true">
              ◉
            </span>

            <span className="contact-card-content">
              <strong>GitHub</strong>
              <small>
                Check out my projects, contributions and code.
              </small>
              <small className="contact-detail">
                github.com/onasanyasarah17-bit
              </small>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              →
            </span>
          </a>

          <a
            className="text-button"
            href="https://www.linkedin.com/in/sarah-onasanya/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon" aria-hidden="true">
              in
            </span>

            <span className="contact-card-content">
              <strong>LinkedIn</strong>
              <small>
                Let's connect and grow together professionally.
              </small>
              <small className="contact-detail">
                linkedin.com/in/sarah-onasanya
              </small>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              →
            </span>
          </a>

          <a
            className="text-button"
            href="https://wa.me/2349027604001"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon" aria-hidden="true">
              ☏
            </span>

            <span className="contact-card-content">
              <strong>WhatsApp</strong>
              <small>
                Quick questions? Feel free to chat with me.
              </small>
              <small className="contact-detail">
                +234 902 760 4001
              </small>
            </span>

            <span className="contact-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        {/* Footer signature */}
        <footer className="contact-footer">
          <p>
            CLOUD <span>/</span> DEVOPS <span>/</span> SOFTWARE
            DEVELOPMENT <span>/</span> DIGITAL INNOVATION
          </p>

          <p className="contact-signature">
            Better solutions. Together.
          </p>
        </footer>
      </section>
    </main>
  );
}

export default Contact;
