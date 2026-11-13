
import "../portfolio.css";

const freshBasketAssets = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

function findFreshBasketImage(filename: string): string | undefined {
  const normalize = (value: string) =>
    value.toLowerCase().replace(/[^a-z0-9]/g, "");

  const target = normalize(filename.replace(/\.[^.]+$/, ""));

  const match = Object.entries(freshBasketAssets).find(([path]) => {
    const actualFilename = path.split("/").pop() ?? "";
    return normalize(actualFilename.replace(/\.[^.]+$/, "")) === target;
  });

  return match?.[1];
}

function FreshBasketImage({
  filename,
  alt,
}: {
  filename: string;
  alt: string;
}) {
  const src = findFreshBasketImage(filename);

  if (!src) return null;

  return (
    <figure className="freshbasket-image">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{alt}</figcaption>
    </figure>
  );
}

const team = [
  "Sarah Onasanya",
  "Belinda Ntinyari",
  "Prince Kwesi Lassey",
  "Seth Aboagye",
];

const orderSteps = [
  {
    number: "01",
    title: "Authentication",
    description:
      "Amazon Cognito authenticates shoppers and provides identity tokens.",
  },
  {
    number: "02",
    title: "Order request",
    description:
      "The browser sends an authorized POST request to API Gateway.",
  },
  {
    number: "03",
    title: "Validation",
    description:
      "The API layer applies authorization and request protections.",
  },
  {
    number: "04",
    title: "Order intake",
    description:
      "A Lambda function validates the order and saves it to DynamoDB.",
  },
  {
    number: "05",
    title: "Event publication",
    description:
      "The OrderPlaced event is published to a custom EventBridge bus.",
  },
  {
    number: "06",
    title: "Immediate response",
    description:
      "The API returns the order identifier while downstream work continues.",
  },
  {
    number: "07",
    title: "Independent consumers",
    description:
      "Payment, inventory, and notification consumers process the event.",
  },
  {
    number: "08",
    title: "Email confirmation",
    description:
      "SQS buffers notification work, and Amazon SES sends the confirmation.",
  },
];

const challenges = [
  {
    number: "01",
    title: "Slow checkout",
    description:
      "A slow downstream service can keep customers waiting and increase abandoned carts.",
  },
  {
    number: "02",
    title: "Partial success",
    description:
      "Payment and inventory can succeed or fail at different points, creating inconsistent order states.",
  },
  {
    number: "03",
    title: "Notification failure",
    description:
      "A failed email service should not prevent a customer from completing checkout.",
  },
];

const features = [
  {
    number: "01",
    title: "Authentication",
    description:
      "Cognito supports shopper identity and protected application access.",
  },
  {
    number: "02",
    title: "Event-driven checkout",
    description:
      "Order processing is triggered by an OrderPlaced business event.",
  },
  {
    number: "03",
    title: "Independent processing",
    description:
      "Payment, inventory, and notification consumers can work independently.",
  },
  {
    number: "04",
    title: "Queue resilience",
    description:
      "SQS buffers notification processing and supports retries.",
  },
  {
    number: "05",
    title: "Dead Letter Queue",
    description:
      "Repeatedly failed notification messages can be isolated for inspection.",
  },
  {
    number: "06",
    title: "Transactional email",
    description:
      "Amazon SES sends order confirmations without blocking checkout.",
  },
  {
    number: "07",
    title: "Order tracking",
    description:
      "Customers can review previous orders and their processing states.",
  },
  {
    number: "08",
    title: "Operations dashboard",
    description:
      "An internal demonstration view summarizes order volume, revenue, and statuses.",
  },
];

