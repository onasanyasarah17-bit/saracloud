
// import "./Portfolio.css";

// const projects = [
//   {
//     number: "01",
//     category: "LINUX · BASH · MONITORING",
//     name: "Linux Server Health Auditor",
//     description:
//       "A Linux administration utility that monitors server health, evaluates system resources, and produces readable reports and JSON logs.",
//     tags: ["Linux", "Bash", "Monitoring"],
//     link: "https://github.com/onasanyasarah17-bit",
//   },
//   {
//     number: "02",
//     category: "AWS · SERVERLESS · CLOUD",
//     name: "FreshBasket",
//     description:
//       "A cloud-based application exploring serverless architecture, secure APIs, event-driven workflows, and managed AWS services.",
//     tags: ["AWS", "Lambda", "DynamoDB"],
//     link: "https://main.d1lubsio53fudu.amplifyapp.com",
//   },
//   {
//     number: "03",
//     category: "WEB DEVELOPMENT · EDUCATION",
//     name: "EduSafe",
//     description:
//       "An education-focused web application developed as a team capstone, featuring an AI study buddy and browser-based data storage.",
//     tags: ["React", "Web Development", "Team Lead"],
//     link: "https://github.com/onasanyasarah17-bit",
//   },
//   {
//     number: "04",
//     category: "AWS · API · DATA",
//     name: "SmartPOS AI",
//     description:
//       "A point-of-sale dashboard prototype with transaction management and an AWS-backed workflow for saving transaction data.",
//     tags: ["React", "API Gateway", "DynamoDB"],
//     link: "https://github.com/onasanyasarah17-bit",
//   },
// ];

// const skillGroups = [
//   {
//     title: "Cloud & Infrastructure",
//     skills: ["AWS", "S3", "Lambda", "DynamoDB", "API Gateway"],
//   },
//   {
//     title: "DevOps & Systems",
//     skills: ["Linux", "Bash", "Git", "GitHub", "Automation"],
//   },
//   {
//     title: "Development",
//     skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
//   },
// ];

// function Portfolio() {
//   return (
//     <div className="portfolio-site" id="home">
//       <nav className="site-nav">
//         <a className="site-logo" href="#home" aria-label="SaraCloud home">
//           SC<span>.</span>
//         </a>

//         <div className="nav-links">
//           <a href="#about">About</a>
//           <a href="#skills">Skills</a>
//           <a href="#projects">Projects</a>
//           <a href="#certifications">Certifications</a>
//           <a href="#contact">Contact</a>
//         </div>

//         <a className="nav-cta" href="#contact">
//           LET'S CONNECT <span>↗</span>
//         </a>
//       </nav>

//       <section className="portfolio-hero">
//         <div className="hero-copy">
//           <p className="portfolio-eyebrow">
//             <span /> CLOUD · DEVOPS · SOFTWARE
//           </p>

//           <h1>
//             Building ideas
//             <br />
//             into <span>digital reality.</span>
//           </h1>

//           <p className="hero-description">
//             Hi, I’m Sarah Ibukunoluwa Onasanya. I’m a Junior DevOps
//             and Cloud Engineer exploring cloud infrastructure,
//             automation, and software development.
//           </p>

//           <div className="hero-actions">
//             <a className="gold-button" href="#projects">
//               EXPLORE MY WORK <span>↗</span>
//             </a>
//             <a className="text-button" href="#about">
//               Discover my story <span>↓</span>
//             </a>
//           </div>

//           <div className="hero-meta">
//             <span className="status-dot" />
//             LEARNING · BUILDING · IMPROVING
//           </div>
//         </div>

//         <div className="hero-art" aria-label="SaraCloud decorative artwork">
//           <div className="art-orbit orbit-one" />
//           <div className="art-orbit orbit-two" />
//           <div className="art-glow" />
//           <div className="art-monogram">SC</div>
//           <div className="art-corner corner-top">SARA<br />CLOUD</div>
//           <div className="art-corner corner-bottom">01 / DIGITAL JOURNEY</div>
//           <div className="art-star star-one">✳</div>
//           <div className="art-star star-two">✦</div>
//         </div>

//         <div className="hero-index">
//           <span>01</span>
//           <span className="index-line" />
//           <span>WELCOME TO MY WORLD</span>
//         </div>
//       </section>

//       <section className="intro-strip">
//         <p>CURIOUS BY NATURE.</p>
//         <span>✳</span>
//         <p>TECHNICAL BY PRACTICE.</p>
//         <span>✳</span>
//         <p>INTENTIONAL BY DESIGN.</p>
//       </section>

//       <section className="portfolio-section about-section" id="about">
//         <div className="section-label">
//           <span>01</span> ABOUT ME
//         </div>

