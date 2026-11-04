export const personalInfo = {
  name: "Nilesh Srivastava",
  title: "DevOps Engineer",
  roles: [
    "DevOps Engineer",
    "Kubernetes & MicroK8s Specialist",
    "Docker & APM Microservices Architect",
    "OpenTelemetry & Observability Expert",
    "Linux & Cloud Infrastructure Engineer",
    "Web Developer (React, JavaScript)"
  ],
  bio: "DevOps Engineer with hands-on experience deploying microservices-based APM platforms using Docker and Docker Compose, alongside local Kubernetes deployments with MicroK8s. Experienced in Linux, NGINX, OpenTelemetry instrumentation, monitoring agents, and troubleshooting telemetry pipelines for Java, .NET, Node.js, and Next.js applications.",
  aboutStory: [
    "Hello! I'm Nilesh Srivastava, a DevOps Engineer based in Lucknow, Uttar Pradesh. My core expertise lies in deploying and configuring containerized microservices-based APM platforms using Docker, Docker Compose, and Kubernetes (MicroK8s).",
    "I specialize in end-to-end telemetry observability using OpenTelemetry, Prometheus, and eBPF. From implementing zero-code instrumentation across Java, .NET, Node.js, and Next.js applications, to packaging standalone binaries on air-gapped Linux environments and hardening NGINX reverse proxies, I build reliable, production-ready systems.",
    "With a strong foundation in Computer Science and hands-on exposure to cloud networks, enterprise IT support, and web technologies (React, JavaScript, C#), I bring both systems agility and developer empathy to engineering squads."
  ],
  location: "Lucknow, Uttar Pradesh, India",
  email: "nileshsr86@gmail.com",
  phone: "+91 7007160452",
  availability: "Open for Roles & Projects",
  resumePath: "/assets/Nilesh_Srivastava_Resume.pdf",
  profileImg: "/assets/profile.jpg",
  socials: {
    github: "https://github.com/NileshSrivastava",
    linkedin: "https://www.linkedin.com/in/nilesh-srivastava-070022215/",
    email: "mailto:nileshsr86@gmail.com",
    phone: "tel:+917007160452"
  }
};

export const stats = [
  {
    number: "1,200+",
    title: "Events / Min Telemetry",
    desc: "Validated ingestion & real-time dashboard visibility in client POCs."
  },
  {
    number: "1,500+",
    title: "IT Support Resolutions",
    desc: "Enterprise troubleshooting using ServiceNow ITSM for TENET Healthcare."
  },
  {
    number: "99%",
    title: "Data Accuracy",
    desc: "Rigorous telemetry validation across Karnataka Treasury & Suzuki Digital."
  },
  {
    number: "2 Ports",
    title: "Hardened Exposure",
    desc: "Standardized secure APM networking via NGINX & Docker Compose."
  }
];

export const skillsData = [
  {
    id: 1,
    name: "Docker & Docker Compose",
    category: "devops",
    level: "Advanced",
    percentage: 95,
    icon: "docker"
  },
  {
    id: 2,
    name: "Kubernetes & MicroK8s",
    category: "devops",
    level: "Advanced",
    percentage: 90,
    icon: "k8s"
  },
  {
    id: 3,
    name: "Linux, systemd & NSSM",
    category: "devops",
    level: "Advanced",
    percentage: 92,
    icon: "linux"
  },
  {
    id: 4,
    name: "NGINX & Traffic Routing",
    category: "devops",
    level: "Proficient",
    percentage: 88,
    icon: "nginx"
  },
  {
    id: 5,
    name: "OpenTelemetry & APM",
    category: "observability",
    level: "Expert",
    percentage: 95,
    icon: "otel"
  },
  {
    id: 6,
    name: "Prometheus & eBPF Tracing",
    category: "observability",
    level: "Proficient",
    percentage: 85,
    icon: "prometheus"
  },
  {
    id: 7,
    name: "AWS (EC2, VPC, Subnets, SG)",
    category: "cloud",
    level: "Proficient",
    percentage: 82,
    icon: "aws"
  },
  {
    id: 8,
    name: "Git, GitHub & CI/CD Actions",
    category: "cloud",
    level: "Advanced",
    percentage: 90,
    icon: "git"
  },
  {
    id: 9,
    name: "YAML, ConfigMaps & Secrets",
    category: "devops",
    level: "Advanced",
    percentage: 92,
    icon: "yaml"
  },
  {
    id: 10,
    name: "Node.js, Next.js & REST APIs",
    category: "dev",
    level: "Proficient",
    percentage: 85,
    icon: "nodejs"
  },
  {
    id: 11,
    name: "Java, .NET, C# & WebSphere",
    category: "dev",
    level: "Proficient",
    percentage: 82,
    icon: "java"
  },
  {
    id: 12,
    name: "ServiceNow ITSM & L1.5 Support",
    category: "observability",
    level: "Advanced",
    percentage: 90,
    icon: "servicenow"
  }
];

export const softSkills = [
  "🛡️ Air-Gapped VM Deployments",
  "🔍 Distributed & Layer 7 Tracing",
  "⚡ Zero-Code Instrumentation",
  "🚀 Microservices Networking",
  "📈 Synthetic Monitoring",
  "🔒 Secrets & Config Management",
  "👥 SRE Training & Knowledge Transfer",
  "🛠️ Incident Management & Troubleshooting"
];

