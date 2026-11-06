import jayasuryaImg from '../assets/team/jayasurya.jpg';
import manisaiImg from '../assets/team/manisai.jpg';
import manidharImg from '../assets/team/manidhar.jpg';

import coord1Img from '../assets/team/coordinator_1.png';
import coord2Img from '../assets/team/coordinator_2.png';
import coord3Img from '../assets/team/coordinator_3.png';
import coord4Img from '../assets/team/coordinator_4.png';
import coord5Img from '../assets/team/coordinator_5.png';

export const clubConfig = {
  name: "AI Forge",
  shortName: "AIF",
  clubNumber: "12",
  university: "Veltech University",
  department: "Department of Computer Science & Engineering (AI & ML)",
  tagline: "Learn → Practice → Build → Deploy → Present",
  headline: "Pioneering Practical AI & Project Engineering at Veltech.",
  description: "A student-led, beginner-friendly AI community at Veltech University dedicated to demystifying Artificial Intelligence. We take students step-by-step from core Python fundamentals and prompt engineering to building autonomous agents, integrating APIs, and deploying production-ready applications.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    discord: "https://discord.com",
    email: "aiforge.veltech@gmail.com"
  },
  stats: {
    membersCount: 8,
    weeklySessions: 3,
    activitiesTracks: 7,
    learningStages: 5,
    openPositions: 2
  }
};

export const mainGoals = [
  {
    id: 1,
    title: "Zero-Fluff Programming Mastery",
    desc: "Master clean, idiomatic Python, data structures, and modular software architecture from day one.",
    icon: "Brain"
  },
  {
    id: 2,
    title: "Mathematical Grounding Without Fear",
    desc: "Internalize linear algebra, calculus, and probability directly through code visualizers and geometric intuition.",
    icon: "Calculator"
  },
  {
    id: 3,
    title: "From-Scratch Machine Learning",
    desc: "Build regression, classification, and clustering pipelines with rigorous evaluation and feature engineering.",
    icon: "Cpu"
  },
  {
    id: 4,
    title: "Deep Neural Network Engineering",
    desc: "Design, train, and optimize convolutional vision and sequence networks using industry-standard PyTorch.",
    icon: "Sparkles"
  },
  {
    id: 5,
    title: "Production Generative AI & RAG",
    desc: "Deploy Retrieval-Augmented Generation systems using vector databases, structured outputs, and context optimization.",
    icon: "FolderGit2"
  },
  {
    id: 6,
    title: "Autonomous Multi-Agent Systems",
    desc: "Coordinate collaborative swarms of specialized AI agents with CrewAI and LangGraph for complex task automation.",
    icon: "Cloud"
  },
  {
    id: 7,
    title: "Full-Stack Deployment at ₹0 Cost",
    desc: "Package AI backends with FastAPI and React, hosting live production endpoints on modern cloud platforms.",
    icon: "Presentation"
  },
  {
    id: 8,
    title: "Hackathon Podiums & Career Proof",
    desc: "Empower students to win national competitions, publish open-source repos, and secure premier AI careers.",
    icon: "Users"
  }
];

