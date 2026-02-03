import {
  Globe,
  Code,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type ServiceSlug = "website-design" | "software-development" | "digital-marketing";

export interface ServiceCard {
  slug: ServiceSlug;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
}

export interface ServiceDetail {
  slug: ServiceSlug;
  title: string;
  tagline: string;
  cardFeatures: string[];
  heroDescription: string;
  fullDescription: string;
  whyChoose: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  deliverables: string[];
  ctaTitle: string;
  ctaDescription: string;
  color: string;
  icon: LucideIcon;
}

export const serviceSlugs: ServiceSlug[] = [
  "website-design",
  "software-development",
  "digital-marketing",
];

const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "website-design": {
    slug: "website-design",
    title: "Website Design",
    tagline: "Stunning, responsive websites that convert visitors into customers",
    cardFeatures: [
      "Responsive Design",
      "User Experience (UX)",
      "Modern UI/UX",
      "SEO Optimization",
      "Performance Optimization",
    ],
    heroDescription:
      "We craft beautiful, fast, and user-focused websites that reflect your brand and drive real business results.",
    fullDescription:
      "Your website is often the first impression customers have of your business. We design and build responsive, accessible websites that look great on every device and are optimized for search engines and performance. From clean corporate sites to dynamic e-commerce platforms, we combine modern design trends with proven UX principles to create experiences that engage and convert.",
    whyChoose: [
      {
        title: "Mobile-first & responsive",
        description:
          "Every layout is designed to look and perform perfectly on phones, tablets, and desktops.",
      },
      {
        title: "SEO & performance built in",
        description:
          "Fast load times and semantic structure so your site ranks well and keeps users engaged.",
      },
      {
        title: "User experience (UX) focus",
        description:
          "Intuitive navigation and clear calls-to-action so visitors find what they need and take the next step.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & strategy",
        description:
          "We learn your goals, audience, and brand so the site aligns with your business.",
      },
      {
        step: 2,
        title: "Design & prototyping",
        description:
          "Wireframes and high-fidelity designs for your approval before any code is written.",
      },
      {
        step: 3,
        title: "Development & testing",
        description:
          "We build with modern tech, test across devices, and ensure accessibility and speed.",
      },
      {
        step: 4,
        title: "Launch & support",
        description:
          "Smooth go-live, basic training, and optional ongoing maintenance and updates.",
      },
    ],
    deliverables: [
      "Responsive website (all devices)",
      "SEO-friendly structure & meta",
      "Performance optimization",
      "Content management setup (if needed)",
      "Basic analytics integration",
    ],
    ctaTitle: "Ready for a website that works as hard as you do?",
    ctaDescription: "Tell us about your project and we’ll outline a plan and timeline.",
    color: "from-blue-500 to-blue-600",
    icon: Globe,
  },
  "software-development": {
    slug: "software-development",
    title: "Software Development",
    tagline: "Custom software solutions built for your business",
    cardFeatures: [
      "Custom Applications",
      "Web Applications",
      "Mobile Apps",
      "API Development",
      "Database Design",
    ],
    heroDescription:
      "From web and mobile apps to APIs and internal tools, we build reliable software that scales with you.",
    fullDescription:
      "Off-the-shelf software rarely fits every workflow. We develop custom applications tailored to your processes, integrating with your existing systems when needed. Our team uses modern stacks and best practices to deliver secure, maintainable code—whether you need a customer-facing web app, an internal dashboard, or a mobile application for iOS and Android.",
    whyChoose: [
      {
        title: "Tailored to your workflow",
        description:
          "Features and flows designed around how your team actually works, not generic templates.",
      },
      {
        title: "Scalable architecture",
        description:
          "Built to grow with your business and handle more users and data over time.",
      },
      {
        title: "Security & maintainability",
        description:
          "Clean code, documentation, and security best practices so your product stays reliable.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Requirements & planning",
        description:
          "We define scope, user stories, and technical approach so everyone is aligned.",
      },
      {
        step: 2,
        title: "Design & architecture",
        description:
          "UI/UX and system design so the product is intuitive and the tech stack is right.",
      },
      {
        step: 3,
        title: "Development & iteration",
        description:
          "Agile sprints with regular demos so you see progress and can adjust as we build.",
      },
      {
        step: 4,
        title: "Deploy & handover",
        description:
          "We launch to your environment, train your team, and provide support and documentation.",
      },
    ],
    deliverables: [
      "Custom web and/or mobile application",
      "API development & integration",
      "Database design & implementation",
      "Documentation & handover",
      "Post-launch support options",
    ],
    ctaTitle: "Have an idea for custom software?",
    ctaDescription: "Share your requirements and we’ll propose a solution and roadmap.",
    color: "from-green-500 to-green-600",
    icon: Code,
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Grow your reach and turn audiences into customers",
    cardFeatures: [
      "Social Media Marketing",
      "Content Marketing",
      "SEO & SEM",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    heroDescription:
      "Strategic digital marketing—from SEO and content to paid campaigns and analytics—to grow your online presence and revenue.",
    fullDescription:
      "Being online isn’t enough; you need a clear strategy to be found and to convert. We help you grow through search optimization (SEO), content marketing, social media, email campaigns, and paid advertising—all backed by data. We focus on channels that fit your audience and goals, and we report in plain language so you always know what’s working.",
    whyChoose: [
      {
        title: "Strategy aligned to goals",
        description:
          "Campaigns and tactics chosen to hit your KPIs, whether that’s traffic, leads, or sales.",
      },
      {
        title: "Data-driven decisions",
        description:
          "Analytics and reporting so we optimize continuously and you see real impact.",
      },
      {
        title: "Content that resonates",
        description:
          "Messaging and content that speak to your audience and support your brand.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Audit & strategy",
        description:
          "We review your current presence, competitors, and goals to build a clear plan.",
      },
      {
        step: 2,
        title: "Channel setup",
        description:
          "SEO, ads, social, and email configured and aligned with your brand and audience.",
      },
      {
        step: 3,
        title: "Content & campaigns",
        description:
          "Ongoing content and campaigns executed and optimized based on performance.",
      },
      {
        step: 4,
        title: "Measure & optimize",
        description:
          "Regular reporting and iterations so we double down on what works.",
      },
    ],
    deliverables: [
      "SEO audit & ongoing optimization",
      "Content strategy & creation",
      "Social media management",
      "Paid campaign setup & management",
      "Analytics & performance reporting",
    ],
    ctaTitle: "Ready to grow your digital presence?",
    ctaDescription: "Tell us your goals and we’ll recommend a strategy and next steps.",
    color: "from-purple-500 to-purple-600",
    icon: TrendingUp,
  },
};

export function getServiceBySlug(slug: string): ServiceDetail | null {
  if (serviceSlugs.includes(slug as ServiceSlug)) {
    return serviceDetails[slug as ServiceSlug];
  }
  return null;
}

export function getServiceCards(): ServiceCard[] {
  return serviceSlugs.map((slug) => {
    const d = serviceDetails[slug];
    return {
      slug: d.slug,
      title: d.title,
      description: d.tagline,
      icon: d.icon,
      features: d.cardFeatures,
      color: d.color,
    };
  });
}
