/**
 * Service offerings — the 5 packaged "Ways We Can Help" cards on the
 * homepage. Each is a real, shippable engagement with a starting
 * price, a list of deliverables, and a CTA that routes to the
 * contact form / Cal.com.
 *
 * Prices are intentional — the user explicitly said "we can't cut
 * ourselves short on pricing" when these were proposed. These
 * numbers are realistic for a 2-person studio doing custom work
 * in weeks (not months), priced at the lower-middle of what a
 * quality US/EU studio would charge for the same scope. They are
 * "Starting at" — bigger engagements scope up.
 *
 * "Event Digital Experience" is the one card that overlaps with a
 * product. It's intentionally framed as a *service* powered by
 * TheMediaBox (the product) so the relationship is clear.
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
  /** Starting price, in USD. Rendered with a $ prefix. */
  startsAt: number;
  /** "weeks" or "week" — singular for the short ones. */
  duration: string;
  /** Best for — small italic line that helps the buyer self-identify. */
  bestFor: string;
  /** Badge tag rendered in the corner of the card. */
  badge: "Most popular" | "Fastest start" | "Compliance-ready" | null;
}

export const SERVICES: Service[] = [
  {
    id: "nonprofit-launch-kit",
    name: "Nonprofit Launch Kit",
    tagline: "Stand up a credible, donation-ready digital presence in 1-2 weeks.",
    description:
      "We design and ship the public-facing surface a new nonprofit needs on day one: a story-driven website, a working donation flow, campaign copy, email setup, and the social/SEO basics that make it findable.",
    deliverables: [
      "Single-page or short multi-page site (Next.js, fully responsive)",
      "Donation page wired to Stripe or your existing processor",
      "Mission / story / team copy (you review, we revise)",
      "Email setup (Google Workspace + branded signatures + autoresponder)",
      "Launch checklist + 30 days of post-launch tweaks",
    ],
    startsAt: 2500,
    duration: "1-2 weeks",
    bestFor: "Newly formed nonprofits, foundations, and community orgs that need to look real fast.",
    badge: "Most popular",
  },
  {
    id: "workflow-automation-sprint",
    name: "Workflow Automation Sprint",
    tagline: "One focused week to remove the manual work eating your team's time.",
    description:
      "A short, scoped engagement: we map your highest-friction internal process, design the automation, build it, and hand it over with documentation. No six-month discovery phase, no platform lock-in.",
    deliverables: [
      "Process audit (1-2 workflows, identified + prioritized)",
      "Working automation (Zapier / Make / n8n / custom code — your call)",
      "Notifications, dashboards, and reporting where useful",
      "Documentation + Loom walkthrough so your team can maintain it",
    ],
    startsAt: 3500,
    duration: "1-2 weeks",
    bestFor: "Small businesses and ops teams drowning in copy-paste, spreadsheets, and Slack pings.",
    badge: "Fastest start",
  },
  {
    id: "custom-app-mvp",
    name: "Custom App / SaaS MVP",
    tagline: "The first working version of the platform you've been sketching.",
    description:
      "We take an idea from one-pager to a real, deployed, multi-user application. Focused scope, tight feedback loops, weekly demos. Ship something real you can put in front of customers in 4-8 weeks.",
    deliverables: [
      "Architecture + data model (you own the code, repo, and infra)",
      "Core user flows, end-to-end, with auth and a real database",
      "Deployed to your domain (Vercel / Railway / your choice)",
      "Stripe billing + basic admin if it's a paid product",
      "A short, honest roadmap doc for what's next",
    ],
    startsAt: 15000,
    duration: "4-8 weeks",
    bestFor: "Founders with a working concept who need a real MVP without hiring a full dev team.",
    badge: null,
  },
  {
    id: "event-digital-experience",
    name: "Event Digital Experience",
    tagline: "A printed table tent + QR guest book that captures every moment.",
    description:
      "Powered by our own TheMediaBox product. We design a printed table tent for your event, ship it to you, and configure a private video guest-book event with the QR code baked in. Every guest records a message from their phone; you review and approve the keepers.",
    deliverables: [
      "Custom table-tent design (your event, your colors, your copy)",
      "Printed + shipped (US, 5-7 business days)",
      "Private guest-book event on a custom URL",
      "Host dashboard to review + approve recordings",
      "Per-video approval billing — pay only for the keepers",
    ],
    startsAt: 1500,
    duration: "2-3 weeks",
    bestFor: "Weddings, milestone birthdays, baby showers, retirements, corporate events, memorials.",
    badge: null,
  },
  {
    id: "sms-notification-setup",
    name: "SMS Notification Setup",
    tagline: "A working SMS system that's actually compliant with US 10DLC rules.",
    description:
      "We stand up the SMS Notify product for your business: sender ID registration, A2P 10DLC campaign vetting, opt-in flow, message templates, and the delivery infrastructure. You send your first campaign the same week.",
    deliverables: [
      "A2P 10DLC brand + campaign registration (we handle the paperwork)",
      "Sender ID setup + opt-in / opt-out flows",
      "Message templates + audience segmentation",
      "Delivery dashboard + basic analytics",
      "Compliance check: privacy policy + terms linked where Twilio requires them",
    ],
    startsAt: 2500,
    duration: "1-2 weeks",
    bestFor: "Small businesses, member orgs, and event teams that need reliable, compliant text messaging.",
    badge: "Compliance-ready",
  },
];