export const teamMembers = [
  // Layer 1: Head (R. Jayasurya)
  {
    id: "jayasurya-head",
    name: "R. Jayasurya",
    vtuNo: "VTU 27657",
    role: "Head, AI Forge",
    mainArea: "AI Tools / Practical Development",
    layer: 1,
    layerName: "Club Head",
    year: "B.Tech - III Year",
    department: "CSE (AI & ML)",
    badge: "Club Head & Founder",
    avatar: jayasuryaImg,
    bio: "Leading AI Forge's development vision. Focused on teaching students how to use modern AI to build applications from scratch and take them from raw ideas to deployed, market-ready products.",
    topics: [
      "Prompt engineering & AI models",
      "AI agents & agent workflows (CrewAI, OpenHands)",
      "Vibe coding & AI-assisted development",
      "AI-based frontend & backend integration",
      "API integration, GitHub & databases",
      "Step-by-step project development",
      "Deployment, hosting & cloud platforms",
      "Free AI tools vs paid tools & limitations"
    ],
    skills: ["Prompt Engineering", "CrewAI", "Agent Workflows", "FastAPI", "Full-Stack AI", "Deployment"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "jayasurya.ai@veltech.edu"
  },

  // Layer 2: Vice Heads
  {
    id: "manisai-vice-head",
    name: "Mani Sai",
    vtuNo: "VTU 28846",
    role: "Vice Head, AI Forge",
    mainArea: "AI / ML Theory & Technical Sessions",
    layer: 2,
    layerName: "Core Executive",
    year: "B.Tech - III Year",
    department: "CSE (AI & ML)",
    badge: "Vice Head",
    avatar: manisaiImg,
    bio: "Directing technical sessions and deep-dive machine learning theory. Focuses on data modeling, predictive pipelines, IoT integration, and robust system architecture.",
    topics: [
      "Python for Machine Learning",
      "Machine Learning fundamentals & algorithms",
      "Predictive maintenance & ML prediction pipelines",
      "Data analysis & anomaly detection",
      "Dashboard development & visualization",
      "FastAPI, React & REST APIs",
      "SQL / SQLite & Git / GitHub",
      "ESP32, IoT & sensor integration",
      "System architecture & research papers"
    ],
    skills: ["Machine Learning", "Predictive Analytics", "FastAPI", "IoT / ESP32", "System Architecture"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "manisai.vtu28846@veltech.edu"
  },
  {
    id: "manidhar-vice-head",
    name: "Manidhar Reddy",
    vtuNo: "VTU 28274",
    role: "Vice Head, AI Forge",
    mainArea: "Python / Foundations & Math",
    layer: 2,
    layerName: "Core Executive",
    year: "B.Tech - III Year",
    department: "CSE (AI & ML)",
    badge: "Vice Head",
    avatar: manidharImg,
    bio: "Managing programming foundations and mathematical groundwork for AI. Dedicated to helping absolute beginners get fluent in Python, linear algebra, frontend basics, and AI-assisted workflows.",
    topics: [
      "Python from basic to intermediate level",
      "Basic mathematics for AI (Linear Algebra, Stats)",
      "FastAPI & React fundamentals",
      "Frontend basics & web styling",
      "Vibe coding & AI-assisted development",
      "GitHub version control & SQL databases",
      "Developing projects with AI tooling"
    ],
    skills: ["Python Mastery", "Math for AI", "React Basics", "Vibe Coding", "Git / GitHub"],
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "manidhar.vtu28274@veltech.edu"
  },

  // Layer 3: Student Coordinators
  {
    id: "datta-sai-chetan",
    name: "D. Venkata Datta Sai Chetan",
    role: "Student Coordinator",
    layer: 3,
    layerName: "Student Coordinators",
    year: "B.Tech - III Year",
    department: "CSE (AI & ML)",
    badge: "Student Coordinator",
    avatar: coord1Img,
    bio: "Student Coordinator managing student onboarding, workshop logistics, and technical track coordination.",
    skills: ["AI Foundations", "Event Coordination", "Python", "Technical Support"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: "danisha",
    name: "R. Danisha",
    role: "Student Coordinator",
    layer: 3,
    layerName: "Student Coordinators",
    year: "B.Tech - III Year",
    department: "CSE (AI & ML)",
    badge: "Student Coordinator",
    avatar: coord2Img,
    bio: "Student Coordinator facilitating peer study circles, ideathon registrations, and session moderation.",
    skills: ["Machine Learning", "Event Operations", "Python", "Project Planning"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: "meganth",
    name: "R. Meganth",
    role: "Student Coordinator",
    layer: 3,
    layerName: "Student Coordinators",
    year: "B.Tech - III Year",
    department: "CSE (AI & ML)",
    badge: "Student Coordinator",
    avatar: coord3Img,
    bio: "Student Coordinator assisting with hands-on lab sessions, challenge problem curation, and debugging.",
    skills: ["Data Science", "Python", "System Infrastructure", "Team Coordination"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: "anusha",
    name: "J. Anusha",
    role: "Student Coordinator",
    layer: 3,
    layerName: "Student Coordinators",
    year: "B.Tech - III Year",
    department: "CSE (AI & ML)",
    badge: "Student Coordinator",
    avatar: coord4Img,
    bio: "Student Coordinator driving club documentation, student feedback loops, and creative outreach.",
    skills: ["Community Outreach", "Event Management", "Python", "Documentation"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    id: "ganesh",
    name: "D. Ganesh",
    role: "Student Coordinator",
    layer: 3,
    layerName: "Student Coordinators",
    year: "B.Tech - III Year",
    department: "CSE (AI & ML)",
    badge: "Student Coordinator",
    avatar: coord5Img,
    bio: "Student Coordinator organizing coding sprints, hackathon teams, and hardware/IoT testbeds.",
    skills: ["Computer Vision", "Deep Learning", "Python", "Technical Operations"],
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
];

export const studentCoordinators = teamMembers.filter(m => m.layer === 3);

export const weeklySessions = [
  {
    id: 1,
    day: "Session 01",
    tag: "Theory & Foundations",
    title: "Concepts & Machine Learning Principles",
    lead: "Mani Sai & Manidhar Reddy",
    desc: "Deep-dive into AI concepts, mathematical intuition, model architectures, and Python data structures without confusing jargon.",
    focus: ["Core Math Intuition", "Algorithm Breakdown", "Architecture Diagrams", "Interactive Q&A"]
  },
  {
    id: 2,
    day: "Session 02",
    tag: "Tools & Vibe Coding",
    title: "Coding, AI Agents & Tool Mastery",
    lead: "R. Jayasurya",
    desc: "Hands-on live coding with prompt engineering, agent orchestration (CrewAI, OpenHands), APIs, and fast UI prototyping.",
    focus: ["Live Vibe Coding", "Agentic Frameworks", "API Key Setup", "Cursor & LLM Workflows"]
  },
  {
    id: 3,
    day: "Session 03",
    tag: "Project Lab & Tasks",
    title: "Practical Lab, Tasks & Project Sprint",
    lead: "All Core Leads & Coordinators",
    desc: "Students work on real tasks, debug errors together, build full-stack features, push to GitHub, and test live deployments.",
    focus: ["Hands-on Tasks", "1-on-1 Debugging", "GitHub Pull Requests", "Project Reviews"]
  }
];

export const learningPipeline = [
  {
    step: "01",
    phase: "Learn",
    title: "Step-by-Step Concepts",
    summary: "Clear, beginner-friendly lectures on Python, math basics, ML algorithms, and modern LLM capabilities.",
    icon: "BookOpen"
  },
  {
    step: "02",
    phase: "Practice",
    title: "Small Tasks & Challenges",
    summary: "Immediate hands-on exercises, prompt engineering drills, and coding problem sets after every class.",
    icon: "Terminal"
  },
  {
    step: "03",
    phase: "Build",
    title: "Full-Stack Project Development",
    summary: "Connecting React frontends to FastAPI backends, vector databases, and external AI models.",
    icon: "Layers"
  },
  {
    step: "04",
    phase: "Deploy",
    title: "Cloud & Production Hosting",
    summary: "Taking local projects live on Vercel, Render, or HuggingFace with live public URLs for portfolios.",
    icon: "CloudLightning"
  },
  {
    step: "05",
    phase: "Present",
    title: "Demonstration & Hackathons",
    summary: "Pitching projects to faculty, club showcases, and competing in national and university hackathons.",
    icon: "Trophy"
  }
];

export const clubActivities = [
  {
    id: "workshops",
    title: "Hands-on Workshops",
    badge: "Skill Building",
    desc: "Interactive technical bootcamps on Generative AI, AI Agents, Python for AI, and API Integration.",
    items: [
      "Artificial Intelligence & Machine Learning Fundamentals",
      "Prompt Engineering & Agent Workflows",
      "AI-Assisted Coding & Vibe Coding Mastery",
      "AI-Based Full-Stack Web & App Development",
      "API Integration & Real-Time Data Streaming"
    ]
  },
  {
    id: "hackathons",
    title: "Hackathons & Ideathons",
    badge: "Competitions",
    desc: "Club-level sprints and national hackathon mentorship to build prototypes under pressure.",
    items: [
      "Problem Framing & Ideation Sessions",
      "Rapid AI-Assisted MVP Prototyping",
      "Cross-Functional Team Collaboration",
      "Live Pitching, Demoing & Technical Feedback"
    ]
  },
  {
    id: "clinics",
    title: "Project Interaction & Debugging Clinics",
    badge: "Mentorship",
    desc: "Dedicated 1-on-1 and group office hours to solve architecture roadblocks and fix errors.",
    items: [
      "Project Architecture & Tool Selection Reviews",
      "Live Code Debugging & Troubleshooting",
      "API, Database & Authentication Guidance",
      "Deployment Support & Optimization"
    ]
  },
  {
    id: "challenges",
    title: "AI Challenges & Showcases",
    badge: "Recognition",
    desc: "Weekly prompt challenges, mini-project contests, and student demo days.",
    items: [
      "Weekly AI Prompting Battles",
      "Mini-Project Speed Coding Challenges",
      "Club-Wide Project Demo Days",
      "Portfolio & Resume Review Sessions"
    ]
  }
];

export const projectLifecycle = [
  { step: "01", title: "Selecting an Idea", desc: "Finding real campus or industry problems solvable via AI." },
  { step: "02", title: "Project Planning", desc: "Defining architecture, data flow, and user journeys." },
  { step: "03", title: "Choosing Tools", desc: "Selecting optimal models, libraries (CrewAI, PyTorch, etc.)." },
  { step: "04", title: "Frontend & Backend", desc: "Crafting UI in React and API endpoints in FastAPI." },
  { step: "05", title: "APIs & Databases", desc: "Integrating LLM APIs, SQLite, and Vector stores." },
  { step: "06", title: "GitHub & Versioning", desc: "Clean commits, branching, and open-source collaboration." },
  { step: "07", title: "Testing & Bug Fixing", desc: "Validating edge cases, latency, and model outputs." },
  { step: "08", title: "Deployment & Demo", desc: "Deploying to cloud hosting and presenting live demos." }
];

export const techStack = [
  { name: "Python & ML", category: "Core AI", desc: "NumPy, Pandas, Scikit-Learn, PyTorch" },
  { name: "FastAPI & REST", category: "Backend", desc: "High-performance asynchronous Python API servers" },
  { name: "React & Tailwind", category: "Frontend", desc: "Modern interactive reactive user interfaces" },
  { name: "SQL & SQLite", category: "Databases", desc: "Structured data storage and relational querying" },
  { name: "Git & GitHub", category: "DevOps", desc: "Version control, collaboration, and open-source repos" },
  { name: "GPT & Claude", category: "LLMs", desc: "State-of-the-art foundation models and API integration" },
  { name: "CrewAI & OpenHands", category: "AI Agents", desc: "Multi-agent autonomous collaborative systems" },
  { name: "ESP32 & IoT", category: "Hardware AI", desc: "Edge sensors, microcontrollers, and IoT pipelines" },
  { name: "Vercel & Cloud", category: "Hosting", desc: "Production CI/CD deployment and serverless runtime" }
];

export const studentBenefits = [
  "Comprehensive understanding of AI without overwhelming math",
  "Extensive hands-on practice with modern AI developer tools",
  "Live portfolio-grade projects built and deployed on the web",
  "Mastery of APIs, databases, Git, and cloud infrastructure",
  "Confidence in participating and winning in hackathons",
  "Sharpened technical communication, pitching, and demo skills",
  "Direct mentorship from final & third-year AI engineering leads",
  "Collaborative network of passionate peer innovators at Veltech"
];

export const openRoles = [
  { role: 'Student Coordinator (Technical Tracks)', spots: 2 },
  { role: 'Student Coordinator (Events & Logistics)', spots: 2 },
  { role: 'Student Coordinator (Media & Documentation)', spots: 1 }
];
