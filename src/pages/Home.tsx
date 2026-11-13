
import { Link } from "react-router-dom";
import "../portfolio.css";

function Home() {
  return (
    <main className="welcome-page">
      <div className="welcome-frame">
        <header className="welcome-header">
          <Link to="/" className="welcome-logo">
            Sara<span>Cloud</span>
          </Link>

          <span className="welcome-label">
            PERSONAL PORTFOLIO
          </span>
        </header>

        <section className="welcome-content">
          <div className="welcome-decoration" aria-hidden="true">
            <span className="welcome-star star-a">✳</span>
            <span className="welcome-star star-b">✦</span>
            <span className="welcome-circle" />
          </div>

          <p className="welcome-overline">
            A PERSONAL DIGITAL SPACE
          </p>

          <h1>
            WELCOME TO
            <span>SARACLOUD<span className="welcome-period">.</span></span>
          </h1>

          <div className="welcome-divider">
            <span />
            <span className="welcome-diamond">✦</span>
            <span />
          </div>

          <p className="welcome-tagline">
            Political Science. DevOps. Cloud. Code. Creativity.
          </p>

          <p className="welcome-description">
 Political Scientist, Techie, and Fashion Designer —
            bringing ideas to life through analysis, technology, and design.          </p>

          <Link to="/about" className="welcome-button">
            <span>ENTER PORTFOLIO</span>
            <span className="welcome-arrow">↗</span>
          </Link>
        </section>

        <footer className="welcome-footer">
          <span>Version 1.0</span>
          <span>NIGERIA · EST. SARACLOUD</span>
        </footer>
      </div>
    </main>
  );
}

export default Home;
