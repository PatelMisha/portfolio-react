export const navLinks = ['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'];

export const typewriterPhrases = [
  'Backend Developer',
  'MS @ Northeastern University',
  '.NET & Microservices Engineer',
  'API & Systems Architect',
  'Building Scalable Software',
];

export const stats = [
  { number: '1+', label: 'Years Experience' },
  { number: '8+', label: 'Projects Shipped' },
  { number: '5+', label: 'APIs Integrated' },
  { number: '∞', label: 'Lines of C#' },
];

export interface ExperienceItem {
  role: string;
  period: string;
  company: string;
  location: string;
  color: 'cyan' | 'purple' | 'pink';
  points: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Software Developer',
    period: 'Oct 2024 – Aug 2025',
    company: 'ThinkHp Consultant',
    location: 'Surat, India',
    color: 'cyan',
    points: [
      'Architected and optimized backend ERP modules (Sales, Purchase, Billing, AMC, GST) with SQL Server stored procedures, improving business process visibility and system performance by 35%',
      'Built and deployed a WhatsApp communication microservice using ASP.NET Core and Meta Business API, automating invoice delivery, payment reminders, and real-time location updates — reducing manual operational effort by 60%',
      'Implemented a multi-client Expense Microservice with RESTful APIs and real-time dashboards using SignalR, enabling budgeting and financial insights across 15+ client projects with sub-second response times',
      'Orchestrated IIS deployment pipelines with automated testing frameworks, performed UAT testing, and resolved 25+ critical backend bugs to ensure smooth production rollouts and 99% uptime',
    ],
  },
  {
    role: 'Junior Software Developer',
    period: 'Jun 2024 – Nov 2024',
    company: 'Isix Software',
    location: 'Surat, India',
    color: 'purple',
    points: [
      'Engineered an internal Shopify admin portal using .NET Core and Blazor, building 20+ RESTful API endpoints for product, order, and inventory management — improving load time by 30%',
      'Designed role-based authentication system with JWT tokens and optimized database architecture using SQL Server normalization, strengthening security and query performance by 40%',
      'Collaborated in Agile environment via Azure DevOps — created technical roadmaps, epics, and user stories that improved sprint planning and on-time delivery tracking by 25%',
    ],
  },
];

export interface Project {
  icon: string;
  title: string;
  desc: string;
  github: string;
  tags: { label: string; color?: 'cyan' | 'purple' | 'pink' }[];
}

