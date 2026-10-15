export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    number: "01",
    title: "Strategy & growth",
    description:
      "Clear direction for organizations navigating new markets, operating models, and moments of change.",
    tags: ["Research", "Positioning", "Go-to-market"],
  },
  {
    number: "02",
    title: "Digital products",
    description:
      "Useful, human digital experiences shaped from first idea through launch and continuous improvement.",
    tags: ["Product design", "Engineering", "Experience"],
  },
  {
    number: "03",
    title: "Mobility services",
    description:
      "Practical systems and partnerships that help people, teams, and goods move with more confidence.",
    tags: ["Operations", "Driver networks", "Fleet support"],
  },
] as const;

export const caseStudies = [
  {
    index: "01",
    eyebrow: "Mobility / Product ecosystem",
    title: "A clearer path from request to arrival",
    description:
      "An illustrative service concept bringing booking, communication, and support into one calm experience.",
    result: "Sample case study",
    className: "case-study--blue",
  },
  {
    index: "02",
    eyebrow: "Operations / Growth",
    title: "Turning a complex service into a repeatable system",
    description:
      "A demonstration of how service design can align frontline teams, partners, and customer expectations.",
    result: "Sample case study",
    className: "case-study--sand",
  },
  {
    index: "03",
    eyebrow: "Brand / Digital",
    title: "Building trust before the first conversation",
    description:
      "A placeholder identity and web programme designed around clarity, proof, and an easy next step.",
    result: "Sample case study",
    className: "case-study--ink",
  },
] as const;

export const team = [
  { initials: "AO", name: "Ada Okorie", role: "Group Strategy" },
  { initials: "TM", name: "Tobi Mensah", role: "Product & Technology" },
  { initials: "ZI", name: "Zara Ibrahim", role: "Mobility Operations" },
  { initials: "CN", name: "Chidi Nwosu", role: "Partnerships" },
] as const;

export const testimonials = [
  {
    quote:
      "Prosperis helped us replace a maze of ideas with one clear direction our whole team could act on.",
    name: "Amara Bello",
    role: "COO, Northstar Collective",
  },
  {
    quote:
      "They brought uncommon calm to a complex challenge and kept every decision connected to the people we serve.",
    name: "David Osei",
    role: "Founder, Common Ground",
  },
  {
    quote:
      "The work felt considered from strategy to the smallest interaction. Nothing was there just for show.",
    name: "Lina Adeyemi",
    role: "Director, Lumen House",
  },
] as const;

export const faqs = [
  {
    question: "What does Prosperis Group do?",
    answer:
      "Prosperis is presented here as a multi-disciplinary organization working across strategy, digital products, and mobility services. This starter copy can be replaced with your final company description.",
  },
  {
    question: "Do you work with organizations of every size?",
    answer:
      "Yes. The example service model is designed to support focused projects, longer partnerships, and venture-building programmes for growing teams and established organizations.",
  },
  {
    question: "Is Haya Drivers part of Prosperis?",
    answer:
      "Haya Drivers is featured as a product in the Prosperis portfolio for this draft. The final relationship, service description, and legal language should be confirmed before launch.",
  },
  {
    question: "Where is the team based?",
    answer:
      "The placeholder contact details position the team in Lagos, Nigeria, with work across Africa. Replace this with your confirmed office and operating locations.",
  },
  {
    question: "How do we start a conversation?",
    answer:
      "Use the contact form, email, phone, or WhatsApp link below. The current form is a front-end demo and can be connected to your preferred inbox or CRM next.",
  },
] as const;

export const posts = [
  {
    date: "08 OCT 2026",
    category: "Field note",
    title: "Why useful businesses begin with sharper questions",
    summary:
      "A practical framework for finding the real problem before choosing the visible solution.",
  },
  {
    date: "24 SEP 2026",
    category: "Perspective",
    title: "Trust is an operating system, not a campaign",
    summary:
      "What service teams can do to make reliability visible at every stage of the customer journey.",
  },
  {
    date: "11 SEP 2026",
    category: "News",
    title: "Introducing the next chapter of our mobility work",
    summary:
      "A sample newsroom story for product updates, partnerships, and organization milestones.",
  },
] as const;

export const partnerNames = [
  "NORTHSTAR",
  "LUMEN",
  "COMMON GROUND",
  "KINSHIP",
  "ARC WORKS",
  "NOMAD",
] as const;
