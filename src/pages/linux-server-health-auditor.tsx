
import "../portfolio.css";

const teamMembers = [
  "Sarah Ibukunoluwa Onasanya",
  "Olamide Folorunsho",
  "Cherish Ogar",
  "Itunu Adedoyin",
  "Ayomide Oluwole",
  "Maryam Amunigun",
  "Sochima Madueke",
  "Chinenye Agu",
  "Ngozi Njoku",
];

const technologies = [
  {
    name: "Linux",
    description:
      "The operating system where the auditor runs and collects system information.",
  },
  {
    name: "Bash",
    description:
      "Automates health checks, processes system information, evaluates thresholds, and generates results.",
  },
  {
    name: "/proc/stat",
    description: "Provides CPU-related information from the Linux kernel.",
  },
  {
    name: "/proc/meminfo",
    description: "Provides information about system memory.",
  },
  {
    name: "df",
    description: "Checks filesystem and disk usage.",
  },
  {
    name: "JSON",
    description:
      "Stores timestamped, structured audit results in a machine-readable format.",
  },
  {
    name: "Git & GitHub",
    description:
      "Support version control, team collaboration, and project documentation.",
  },
  {
    name: "Prometheus",
    description:
      "Supports a local monitoring workflow for scraping metrics and visualizing system information.",
  },
];

const contributions = [
  {
    title: "Designed the reporting output",
    description:
      "Focused on making system conditions understandable without requiring readers to interpret raw command output.",
  },
  {
    title: "Structured machine-readable results",
    description:
      "Helped organize audit results in JSON so other tools and systems could process them.",
  },
  {
    title: "Implemented timestamped logging",
    description:
      "Worked on file-based logs with timestamps to make audit history easier to track.",
  },
  {
    title: "Established a consistent output structure",
    description:
      "Focused on predictable results that could be read, compared, stored, and processed.",
  },
  {
    title: "Supported monitoring integration",
    description:
      "Helped structure results to support the project's Prometheus monitoring workflow.",
  },
];

const challenges = [
  {
    number: "01",
    title: "Working with raw system information",
    challenge:
      "Files such as /proc/stat and /proc/meminfo expose system information in raw formats.",
    solution:
      "The team worked on processing system values and presenting them in a more structured and understandable format.",
  },
  {
    number: "02",
    title: "Keeping output consistent",
    challenge:
      "Different health checks produce different types of information.",
    solution:
      "A consistent reporting structure and JSON output helped make results easier to compare and process.",
  },
  {
    number: "03",
    title: "Preserving audit history",
    challenge:
      "Results displayed only in the terminal can be difficult to track over time.",
    solution:
      "Timestamped, file-based logs provided a way to retain previous audit results.",
  },
  {
    number: "04",
    title: "Making results useful beyond the terminal",
    challenge:
      "Results needed to be useful for both people and monitoring tools.",
    solution:
      "The team worked toward human-readable reports, machine-readable output, and a Prometheus monitoring workflow.",
  },
  {
    number: "05",
    title: "Coordinating work across a team",
    challenge:
      "Different team members contributed to checks, reporting, logging, and monitoring.",
    solution:
      "Collaboration across these areas helped bring the separate components together into one project.",
  },
];

const lessons = [
  {
    title: "Linux system monitoring",
    description:
      "I learned more about the system information available in Linux and how it can help assess server health.",
  },
  {
    title: "Bash scripting",
    description:
      "I gained practical exposure to using shell scripts to automate system administration tasks.",
  },
  {
    title: "Reporting and logging",
    description:
      "I explored how structured reports and timestamped logs make system information easier to understand and trace.",
  },
  {
    title: "Team collaboration",
    description:
      "I learned the importance of coordinating responsibilities and integrating contributions when building a shared technical project.",
  },
];

