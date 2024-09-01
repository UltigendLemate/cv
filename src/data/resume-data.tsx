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
      company: "Hyperleap Software Technologies",
      link: "https://hyperleap.ai",
      badges: ["Remote"],
      title: "Software Developer Intern",
      start: "April 2024",
      end: "Present",
      description:
        "Developed a high-performance multi-modal chat interface using React.js and Redux, driving a 30% increase in adoption. Also led the redesign of the admin console, enhancing LLM management and Developer Experience, and implemented agentic workflows using Semantic Kernel with C#, significantly improving overall UX.",
    },
    {
      company: "Carboledger",
      link: "https://carboledger.com",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "June 2023",
      end: "July 2023",
      description:
        "Migrated the entire blog ecosystem from Next.js to WordPress, enhancing content management for non-technical staff and resulting in an 80% increase in efficiency. Integrated HubSpot into the platform, leading to a 20% increase in qualified leads, and improved the blog's design and SEO, doubling average page views from 2,000 to 4,000 within the first month.",
    },
  ],
  skills: [
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Tailwind CSS",
    "Node.js",
    "DSA",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Redux",
    "Supabase",
    "Prisma",
    "Drizzle",
    "Wordpress",
  ],
  projects: [
    {
      title: "Sneakace",
      techStack: [
        // "Side Project",
        "Firebase",
        "Next.js",
        "MongoDB",
        "Ecommerce",
        // "WebRTC",
      ],
      description: "Ecommerce platform for selling premium laces for sneakers.",
      logo: ConsultlyLogo,
      link: {
        label: "Sneakace",
        href: "https://sneakace.com/",
      },
    },
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
      title: "TourCraft",
      techStack: ["Next.js", "Generative AI","MongoDB"],
      description:
        "Dynamic tour planner for travel enthusiasts. Create customised travel plans in seconds.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/UltigendLemate/tourcraft",
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
        href: "https://github.com/UltigendLemate/wellfound-autoapply",
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
        // label: "mobilevikings.pl",
        href: "https://hammer.co.in",
      },
    },
    {
      title: "Reliable Chemtech",
      techStack: ["Next.js", "Typescript","Tailwind CSS"],
      description:
        "Portfolio website for chemical importing/ exporting/ manufacturing company.",
      // logo: MobileVikingsLogo,
      link: {
        // label: "mobilevikings.pl",
        href: "https://hammer.co.in",
      },
    },

    
  ],
} as const;
