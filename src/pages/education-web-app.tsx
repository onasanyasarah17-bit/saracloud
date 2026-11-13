
import "../portfolio.css";

const roles = [
  {
    number: "01",
    title: "Student Dashboard",
    description:
      "Students can access courses, monitor attendance and grades, take quizzes, view upcoming activities, and use the AI-powered study assistant.",
    features: [
      "Courses",
      "Attendance",
      "Grades & GPA",
      "Quizzes",
      "AI Study Buddy",
    ],
  },
  {
    number: "02",
    title: "Teacher Dashboard",
    description:
      "Teachers can manage classes, access student information, create and grade assignments, organize course materials, and share educational resources.",
    features: [
      "Class Management",
      "Student Roster",
      "Assignments",
      "Grading",
      "Resources",
    ],
  },
  {
    number: "03",
    title: "Parent Dashboard",
    description:
      "Parents can monitor academic progress, check attendance and grades, view announcements, and stay connected with teachers and school activities.",
    features: [
      "Student Selection",
      "Attendance",
      "Grades",
      "Announcements",
      "Teacher Contact",
    ],
  },
];

const problems = [
  {
    number: "01",
    title: "Student Information Management",
    description:
      "Schools need a centralized way to manage and access important student information efficiently.",
  },
  {
    number: "02",
    title: "Secure Authentication",
    description:
      "Users need secure and reliable authentication to protect their accounts and educational information.",
  },
  {
    number: "03",
    title: "Effective Communication",
    description:
      "Students, teachers, and parents need better ways to communicate and stay informed about academic activities.",
  },
  {
    number: "04",
    title: "Access to Academic Resources",
    description:
      "Learners and educators need convenient access to relevant academic information and learning resources.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Secure Authentication",
    description:
      "Registration, login, and email verification provide structured access to user accounts.",
  },
  {
    number: "02",
    title: "Better Communication",
    description:
      "Notifications and accessible school information help users stay informed.",
  },
  {
    number: "03",
    title: "Centralized Information",
    description:
      "Important academic and school information is brought together in one platform.",
  },
  {
    number: "04",
    title: "AI-Powered Assistance",
    description:
      "An AI-powered study assistant supports the learner's study experience.",
  },
  {
    number: "05",
    title: "Responsive Experience",
    description:
      "Responsive layouts support use across desktop, tablet, and mobile devices.",
  },
];

const technologies = [
  ["01", "HTML5", "Structures the application's content."],
  ["02", "CSS3", "Styles layouts, responsiveness, and visual design."],
  ["03", "JavaScript", "Powers application functionality and interactions."],
  ["04", "LocalStorage API", "Supports browser-based data persistence."],
  ["05", "AI Chat Module", "Provides the AI-powered study assistant experience."],
  ["06", "Font Awesome", "Provides interface icons and visual elements."],
  ["07", "Git & GitHub", "Supports version control and collaboration."],
  ["08", "Visual Studio Code", "Serves as the development environment."],
];

const teamMembers = [
  "Sarah Onasanya",
  "Ehioghae Esther",
  "Hannah Boatema",
  "Joy Olajumoke Ayeni",
  "Maureen Ijeoma Azubuike",
  "Odofin Deborah Opeyemi",
  "Cynthia Onyinyechi Ayogu",
  "Elizabeth Nku",
  "Ogunyakin Oluwatosin Damilola",
  "Anna Onyeogani",
  "Kanyinsola Shittu",
  "Emem Bassey",
  "Grace Udenyi Hassan",
  "Jane Nwachukwu",
  "Inuwa Amina Ummi",
  "Onuoha Comfort Ezinne",
  "Ibraheem Usvat",
  "Ciary Ben",
  "Olanrewaju Eunice Beyioku",
  "Mariam Adegoke",
  "Queen Akonte Ayebaiduanyo",
];