function LinuxServerHealthAuditor() {
  return (
    <main className="portfolio-site linux-project-page">
      <header className="linux-project-hero">
        <p className="linux-project-eyebrow">SHE CODE AFRICA ACADEMY · COHORT 3</p>
        <span className="linux-project-kicker">TEAM PROJECT</span>

        <h1>
          Linux Server
          <span> Health Auditor.</span>
        </h1>

        <p className="linux-project-summary">
          A Bash-based system administration project designed to make Linux
          server health checks more consistent, structured, and easier to
          monitor.
        </p>

        <div className="linux-project-meta">
          <div>
            <span>PROJECT DATE</span>
            <strong>May 2026</strong>
          </div>
          <div>
            <span>PROJECT TYPE</span>
            <strong>Team project</strong>
          </div>
          <div>
            <span>MY ROLE</span>
            <strong>Reporting &amp; Logging</strong>
          </div>
        </div>

        <a
          className="linux-project-primary-link"
          href="https://github.com/DevOps-Capstone-Project-Group-4/Linux-server-health-auditor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore the GitHub repository ↗
        </a>
      </header>

      <section className="linux-project-section">
        <div className="linux-section-heading">
          <span>01</span>
          <div>
            <p>PROJECT OVERVIEW</p>
            <h2>Understanding the project.</h2>
          </div>
        </div>

        <p className="linux-section-copy">
          The Linux Server Health Auditor is a team-based system
          administration project designed to provide a simple and structured
          way to assess the health of a Linux server. It was built to make
          routine server monitoring more consistent, helping administrators
          gain a clearer view of system conditions and identify issues that
          may require attention.
        </p>
      </section>

      <section className="linux-project-section linux-project-tinted">
        <div className="linux-section-heading">
          <span>02</span>
          <div>
            <p>THE PROBLEM</p>
            <h2>Why was it needed?</h2>
          </div>
        </div>

        <p className="linux-section-copy">
          Server performance and availability can be affected by high CPU or
          memory usage, limited disk space, network connectivity issues,
          running processes, and port availability. Checking each of these
          manually can make consistent monitoring and maintaining a history
          of system conditions difficult.
        </p>

        <p className="linux-section-copy">
          The project addressed the need for repeatable health checks,
          threshold-based status reporting, and structured records that make
          results easier to review.
        </p>
      </section>

      <section className="linux-project-section">
        <div className="linux-section-heading">
          <span>03</span>
          <div>
            <p>THE SOLUTION</p>
            <h2>Automating Linux server health monitoring.</h2>
          </div>
        </div>

        <p className="linux-section-copy">
          Our team developed a Bash-based auditor that checks key areas of
          server health and organizes its findings into useful reports.
        </p>

        <div className="linux-check-grid">
          {[
            "CPU usage",
            "Memory usage",
            "Disk space",
            "Network connectivity",
            "Running processes",
            "Port availability",
          ].map((item) => (
            <div className="linux-check-card" key={item}>
              <span>↗</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>

        <div className="linux-status-row">
          <div>
            <span className="linux-status-dot status-ok" />
            <strong>OK</strong>
            <p>Conditions are within expected limits.</p>
          </div>
          <div>
            <span className="linux-status-dot status-warning" />
            <strong>WARNING</strong>
            <p>A condition may need attention.</p>
          </div>
          <div>
            <span className="linux-status-dot status-critical" />
            <strong>CRITICAL</strong>
            <p>A serious condition requires attention.</p>
          </div>
        </div>

        <p className="linux-section-copy">
          Timestamped JSON output provides structured results that can be
          used for reporting, logging, and monitoring workflows.
        </p>
      </section>

      <section className="linux-project-section linux-project-tinted">
        <div className="linux-section-heading">
          <span>04</span>
          <div>
            <p>TECHNOLOGIES &amp; TOOLS</p>
            <h2>The tools behind the project.</h2>
          </div>
        </div>

        <div className="linux-technology-grid">
          {technologies.map((technology) => (
            <article className="linux-technology-card" key={technology.name}>
              <span className="linux-technology-mark">✳</span>
              <h3>{technology.name}</h3>
              <p>{technology.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="linux-project-section">
        <div className="linux-section-heading">
          <span>05</span>
          <div>
            <p>SYSTEM ARCHITECTURE</p>
            <h2>How the components fit together.</h2>
          </div>
        </div>

        <p className="linux-section-copy">
          The auditor gathers information from Linux system resources and
          commands, processes the results through Bash, and produces
          structured reports and logs for review and monitoring.
        </p>

        <div className="linux-architecture-flow">
          <div>
            <span>01</span>
            <strong>Linux system</strong>
            <p>System resources and commands</p>
          </div>
          <span className="linux-flow-arrow">→</span>
          <div>
            <span>02</span>
            <strong>Bash auditor</strong>
            <p>Checks and processes results</p>
          </div>
          <span className="linux-flow-arrow">→</span>
          <div>
            <span>03</span>
            <strong>Reports &amp; logs</strong>
            <p>Readable output and JSON records</p>
          </div>
          <span className="linux-flow-arrow">→</span>
          <div>
            <span>04</span>
            <strong>Monitoring</strong>
            <p>Prometheus workflow</p>
          </div>
        </div>
        <p className="linux-architecture-caption">
          A simplified overview of the project's monitoring workflow.
        </p>
      </section>

      <section className="linux-project-section linux-project-tinted">
        <div className="linux-section-heading">
          <span>06</span>
          <div>
            <p>MY CONTRIBUTION</p>
            <h2>Reporting &amp; Logging.</h2>
          </div>
        </div>

        <p className="linux-section-copy">
          As part of the Reporting &amp; Logging subgroup, my focus was on
          making health-check results structured, readable, and traceable.
          This area of the project connected the system checks to the reports
          people could review and the records tools could process.
        </p>

        <div className="linux-contribution-list">
          {contributions.map((contribution, index) => (
            <article className="linux-contribution-item" key={contribution.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{contribution.title}</h3>
                <p>{contribution.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="linux-project-section">
        <div className="linux-section-heading">
          <span>07</span>
          <div>
            <p>CHALLENGES &amp; SOLUTIONS</p>
            <h2>Learning through problem-solving.</h2>
          </div>
        </div>

        <p className="linux-section-copy">
          Developing the auditor involved understanding raw system
          information, keeping reports consistent, preserving useful history,
          and coordinating different areas of the team project.
        </p>

        <div className="linux-challenge-list">
          {challenges.map((item) => (
            <article className="linux-challenge-card" key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>
                  <strong>Challenge: </strong>
                  {item.challenge}
                </p>
                <p>
                  <strong>Solution: </strong>
                  {item.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="linux-project-section linux-project-tinted">
        <div className="linux-section-heading">
          <span>08</span>
          <div>
            <p>WHAT I LEARNED</p>
            <h2>More than writing scripts.</h2>
          </div>
        </div>

        <p className="linux-section-copy">
          This project gave me practical exposure to Linux system
          administration and showed me how separate technical components can
          work together to support a monitoring task.
        </p>

        <div className="linux-lessons-grid">
          {lessons.map((lesson) => (
            <article className="linux-lesson-card" key={lesson.title}>
              <span>✦</span>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="linux-project-section">
        <div className="linux-section-heading">
          <span>09</span>
          <div>
            <p>PROJECT OUTCOME</p>
            <h2>From manual checks to structured monitoring.</h2>
          </div>
        </div>

        <p className="linux-section-copy">
          The team developed a Linux Server Health Auditor that brings
          essential health checks together and presents the results in a more
          organized way.
        </p>

        <ul className="linux-outcome-list">
          <li>Automated essential Linux server health checks.</li>
          <li>Presented results through clear, structured output.</li>
          <li>Supported timestamped logs for audit history.</li>
          <li>Produced machine-readable JSON results.</li>
          <li>Supported a local Prometheus monitoring workflow.</li>
        </ul>
      </section>

      <section className="linux-project-section linux-team-section linux-project-tinted">
        <div className="linux-section-heading">
          <span>10</span>
          <div>
            <p>THE PEOPLE BEHIND THE PROJECT</p>
            <h2>Built through teamwork.</h2>
          </div>
        </div>

        <p className="linux-section-copy">
          This capstone was a collaborative effort by the She Code Africa
          Academy DevOps Cohort 3 team.
        </p>

        <div className="linux-team-grid">
          {teamMembers.map((member, index) => (
            <div className="linux-team-member" key={member}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{member}</strong>
              {index === 0 && <small>Reporting &amp; Logging</small>}
            </div>
          ))}
        </div>
      </section>

      <section className="linux-project-cta">
        <p>PROJECT EVIDENCE</p>
        <h2>Explore the project.</h2>
        <p>
          Visit the team's GitHub repository to explore the source code and
          project documentation.
        </p>
        <a
          href="https://github.com/DevOps-Capstone-Project-Group-4/Linux-server-health-auditor"
          target="_blank"
          rel="noopener noreferrer"
          className="linux-project-primary-link"
        >
          View source code on GitHub ↗
        </a>
      </section>
    </main>
  );
}

export default LinuxServerHealthAuditor;
