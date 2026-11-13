
import "../portfolio.css";

const skillCategories = [
  {
    name: "Cloud Platform",
    skills: [
      {
        name: "AWS",
        logo: null,
      },
    ],
  },
  {
    name: "DevOps & Infrastructure",
    skills: [
      {
        name: "Kubernetes",
        logo: "/src/assets/Kubernetes-Logo.wine.svg",
      },
      {
        name: "Docker",
        logo: null,
      },
      {
        name: "Terraform",
        logo: "/src/assets/Terraform.png",
      },
    ],
  },
  {
    name: "Version Control & CI/CD",
    skills: [
      {
        name: "Git & GitHub",
        logo: "/src/assets/GitHub-logo.png",
      },
      {
        name: "CI/CD",
        logo: null,
      },
    ],
  },
  {
    name: "Scripting & Programming",
    skills: [
      {
        name: "Bash",
        logo: "/src/assets/Bashing-logo.png",
      },
      {
        name: "Python",
        logo: "/src/assets/Python-logo.png",
      },
      {
        name: "PowerShell",
        logo: "/src/assets/PowerShell-logo.png",
      },
      {
        name: "JavaScript",
        logo: "/src/assets/JavaScript-logo.png",
      },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      {
        name: "React",
        logo: "/src/assets/react.svg",
      },
      {
        name: "TypeScript",
        logo: null,
      },
    ],
  },
  {
    name: "AI & Developer Tools",
    skills: [
      {
        name: "GitHub Copilot",
        logo: "/src/assets/GitHub-Copilot.png",
      },
      {
        name: "Claude",
        logo: "/src/assets/Claude-logo.png",
      },
      {
        name: "Codex",
        logo: "/src/assets/Codex-logo.png",
      },
    ],
  },
];

const softSkills = [
  "Team Collaboration",
  "Leadership",
  "Communication",
  "Problem Solving",
  "Adaptability",
  "Presentation",
];

function Skills() {
  return (
    <main className="portfolio-site skills-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="portfolio-section skills-hero">
        <p className="section-label">SKILLS & EXPERTISE</p>

        <h1>
          Tech <span>skills.</span>
        </h1>

        <p className="hero-description">
          A practical toolkit built through hands-on projects,
          cloud infrastructure work, software development,
          DevOps practice, and continuous learning.
        </p>
      </section>


      {/* =========================================
          TECHNICAL SKILLS
      ========================================= */}

      <section className="portfolio-section skills-section">

        <div className="skills-heading">
          <p className="section-label">01 — TECHNICAL SKILLS</p>

          <h2>
            Tools I use to <span>build.</span>
          </h2>

          <p className="skills-section-description">
            Technologies and tools I have worked with across
            cloud computing, DevOps, software development,
            automation, and AI-assisted development.
          </p>
        </div>


        <div className="skills-category-grid">

          {skillCategories.map((category) => (
            <article
              className="skills-category"
              key={category.name}
            >

              <h3>{category.name}</h3>

              <div className="skills-list">

                {category.skills.map((skill) => (
                  <div
                    className={`skill-item ${
                      skill.logo ? "has-logo" : "text-only"
                    }`}
                    key={skill.name}
                  >

                    {skill.logo ? (
                      <div className="skill-logo">
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                        />
                      </div>
                    ) : (
                      <div className="skill-logo skill-text-logo">
                        <span>
                          {skill.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    <span>{skill.name}</span>

                  </div>
                ))}

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* =========================================
          SOFT SKILLS
      ========================================= */}

      <section className="portfolio-section soft-skills-section">

        <p className="section-label">02 — SOFT SKILLS</p>

        <h2>
          How I <span>work.</span>
        </h2>

        <p className="skills-section-description">
          Technical ability is only part of the work. I also value
          communication, collaboration, leadership, and the ability
          to adapt when solving problems with a team.
        </p>


        <div className="soft-skills-grid">

          {softSkills.map((skill, index) => (
            <article
              className="soft-skill-item"
              key={skill}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{skill}</h3>
            </article>
          ))}

        </div>

      </section>


      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="portfolio-section skills-closing">

        <p className="section-label">CONTINUOUS LEARNING</p>

        <h2>
          Always learning. <span>Always building.</span>
        </h2>

        <p>
          My skills continue to grow through real-world projects,
          technical training, experimentation, and building systems
          that solve practical problems.
        </p>

      </section>

    </main>
  );
}

export default Skills; 