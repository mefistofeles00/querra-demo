// All data in this demo is fictional and exists only to showcase the UI.

export type Plan = {
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    blurb: "For small teams answering the same questions every day.",
    features: ["1 assistant", "500 documents", "2,000 answers / month", "Website widget"],
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    blurb: "For support teams that want deflection they can measure.",
    features: [
      "5 assistants",
      "Unlimited documents",
      "15,000 answers / month",
      "Human handoff + ticketing",
      "Analytics dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    blurb: "For multi-brand companies with strict data requirements.",
    features: ["Unlimited assistants", "SSO + audit log", "PII redaction", "Dedicated region", "SLA"],
  },
];

export const features = [
  {
    title: "Answers with sources",
    body: "Every reply cites the exact page it came from, so customers trust it and your team can check it.",
  },
  {
    title: "Knows when to step back",
    body: "Low-confidence questions are handed to a human with the full conversation attached. No guessing.",
  },
  {
    title: "Learns from your docs",
    body: "Drop in PDFs, help-center URLs or Notion pages. Querra chunks, indexes and keeps them fresh.",
  },
  {
    title: "One script tag",
    body: "Add the widget to any site or app in minutes. It inherits your brand colors and tone of voice.",
  },
  {
    title: "Separate by design",
    body: "Each workspace is fully isolated: its own documents, users, roles and conversation history.",
  },
  {
    title: "Measure deflection",
    body: "See which questions get resolved, which escalate, and which docs are missing an answer.",
  },
];

export const steps = [
  { n: "01", title: "Connect your knowledge", body: "Upload files or paste URLs. Ingestion runs in the background with live status." },
  { n: "02", title: "Tune the assistant", body: "Set tone, escalation rules and which topics it should never answer." },
  { n: "03", title: "Go live everywhere", body: "Embed the widget, then watch resolution and escalations in one dashboard." },
];

export const faqs = [
  {
    q: "Is this a real product?",
    a: "No. Querra is a portfolio demo built to show front-end and product engineering work. The brand, numbers and case study are fictional.",
  },
  {
    q: "How does it avoid making things up?",
    a: "Answers are generated only from retrieved passages, each with a citation. If confidence is low, the assistant hands off instead of guessing.",
  },
  {
    q: "Where is customer data stored?",
    a: "In this concept, each workspace is isolated at the database level and PII is redacted before any text reaches a language model.",
  },
  {
    q: "Can it create support tickets?",
    a: "Yes. Escalations can open a ticket, notify a Slack channel and attach the full conversation.",
  },
];

export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  title: string;
  summary: string;
  metrics: { label: string; value: string }[];
  challenge: string[];
  approach: { title: string; body: string }[];
  outcome: string[];
  quote: { text: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "brightpath-learning",
    company: "Brightpath Learning",
    industry: "EdTech · fictional",
    title: "How Brightpath cut parent support tickets by 41% in six weeks",
    summary:
      "A school platform with thousands of parents asking the same questions every term: logins, absences, report cards. Querra now answers most of them from the help center, in seconds.",
    metrics: [
      { label: "Tickets deflected", value: "41%" },
      { label: "Median answer time", value: "4s" },
      { label: "Escalation accuracy", value: "93%" },
    ],
    challenge: [
      "Support load spiked at the start of every term, when thousands of parents logged in for the first time.",
      "Most questions were already answered in the help center, but parents couldn't find the right article.",
      "The team needed escalations to reach the right school, not a shared inbox.",
    ],
    approach: [
      {
        title: "Indexed the help center and school policies",
        body: "Around 380 articles and PDFs were chunked and indexed per school, so each school's assistant only sees its own rules.",
      },
      {
        title: "Routed by intent",
        body: "Login and password questions were answered directly. Questions about a specific child were always handed to staff.",
      },
      {
        title: "Closed the loop",
        body: "Unanswered questions were grouped weekly, showing exactly which help articles to write next.",
      },
    ],
    outcome: [
      "41% of incoming questions resolved without a ticket during the first term.",
      "Staff time moved from password resets to the conversations that needed a person.",
      "Twelve new help articles written from the 'missing answers' report.",
    ],
    quote: {
      text: "The best part isn't the answers it gives. It's that it knows exactly when not to answer.",
      author: "Dana Whitfield",
      role: "Head of Support, Brightpath (fictional)",
    },
  },
];

export const kpis = [
  { label: "Conversations", value: "12,480", delta: "+8.2%", up: true },
  { label: "Resolved by AI", value: "68.4%", delta: "+3.1 pts", up: true },
  { label: "Escalated", value: "1,143", delta: "-5.6%", up: false },
  { label: "Avg. response", value: "3.8s", delta: "-0.4s", up: false },
];

// 30 days of conversation volume and resolution rate.
export const daily = Array.from({ length: 30 }, (_, i) => {
  const base = 330 + Math.round(70 * Math.sin(i / 3.2) + i * 4);
  const resolved = Math.round(base * (0.6 + 0.12 * (i / 29)));
  return { day: i + 1, total: base, resolved };
});

export type ConversationStatus = "Resolved" | "Escalated" | "Low confidence";

export const conversations: {
  id: string;
  customer: string;
  topic: string;
  status: ConversationStatus;
  confidence: number;
  time: string;
}[] = [
  { id: "C-2041", customer: "maria.l@…", topic: "Reset two-factor login", status: "Resolved", confidence: 0.96, time: "2m ago" },
  { id: "C-2040", customer: "j.okafor@…", topic: "Refund for annual plan", status: "Escalated", confidence: 0.41, time: "6m ago" },
  { id: "C-2039", customer: "pkumar@…", topic: "Export invoices to CSV", status: "Resolved", confidence: 0.91, time: "11m ago" },
  { id: "C-2038", customer: "sam.reyes@…", topic: "API rate limits on Growth", status: "Low confidence", confidence: 0.58, time: "18m ago" },
  { id: "C-2037", customer: "h.nakamura@…", topic: "Add a teammate as admin", status: "Resolved", confidence: 0.94, time: "25m ago" },
  { id: "C-2036", customer: "e.dubois@…", topic: "GDPR data deletion request", status: "Escalated", confidence: 0.33, time: "31m ago" },
];

export const documents = [
  { name: "help-center (sitemap)", type: "URL", chunks: 1842, status: "Indexed" as const, progress: 100 },
  { name: "pricing-and-billing.pdf", type: "PDF", chunks: 96, status: "Indexed" as const, progress: 100 },
  { name: "api-reference-v3.docx", type: "DOCX", chunks: 410, status: "Processing" as const, progress: 64 },
  { name: "security-whitepaper.pdf", type: "PDF", chunks: 0, status: "Queued" as const, progress: 0 },
];

export const topQuestions = [
  { q: "How do I reset my password?", count: 812 },
  { q: "Can I change my billing date?", count: 433 },
  { q: "Where do I find my invoices?", count: 391 },
  { q: "How do I invite my team?", count: 288 },
  { q: "Do you support SSO?", count: 174 },
];
