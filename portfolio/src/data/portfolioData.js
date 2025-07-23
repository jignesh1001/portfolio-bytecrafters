
// src/data/portfolioData.js

export const personalInfo = {
  name: "trioMinds",
  title: "your way to digitize your business",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Mumbai,India",
  bio: [
    "I'm a passionate full-stack developer with over 3 years of experience in creating modern web applications. I love working with React, Node.js, and exploring new technologies to build innovative solutions.",
    "When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring the latest trends in web development. I believe in continuous learning and staying updated with the ever-evolving tech landscape."
  ]
};

export const skills = [
  {
    id: 1,
    icon: "⚛️",
    title: "Frontend Development",
    description: "React, Vue.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind",
    technologies: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Sass"]
  },
  {
    id: 2,
    icon: "🔧",
    title: "Backend Development",
    description: "Node.js, Python, Express, Django, REST APIs, GraphQL",
    technologies: ["Node.js", "Python", "Express.js", "Django", "REST APIs", "GraphQL", "JWT", "WebSockets"]
  },
  {
    id: 3,
    icon: "🗄️",
    title: "Database & Cloud",
    description: "MongoDB, PostgreSQL, AWS, Firebase, Docker, Vercel",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Firebase", "Docker", "Vercel", "Netlify"]
  },
  {
    id: 4,
    icon: "🎨",
    title: "Design & UX",
    description: "Figma, Adobe XD, UI/UX Design, Responsive Design",
    technologies: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design", "Wireframing"]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.",
    image: "/projects/91642c318bcb3c682290fa9f68b8c69d.jpg", // Add your project images to public/projects/
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Material-UI"],
    liveDemo: "https://reloadcasuals.in/",
    github: "",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/projects/a531797c96370857cbd5a6d9e95172b9.jpg",
    technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Redux", "Tailwind CSS"],
    liveDemo: "https://your-taskmanager-demo.com",
    github: "https://github.com/yourusername/task-manager",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
    image: "/projects/d49eff09592df66f5c637a366d35768a.jpg",
    technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation", "CSS3"],
    liveDemo: "https://your-weather-demo.com",
    github: "https://github.com/yourusername/weather-dashboard",
    featured: true
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard with real-time data visualization and reporting features.",
    image: "/projects/ede98051911b94cf0aeb0d098c908261.jpg",
    technologies: ["Vue.js", "D3.js", "Express", "MongoDB", "WebSockets"],
    liveDemo: "https://your-social-demo.com",
    github: "https://github.com/yourusername/social-dashboard",
    featured: false
  },
  {
    id: 5,
    title: "Blog CMS",
    description: "A content management system for blogs with markdown support, user roles, and SEO optimization.",
    image: "/projects/ede98051911b94cf0aeb0d098c908261.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "NextAuth"],
    liveDemo: "https://your-blog-demo.com",
    github: "https://github.com/yourusername/blog-cms",
    featured: false
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter"
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "mail"
  }
];

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    company: "Tech Corp",
    content: "Working with [Your Name] was an absolute pleasure. Their attention to detail and technical expertise delivered exceptional results.",
    avatar: "/testimonials/john.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CEO",
    company: "Startup Inc",
    content: "The web application exceeded our expectations. Professional, responsive, and delivered on time. Highly recommended!",
    avatar: "/testimonials/jane.jpg"
  }
];

export const experience = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc",
    period: "2022 - Present",
    description: "Lead frontend development for multiple client projects using React and Vue.js. Mentored junior developers and established coding standards.",
    technologies: ["React", "Vue.js", "TypeScript", "GraphQL"]
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Developed and maintained web applications for various clients. Worked with both frontend and backend technologies.",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Startup Company",
    period: "2019 - 2020",
    description: "Built responsive web applications and collaborated with designers to implement pixel-perfect UI/UX designs.",
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery"]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    period: "2015 - 2019",
    description: "Graduated with honors. Focused on web development, algorithms, and software engineering principles."
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "ABC123456"
  },
  {
    id: 2,
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2022",
    credentialId: "GCP789012"
  }
];


export const contactInfo = {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country"
};