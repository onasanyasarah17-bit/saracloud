
import { Link } from "react-router-dom";
import "../portfolio.css";

import linuxAuditorImage from "../assets/linux-server-health-auditor.png";
import eduSafeImage from "../assets/edusafe.png";
import freshBasketImage from "../assets/fresh-basket.png";

function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-intro">
        <p className="projects-label">SELECTED WORKS</p>

        <h1>
          What I've <span>worked on.</span>
        </h1>

        <p className="projects-description">
          A collection of projects, experiments and milestones
          from my journey across technology and learning.
        </p>
      </section>

      <section className="projects-list">
        {/* PROJECT 01: LINUX SERVER HEALTH AUDITOR */}
        <article className="project-item featured">
          <div className="project-number">01</div>

          <div className="project-info">
            <h2>Linux Server Health Auditor</h2>

            <p>
              A Bash-based system monitoring project designed
              to inspect server health and report important
              system information through structured logs.
            </p>

            <div className="project-stack">
              <span>Linux</span>
              <span>Bash</span>
              <span>Automation</span>
            </div>

            <Link
              to="/projects/linux-server-health-auditor"
              className="project-link"
            >
              VIEW CAPSTONE PROJECT ↗
            </Link>
          </div>

          <div className="project-visual">
            <div className="project-visual-content">
              <img
                src={linuxAuditorImage}
                alt="Linux Server Health Auditor project"
              />
            </div>
          </div>
        </article>

        {/* PROJECT 02: EDUSAFE */}
        <article className="project-item">
          <div className="project-number">02</div>

          <div className="project-info">
            <h2>EduSafe</h2>

            <p>
              An educational web application developed as part
              of my software development journey. The project
              explores digital learning resources and an AI
              study buddy to support students.
            </p>

            <div className="project-stack">
              <span>Angular</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <Link
              to="/projects/education-web-app"
              className="project-link"
            >
              VIEW PROJECT ↗
            </Link>
          </div>

          <div className="project-visual">
            <div className="project-visual-content">
              <img
                src={eduSafeImage}
                alt="EduSafe educational web application"
              />
            </div>
          </div>
        </article>

        {/* PROJECT 03: FRESHBASKET */}
        <article className="project-item">
          <div className="project-number">03</div>

          <div className="project-info">
            <h2>FreshBasket</h2>

            <p>
              A cloud application project exploring AWS
              infrastructure, serverless computing, secure
              APIs, data storage, and event-driven workflows.
            </p>

            <div className="project-stack">
              <span>AWS</span>
              <span>Lambda</span>
              <span>DynamoDB</span>
              <span>CloudFormation</span>
            </div>

            <Link
              to="/projects/fresh-basket"
              className="project-link"
            >
              VIEW PROJECT ↗
            </Link>
          </div>

          <div className="project-visual">
            <div className="project-visual-content">
              <img
                src={freshBasketImage}
                alt="FreshBasket cloud application project"
              />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Projects;
