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
    slug: "fobicam",
    name: "FobiCam",
    description:
      "Our photography studio's home on the web — shoot packages, a 100+ photo work gallery, and social-media management plans. 'We shoot it. We post it. You get booked.'",
    href: "https://fobicam.com",
    linkLabel: "Visit FobiCam",
    tags: ["Business website", "Photography", "Studio"],
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
  {
    slug: "dominica",
    name: "Dominica Mental Health Foundation",
    description:
      "Digital home for a 501(c)(3) advancing awareness, dignity, and care for people living with dementia — supporting caregivers, families, and older adults in Cameroon and underserved communities, in honor of Mami Dominica Nkie.",
    href: "https://dominicamentalhealthfoundation.org",
    linkLabel: "Visit the foundation",
    tags: ["Nonprofit", "Impact partner"],
  },
];
