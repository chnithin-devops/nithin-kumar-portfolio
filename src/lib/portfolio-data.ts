import resumeAsset from "@/assets/resume.pdf.asset.json";
import profileAsset from "@/assets/profile.png.asset.json";

export const RESUME_URL = resumeAsset.url;
export const PROFILE_IMG = profileAsset.url;

export const PROFILE = {
  name: "Nithin Kumar",
  fullName: "Ch Nithin Kumar",
  titles: [
    "DevOps Engineer",
    "Cloud Engineer",
    "Azure DevOps Engineer",
    "Azure Specialist",
  ],
  email: "chnithinkumar786@gmail.com",
  phone: "+91 7075016326",
  phoneRaw: "+917075016326",
  linkedin: "https://www.linkedin.com/in/chnithin",
  github: "https://github.com/chnithin-devops",
  location: "India",
  availability: "Available for Work",
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export const ABOUT_STATS = [
  { value: 2.5, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Cloud & DevOps Tools" },
  { value: 1, suffix: "", label: "Flagship Project" },
  { value: 2, suffix: "", label: "Certifications" },
];

export const EXPERIENCE = [
  {
    company: "Zasta Enterprise Pvt Ltd",
    role: "DevOps Engineer",
    duration: "October 2023 – Present",
    location: "India",
    bullets: [
      "Build CI/CD pipelines with Azure DevOps and Jenkins, integrated with SonarQube, Checkmarx and Mend for quality and security gates.",
      "Develop scripts for build, deployment, and maintenance using Jenkins, Azure DevOps, Docker and Maven.",
      "Handle Production and Staging deployments across Dev, Test, Stage and Prod environments.",
      "Set up DevOps process governance across internal projects and enforce best practices.",
      "Design container-based workflows using Docker and Azure Kubernetes Service (AKS).",
      "Implement solutions that enable Development and Operations teams to build, deploy, monitor and test applications.",
      "Automate compilation, testing and archiving of builds and code changes.",
      "Act as single point of contact between Project teams and the DevOps team.",
      "Own release management, SVN/Git code control, and DB script maintenance for releases.",
      "Work with Azure data platform: Azure SQL, Synapse Analytics, Data Factory (ADF), Databricks (ADB), ADLS Gen2 and Key Vault.",
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Cloud Platforms",
    skills: [
      { name: "Microsoft Azure", level: 92 },
      { name: "AWS", level: 80 },
      { name: "Azure DevOps", level: 93 },
      { name: "Azure Key Vault", level: 82 },
    ],
  },
  {
    title: "CI/CD & Automation",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "Azure Pipelines", level: 92 },
      { name: "Maven", level: 85 },
      { name: "Shell / Bash", level: 82 },
    ],
  },
  {
    title: "Containers & IaC",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes (AKS)", level: 85 },
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 78 },
    ],
  },
  {
    title: "Source Control & Tracking",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "SVN", level: 80 },
      { name: "Azure Boards", level: 88 },
      { name: "Redmine", level: 78 },
    ],
  },
  {
    title: "Data & Databases",
    skills: [
      { name: "Azure SQL", level: 82 },
      { name: "Azure Synapse", level: 78 },
      { name: "Azure Data Factory", level: 80 },
      { name: "Databricks", level: 75 },
      { name: "MySQL / Oracle / SQL Server", level: 80 },
    ],
  },
  {
    title: "Quality & Security",
    skills: [
      { name: "SonarQube", level: 88 },
      { name: "Checkmarx", level: 82 },
      { name: "Mend (WhiteSource)", level: 80 },
      { name: "Linux / Windows Admin", level: 85 },
      { name: "Python / PowerShell", level: 78 },
    ],
  },
];

