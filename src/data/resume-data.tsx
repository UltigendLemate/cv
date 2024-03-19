import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chaitanya Anand",
  initials: "CA",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about:
    "Creative problem solver with a passion for Web Development",
  summary:
    "I am a Full-Stack Developer with a passion for building user-friendly and impactful web applications. I am skilled in leveraging AI and modern frameworks (Next.js, React.js) to create solutions that empower businesses and individuals. I am capable of managing large teams and effectively assign work.",
  avatarUrl: "https://avatars.githubusercontent.com/u/92747604",
  personalWebsiteUrl: "https://chaitanyanand.vercel.app/",
  contact: {
    email: "chaitanya.anand@gmail.com",
    tel: "+91 9711091823",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ultigendlemate",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chaitanyanand",
        icon: LinkedInIcon,
      },
   
    ],
  },
  education: [
    {
      school: "Delhi Technological University",
      degree: "Bachelor's Degree in Electronics & Communication",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Carboledger",
      link: "https://carboledger.com",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "June 2023",
      end: "July 2023",
      description:
        "Increased Carboledger's blog efficiency by 80% by migrating to a user-friendly platform, implemented HubSpot to streamline lead generation (20% increase), and doubled blog traffic through SEO best practices. Technologies: React, TypeScript, Wordpress, HubSpot",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    // "GraphQL",
    // "Relay",
    "Python",
    "C++",
    "Tailwind CSS"
  ],
  projects: [
    {
      title: "Shortenn",
      techStack: [
        // "Side Project",
        "TypeScript",
        "Next.js",
        "Supabase",
        "PostgreSQL",
        // "WebRTC",
      ],
      description: "Url shortener with added capabilities to edit/delete links and view analytics.",
      logo: ConsultlyLogo,
      link: {
        label: "shortenn.me",
        href: "https://shortenn.me/",
      },
    },
    {
      title: "Auto Apply Wellfound",
      techStack: ["Automation", "Python", "Selenium", "Script","Gemini"],
      description:
        "Auto apply to jobs on wellfound.com with a custom cover letter.",
      logo: MonitoLogo,
      link: {
        // label: "monito.dev",
        href: "https://github.com/ultigendlemate/auto-apply-wellfound",
      },
    },
    {
      title: "Fresources",
      techStack: ["Community", "Next.js", "Prisma", "PostgreSQL"],
      description:
        "Platform for efficient access to curated, syllabus-relevant academic resources for college students.",
      logo: Minimal,
      link: {
        href: "https://fresources.tech/",
      },
    },
    {
      title: "QuikPlanr",
      techStack: ["Hackathon Project", "Next.js", "Generative AI","Supabase"],
      description:
        "Turn your 2-liner-ideas into actionable plans in seconds.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://devfolio.co/projects/quikplanr-5f4f",
      },
    },

    {
      title: "Synapse",
      techStack: [ "Next.js", "Drizzle","Socket.io","Quill","Typescript"],
      description:
        "A web-app with combined features of Notion and Google Docs.",
      logo: BarepapersLogo,
      link: {
        // label: "barepapers.com",
        href: "https://www.linkedin.com/posts/chaitanyanand_level-up-your-workflow-my-journey-of-building-activity-7148726982850019328-QuJj/"
      },
    },
    {
      title: "Growth Rocket",
      techStack: ["TypeScript", "Next.js"],
      description: "Portfolio website for social media agency.",
      logo: YearProgressLogo,
      link: {
        // label: "getyearprogress.com",
        href: "https://growthrocket.media/",
      },
    },
    {
      title: "Sky Uniforms",
      techStack: [
        "Wordpress",

      ],
      description:
        "Boosting online presence for apparels manufacturing company.",
      // logo: ParabolLogo,
      link: {
        // label: "github.com",
        href: "https://skyuniforms.in/",
      },
    },
    {
      title: "Forward Education",
      techStack: [
        // "Next.js",

        "SEO",
        "React",
        // "Node.js",
        // "GraphQL",
      ],
      description:
        "Increasing conversions for the educational institute based in Delhi.",
      // logo: EvercastLogo,
      link: {
        // label: "evercast.us", 
        href: "https://forwardeducation.co.in/",
      },
    },
    {
      title: "Hammer",
      techStack: ["Lead Developer", "Wordpress"],
      description:
        "Users can check archive magazines and read in a 3d flipbook format.",
      // logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Incoming India",
      techStack: [ "Next.js", "Typescript"],
      description:
        "Portfolio website targetting inbound travellers.",
      // logo: Howdy,
      link: {
        // label: "play.google.com",
        href: "https://incomingindia.co.in/",
      },
    },
    
  ],
} as const;