function EduSafe() {
  return (
    <main className="portfolio-site edusafe-page">
      <section className="portfolio-section edusafe-hero">
        <p className="section-label">WOMEN TECHSTERS · COHORT 5.1</p>

        <h1>
          Edu<span>Safe.</span>
        </h1>

        <p className="hero-description">
          A connected educational web application designed to bring
          students, teachers, and parents together through accessible
          information, learning support, and role-based dashboards.
        </p>

        <div className="hero-actions">
          <a
            className="gold-button"
            href="https://onasanyasarah17-bit.github.io/Tech4Dev-Capstone-Project-Group2-EDUSAFE/signup.html"
            target="_blank"
            rel="noreferrer"
          >
            Explore EduSafe ↗
          </a>

          <a
            className="text-button"
            href="https://github.com/onasanyasarah17-bit/Tech4Dev-Capstone-Project-Group2-EDUSAFE"
            target="_blank"
            rel="noreferrer"
          >
            View source code ↗
          </a>
        </div>

        <div className="edusafe-project-details">
          <div>
            <span>PROJECT TITLE</span>
            <strong>EduSafe</strong>
          </div>
          <div>
            <span>PROJECT TYPE</span>
            <strong>Team project</strong>
          </div>
          <div>
            <span>PROGRAMME</span>
            <strong>Women Techsters Bootcamp, Cohort 5.1</strong>
          </div>
          <div>
            <span>MY ROLE</span>
            <strong>Team Lead · Software Developer</strong>
          </div>
        </div>
      </section>

      <section className="portfolio-section edusafe-section">
        <p className="section-label">01 — PROJECT OVERVIEW</p>
        <h2>
          One platform for a <span>connected learning experience.</span>
        </h2>
        <p className="hero-description">
          EduSafe brings students, teachers, and parents together through
          role-based dashboards designed around their different educational
          needs. Each user can access relevant information, tools, and
          activities from a centralized platform.
        </p>

        <div className="edusafe-card-grid">
          {roles.map((role) => (
            <article className="edusafe-card" key={role.number}>
              <span className="edusafe-number">{role.number}</span>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
              <div className="edusafe-tags">
                {role.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="edusafe-platform-flow">
          <p className="section-label">HOW THE PLATFORM CONNECTS USERS</p>
          <div className="edusafe-flow-grid">
            {[
              ["01", "User Authentication", "Login & registration"],
              ["02", "Role Selection", "Student · Teacher · Parent"],
              ["03", "Personalized Dashboard", "Role-specific experience"],
              ["04", "Connected Learning", "Academic tools & communication"],
            ].map(([number, title, description]) => (
              <div className="edusafe-flow-item" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section edusafe-section">
        <p className="section-label">02 — THE PROBLEM</p>
        <h2>
          What problem were we <span>trying to solve?</span>
        </h2>
        <p className="hero-description">
          Many schools face challenges managing student information,
          maintaining secure access, communicating effectively, and
          providing easy access to academic resources.
        </p>

        <div className="edusafe-card-grid">
          {problems.map((problem) => (
            <article className="edusafe-card" key={problem.number}>
              <span className="edusafe-number">{problem.number}</span>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section edusafe-section">
        <p className="section-label">03 — THE SOLUTION</p>
        <h2>
          A more connected <span>learning experience.</span>
        </h2>
        <p className="hero-description">
          EduSafe brings essential school information, communication,
          learning support, and secure access together in one responsive
          platform.
        </p>

        <div className="edusafe-card-grid">
          {solutions.map((solution) => (
            <article className="edusafe-card" key={solution.number}>
              <span className="edusafe-number">{solution.number}</span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </article>
          ))}
        </div>

        <div className="edusafe-statement">
          <p className="section-label">THE GOAL</p>
          <h3>
            Making education more{" "}
            <span>accessible, connected, and organized.</span>
          </h3>
        </div>
      </section>

      <section className="portfolio-section edusafe-section">
        <p className="section-label">04 — KEY FEATURES</p>
        <h2>What EduSafe <span>offers.</span></h2>
        <p className="hero-description">
          A connected set of tools designed to support learning,
          communication, security, and accessibility.
        </p>

        <div className="edusafe-feature-list">
          <article>
            <span>01</span>
            <h3>Role-based dashboards</h3>
            <p>Different experiences for students, teachers, and parents.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Academic tracking</h3>
            <p>Access to grades, attendance, courses, and assignments.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Learning assistance</h3>
            <p>An AI study assistant designed to support learners.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Communication</h3>
            <p>Access to announcements and important school information.</p>
          </article>
        </div>
      </section>

      <section className="portfolio-section edusafe-section">
        <p className="section-label">05 — TECHNOLOGY STACK</p>
        <h2>
          Built with simple, <span>purposeful technologies.</span>
        </h2>
        <p className="hero-description">
          EduSafe combines frontend technologies, browser-based storage,
          AI assistance, and collaborative development tools.
        </p>

        <div className="edusafe-tech-grid">
          {technologies.map(([number, name, description]) => (
            <article className="edusafe-tech-item" key={number}>
              <span>{number}</span>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section edusafe-section">
        <p className="section-label">06 — MY CONTRIBUTION</p>
        <h2>
          Leading the team, <span>building EduSafe together.</span>
        </h2>

        <div className="edusafe-contribution">
          <p>
            As the Team Lead, I coordinated the team throughout the
            development of EduSafe, helping everyone stay aligned and
            contribute towards our shared goal.
          </p>
          <p>
            The Product Managers guided the project through the PRD and
            defined product requirements, while the Product Designer
            provided the UI/UX designs that shaped the interface.
            Working alongside my fellow Software Developers, we
            translated the requirements and designs into a functional
            web application, implemented features, reviewed our work,
            solved challenges, and refined the product together.
          </p>
          <p>
            My role was to coordinate these efforts, facilitate
            communication, keep the team on track, and contribute to
            development while helping bring our collective work together
            as one cohesive product.
          </p>
        </div>
      </section>

      <section className="portfolio-section edusafe-section">
        <p className="section-label">07 — THE TEAM</p>
        <h2>
          Meet the people <span>behind EduSafe.</span>
        </h2>
        <p className="hero-description">
          EduSafe was built through the collaboration of a
          multidisciplinary team across product management, product
          design, and software development.
        </p>

        <div className="edusafe-team-grid">
          {teamMembers.map((member, index) => (
            <article className="edusafe-team-member" key={member}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{member}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section edusafe-section edusafe-links">
        <p className="section-label">08 — EXPLORE EDUSAFE</p>
        <h2>
          Take a closer look at <span>EduSafe.</span>
        </h2>
        <p className="hero-description">
          Explore the source code and experience the EduSafe web
          application in action.
        </p>

        <div className="edusafe-card-grid">
          <a
            className="edusafe-link-card"
            href="https://github.com/onasanyasarah17-bit/Tech4Dev-Capstone-Project-Group2-EDUSAFE"
            target="_blank"
            rel="noreferrer"
          >
            <span>01 — SOURCE CODE</span>
            <h3>View on GitHub ↗</h3>
            <p>Explore the project repository.</p>
          </a>
          <a
            className="edusafe-link-card"
            href="https://onasanyasarah17-bit.github.io/Tech4Dev-Capstone-Project-Group2-EDUSAFE/signup.html"
            target="_blank"
            rel="noreferrer"
          >
            <span>02 — LIVE APPLICATION</span>
            <h3>Visit EduSafe ↗</h3>
            <p>Explore the deployed web application.</p>
          </a>
        </div>
      </section>
    </main>
  );
}

export default EduSafe;