export const PROJECT = {
  name: "IPOS",
  tagline: "Integrated Port Operating System",
  overview:
    "IPOS integrates the core functions of terminal and vessel operations — registration, berthing, pilotage, cargo load/discharge, tracking, stuffing/de-stuffing and invoicing. It powers warehouse management, cargo inventory control, accurate cargo accounting, automatic invoice generation, and EIS/EDI reporting for modern ports.",
  responsibilities: [
    "Build and maintain CI/CD pipelines integrated with SonarQube quality gates.",
    "Author build, deployment and maintenance scripts using Jenkins, Azure DevOps, Docker and Maven.",
    "Own Production and Staging deployments with zero-downtime release windows.",
    "Implement Docker-based pipelines and AKS-based container orchestration.",
    "Set up Continuous Deployment processes and advise teams on best practices.",
    "Target release items with the Dev team and maintain DB scripts for every release.",
    "Manage SVN/Git code control and release management end-to-end.",
  ],
  architecture: [
    "Microservices packaged as Docker images, orchestrated on Azure Kubernetes Service (AKS).",
    "Infrastructure provisioned as code via Terraform across Dev, Test, Stage and Prod.",
    "Secrets and connection strings centralized in Azure Key Vault.",
    "Data plane on Azure SQL, Synapse Analytics, ADF and Databricks with ADLS Gen2 storage.",
  ],
  stack: [
    "Azure DevOps",
    "Jenkins",
    "Docker",
    "AKS",
    "Terraform",
    "Ansible",
    "SonarQube",
    "Checkmarx",
    "Mend",
    "Maven",
    "Azure SQL",
    "Azure Synapse",
    "ADF",
    "Databricks",
    "Key Vault",
  ],
  pipeline: [
    "Commit → Git / SVN",
    "Build & Test → Maven + Jenkins / Azure Pipelines",
    "Quality & Security → SonarQube, Checkmarx, Mend",
    "Package → Docker image + push to registry",
    "Provision → Terraform + Ansible",
    "Deploy → AKS across Dev / Test / Stage / Prod",
    "Monitor & Release → Azure Boards + Redmine",
  ],
  impact: [
    "Faster, repeatable releases across four environments with automated gates.",
    "Reduced manual deployment effort through end-to-end pipeline automation.",
    "Improved code quality and security posture with SonarQube, Checkmarx and Mend.",
    "Centralized secrets and IaC-driven infrastructure for auditable operations.",
  ],
};

export const SERVICES = [
  { title: "CI/CD Pipeline Development", desc: "End-to-end pipelines on Azure DevOps and Jenkins with quality and security gates." },
  { title: "Cloud Infrastructure", desc: "Azure and AWS environments designed for scale, resilience and cost efficiency." },
  { title: "Infrastructure as Code", desc: "Terraform + Ansible for reproducible, versioned infrastructure across environments." },
  { title: "Azure Administration", desc: "VMs, Web Apps, Function Apps, Key Vault, Front Door, NSGs and monitoring." },
  { title: "AWS Administration", desc: "Core AWS services, IAM, and integration with hybrid CI/CD pipelines." },
  { title: "Docker & Kubernetes", desc: "Containerization, image hardening, and AKS-based orchestration." },
  { title: "Release Management", desc: "Coordinated releases, DB script control, and rollback strategies." },
  { title: "DevOps Automation", desc: "Shell, Bash, Python and PowerShell automation across build, test and deploy." },
];

export const CERTIFICATIONS = [
  {
    title: "Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    // Paste the Credly / Microsoft Learn share URL here to activate the button.
    certificateUrl: "",
  },
  {
    title: "Full Stack Developer",
    issuer: "JSpiders",
    certificateUrl: "",
  },
];

export const ACHIEVEMENTS = [
  { title: "Internal Award", desc: "Recognized internally at Zasta Enterprise Pvt Ltd for outstanding contribution." },
  { title: "Hackathon Participation", desc: "Awarded certificate for active participation in company hackathon." },
  { title: "National Science Olympiad", desc: "Certificate of Participation in the National Science Olympiad." },
  { title: "Blood Donation Camp", desc: "Certificate of Participation in Blood Donation Camp — community initiative." },
];

export const EDUCATION = [
  { degree: "Bachelor of Science (MECS)", institute: "Gauthami Degree College" },
  { degree: "Intermediate (MPC)", institute: "Sri Gayatri Junior College" },
  { degree: "SSC", institute: "SPR School of Excellence" },
];