const technologies = [
  ["FRONTEND", "Angular", "The single-page grocery storefront."],
  ["COMPUTE", "AWS Lambda", "Serverless order intake and event processing."],
  ["API", "API Gateway", "The HTTP interface for order requests."],
  ["DATABASE", "DynamoDB", "Storage for orders and processing statuses."],
  ["EVENTS", "EventBridge", "Publishes and distributes OrderPlaced events."],
  ["MESSAGING", "Amazon SQS", "Buffers notifications and supports retries and a DLQ."],
  ["IDENTITY", "Amazon Cognito", "Shopper authentication and identity management."],
  ["EMAIL", "Amazon SES", "Transactional order confirmation messages."],
  ["HOSTING", "Amplify + CloudFront", "Storefront deployment and edge delivery."],
  ["SECURITY", "WAF + IAM + KMS", "Protection, permissions, and encryption capabilities."],
  ["INFRASTRUCTURE", "CloudFormation", "Infrastructure defined and deployed as code."],
  ["OBSERVABILITY", "CloudWatch", "Logs and metrics for monitoring."],
];

const architecturePrinciples = [
  {
    number: "01",
    title: "Operational Excellence",
    items: [
      "CloudFormation infrastructure as code",
      "CloudWatch logs and metrics",
      "Deployment documentation",
      "SQS retries and DLQ handling",
    ],
  },
  {
    number: "02",
    title: "Security",
    items: [
      "Cognito authentication",
      "API Gateway JWT authorization",
      "AWS WAF protection",
      "Least-privilege IAM roles",
      "KMS and Secrets Manager",
    ],
  },
  {
    number: "03",
    title: "Reliability",
    items: [
      "Independent failure domains",
      "EventBridge fan-out",
      "SQS buffering",
      "Retry and DLQ handling",
      "Stateless Lambda compute",
    ],
  },
  {
    number: "04",
    title: "Performance Efficiency",
    items: [
      "Thin checkout path",
      "CloudFront edge delivery",
      "Managed DynamoDB storage",
      "Independently scalable consumers",
    ],
  },
  {
    number: "05",
    title: "Cost Optimization",
    items: [
      "Pay-per-use services",
      "No always-on checkout servers",
      "Managed AWS services",
    ],
  },
  {
    number: "06",
    title: "Sustainability",
    items: [
      "Event-driven processing",
      "Efficient managed services",
      "AWS-operated infrastructure",
    ],
  },
];

const decisions = [
  {
    number: "01",
    title: "Event-driven fan-out",
    benefit: "Resilience, speed, and independent scaling.",
    tradeoff:
      "Eventual consistency means the interface must communicate that processing is still underway.",
  },
  {
    number: "02",
    title: "SQS for notifications",
    benefit: "Retry isolation and a clear Dead Letter Queue strategy.",
    tradeoff:
      "Payment and inventory use direct event targets, so not every path is buffered identically.",
  },
  {
    number: "03",
    title: "Cognito + API Gateway",
    benefit: "A clear identity boundary between shoppers and APIs.",
    tradeoff:
      "Demo authentication and SES sandbox rules require careful configuration.",
  },
  {
    number: "04",
    title: "Amplify Hosting",
    benefit: "Storefront deployment with HTTPS and CloudFront delivery.",
    tradeoff:
      "Separate website and API origins make correct CORS configuration important.",
  },
  {
    number: "05",
    title: "Simulated payment and inventory",
    benefit: "Keeps the event-driven architecture easy to demonstrate.",
    tradeoff:
      "This is not a PCI payment integration or a production warehouse management system.",
  },
];

const lessons = [
  {
    number: "01",
    title: "Eventual consistency",
    description:
      "Event-driven systems need to communicate that an order is processing rather than imply every operation finishes immediately.",
  },
  {
    number: "02",
    title: "Failure isolation",
    description:
      "Queues and independent consumers help prevent downstream failures from unnecessarily affecting checkout.",
  },
  {
    number: "03",
    title: "Cloud security",
    description:
      "Authentication, authorization, encryption, IAM, WAF, and secrets management all matter in cloud architecture.",
  },
  {
    number: "04",
    title: "Architecture communication",
    description:
      "A strong architecture should be explainable to both technical and non-technical audiences.",
  },
];

