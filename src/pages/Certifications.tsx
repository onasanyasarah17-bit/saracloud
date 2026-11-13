
import "../portfolio.css";

const certifications = [
  {
    name: "She Code Africa Academy",
    subject: "DevOps Training",
    year: "2026",
    image: "/src/assets/SCA-Certificate.png",
    number: "01",
  },
  {
    name: "Women Techsters Bootcamp",
    subject: "Software Development",
    year: "2026",
    image: "/src/assets/WTB-Certificate.png",
    number: "02",
  },
  {
    name: "Akwannya Hub",
    subject: "Cloud Practical (AWS)",
    year: "2026",
    image: "/src/assets/Akwannya-Hub.png",
    number: "03",
  },
  {
  name: "Aspire Institute",
  subject: "Aspire Leaders Program",
  year: "2026",
  image: "/src/assets/Aspire-Certificate.png",
  number: "04",
  },

  {
    name: "HP Life",
    subject: "Critical Thinking in the AI Era",
    year: "2026",
    image: "/src/assets/HP-Life-Certificate.png",
    number: "05",
    },
];

function Certifications() {
  return (
    <main className="portfolio-site certifications-page">
      <section className="portfolio-section certification-section">
        <p className="section-label">TECH & SOFT SKILLS</p>

        <h1>
          Training & <span>achievements.</span>
        </h1>

        <p className="hero-description">
         Showcasing the knowledge, experiences, and skills I’ve gained through technical training, personal development, and working with others.
        </p>

        

        <div className="learning-list">
          {certifications.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.number}
            >
              <div className="certificate-details">
                <span className="certificate-number">
                  {certificate.number}
                </span>

                <div className="certificate-copy">
                  <h3>{certificate.name}</h3>
                  <p>{certificate.subject}</p>
                  <span className="certificate-year">
                    {certificate.year}
                  </span>
                </div>
              </div>

              <div className="certificate-preview">
                <img
                  src={certificate.image}
                  alt={`${certificate.name} ${certificate.subject} certificate`}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Certifications;
