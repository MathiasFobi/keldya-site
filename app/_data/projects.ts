/** Current projects showcased in the Work section.
 *  Screenshots live in /public/work/<slug>.jpg (1280×800 captures of the
 *  live homepages). Edit here, propagates to the showcase grid. */

export type Project = {
  slug: string;
  name: string;
  description: string;
  href: string;
  linkLabel: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "lesa",
    name: "LESA-USA, inc.",
    description:
      "Website and member portal for a national membership association — registration and approvals, dues tracking, forms and documents, event content, and chapter branches, all behind member sign-in.",
    href: "https://lesa-usa.vercel.app",
    linkLabel: "Visit the portal",
    tags: ["Web app", "Member portal", "Client"],
  },
  {
    slug: "nfonsam",
    name: "Nfonsam Group Holdings",
    description:
      "Corporate site for an international holding company spanning the US, UAE, and Cameroon — a planned ~100-bed hospital system, a diaspora family-care program, and medical procurement, presented across eight pages.",
    href: "https://nfonsam-group-holdings.vercel.app",
    linkLabel: "Visit the site",
    tags: ["Corporate website", "Client"],
  },
  {
    slug: "fobicam",
    name: "FobiCam",
    description:
      "Our photography studio's home on the web — shoot packages, a 100+ photo work gallery, and social-media management plans. 'We shoot it. We post it. You get booked.'",
    href: "https://fobicam.com",
    linkLabel: "Visit FobiCam",
    tags: ["Business website", "Photography", "Studio"],
  },
  {
    slug: "themediabox",
    name: "TheMediaBox",
    description:
      "Personalized keepsakes for Black celebrations — photo services and a QR-code video guest book that lets every guest at the event record a message for the host.",
    href: "https://themediabox-guestbook.fobimathias.workers.dev",
    linkLabel: "Try the live guest book",
    tags: ["E-commerce", "Event media", "Studio"],
  },
  {
    slug: "drmalfobi",
    name: "Dr. Mal Fobi Tribute",
    description:
      "A memorial archive honoring Dr. Mathias Fobi — bariatric surgeon, mentor, and family patriarch — with a community tribute wall where friends and family share memories.",
    href: "https://www.drmalfobi.com",
    linkLabel: "Visit the tribute",
    tags: ["Memorial", "Storytelling"],
  },
];