const contributions = [
  {
    number: "01",
    title: "Cloud Architecture",
    description:
      "Worked with AWS services to support an event-driven order-processing architecture.",
  },
  {
    number: "02",
    title: "Application Development",
    description:
      "Contributed to the FreshBasket application and its integration with the cloud backend.",
  },
  {
    number: "03",
    title: "Security",
    description:
      "Worked with authentication, authorization, IAM, and AWS security capabilities.",
  },
  {
    number: "04",
    title: "Documentation",
    description:
      "Contributed to documenting the architecture, deployment process, and technical decisions.",
  },
];

function FreshBasket() {
  return (
    <main className="portfolio-site freshbasket-page">
      <section className="portfolio-section freshbasket-hero">
        <p className="section-label">CLOUD / AWS PROJECT</p>
        <h1>
          Fresh<span>Basket.</span>
        </h1>
        <p className="freshbasket-tagline">
          Fresh groceries. Smarter checkout.
        </p>
        <p className="hero-description">
          A cloud-native grocery checkout demonstration exploring how
          event-driven architecture can make order processing more
          responsive, resilient, and independently scalable.
        </p>

        <div className="hero-actions">
          <a
            className="gold-button"
            href="https://github.com/onasanyasarah17-bit/aws-event-driven-order-processing-team-eta"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub ↗
          </a>
        </div>

        <div className="freshbasket-meta">
          <div>
            <span>PROJECT TYPE</span>
            <strong>Event-driven cloud application</strong>
          </div>
          <div>
            <span>PLATFORM</span>
            <strong>Amazon Web Services</strong>
          </div>
          <div>
            <span>FRONTEND</span>
            <strong>Angular</strong>
          </div>
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">01 — THE TEAM</p>
        <h2>
          Built <span>together.</span>
        </h2>
        <p className="hero-description">
          FreshBasket was developed as a collaborative team project,
          with team members contributing to the application, cloud
          architecture, documentation, and delivery.
        </p>
        <div className="freshbasket-team-grid">
          {team.map((member, index) => (
            <article className="freshbasket-card" key={member}>
              <span className="freshbasket-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{member}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">02 — PROJECT OVERVIEW</p>
        <h2>
          A smarter way to <span>process orders.</span>
        </h2>
        <div className="freshbasket-prose">
          <p>
            FreshBasket is a cloud-native grocery checkout platform
            designed to demonstrate how event-driven architecture on AWS
            can address a real business problem.
          </p>
          <p>
            Checkout should remain responsive even when payment,
            inventory, and notifications finish at different speeds.
            Instead of requiring every operation to finish before
            responding to the shopper, FreshBasket records the order
            first and allows independent AWS services to react to the
            order event.
          </p>
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">03 — THE PROBLEM</p>
        <h2>
          When checkout does <span>too much.</span>
        </h2>
        <p className="hero-description">
          Synchronous checkout can force a browser to wait while
          multiple downstream operations complete.
        </p>

        <div className="freshbasket-flow">
          {["Browser", "Server", "Payment", "Inventory", "Email", "Response"].map(
            (step, index) => (
              <div className="freshbasket-flow-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < 5 && <span className="freshbasket-arrow">→</span>}
              </div>
            ),
          )}
        </div>

        <div className="freshbasket-card-grid">
          {challenges.map((item) => (
            <article className="freshbasket-card" key={item.number}>
              <span className="freshbasket-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">04 — OUR SOLUTION</p>
        <h2>
          Let the order <span>trigger the work.</span>
        </h2>
        <p className="hero-description">
          FreshBasket accepts and records an order, then publishes an
          event that independent services can consume on their own
          timelines.
        </p>

        <div className="freshbasket-event">
          <div className="freshbasket-event-main">
            <span>BUSINESS EVENT</span>
            <h3>OrderPlaced</h3>
          </div>
          <div className="freshbasket-consumers">
            {["Payment", "Inventory", "Notification"].map((name) => (
              <div key={name}>
                <strong>{name}</strong>
                <span>Independent consumer</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">05 — ARCHITECTURE</p>
        <h2>
          The system behind <span>the checkout.</span>
        </h2>
        <p className="hero-description">
          The storefront is separated from the backend order-processing
          pipeline, with each AWS service responsible for a distinct part
          of the workflow.
        </p>

        <div className="freshbasket-architecture">
          {[
            ["01", "Angular storefront", "Customer-facing application"],
            ["02", "Amplify + CloudFront", "Hosting and edge delivery"],
            ["03", "API Gateway", "Protected HTTP API"],
            ["04", "AWS Lambda", "Order intake and processing"],
            ["05", "DynamoDB", "Order records and statuses"],
            ["06", "EventBridge", "OrderPlaced event distribution"],
            ["07", "Independent consumers", "Payment, inventory, notifications"],
            ["08", "SQS + SES", "Buffered email delivery"],
          ].map(([number, title, description]) => (
            <article className="freshbasket-architecture-item" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="freshbasket-caption">
          Architecture summary: Angular → Amplify / CloudFront → API
          Gateway → Lambda → DynamoDB → EventBridge → independent consumers.
        </p>

        <div className="freshbasket-image-grid">
          <FreshBasketImage
            filename="new_architecture.png"
            alt="FreshBasket AWS cloud architecture diagram"
          />
          <FreshBasketImage
            filename="request-flow.png"
            alt="FreshBasket request and order-processing flow"
          />
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">06 — FRONTEND DELIVERY</p>
        <h2>
          Fast delivery at <span>the edge.</span>
        </h2>
        <div className="freshbasket-flow">
          {[
            ["01", "Browser", "Shopper"],
            ["02", "Amplify", "Hosting"],
            ["03", "CloudFront", "CDN + HTTPS"],
            ["04", "Angular SPA", "Storefront"],
          ].map(([number, title, description], index) => (
            <div className="freshbasket-host-step" key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <small>{description}</small>
              {index < 3 && <span className="freshbasket-arrow">→</span>}
            </div>
          ))}
        </div>
        <p className="freshbasket-caption">
          Amplify publishes the Angular storefront. CloudFront provides
          edge delivery and HTTPS, while order API traffic uses a
          separate API Gateway origin.
        </p>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">07 — THE SHOPPER EXPERIENCE</p>
        <h2>
          From first visit to <span>order confirmation.</span>
        </h2>
        <p className="hero-description">
          A look at the FreshBasket storefront, customer account
          experience, order tracking, and operations interface.
        </p>
        <div className="freshbasket-image-grid">
          <FreshBasketImage
            filename="landing-page.png"
            alt="FreshBasket grocery storefront landing page"
          />
          <FreshBasketImage
            filename="sign-in-page.png"
            alt="FreshBasket shopper sign-in page"
          />
          <FreshBasketImage
            filename="sign-up-page.png"
            alt="FreshBasket shopper registration page"
          />
          <FreshBasketImage
            filename="user-welcome-message.png"
            alt="FreshBasket customer welcome screen"
          />
          <FreshBasketImage
            filename="order-success-timeline.png"
            alt="FreshBasket order processing timeline"
          />
          <FreshBasketImage
            filename="email-confirming-order.png"
            alt="FreshBasket order confirmation email"
          />
          <FreshBasketImage
            filename="customer-order-history.png"
            alt="FreshBasket customer order history"
          />
          <FreshBasketImage
            filename="operations.png"
            alt="FreshBasket operations dashboard"
          />
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">08 — ORDER PROCESSING</p>
        <h2>
          How an order moves <span>through AWS.</span>
        </h2>
        <div className="freshbasket-timeline">
          {orderSteps.map((step) => (
            <article className="freshbasket-timeline-item" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">09 — KEY FEATURES</p>
        <h2>
          Built around <span>reliability.</span>
        </h2>
        <div className="freshbasket-card-grid">
          {features.map((feature) => (
            <article className="freshbasket-card" key={feature.number}>
              <span className="freshbasket-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">10 — TECHNOLOGY STACK</p>
        <h2>
          The technologies <span>behind FreshBasket.</span>
        </h2>
        <div className="freshbasket-tech-grid">
          {technologies.map(([category, name, description]) => (
            <article className="freshbasket-card" key={category}>
              <span className="freshbasket-number">{category}</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">11 — AWS WELL-ARCHITECTED</p>
        <h2>
          Designed with <span>the fundamentals in mind.</span>
        </h2>
        <p className="hero-description">
          The AWS Well-Architected Framework provides a practical
          checklist for evaluating reliability, security, efficiency,
          cost, and operations.
        </p>
        <div className="freshbasket-card-grid">
          {architecturePrinciples.map((principle) => (
            <article className="freshbasket-card" key={principle.number}>
              <span className="freshbasket-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <ul>
                {principle.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">12 — DESIGN DECISIONS</p>
        <h2>
          Architecture is also <span>about trade-offs.</span>
        </h2>
        <div className="freshbasket-timeline">
          {decisions.map((decision) => (
            <article className="freshbasket-timeline-item" key={decision.number}>
              <span>{decision.number}</span>
              <div>
                <h3>{decision.title}</h3>
                <p>
                  <strong>Benefit:</strong> {decision.benefit}
                </p>
                <p>
                  <strong>Trade-off:</strong> {decision.tradeoff}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">PROJECT JOURNEY</p>
        <h2>
          Building FreshBasket <span>step by step.</span>
        </h2>
        <div className="freshbasket-image-grid">
          <FreshBasketImage
            filename="three_week_plan.png"
            alt="FreshBasket three-week project plan"
          />
          <FreshBasketImage
            filename="new_week_one.png"
            alt="FreshBasket week one progress"
          />
          <FreshBasketImage
            filename="new_week_two.png"
            alt="FreshBasket week two progress"
          />
          <FreshBasketImage
            filename="new_week_three.png"
            alt="FreshBasket week three progress"
          />
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">13 — MY CONTRIBUTION</p>
        <h2>
          What I <span>contributed.</span>
        </h2>
        <p className="hero-description">
          My contribution involved working with the team to design,
          build, test, and document the cloud-based order-processing solution.
        </p>
        <div className="freshbasket-card-grid">
          {contributions.map((item) => (
            <article className="freshbasket-card" key={item.number}>
              <span className="freshbasket-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">14 — CHALLENGES & LESSONS</p>
        <h2>
          What the project <span>taught me.</span>
        </h2>
        <div className="freshbasket-card-grid">
          {lessons.map((lesson) => (
            <article className="freshbasket-card" key={lesson.number}>
              <span className="freshbasket-number">{lesson.number}</span>
              <h3>{lesson.title}</h3>
              <p>{lesson.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section freshbasket-section">
        <p className="section-label">15 — OUTCOME</p>
        <h2>
          A working demonstration of{" "}
          <span>event-driven cloud architecture.</span>
        </h2>
        <div className="freshbasket-prose">
          <p>
            FreshBasket demonstrates how a grocery checkout can remain
            responsive while payment, inventory, and notification
            workflows operate independently.
          </p>
          <p>
            The project connects the customer experience with AWS
            architecture principles, showing how EventBridge, SQS,
            Lambda, DynamoDB, Cognito, SES, and other managed services
            can work together in a serverless application.
          </p>
        </div>
        <div className="freshbasket-outcome">
          <span>CORE IDEA</span>
          <strong>
            Accept first.
            <br />
            Process independently.
          </strong>
        </div>
      </section>

      <section className="portfolio-section freshbasket-section freshbasket-links">
        <p className="section-label">16 — EXPLORE THE PROJECT</p>
        <h2>
          Explore <span>FreshBasket.</span>
        </h2>
        <div className="hero-actions">
          <a
            className="gold-button"
            href="https://github.com/onasanyasarah17-bit/aws-event-driven-order-processing-team-eta"
            target="_blank"
            rel="noreferrer"
          >
            Explore GitHub ↗
          </a>
        </div>
      </section>

      <section className="portfolio-section freshbasket-closing">
        <div />
        <p>
          FreshBasket is not Lambda for Lambda&apos;s sake. It is a grocery
          checkout shaped around a business truth: order acceptance,
          payment, inventory, and communication are related, but they
          should not share a single failure and latency domain.
        </p>
        <div />
      </section>
    </main>
  );
}

export default FreshBasket;
