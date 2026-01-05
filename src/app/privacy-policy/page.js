import "./PrivacyPolicyPage.scss";

export const dynamic = "force-static";

export const metadata = {
  title: "Privacy Policy | How Helxon Protects Your Data",
  description:
    "Learn how Helxon collects, uses, and safeguards your data across helxon.com, the VorXOC platform, and our security services. Review your privacy rights and contact options.",
  keywords: [
    "Helxon privacy policy",
    "security data protection",
    "SOC privacy",
    "VorXOC data handling",
    "GDPR",
    "data security",
  ],
  openGraph: {
    title: "Privacy Policy | How Helxon Protects Your Data",
    description:
      "Details on the data Helxon collects, how we use it, and the safeguards we apply across helxon.com and our SOC services.",
    url: "https://helxon.com/privacy-policy",
    type: "article",
    images: [
      {
        url: "/favicon.ico",
        width: 64,
        height: 64,
        alt: "Helxon logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | How Helxon Protects Your Data",
    description:
      "Learn how Helxon collects, uses, and safeguards your data across helxon.com, VorXOC, and our security services.",
    images: ["/favicon.ico"],
  },
  alternates: {
    canonical: "https://helxon.com/privacy-policy",
  },
};

const LAST_UPDATED = "January 4, 2026";

const dataCollection = [
  "Contact and account details (name, business email, phone number, company, role) when you request a demo or engage with our team.",
  "Usage information from helxon.com and VorXOC, including pages viewed, device data, IP address, and service telemetry needed to keep the platform secure and reliable.",
  "Security and compliance records such as authentication logs, alert data, incident response actions, and audit trails generated within your Microsoft tenant.",
  "Communications you send us—support requests, call notes, and feedback—so we can respond and improve the service.",
  "Commercial details tied to orders, subscriptions, statements of work, and billing history.",
];

const useOfData = [
  "Deliver and improve Helxon services, including SOC operations, detection content, automation playbooks, and customer success.",
  "Provide support, schedule demos, and send important service notices about security, availability, or feature changes.",
  "Operate analytics that help us understand adoption, prevent abuse, and harden the platform (we limit identifiers and aggregate where possible).",
  "Meet legal, compliance, and audit requirements, including security investigations and enforcement of our agreements.",
  "Protect our users, infrastructure, and Microsoft-based environment from fraud, abuse, or unauthorized access.",
];

const sharingPractices = [
  "Within Microsoft Azure, Sentinel, and Defender services you authorize—customer data stays in your tenant; we do not sell or rent personal data.",
  "With vetted sub-processors that support communications, analytics, or billing under strict confidentiality and security terms.",
  "With partners or advisors who help deliver the service to you under contract-bound confidentiality.",
  "When required by law, subpoena, or legal process, or to protect the rights and safety of Helxon, our customers, or the public.",
  "During a business transaction (merger, acquisition, or asset sale) where protections and notice will be provided.",
];

const yourRights = [
  "Access, correct, or update your contact and account details.",
  "Request deletion of personal data where applicable, subject to legal and contractual obligations.",
  "Object to or restrict certain processing, including marketing communications.",
  "Receive a copy of personal data you provided in a portable format where required by law.",
  "Lodge a complaint with your local data protection authority if you believe your rights are not respected.",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy">
      <section className="privacy-policy__hero">
        <div className="privacy-policy__hero-content">
          <p className="privacy-policy__eyebrow">Privacy Policy</p>
          <h1 className="privacy-policy__title">
            Privacy & Data Protection at Helxon
          </h1>
          <p className="privacy-policy__subtitle">
            We built Helxon on Microsoft’s security stack so your telemetry stays
            in your tenant. This page explains what we collect, how we use it,
            and the safeguards we apply across helxon.com, VorXOC, and our
            security services.
          </p>
          <div className="privacy-policy__meta">
            <span>Last updated: {LAST_UPDATED}</span>
            <span>Applies to helxon.com, VorXOC, marketing, and support operations.</span>
          </div>
        </div>
      </section>

      <section className="privacy-policy__content">
        <div className="privacy-policy__grid">
          <article className="privacy-policy__card">
            <h2>Information we collect</h2>
            <ul>
              {dataCollection.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="privacy-policy__card">
            <h2>How we use your information</h2>
            <ul>
              {useOfData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="privacy-policy__card privacy-policy__card--wide">
          <h2>Cookies, analytics, and controls</h2>
          <p>
            We use essential cookies to operate the site and analytics cookies
            (such as Google Analytics) to understand performance and improve the
            experience. You can manage cookies in your browser settings; blocking
            some cookies may limit site functionality. Marketing emails always
            include an unsubscribe option.
          </p>
        </article>

        <div className="privacy-policy__grid">
          <article className="privacy-policy__card">
            <h2>Data sharing</h2>
            <ul>
              {sharingPractices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="privacy-policy__card">
            <h2>Security and retention</h2>
            <ul>
              <li>
                Customer data remains in your Microsoft tenant with role-based
                access, encryption in transit and at rest, and audit logging.
              </li>
              <li>
                Access is limited to authorized personnel with least-privilege
                controls, background checks (where appropriate), and
                confidentiality obligations.
              </li>
              <li>
                We retain personal data only as long as needed for the purposes
                described here, to meet legal requirements, or as defined in
                applicable statements of work and contracts.
              </li>
              <li>
                Aggregated and de-identified insights may be kept to improve our
                security analytics without identifying individuals.
              </li>
            </ul>
          </article>
        </div>

        <article className="privacy-policy__card privacy-policy__card--wide">
          <h2>Your privacy rights</h2>
          <p>
            Depending on your location, you may have the rights listed below.
            We will respond consistent with applicable law and our contractual
            commitments.
          </p>
          <ul>
            {yourRights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="privacy-policy__note">
            To exercise these rights or ask questions about your data, contact us
            using the details below. We may need to verify your identity before
            fulfilling a request.
          </p>
        </article>

        <div className="privacy-policy__grid privacy-policy__grid--stacked">
          <article className="privacy-policy__card">
            <h2>International data transfers</h2>
            <p>
              Helxon primarily operates within Microsoft’s cloud regions.
              Cross-border transfers follow contractual protections and, where
              required, Standard Contractual Clauses or similar safeguards.
            </p>
          </article>
          <article className="privacy-policy__card">
            <h2>Children&apos;s privacy</h2>
            <p>
              Our services are designed for business users and are not directed
              to children under 16. We do not knowingly collect personal data
              from children.
            </p>
          </article>
          <article className="privacy-policy__card">
            <h2>Changes to this policy</h2>
            <p>
              We may update this policy to reflect operational, legal, or
              regulatory changes. If the changes are material, we will provide
              reasonable notice and update the “Last updated” date above.
            </p>
          </article>
        </div>

        <article className="privacy-policy__card privacy-policy__contact">
          <div>
            <h2>Contact us</h2>
            <p>
              If you have questions about how Helxon handles your data or want to
              submit a privacy request, reach out to us anytime.
            </p>
          </div>
          <div className="privacy-policy__contact-details">
            <p>
              Email: <a href="mailto:contact@helxon.com">contact@helxon.com</a>
            </p>
            <p>
              Phone: <a href="tel:+16044995973">+1-604-499-5973</a>
            </p>
            <p>Helxon Inc., North Vancouver, BC</p>
          </div>
        </article>
      </section>
    </div>
  );
}

