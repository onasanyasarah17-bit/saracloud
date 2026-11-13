
import { useState } from "react";
import "../portfolio.css";

import summitPhoto from "../assets/summitimg2.png";
import sheCodeAfricaLogo from "../assets/she-code-africa-logo.png";
import womenTechstersLogo from "../assets/women-techsters-logo.svg";
import akwannyaHubLogo from "../assets/akwannya-hub.webp";

function About() {
  const [expanded, setExpanded] = useState<string[]>([]);

  function toggleSection(section: string) {
    setExpanded((current) =>
      current.includes(section)
        ? current.filter((item) => item !== section)
        : [...current, section]
    );
  }

  function isExpanded(section: string) {
    return expanded.includes(section);
  }

  return (
    <main className="about-page">
      <section className="about-intro">
        <div className="about-content">
          <p className="about-label">ABOUT ME</p>

          <h1>
            Hi, I'm
            <span className="about-name">
              Sarah Ibukunoluwa Onasanya
            </span>
          </h1>

          <p className="about-text">
            A final-year Political Science student at Tai Solarin
            Federal University of Education, Nigeria, with academic
            knowledge of governance, political systems, international
            relations, diplomacy, public policy, and global affairs.
          </p>

          <p className="about-text">
            My studies have strengthened my ability to research,
            analyze issues, communicate effectively, and think
            critically about political and social matters. Through
            my academic and leadership experiences, I have developed
            a broader understanding of how political systems shape
            societies and international relationships.
          </p>

          <p className="about-text">
            At the same time, I've been building another side of
            myself through technology. What started with curiosity
            gradually became a journey into software development,
            Linux, Cloud, and DevOps.
          </p>

          <p className="about-text">
            I don't see these parts of my life as separate. They
            have each shaped the way I think, learn, solve problems,
            and understand the world around me.
          </p>

          <p className="about-text">
            <strong>
              Sara<span className="about-cloud">Cloud</span>
            </strong>{" "}
            brings those different parts of me together — my
            background, my learning, the things I build, the
            questions I explore, and the experiences that continue
            to shape my journey.
          </p>
        </div>

        <div className="about-image">
          <img src={summitPhoto} alt="Sarah Ibukunoluwa Onasanya" />
        </div>
      </section>

      <header className="journey-intro">
        <p className="journey-label">
          MY JOURNEY INTO TECH AND HOW IT'S GOING
        </p>
        <h2>
          Take a look below —
          <span> how it all began.</span>
        </h2>
      </header>

      <section className="tech-journey journey-card">
        <img
          className="journey-logo"
          src={sheCodeAfricaLogo}
          alt="She Code Africa logo"
        />

        <p className="about-label">WHERE IT ALL STARTED</p>
        <h2>
          My first real step into <span>tech.</span>
        </h2>

        <p className="about-text">
          My journey into technology didn't begin with me knowing
          exactly where I was going. It started with an opportunity
          to learn something completely different from what I was
          studying. I joined the <strong>She Code Africa Academy,
          Cohort 3</strong>, where I began learning DevOps.
        </p>

        {isExpanded("sca") && (
          <div className="journey-details">
            <p>
              It was a 12-week intensive and hands-on program that
              combined technical learning with practical assignments,
              weekly assessments, soft-skill sessions, and a capstone
              project. I was introduced to essential DevOps concepts
              while developing professional skills through interactive
              sessions and practical tasks.
            </p>
            <p>
              The journey was not without its challenges. Sometimes
              commands, installations, and configurations refused to
              work as expected. I had to go back, investigate errors,
              and learn how to understand what went wrong.
            </p>
            <p>
              I had moments when I questioned whether I was getting it.
              Gradually, I became more comfortable searching,
              experimenting, making mistakes, fixing them, and trying
              again.
            </p>
            <p>
              I didn't even have my own laptop when I started. I had
              to borrow one, and when it struggled with commands and
              installations, I kept finding ways to learn until I
              could finally get mine. That meant having the freedom
              to keep building.
            </p>
            <p>
              Looking back, She Code Africa Academy was more than
              where I was introduced to DevOps. It taught me patience,
              curiosity, persistence, and the importance of continuing
              even when I didn't have all the answers.
            </p>
            <p>And that was only the beginning.</p>
          </div>
        )}

        <button
          className="read-more-btn"
          onClick={() => toggleSection("sca")}
          aria-expanded={isExpanded("sca")}
        >
          {isExpanded("sca") ? "READ LESS ↑" : "READ MORE ↓"}
        </button>

        <a className="view-project-btn" href="/projects">
          VIEW MY CAPSTONE PROJECT →
        </a>
      </section>

      <section className="women-techsters-card journey-card">
        <div className="journey-header">
          <img
            className="journey-logo"
            src={womenTechstersLogo}
            alt="Women Techsters logo"
          />
          <div>
            <p className="about-label">BUILDING ON WHAT I STARTED</p>
            <h2>
              Taking the next step in <span>tech.</span>
            </h2>
          </div>
        </div>

        <p className="about-text">
          After my DevOps training at She Code Africa Academy, I
          wanted to understand more about the application itself:
          where it begins, how software is developed, and how it
          connects with infrastructure and deployment.
        </p>

        {isExpanded("women") && (
          <div className="journey-details">
            <p>
              That led me to the <strong>Women Techsters Bootcamp,
              Cohort 5.1</strong>. I wanted to learn programming and
              explore how Artificial Intelligence could help make
              building and deploying applications more efficient.
            </p>
            <p>
              During the bootcamp, my team and I built an educational
              web application aligned with the United Nations
              Sustainable Development Goals. It gave me the opportunity
              to move from learning concepts to creating something.
            </p>
            <p>
              The experience helped me see how software development
              connects with DevOps and cloud: building an application
              is one part of the process, while deploying, automating,
              managing, and making it accessible is another.
            </p>
            <p>
              Together, these experiences have helped me develop a
              stronger understanding of how technology solutions are
              created and delivered.
            </p>
          </div>
        )}

        <button
          className="read-more-btn"
          onClick={() => toggleSection("women")}
          aria-expanded={isExpanded("women")}
        >
          {isExpanded("women") ? "READ LESS ↑" : "READ MORE ↓"}
        </button>

        <a className="view-project-btn" href="/projects">
          VIEW PROJECT →
        </a>
      </section>

      <section className="akwannya-hub-card journey-card">
        <div className="journey-header">
          <img
            className="journey-logo"
            src={akwannyaHubLogo}
            alt="Akwannya Hub logo"
          />
          <div>
            <p className="about-label">GROWING THROUGH COLLABORATION</p>
            <h2>
              <span>Cloud</span> Build With Peers
            </h2>
          </div>
        </div>

        <p className="about-text">
          My journey continued with Akwannya Hub's{" "}
          <strong>Cloud-Build-With-Peers Cohort 1</strong>, where I
          learned and worked alongside other aspiring cloud
          professionals as part of Team Eta.
        </p>

        {isExpanded("akwannya") && (
          <div className="journey-details">
            <p>
              The experience taught me that growth in tech is not
              only about individual achievement, but also about
              what people can accomplish together through shared
              ideas, technical tasks, and presentations.
            </p>
            <p>
              I placed third among the cohort's Most Engaged
              Participants. Team Eta placed third for Best Team,
              second for Best Technical Presentation, and third
              for Most Innovative Team.
            </p>
            <p>
              Beyond these recognitions, the experience strengthened
              my cloud knowledge, communication, problem-solving,
              teamwork, and presentation skills.
            </p>
          </div>
        )}

        <button
          className="read-more-btn"
          onClick={() => toggleSection("akwannya")}
          aria-expanded={isExpanded("akwannya")}
        >
          {isExpanded("akwannya") ? "READ LESS ↑" : "READ MORE ↓"}
        </button>

        <a className="view-project-btn" href="/projects">
          VIEW PROJECT →
        </a>
      </section>
    </main>
  );
}

export default About;