export const experienceData = [
  {
    id: 1,
    role: "DevOps Engineer",
    company: "CodeXray / Codifinary Technologies Private Limited",
    period: "Apr 2026 – Present",
    location: "Full Time",
    desc: "Driving core client-side and cluster APM deployments, telemetry instrumentation, monitoring agents, and observability pipelines for microservice workloads.",
    bullets: [
      "Standardized client-side APM deployment using Docker Compose and NGINX, limiting externally accessible ports to 2 and reducing direct exposure of backend services.",
      "Implemented zero-code instrumentation for Java (JBoss and IBM WebSphere), .NET, Node.js, and Next.js applications, validating telemetry ingestion and dashboard visibility at 1,200 events per minute during client POCs.",
      "Supported Node, .NET, Windows, Cluster, and Database Agents across 8 nodes; troubleshot host metrics, container discovery, database telemetry, cluster data, and eBPF-based observability.",
      "Packaged and deployed standalone Node and Database Agent binaries on air-gapped Linux VMs, configuring systemd services to run monitoring agents without internet or container-registry access.",
      "Orchestrated rigorous validation of telemetry ingestion for Node.js, Java, Python, and Next.js workloads across Karnataka Treasury and Suzuki Digital POCs, achieving 99% data accuracy.",
      "Trained four SRE team members on CodeXray platform workflows and operational procedures."
    ],
    tags: ["Docker", "Docker Compose", "Kubernetes", "MicroK8s", "NGINX", "OpenTelemetry", "eBPF", "Linux systemd", "Java / .NET"]
  },
  {
    id: 2,
    role: "Graduate Trainee – L1.5 Technical Support",
    company: "HCL Technologies (TENET Healthcare Project)",
    period: "Mar 2025 – Feb 2026",
    location: "Lucknow / Remote",
    desc: "Delivered technical incident resolution and enterprise system support for healthcare infrastructure under strict SLA requirements.",
    bullets: [
      "Resolved 1,500+ IT support tickets using ServiceNow ITSM, troubleshooting Windows, VPN, printer, driver, password, network-drive, and application connectivity issues.",
      "Provided remote technical support, documented incident resolutions in ServiceNow, and escalated complex Windows and application issues to the appropriate support teams.",
      "Maintained high first-contact resolution rates and consistent client customer satisfaction ratings."
    ],
    tags: ["ServiceNow ITSM", "Windows Administration", "VPN & Networking", "Incident Management", "Troubleshooting"]
  },
  {
    id: 3,
    role: "Software Development Engineer Intern",
    company: "IT4T Solutions (Mid-Office Operations)",
    period: "Aug 2024 – Nov 2024",
    location: "Internship",
    desc: "Contributed to backend flight booking data exchanges and frontend UI enhancements for mid-office travel operations.",
    bullets: [
      "Developed reusable C# request and response structures using XML and JSON to support flight API integrations and backend mid-office workflows, improving consistency across API data exchanges.",
      "Contributed to frontend development and flight API integration using HTML, CSS, and jQuery, leveraging Git/GitHub for version control and collaborative development."
    ],
    tags: ["C#", "XML & JSON", "REST APIs", "HTML / CSS", "jQuery", "Git / GitHub"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "CodeXray APM — Client Deployment",
    category: "Microservices & Networking",
    desc: "Configured Docker Compose networking, service dependencies, and NGINX internal routing for a microservices-based APM platform, keeping backend services internal and limiting external exposure to 2 ports.",
    stack: ["Docker", "Docker Compose", "NGINX", "Microservices", "Linux"],
    bannerClass: "project-banner-1",
    url: "docker-compose.codexray.internal"
  },
  {
    id: 2,
    title: "CodeXray APM — Local Kubernetes Deployment",
    category: "Kubernetes Orchestration",
    desc: "Orchestrated individual APM services on MicroK8s using separate Kubernetes manifests and ConfigMaps, configured service dependencies and connectivity, exposed services through NodePort, and managed application secrets using Kubernetes Secrets.",
    stack: ["MicroK8s", "Kubernetes", "YAML", "ConfigMaps", "K8s Secrets"],
    bannerClass: "project-banner-2",
    url: "k8s-microk8s.cluster.local"
  },
  {
    id: 3,
    title: "Web Development Portfolio (React.js)",
    category: "Frontend Web Application",
    desc: "Built responsive web pages and React interfaces using useState for state management and useEffect for side effects, improving UI responsiveness and simplifying component-level state handling across multiple interfaces.",
    stack: ["React", "JavaScript (ES6+)", "Vite", "Modern CSS", "Responsive Design"],
    bannerClass: "project-banner-3",
    url: "nilesh-portfolio.dev"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science",
    institution: "Ambalika Institute of Management and Technology",
    period: "2020 — 2024",
    location: "Lucknow, Uttar Pradesh",
    desc: "Comprehensive 4-year technical curriculum in Computer Science, covering operating systems, networking, database management, container architecture, and software engineering principles."
  },
  {
    id: 2,
    degree: "Intermediate — ISC",
    major: "Senior Secondary Education",
    institution: "St. Dominic Savio College",
    period: "2019 — 2020",
    location: "Lucknow, Uttar Pradesh",
    desc: "Core analytical foundations in Mathematics, Physics, Chemistry, and fundamentals of Computer Science and programming."
  },
  {
    id: 3,
    degree: "Secondary Education — ICSE",
    major: "High School Certificate",
    institution: "St. Dominic Savio College",
    period: "2017 — 2018",
    location: "Lucknow, Uttar Pradesh",
    desc: "Foundational schooling with strong emphasis on sciences, mathematics, computer applications, and analytical problem-solving."
  }
];

