export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    number: "01",
    title: "Business strategy & growth",
    description:
      "This area should explain how Prosperis supports business direction, growth, and operational decision-making.",
    note: "Confirm whether this is offered to external clients, used within the group, or both.",
    tags: ["Offering", "Audience", "Scope"],
  },
  {
    number: "02",
    title: "Digital products & technology",
    description:
      "This area should describe the digital products or technology services connected to Prosperis and the problems they solve.",
    note: "Confirm the named solutions, the sectors they serve, and the delivery model.",
    tags: ["Solutions", "Customers", "Delivery"],
  },
  {
    number: "03",
    title: "Mobility services",
    description:
      "This area should introduce Prosperis' mobility interests and direct visitors to the appropriate business or service.",
    note: "Confirm the approved service description and the relationship to Haya Drivers.",
    tags: ["Services", "Coverage", "Portfolio link"],
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
    title: "Services and capabilities",
    description:
      "Confirm the final service names, what each service includes, who it is for, and the right enquiry path.",
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
