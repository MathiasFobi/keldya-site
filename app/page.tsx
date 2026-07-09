import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "./_components/contact-form";
import { Pillar } from "./_components/pillar";
import { ServiceCard } from "./_components/service-card";
import { SERVICES } from "./_data/services";

/** Single source of truth for the 5 pillars. Edit here, propagates everywhere. */
const PILLARS = [
  {
    name: "TheMediaBox",
    description:
      "QR-enabled event media platforms. Video guest books, print-on-demand table tents, and a B2C storefront — built to capture every guest's moment at the venue and beyond.",
    // No href — coming soon, no custom domain yet
    status: { kind: "soon" as const, label: "Coming soon" },
  },
  {
    name: "SMS Notify",
    description:
      "High-reliability SMS notification SaaS for business-to-customer communications. Real-time delivery, sender ID management, and bulk-send workflows at production scale.",
    // No href — coming soon, no custom domain yet
    status: { kind: "soon" as const, label: "Coming soon" },
  },
  {
    name: "Dominica Mental Health Foundation",
    description:
      "Proudly operating and scaling the digital infrastructure for vital global mental-health advocacy. A 501(c)(3) committed to dementia care, caregiver support, and geriatric services in Cameroon.",
    href: "https://dominicamentalhealthfoundation.org",
    external: true,
    status: { kind: "partner" as const, label: "Impact partner" },
  },
  {
    name: "Dr. Mal Fobi Tribute",
    description:
      "High-fidelity digital storytelling and architectural-scale tribute curation. A memorial archive built with the same craft we bring to our commercial work.",
    href: "https://www.drmalfobi.com",
    external: true,
    status: { kind: "archive" as const, label: "Featured archive" },
  },
] as const;

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label="Keldya home">
            <Image
              src="/keldya-logo.jpg"
              alt="Keldya"
              width={1280}
              height={543}
              priority
              sizes="160px"
              className="brand__logo"
            />
          </Link>
          <nav className="nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#story">Story</a>
            <a href="#contact" className="btn btn--primary" style={{ padding: "8px 16px" }}>
              Work with us
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero__inner">
            <Image
              src="/keldya-logo.jpg"
              alt="Keldya LLC — Global Culture, Integrated Futures"
              width={1280}
              height={543}
              priority
              sizes="(max-width: 900px) 80vw, 520px"
              className="hero__logo"
            />
            <p className="hero__tagline">Global Culture · Integrated Futures</p>
            <h1 className="hero__title">
              <span className="hero__title-line-primary">
                Websites, apps, and automations for small businesses,
                nonprofits, and community organizations.
              </span>
            </h1>
            <p className="hero__brand-line">
              Family-built. Enterprise-grade. <span className="accent">Built by two brothers.</span>
            </p>
            <p className="hero__lede">
              Keldya is a two-brother studio founded by Mathias and Dominic
              Fobi. We design, build, deploy, and stand behind every
              system — no outsourcing, no handoffs. You hire Keldya, you
              get Keldya.
            </p>
            <div className="hero__cta">
              <a
                href="https://cal.com/kalidllc-b15rre"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg"
              >
                Book a 30-min strategy call →
              </a>
              <a href="#services" className="btn btn--ghost btn--lg">
                See how we can help
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES / WAYS WE CAN HELP */}
        <section id="services" className="section">
          <div className="container">
            <header className="section-header">
              <span className="eyebrow">Ways we can help</span>
              <h2>Five ways Keldya ships real value — fast.</h2>
              <p>
                Every engagement below has a fixed starting price, a real
                timeline, and a clear scope. Tell us which one matches what
                you&apos;re trying to do, and we&apos;ll respond within one
                business day with a tailored quote.
              </p>
            </header>

            <div className="services">
              {SERVICES.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS / WORK */}
        <section id="work" className="section">
          <div className="container">
            <header className="section-header">
              <span className="eyebrow">The Ecosystem</span>
              <h2>What we build, in production and in the lab.</h2>
              <p>
                Four properties shipped, one in active development, and an AI
                audio engine being prototyped in the margins. Every property
                is built by us, end to end, in days to weeks — not months.
              </p>
            </header>

            <div className="pillars">
              {PILLARS.map((p) => (
                <Pillar key={p.name} {...p} />
              ))}
            </div>

            <div className="footnote">
              <span className="footnote__label">Now building</span>
              <span>
                <strong style={{ color: "var(--ink)" }}>AI Audio Engine</strong> —
                proprietary audio and rhythm tooling powered by Suno. We use it
                internally to ship branded music for clients, and we&apos;re
                prototyping a self-serve surface. Reach out if you&apos;d like
                early access.
              </span>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section id="story" className="section">
          <div className="container">
            <div className="story">
              <div className="story__visual" aria-label="Mathias and Dominic Fobi, co-founders of Keldya">
                <div className="story__visual-grid">
                  <div className="story__visual-tile story__visual-tile--photo">
                    <Image
                      src="/founders/mathias.jpg"
                      alt="Mathias Fobi, co-founder of Keldya, photographed on a university campus in a black jacket and light blue polo"
                      fill
                      sizes="(max-width: 900px) 50vw, 280px"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                    <span className="name">Mathias Fobi</span>
                  </div>
                  <div className="story__visual-tile story__visual-tile--photo">
                    <Image
                      src="/founders/dominic.jpg"
                      alt="Dominic Fobi, co-founder of Keldya, photographed in a navy double-breasted suit with a red lapel pin and gold accents, smiling warmly"
                      fill
                      sizes="(max-width: 900px) 50vw, 280px"
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                    <span className="name">Dominic Fobi</span>
                  </div>
                </div>
              </div>
              <div className="story__copy">
                <span className="eyebrow">Our story</span>
                <h2 className="story__title">Two women built us. We build for everyone else.</h2>
                <p>
                  Keldya is named for the two women who built us. Family is the
                  foundation — the reason we ship fast, the standard we hold
                  ourselves to, the gravity that keeps the work honest.
                </p>
                <p>
                  We&apos;re Mathias and Dominic Fobi — two brothers, co-founders,
                  and the studio&apos;s entire engineering bench. We don&apos;t
                  outsource the work; we design it, build it, deploy it, and
                  stand behind it. When you hire Keldya, you get Keldya.
                </p>
                <blockquote className="story__quote">
                  Family-founded. Agility-driven. Enterprise-grade.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="eyebrow">Let&apos;s talk</span>
                <h2>Have a workflow to automate or a platform to build? Let&apos;s deploy it.</h2>
                <p>
                  We take on a small number of custom development engagements
                  every quarter. Tell us what you&apos;re trying to ship and
                  we&apos;ll tell you if we&apos;re the right fit.
                </p>
                <div className="contact-cta-row">
                  <a
                    href="https://cal.com/kalidllc-b15rre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--lg"
                  >
                    Book a 30-min intro →
                  </a>
                  <a
                    href="mailto:keldyallc@gmail.com"
                    className="btn btn--ghost btn--lg"
                  >
                    Or just send an email
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__row">
          <span>© {new Date().getFullYear()} Keldya LLC. All rights reserved.</span>
          <span>
            <a href="mailto:keldyallc@gmail.com">keldyallc@gmail.com</a>
          </span>
        </div>
      </footer>
    </>
  );
}
