import {
  Bot,
  Brain,
  Globe,
  Workflow,
  BarChart3,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  problem: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  outcomes: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: string;
  categories: string[];
  technologies: string[];
  impact: string;
  color: string;
  overview: string;
  challenge: string;
  users: string;
  proposedSolution: string;
  architecture: string;
  developmentProcess: string;
  results: string;
  lessonsLearned: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  organization: string;
  isPlaceholder: boolean;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const metrics = [
  { value: 3, suffix: "+", label: "nonprofit platforms launched" },
  { value: 1000, suffix: "+", label: "users served" },
  { value: 10, suffix: "×", label: "increase in organizational outreach" },
  { value: null, suffix: "", label: "AI-powered workflows and support systems" },
];

export const services: Service[] = [
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    shortDescription:
      "Custom LLM-powered assistants that answer questions, guide users, and provide reliable information from organizational content.",
    icon: Bot,
    problem:
      "Organizations spend significant time answering repetitive questions about programs, events, donations, and resources.",
    solution:
      "We build grounded LLM chatbots that retrieve answers from your content, guide users through journeys, and escalate when human support is needed.",
    deliverables: [
      "Custom chatbot interface",
      "Knowledge base integration (RAG)",
      "Admin dashboard for content updates",
      "Analytics and conversation insights",
      "Deployment and documentation",
    ],
    technologies: ["React", "Google Gemini", "RAG", "Firebase", "Node.js"],
    outcomes: [
      "Reduced support burden",
      "24/7 accessible information",
      "Improved user self-service",
      "Better engagement with programs",
    ],
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    shortDescription:
      "Intelligent agents that summarize information, classify data, coordinate tasks, and automate multi-step workflows.",
    icon: Brain,
    problem:
      "Teams handle complex multi-step tasks manually — summarizing documents, routing requests, and coordinating across systems.",
    solution:
      "We design AI agents that automate reasoning tasks, integrate with your tools, and execute workflows with human oversight.",
    deliverables: [
      "Agent architecture design",
      "Task automation pipelines",
      "Integration with existing systems",
      "Monitoring and logging",
      "Human-in-the-loop controls",
    ],
    technologies: ["Python", "Google ADK", "Vertex AI", "FastAPI", "MongoDB"],
    outcomes: [
      "Faster task completion",
      "Consistent data processing",
      "Reduced manual coordination",
      "Scalable intelligent operations",
    ],
  },
  {
    id: "web-development",
    title: "Website Development",
    shortDescription:
      "Responsive, accessible websites built with modern frameworks and optimized for performance, engagement, and usability.",
    icon: Globe,
    problem:
      "Outdated websites limit reach, frustrate users, and fail to reflect the quality of your organization's work.",
    solution:
      "We build fast, accessible, mobile-first websites with clear information architecture and engaging user experiences.",
    deliverables: [
      "Responsive website design and development",
      "Accessibility compliance (WCAG)",
      "Performance optimization",
      "CMS or content management setup",
      "SEO foundations",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Modern professional presence",
      "Improved user engagement",
      "Mobile-friendly experience",
      "Faster page loads",
    ],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    shortDescription:
      "Automated registration, communication, data collection, reporting, and operational processes.",
    icon: Workflow,
    problem:
      "Manual registration, email follow-ups, and data entry consume staff time and introduce errors.",
    solution:
      "We automate repetitive workflows — from sign-ups to notifications to reporting — so your team can focus on impact.",
    deliverables: [
      "Workflow mapping and design",
      "Automated registration systems",
      "Email and notification flows",
      "Data collection and export",
      "Integration with existing tools",
    ],
    technologies: ["Node.js", "Firebase", "REST APIs", "Python", "Cloud Services"],
    outcomes: [
      "Hours saved per week",
      "Fewer manual errors",
      "Faster participant onboarding",
      "Automated reporting",
    ],
  },
  {
    id: "data-analytics",
    title: "Data and Analytics",
    shortDescription:
      "Dashboards and intelligent reporting tools that help organizations understand users, programs, and outcomes.",
    icon: BarChart3,
    problem:
      "Valuable data sits in spreadsheets and siloed systems, making it hard to understand trends and measure impact.",
    solution:
      "We build dashboards and analytics tools that surface actionable insights from your program and user data.",
    deliverables: [
      "Custom analytics dashboards",
      "Data pipeline setup",
      "Automated reporting",
      "KPI tracking",
      "Data visualization",
    ],
    technologies: ["BigQuery", "Tableau", "Python", "React", "Firebase"],
    outcomes: [
      "Clear visibility into outcomes",
      "Data-driven decision making",
      "Automated report generation",
      "Trend identification",
    ],
  },
  {
    id: "ai-strategy",
    title: "AI Strategy and Integration",
    shortDescription:
      "Practical guidance for selecting, implementing, governing, and scaling AI solutions responsibly.",
    icon: Lightbulb,
    problem:
      "Organizations want to use AI but lack clarity on where to start, what tools to choose, and how to implement responsibly.",
    solution:
      "We provide practical AI strategy — assessing needs, recommending solutions, and planning responsible implementation.",
    deliverables: [
      "AI readiness assessment",
      "Use case prioritization",
      "Technology recommendations",
      "Implementation roadmap",
      "Responsible AI guidelines",
    ],
    technologies: ["Google Gemini", "Vertex AI", "FastAPI", "Various"],
    outcomes: [
      "Clear AI adoption path",
      "Reduced implementation risk",
      "Responsible AI practices",
      "Aligned stakeholder buy-in",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the organization, users, workflows, and challenges.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Create user journeys, prototypes, system architecture, and success metrics.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop the website, chatbot, agent, automation, or platform.",
  },
  {
    step: "04",
    title: "Launch and Improve",
    description:
      "Deploy, measure performance, gather feedback, and continuously improve.",
  },
];

export const projects: Project[] = [
  {
    slug: "nonprofit-ai-assistant",
    title: "Nonprofit AI Assistant",
    summary:
      "An LLM-powered chatbot that helps users find programs, events, donation information, and community resources.",
    category: "AI assistants",
    categories: ["AI assistants", "Nonprofit technology"],
    technologies: ["React", "Gemini", "RAG", "Firebase"],
    impact: "Improved accessibility and reduced repetitive support requests.",
    color: "from-indigo-500 to-blue-600",
    overview:
      "A custom AI assistant built for a nonprofit organization to help community members discover programs, events, and resources through natural conversation.",
    challenge:
      "The organization received a high volume of repetitive inquiries about programs, events, and donation options. Staff spent significant time answering the same questions, and information was scattered across multiple pages.",
    users:
      "Community members seeking program information, event details, donation options, and volunteer opportunities. Users range from tech-savvy to those needing accessible, simple interfaces.",
    proposedSolution:
      "An LLM-powered chatbot grounded in the organization's content using RAG (Retrieval-Augmented Generation), providing accurate answers with source references and seamless escalation to human support.",
    architecture:
      "React frontend with a conversational UI, Firebase for authentication and data, Gemini for language understanding, and a vector store for content retrieval. Admin panel for content management.",
    developmentProcess:
      "Started with content audit and user journey mapping, followed by prototype testing with staff, iterative RAG tuning, and phased rollout with feedback collection.",
    results:
      "Significantly reduced repetitive support requests, improved 24/7 accessibility to organizational information, and increased engagement with programs and events.",
    lessonsLearned: [
      "Content quality directly impacts chatbot accuracy",
      "Staff training is essential for ongoing maintenance",
      "Clear escalation paths build user trust",
      "Regular content updates keep answers relevant",
    ],
  },
  {
    slug: "parkinsons-symptom-tracker",
    title: "Parkinson's Symptom Tracker",
    summary:
      "An AI-enabled platform for tracking symptoms and viewing longitudinal health trends.",
    category: "Healthcare",
    categories: ["Healthcare", "Analytics", "Web applications"],
    technologies: ["React", "Node.js", "Firebase", "Data Visualization"],
    impact: "Supports more than 175 active users with ongoing symptom monitoring.",
    color: "from-teal-500 to-cyan-600",
    overview:
      "A health tracking platform enabling individuals with Parkinson's disease to log symptoms, view trends over time, and share insights with care providers.",
    challenge:
      "Patients needed a simple way to track fluctuating symptoms over time, but existing tools were either too complex or lacked meaningful visualization of longitudinal data.",
    users:
      "Individuals with Parkinson's disease, caregivers, and healthcare providers who benefit from structured symptom data and trend visualization.",
    proposedSolution:
      "A responsive web platform with intuitive symptom logging, visual trend charts, and secure data storage with export capabilities for healthcare visits.",
    architecture:
      "React SPA with Firebase authentication and Firestore database, Node.js backend for data processing, and D3/Recharts for health trend visualization.",
    developmentProcess:
      "User research with patients and caregivers, iterative UI design focused on accessibility, beta testing with a patient community, and continuous feature refinement based on feedback.",
    results:
      "More than 175 active users tracking symptoms regularly, improved patient-provider communication through structured data, and positive feedback on ease of use.",
    lessonsLearned: [
      "Accessibility is non-negotiable in health applications",
      "Simple input methods increase consistent usage",
      "Longitudinal views provide the most value to users",
      "Privacy and data security build essential trust",
    ],
  },
  {
    slug: "community-engagement-platform",
    title: "Community Engagement Platform",
    summary:
      "A responsive digital platform with simplified event registration, payment workflows, and automated user journeys.",
    category: "Web applications",
    categories: ["Web applications", "Automation", "Nonprofit technology"],
    technologies: ["React", "JavaScript", "REST APIs", "Cloud Services"],
    impact: "Helped increase organizational outreach by 10×.",
    color: "from-purple-500 to-indigo-600",
    overview:
      "A comprehensive community platform enabling event registration, payment processing, and automated communication workflows for a growing nonprofit organization.",
    challenge:
      "Manual event registration, paper forms, and disconnected payment processes limited the organization's ability to scale community programs and engage new participants.",
    users:
      "Community members registering for events and programs, organizational staff managing registrations, and administrators tracking participation metrics.",
    proposedSolution:
      "An integrated platform combining event pages, online registration, payment processing, automated confirmation emails, and participant management dashboards.",
    architecture:
      "React frontend with responsive design, REST API backend, cloud-hosted database, payment gateway integration, and automated email notification system.",
    developmentProcess:
      "Workflow mapping with staff, phased feature rollout starting with registration, payment integration, then automation layers, with ongoing optimization based on usage data.",
    results:
      "10× increase in organizational outreach, streamlined registration reducing staff workload, and improved participant experience with instant confirmations.",
    lessonsLearned: [
      "Start with the most painful workflow first",
      "Payment integration requires careful UX design",
      "Automated communications dramatically reduce follow-up work",
      "Mobile-first design is essential for community reach",
    ],
  },
];

export const whyAstra = [
  {
    title: "Human-centered design",
    description:
      "Every solution starts with understanding real users — their needs, constraints, and goals — not technology for its own sake.",
  },
  {
    title: "Secure and scalable architecture",
    description:
      "Built on proven cloud infrastructure with authentication, data protection, and architecture that grows with your organization.",
  },
  {
    title: "Responsible AI practices",
    description:
      "Grounded models, human oversight, transparency, and ethical considerations are built into every AI solution from day one.",
  },
  {
    title: "Affordable solutions for growing organizations",
    description:
      "Practical, cost-effective implementations designed for nonprofits, schools, and small businesses with limited resources.",
  },
];

export const techStack = {
  "AI and machine learning": [
    "Google Gemini",
    "Google ADK",
    "Vertex AI",
    "Python",
    "FastAPI",
  ],
  "Frontend and backend": ["React", "Next.js", "Node.js", "TypeScript"],
  "Cloud and data": [
    "Firebase",
    "BigQuery",
    "MongoDB",
    "SQLite",
    "Vercel",
  ],
  "Design and analytics": ["Figma", "Tableau", "GitHub"],
};

export const responsibleAI = [
  "Data privacy",
  "Model grounding",
  "Hallucination reduction",
  "Human oversight",
  "Accessibility",
  "Secure authentication",
  "Transparent system behavior",
  "Ethical and responsible AI use",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "[Placeholder] The AI assistant transformed how our community accesses information. Support requests dropped significantly while engagement increased.",
    name: "[Placeholder Name]",
    role: "[Placeholder Role]",
    organization: "[Placeholder Organization]",
    isPlaceholder: true,
  },
  {
    quote:
      "[Placeholder] Working with AI Astra felt collaborative and practical. They understood our budget constraints and delivered a solution that actually works for our team.",
    name: "[Placeholder Name]",
    role: "[Placeholder Role]",
    organization: "[Placeholder Organization]",
    isPlaceholder: true,
  },
  {
    quote:
      "[Placeholder] The symptom tracking platform has become an essential tool for our community. Simple, accessible, and thoughtfully designed.",
    name: "[Placeholder Name]",
    role: "[Placeholder Role]",
    organization: "[Placeholder Organization]",
    isPlaceholder: true,
  },
];