export const projects: Project[] = [
  {
    icon: '🤖',
    title: 'CodePulse — AI Code Execution Platform',
    desc: 'Online code execution and AI review platform. Runs user-submitted code inside isolated Docker containers and streams stdout/stderr in real time over SignalR. Monaco editor on the frontend; AI-powered code review via Groq. PostgreSQL for persistence, Redis for caching.',
    github: 'https://github.com/PatelMisha/CodePulse',
    tags: [
      { label: 'Next.js' },
      { label: '.NET 10', color: 'purple' },
      { label: 'SignalR' },
      { label: 'Docker', color: 'pink' },
      { label: 'Groq AI', color: 'purple' },
      { label: 'PostgreSQL', color: 'pink' },
      { label: 'Redis' },
    ],
  },
  {
    icon: '🏗️',
    title: '3PathERP System',
    desc: 'Enterprise ERP covering Sales, Purchase, Returns, AMC, Credit/Debit Notes, and Inventory. GST item-wise reports, sales summaries, vendor ledgers, and stock tracking with 99% uptime.',
    github: 'https://github.com/PatelMisha',
    tags: [
      { label: 'Blazor' },
      { label: 'ASP.NET Core' },
      { label: 'SQL Server', color: 'purple' },
      { label: 'IIS', color: 'pink' },
    ],
  },
  {
    icon: '💬',
    title: 'WhatsApp Communication Microservice',
    desc: 'Microservice using Meta WhatsApp Business API to automate invoice alerts, payment reminders, and location updates. Full delivery tracking (sent / delivered / read) with analytics dashboard.',
    github: 'https://github.com/PatelMisha/WhatsAppMicroServiceAPI',
    tags: [
      { label: 'ASP.NET Core' },
      { label: 'Blazor' },
      { label: 'WhatsApp API', color: 'purple' },
      { label: 'SQL Server', color: 'pink' },
    ],
  },
  {
    icon: '🛍️',
    title: 'Pony Vave Admin Portal',
    desc: 'Internal admin portal for a Shopify e-commerce client. Handles product, order, discount, and inventory management. Resolved performance bottlenecks and converted Node.js scripts to C# backend services.',
    github: 'https://github.com/PatelMisha/PonyVaveAdminWeb',
    tags: [
      { label: '.NET Core' },
      { label: 'Blazor' },
      { label: 'Shopify API', color: 'purple' },
      { label: 'SQL Server', color: 'pink' },
    ],
  },
  {
    icon: '💸',
    title: 'Expense Management Microservice',
    desc: 'Multi-tenant microservice for budget tracking and expense recording, built with clean architecture for reuse across multiple client dashboards. Deployed to live production environments.',
    github: 'https://github.com/PatelMisha/ExpenseMicroServiceAPI',
    tags: [
      { label: 'ASP.NET Core' },
      { label: 'Microservices', color: 'purple' },
      { label: 'SQL Server' },
      { label: 'Clean Arch', color: 'pink' },
    ],
  },
  {
    icon: '🔐',
    title: 'Authentication Microservice',
    desc: 'RBAC system with multi-tenant support managing Applications, Clients, Companies, Roles, and User Role Mappings. Token-based auth with secure user management and permission logic.',
    github: 'https://github.com/PatelMisha/AuthenticationMicroService',
    tags: [
      { label: 'ASP.NET Core' },
      { label: 'JWT / RBAC', color: 'purple' },
      { label: 'Multi-tenant' },
      { label: 'SQL Server', color: 'pink' },
    ],
  },
  {
    icon: '🚛',
    title: 'RideEase — Vehicle Rental Platform',
    desc: 'Full-stack vehicle rental platform (GoHaul) for moving needs. Features a Next.js frontend with role-based dashboards for users and admins, JWT authentication, real-time booking flow, and a clean dark UI built with NextUI and Tailwind CSS.',
    github: 'https://github.com/PatelMisha/RideEase',
    tags: [
      { label: 'Next.js' },
      { label: 'TypeScript' },
      { label: 'Java', color: 'purple' },
      { label: 'PostgreSQL', color: 'pink' },
      { label: 'Redux Toolkit' },
      { label: 'Tailwind CSS' },
    ],
  },
  {
    icon: '⛅',
    title: 'Skyra Weather App',
    desc: 'JavaFX weather dashboard with real-time weather API integration, city autocomplete, and dynamic day/night themes. Clean, responsive UI with live data visualization.',
    github: 'https://github.com/PatelMisha/skyra-weather-app',
    tags: [
      { label: 'Java' },
      { label: 'JavaFX', color: 'purple' },
      { label: 'REST API' },
    ],
  },
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C#', 'JavaScript', 'Python', 'C++', 'Java', 'MATLAB', 'HTML / CSS', 'SQL', 'Bash'],
  },
  {
    title: 'Backend & APIs',
    skills: ['ASP.NET Core', 'Blazor', 'RESTful APIs', 'Microservices', 'Dapper', 'Spring Boot', 'SignalR', 'Entity Framework'],
  },
  {
    title: 'Databases',
    skills: ['SQL Server', 'PostgreSQL', 'Database Design', 'Query Optimization', 'Stored Procedures', 'Transaction Management'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'Terraform', 'CI/CD', 'Git', 'Azure DevOps', 'Postman', 'Swagger'],
  },
  {
    title: 'Architecture',
    skills: ['Microservices', 'Clean Architecture', 'Multi-tenant Design', 'RBAC', 'OAuth 2.0', 'JWT'],
  },
  {
    title: 'Tools & Practices',
    skills: ['IIS', 'Figma', 'Agile / Scrum', 'Azure DevOps', 'CloudWatch'],
  },
];

export interface Certification {
  icon: string;
  title: string;
  issuer: string;
}

export const certifications: Certification[] = [
  { icon: '☁️', title: 'AWS Academy Cloud Security Foundations', issuer: 'Amazon Web Services' },
  { icon: '🤖', title: 'Automata Theory, Languages & Computation', issuer: 'Udemy' },
  { icon: '📊', title: 'Statistics for Data Science with Python', issuer: 'Coursera' },
  { icon: '📱', title: 'Developing Android Apps with App Inventor', issuer: 'Coursera' },
];
