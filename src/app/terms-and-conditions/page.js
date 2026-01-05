import "./TermsPage.scss";

export const dynamic = "force-static";

export const metadata = {
  title: "Terms & Conditions | Helxon",
  description:
    "Understand the terms that govern your use of Helxon services, including VorXOC, SOC operations, and helxon.com. Review obligations, acceptable use, and legal notices.",
  keywords: [
    "Helxon terms",
    "terms and conditions",
    "service agreement",
    "acceptable use",
    "VorXOC terms",
    "SOC terms",
  ],
  openGraph: {
    title: "Terms & Conditions | Helxon",
    description:
      "Review the terms that govern your use of Helxon services, VorXOC, and helxon.com.",
    url: "https://helxon.com/terms-and-conditions",
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
    title: "Terms & Conditions | Helxon",
    description:
      "Understand the terms for using Helxon services, including VorXOC and SOC operations.",
    images: ["/favicon.ico"],
  },
  alternates: {
    canonical: "https://helxon.com/terms-and-conditions",
  },
};

const LAST_UPDATED = "January 4, 2026";

const scopeOfServices = [
  "These terms apply to helxon.com, VorXOC, professional services, and managed SOC offerings as defined in your order or statement of work (SOW).",
  "Service availability, SLAs, and deliverables are governed by the applicable order/SOW and any accompanying documentation.",
  "Third-party Microsoft cloud services you enable (e.g., Azure, Sentinel, Defender) remain subject to their own terms with Microsoft.",
];

const customerObligations = [
  "Provide accurate contact, billing, and technical information and keep it current.",
  "Maintain appropriate licenses for integrated Microsoft services and ensure lawful data collection.",
  "Promptly notify Helxon of security issues, suspected misuse, or unauthorized access.",
  "Configure your Microsoft tenant permissions consistent with the agreed implementation plan.",
];

const acceptableUse = [
  "Do not use the services to violate law, infringe IP, or harm others’ security or privacy.",
  "No unauthorized scanning, disruption, or attempted access to systems outside your authorized scope.",
  "Do not upload malicious code or attempt to bypass security controls.",
  "Respect data residency and compliance requirements applicable to your organization.",
];

const securityAndData = [
  "Customer data remains in your Microsoft tenant; Helxon accesses it solely to deliver the services.",
  "Both parties will implement administrative, physical, and technical safeguards appropriate to the sensitivity of the data.",
  "Incident cooperation: each party will notify the other without undue delay of confirmed security incidents impacting the services or customer data.",
];

const feesAndBilling = [
  "Fees are defined in the applicable order/SOW. Taxes are additional where applicable.",
  "Late payments may incur finance charges as stated in the order/SOW.",
  "Subscriptions renew per their stated term unless cancelled in accordance with the notice period in the order/SOW.",
];

const warranties = [
  "Helxon will provide the services with reasonable skill and care consistent with industry standards.",
  "Except as expressly stated, the services are provided “as is” and Helxon disclaims all other warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
];

const liability = [
  "Neither party is liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, data, or business opportunities.",
  "Each party’s aggregate liability under these terms is limited to the fees paid or payable by you for the services in the twelve (12) months preceding the claim, unless otherwise stated in the order/SOW.",
  "Indemnities: each party will defend and indemnify the other against third-party claims to the extent arising from its own gross negligence, willful misconduct, or IP infringement (subject to the terms of the applicable order/SOW).",
];

const termination = [
  "Either party may terminate for material breach if not cured within the cure period stated in the order/SOW.",
  "Upon termination or expiry, customer access may be disabled and services cease; surviving provisions include payment obligations, confidentiality, IP, disclaimers, and liability limits.",
  "You are responsible for exporting any needed data from your tenant prior to termination; Helxon does not host production data outside your tenant.",
];

const governingLaw = [
  "Governing law and venue are defined in the applicable order/SOW. If none is specified, British Columbia law governs, and the courts of British Columbia, Canada have exclusive jurisdiction.",
  "These terms do not create any third-party beneficiary rights.",
  "If any provision is unenforceable, the remainder stays in effect.",
];

export default function TermsPage() {
  return (
    <div className="terms">
      <section className="terms__hero">
        <div className="terms__hero-content">
          <p className="terms__eyebrow">Terms & Conditions</p>
          <h1 className="terms__title">Helxon Service Terms</h1>
          <p className="terms__subtitle">
            These terms explain how you may use Helxon services, including
            helxon.com, VorXOC, and managed SOC operations. By using the services
            you agree to these terms and any applicable order or statement of
            work.
          </p>
          <div className="terms__meta">
            <span>Last updated: {LAST_UPDATED}</span>
            <span>Applies to helxon.com, VorXOC, and managed SOC services.</span>
          </div>
        </div>
      </section>

      <section className="terms__content">
        <div className="terms__grid">
          <article className="terms__card">
            <h2>Scope of services</h2>
            <ul>
              {scopeOfServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="terms__card">
            <h2>Customer obligations</h2>
            <ul>
              {customerObligations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="terms__card terms__card--wide">
          <h2>Acceptable use</h2>
          <ul>
            {acceptableUse.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="terms__grid">
          <article className="terms__card">
            <h2>Security & data handling</h2>
            <ul>
              {securityAndData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="terms__card">
            <h2>Fees, billing, and renewals</h2>
            <ul>
              {feesAndBilling.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="terms__grid">
          <article className="terms__card">
            <h2>Warranties & disclaimers</h2>
            <ul>
              {warranties.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="terms__card">
            <h2>Liability and indemnity</h2>
            <ul>
              {liability.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="terms__grid">
          <article className="terms__card">
            <h2>Termination</h2>
            <ul>
              {termination.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="terms__card">
            <h2>Governing law</h2>
            <ul>
              {governingLaw.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <article className="terms__card terms__contact">
          <div>
            <h2>Contact us</h2>
            <p>
              Questions about these terms? Reach out and we will respond promptly.
            </p>
          </div>
          <div className="terms__contact-details">
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

