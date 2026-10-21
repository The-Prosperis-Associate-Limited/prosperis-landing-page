export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    number: "01",
    title: "Training & development",
    description:
      "Build capable, confident teams through practical learning designed around everyday business needs—from customer service and sales to HR, marketing, and more.",
    tags: ["Customer service", "Sales", "HR", "Marketing"],
  },
  {
    number: "02",
    title: "Recruitment",
    description:
      "Find the right people for every opportunity with focused recruitment support that brings business needs and strong candidates together.",
    tags: ["Talent sourcing", "Candidate screening", "Hiring support"],
  },
  {
    number: "03",
    title: "IT development & deployment",
    description:
      "Turn business requirements into dependable digital solutions, with support from planning and development through implementation and deployment.",
    tags: ["Solution planning", "Development", "Deployment"],
  },
  {
    number: "04",
    title: "Consulting",
    description:
      "Move forward with clear, practical guidance shaped around your goals, operating realities, and opportunities for meaningful growth.",
    tags: ["Business advisory", "Operations", "Growth"],
  },
] as const;

export const contentReviewItems = [
  {
    number: "01",
    title: "Official company story",
    description:
      "Approve one concise description of Prosperis, its history, purpose, and the people or organisations it serves.",
  },
  {
    number: "02",
    title: "Service delivery details",
    description:
      "Confirm the audience, delivery format, locations, timelines, and enquiry path for each approved service.",
  },
  {
    number: "03",
    title: "Portfolio relationships",
    description:
      "Confirm which companies or brands should appear and the exact language that describes each relationship.",
  },
  {
    number: "04",
    title: "Contacts and compliance",
    description:
      "Provide the public email, phone, office details, form destination, and approved privacy or legal wording.",
  },
] as const;
