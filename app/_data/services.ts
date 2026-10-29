/**
 * Service offerings — the packaged "Ways We Can Help" cards on the
 * homepage, simplified (Oct 2026) to three fixed tiers plus a custom
 * package: $1k Launch, $5k Business, $10k Growth, and Custom.
 *
 * The old standalone cards are folded in, not lost:
 *  - Nonprofit Launch Kit and Event Digital Experience scope fits
 *    inside Launch / Business (and Custom for larger events).
 *  - Workflow Automation Sprint and SMS Notification Setup are
 *    Growth-tier add-ons and Custom work.
 *  - Custom App / SaaS MVP is now the Custom Package.
 *
 * Prices are "Starting at" — bigger engagements scope up. The Custom
 * Package has no starting price (startsAt: null): it always starts
 * with a conversation and a fixed written quote.
 */

export interface Service {
  id: string;
  name: string;
  /** One-line summary that goes under the name on the card. */
  tagline: string;
  /** The longer description on the card body. */
  description: string;
  /** Bulleted deliverables, shown as a small list. */
  deliverables: string[];
  /** Starting price, in USD. Null = custom quote (rendered as text). */
  startsAt: number | null;
  /** Timeline label, e.g. "1 week" or "Scoped per project". */
  duration: string;
  /** Best for — small italic line that helps the buyer self-identify. */
  bestFor: string;
  /** Badge tag rendered in the corner of the card. */
  badge: "Most popular" | "Fastest start" | "Compliance-ready" | null;
  /** CTA button label. Defaults to "Get started" when omitted. */
  cta?: string;
}

export const SERVICES: Service[] = [
  {
    id: "launch-site",
    name: "Launch Site",
    tagline: "A sharp one-page site that makes you look real — fast.",
    description:
      "Everything a new business, nonprofit, or event needs to be credible online this week: a polished one-page site, a way for people to reach you, and the basics that make you findable on Google.",
    deliverables: [
      "One-page custom site (Next.js, fully responsive)",
      "Your copy, polished — plus your logo and photos placed",
      "Contact form + click-to-call / booking link",
      "Basic SEO + Google Business Profile setup",
      "Launch checklist + 14 days of post-launch tweaks",
    ],
    startsAt: 1000,
    duration: "1 week",
    bestFor: "New businesses, nonprofits, and events that need to look credible right now.",
    badge: "Fastest start",
  },
  {
    id: "business-website-launch",
    name: "Business Website Launch",
    tagline: "A complete, customer-ready website for a business ready to grow.",
    description:
      "A full multi-page site that turns visitors into calls, bookings, and quote requests. Built, written, and launched end to end, with lead capture wired in from day one instead of bolted on later.",
    deliverables: [
      "Multi-page custom site, up to 7 pages (Next.js, fully responsive)",
      "Lead capture wired in: contact / quote form + booking link (Cal.com or your scheduler)",
      "Services and offer copy polish (you review, we revise)",
      "Local SEO + Google Business Profile basics, analytics setup",
      "Launch checklist + 30 days of post-launch tweaks",
    ],
    startsAt: 5000,
    duration: "2-3 weeks",
    bestFor: "Small businesses, clinics, firms, and service companies that have outgrown a DIY or one-page site.",
    badge: "Most popular",
  },
  {
    id: "growth-website",
    name: "Growth Website",
    tagline: "Everything in Business, plus the systems that turn visitors into revenue.",
    description:
      "For businesses ready to sell and follow up automatically, not just be found. Your site, payments, and one core automation ship together as one system — no duct-taping tools together later.",
    deliverables: [
      "Everything in Business Website Launch, up to 10 pages",
      "Online payments or paid booking wired to Stripe",
      "One workflow automation (lead follow-up, notifications, or CRM sync)",
      "SMS or email notifications for new leads and orders",
      "Analytics setup + 60 days of post-launch tweaks",
    ],
    startsAt: 10000,
    duration: "3-4 weeks",
    bestFor: "Businesses ready to take payments online and stop losing leads to slow follow-up.",
    badge: null,
  },
  {
    id: "custom-package",
    name: "Custom Package",
    tagline: "Apps, automations, and systems built around exactly what you need.",
    description:
      "If it doesn't fit a package, we scope it honestly. Custom apps and SaaS MVPs, workflow automations, compliant SMS systems, and event digital experiences — quoted fixed, in writing, before we start.",
    deliverables: [
      "Custom app / SaaS MVP (auth, real database, billing, admin)",
      "Workflow automation (Zapier / Make / n8n / custom code)",
      "Compliant SMS notification setup (A2P 10DLC handled for you)",
      "Event digital experiences, powered by TheMediaBox",
      "Fixed written quote + honest roadmap before build — no open-ended billing",
    ],
    startsAt: null,
    duration: "Scoped per project",
    bestFor: "Founders and teams with a specific system to build that no package quite covers.",
    badge: null,
    cta: "Tell us what you're building",
  },
];