//         <div className="about-grid">
//           <h2>
//             Technology is
//             <br />
//             a journey of
//             <br />
//             <span>possibility.</span>
//           </h2>

//           <div className="about-copy">
//             <p>
//               I’m building my foundation in cloud computing,
//               DevOps, and software development through hands-on
//               projects, collaborative learning, and practical
//               experimentation.
//             </p>
//             <p>
//               I enjoy breaking down technical problems, learning
//               how systems work, and turning new knowledge into
//               projects that solve real-world challenges.
//             </p>
//             <a className="underlined-link" href="#contact">
//               GET TO KNOW ME <span>↗</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="portfolio-section skills-section" id="skills">
//         <div className="section-label">
//           <span>02</span> MY TOOLKIT
//         </div>

//         <div className="section-heading-row">
//           <h2>Skills in progress.<br /><span>Built through practice.</span></h2>
//           <p>
//             Tools and technologies I’m learning and applying
//             through my projects.
//           </p>
//         </div>

//         <div className="skills-grid">
//           {skillGroups.map((group, index) => (
//             <article className="skill-card" key={group.title}>
//               <span className="skill-number">0{index + 1}</span>
//               <h3>{group.title}</h3>
//               <div className="skill-tags">
//                 {group.skills.map((skill) => (
//                   <span key={skill}>{skill}</span>
//                 ))}
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section className="portfolio-section projects-section" id="projects">
//         <div className="section-label">
//           <span>03</span> SELECTED WORK
//         </div>

//         <div className="section-heading-row">
//           <h2>Ideas made<br /><span>tangible.</span></h2>
//           <p>
//             A selection of projects that reflect my progress
//             across cloud, systems, and software.
//           </p>
//         </div>

//         <div className="projects-grid">
//           {projects.map((project) => (
//             <article className="project-card" key={project.number}>
//               <div className="project-card-top">
//                 <span>{project.number}</span>
//                 <span className="project-arrow">↗</span>
//               </div>

//               <p className="project-category">{project.category}</p>
//               <h3>{project.name}</h3>
//               <p className="project-description">{project.description}</p>

//               <div className="project-tags">
//                 {project.tags.map((tag) => (
//                   <span key={tag}>{tag}</span>
//                 ))}
//               </div>

//               <a
//                 className="project-link"
//                 href={project.link}
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 EXPLORE PROJECT <span>↗</span>
//               </a>
//             </article>
//           ))}
//         </div>
//       </section>

//       <section className="portfolio-section certification-section" id="certifications">
//         <div className="section-label">
//           <span>04</span> LEARNING JOURNEY
//         </div>

//         <div className="section-heading-row">
//           <h2>Always learning.<br /><span>Always evolving.</span></h2>
//           <p>
//             Training, practical exercises, and milestones that
//             continue to shape my technical foundation.
//           </p>
//         </div>

//         <div className="learning-list">
//           <div>
//             <span>01</span>
//             <div>
//               <h3>DevOps Training</h3>
//               <p>She Code Africa Academy</p>
//             </div>
//             <span className="learning-type">TRAINING</span>
//           </div>
//           <div>
//             <span>02</span>
//             <div>
//               <h3>Software Development</h3>
//               <p>Women Techsters Bootcamp</p>
//             </div>
//             <span className="learning-type">TRAINING</span>
//           </div>
//           <div>
//             <span>03</span>
//             <div>
//               <h3>Cloud & Linux Learning</h3>
//               <p>Akwannya Hub</p>
//             </div>
//             <span className="learning-type">TRAINING</span>
//           </div>
//         </div>

//         <p className="certification-note">
//           Formal certifications can be added here as they are earned.
//         </p>
//       </section>

//       <section className="contact-section" id="contact">
//         <p className="portfolio-eyebrow">
//           <span /> LET'S BUILD SOMETHING MEANINGFUL
//         </p>
//         <h2>
//           Every great idea
//           <br />
//           starts with <span>a conversation.</span>
//         </h2>
//         <p>
//           Open to learning opportunities, collaboration, and
//           conversations about cloud, DevOps, and software.
//         </p>
//         <a
//           className="gold-button"
//           href="https://www.linkedin.com/in/onasanya-sarah-6987b3392/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           CONNECT ON LINKEDIN <span>↗</span>
//         </a>
//       </section>

//       <footer className="site-footer">
//         <a className="site-logo" href="#home">SC<span>.</span></a>
//         <p>DESIGNED WITH INTENTION · BUILT WITH PURPOSE</p>
//         <a href="https://github.com/onasanyasarah17-bit" target="_blank" rel="noreferrer">
//           GITHUB ↗
//         </a>
//       </footer>
//     </div>
//   );
// }

// export default Portfolio;