export const projectCategories = [
  "All",
  "AI assistants",
  "Healthcare",
  "Nonprofit technology",
  "Automation",
  "Web applications",
  "Analytics",
];

export const projectTypes = [
  "AI chatbot",
  "AI agent",
  "Website development",
  "Workflow automation",
  "Data dashboard",
  "AI consulting",
  "Other",
];

export const organizationTypes = [
  "Nonprofit",
  "School / Education",
  "Community Organization",
  "Startup",
  "Small Business",
  "Healthcare",
  "Other",
];

export const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $30,000",
  "$30,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

export const timelineOptions = [
  "ASAP",
  "1–2 months",
  "3–6 months",
  "6+ months",
  "Flexible",
];

export const aboutValues = [
  {
    title: "Impact first",
    description:
      "Technology should serve people and communities, not the other way around.",
  },
  {
    title: "Practical innovation",
    description:
      "We focus on solutions that work today, not theoretical possibilities.",
  },
  {
    title: "Accessibility",
    description:
      "Digital tools should be usable by everyone, regardless of ability or technical skill.",
  },
  {
    title: "Transparency",
    description:
      "Clear communication, honest timelines, and understandable system behavior.",
  },
  {
    title: "Partnership",
    description:
      "We work alongside your team, building capacity and sharing knowledge.",
  },
  {
    title: "Responsibility",
    description:
      "Ethical AI practices, data privacy, and human oversight in every project.",
  },
];

export const contactSteps = [
  {
    step: "1",
    title: "Introductory conversation",
    description:
      "We'll schedule a brief call to understand your organization and goals.",
  },
  {
    step: "2",
    title: "Requirements review",
    description:
      "We'll discuss your needs, users, timeline, and budget in detail.",
  },
  {
    step: "3",
    title: "Recommended solution",
    description:
      "We'll propose an approach tailored to your organization and resources.",
  },
  {
    step: "4",
    title: "Proposal and timeline",
    description:
      "You'll receive a clear proposal with scope, timeline, and investment.",
  },
];
