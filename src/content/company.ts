/**
 * Company content migrated from /company-profile.php, /mission.php, /training.php,
 * /testimonials.php and the corporate brochure (images/docs/git-brocture.pdf).
 * Time-relative tenure claims ("over 13 yrs", "15 years") were withheld because they
 * conflict with each other and cannot be dated — see docs/owner-approval-required.md.
 */

export const companyProfile = {
  overview:
    "GenuineIT is a global IT consulting and system development services provider headquartered in Houston, Texas. GenuineIT (GIT) was founded with a vision of providing outstanding customer satisfaction in the software consulting, staff augmentation and system development industry.",
  welcome: [
    "GenuineIT adheres to proprietary processes, methods and disciplines that deliver high-quality services. The primary driver for IT consulting is value, and we firmly believe that value must be delivered through measurable business results — whether lower costs, quicker time-to-market or greater productivity.",
    "Our management constantly looks for new ways to improve our services. GenuineIT’s commitment to innovation and dedication to client satisfaction has enabled the company to expand its service offerings to include computer consulting, contract programming, project management and training.",
  ],
  vision:
    "At GenuineIT, our vision is to achieve global IT services leadership in providing value-added, high-quality IT solutions to our clients in selected horizontal and vertical segments, by combining technology skills, domain expertise, process focus and a commitment to long-term client relationships.",
  promise: "A Guaranteed Commitment to Deliver Desired Results",
  promiseBody:
    "“A Guaranteed Commitment to Deliver Desired Results” explains everything about our company. GenuineIT delivers solutions tailored to the needs of small and mid-sized businesses and large enterprises. With domain and technology expertise, our solutions integrate within existing IT infrastructures, supporting business performance and return on technology investments.",
  rightPeople:
    "The key to GenuineIT’s success is providing the right people at the right time to every one of its projects and clients. The ability to attract and retain high-performance computer professionals, coupled with experienced analysis of each client’s needs, gives GenuineIT what it needs to solve problems related to computer systems or software. Our employees take great pride in their technical ability and motivation, and we believe the hard work, dedication and hands-on approach of our staff is the decisive factor in the satisfaction of our customers.",
  specialization:
    "GenuineIT specializes in ERP and Microsoft technologies, with consultants in SAP, PeopleSoft, Oracle, Azure and AWS data engineering, data analysis, Sitecore, Salesforce, cloud computing, JD Edwards, Java, .NET, C#, SharePoint, BizTalk and many more.",
  /** From the corporate brochure "About us" panel */
  founded3Things: [
    {
      title: "Helping people looking for a change",
      text: "Many graduates are unsure about their career path. Although they may be technically competent, they may lack the soft skills and the corporate culture. Our goal is to help people find the job they are looking for.",
    },
    {
      title: "Helping clients find the best talent",
      text: "In a competitive world it is hard to find and retain the best talent. Many companies spend significant time and money trying to find the right people. At GenuineIT we want to help clients who are looking for the best people for the job.",
    },
    {
      title: "Hiring the best recruiters",
      text: "Great recruiters help build a great company. We want to give our recruiters the best tools to do their job well, and opportunities to grow in their career in human resources.",
    },
  ],
};

export const mission = {
  statement: "Deliver Talent That Delivers Results",
  supporting: "We support the rapidly evolving human capital needs of our clients through a flexible and adaptable engagement model.",
  principles: [
    { title: "Exceed expectations", text: "We hold ourselves to a higher standard than our clients expect." },
    { title: "Make an impact", text: "Clients don’t pay us for hard work; they pay us for results." },
    { title: "Finish the job", text: "Build client capability, not dependency." },
    { title: "Collaborative", text: "We are great at teaming with our clients and partners toward shared goals." },
    { title: "Customer focused", text: "Know their business. Know their priorities. Know their people. Know their culture." },
    { title: "Great at commitments", text: "Clearly defined, clearly communicated and understood." },
    {
      title: "Great at execution",
      text: "Meeting and exceeding commitments — to each other, to our clients, to partners and to our candidates.",
    },
  ],
  values: [
    { title: "Trust", text: "We build life-long relationships through our behaviors — we execute for our clients, partners and candidates." },
    { title: "Integrity", text: "We operate with sound moral character." },
    { title: "Self-awareness", text: "We look for opportunities to improve every day." },
    { title: "Talent centric", text: "We have a talent for discovering talent in others." },
    { title: "Respectful", text: "We respect each other, value differing opinions, and create an open, inclusive environment." },
    { title: "Flexible and adaptable", text: "We are open-minded and use both conceptual and analytical thinking skills." },
    { title: "Accountability", text: "We take ownership and responsibility for contributing value to the firm and to our clients." },
  ],
  /**
   * "Contract Marketing and Support Plan" — preserved close to verbatim because it contains
   * employment/immigration statements. Flagged for legal review before launch.
   */
  contractPlan:
    "GenuineIT has a good staffing team, which helps us recruit good consultants for our customers’ and vendors’ needs. We have good relationships with subcontracting companies who supply good resources to meet client needs. We sponsor H-1B work permit visas and GC for consultants, and have many US citizens who work on our W2 payroll. We have good networking in the community and use networking tools such as LinkedIn, Facebook and Twitter, and job portals such as Dice, Indeed, Monster and TechFetch, and publicize on university websites to recruit a good number of matching resumes to meet customer needs.",
  contractBenefits: [
    "Provides clients with employees for difficult-to-fill positions",
    "Fulfills temporary labor spikes and satisfies project work",
    "Allows you to test an employee’s technical skills and team compatibility",
    "Quality and trustworthy IT staff your organization needs to maintain operations close to home",
    "Supplies the technology necessary to provide appropriate metrics for business decisions and compliance, as well as customer and candidate satisfaction",
  ],
};

/** Consultant platforms listed on /company-profile.php (deduplicated; the legacy list repeated several entries). */
export const technologyExpertise: { category: string; description: string; items: string[] }[] = [
  {
    category: "Enterprise Applications & ERP",
    description: "Packaged enterprise platforms, implementation and support.",
    items: ["SAP — All Modules", "Oracle — All Modules", "PeopleSoft — All Modules", "JD Edwards", "Microsoft Dynamics", "Siebel"],
  },
  {
    category: "Application Development",
    description: "Languages and frameworks for custom business software.",
    items: ["Java", ".NET", "C#", "ColdFusion", "PowerBuilder", "Mainframe"],
  },
  {
    category: "Cloud & Infrastructure",
    description: "Cloud engineering, operations and enterprise infrastructure.",
    items: ["Azure Data Engineering", "AWS Engineering", "Cloud Computing", "DevOps", "AIX Administration", "UNIX", "Cisco Network Administration & Engineering", "SAN Migration"],
  },
  {
    category: "Data & Databases",
    description: "Data engineering, warehousing, analytics and administration.",
    items: ["Data Analysts / Scientists / Engineers", "Cognos", "Data Warehousing / ETL / Informatica", "DataStage Developers & Architects", "Business Objects", "MicroStrategy", "MSBI / Power BI", "SAS", "SQL / MySQL DBA", "UDB / DB2", "Sybase"],
  },
  {
    category: "Quality Assurance & Testing",
    description: "Automated and manual testing across platforms.",
    items: ["Test Automation", "Selenium", "Mobile Testing", "Telecom Testing", "Manual QA"],
  },
  {
    category: "CRM & Content Management",
    description: "Customer platforms, portals and content systems.",
    items: ["Salesforce", "Sitecore", "SharePoint Developers / Admins / Architects", "MOSS", "Remedy"],
  },
  {
    category: "Integration & Middleware",
    description: "Connecting applications, messages and processes.",
    items: ["BizTalk", "MQSI Administration", "SOA / ESB"],
  },
  {
    category: "Business & Systems Analysis",
    description: "Requirements, analysis and quality roles.",
    items: ["Business Analysts", "Quality Analysts", "System Analysts"],
  },
];

/** Strengths documented across the legacy site — no metrics added. */
export const whyGenuineIT = [
  {
    title: "Client-focused delivery",
    text: "We begin each engagement by listening to and understanding your specific needs, then determine which solution best achieves your goals while balancing risk and cost.",
    source: "Application Development",
    icon: "Ear",
  },
  {
    title: "Technology and domain expertise",
    text: "Consultants across ERP, Microsoft technologies, cloud, data and QA — combined with domain practices in industries from energy to financial services.",
    source: "Company Profile",
    icon: "Cpu",
  },
  {
    title: "Flexible staffing and engagement",
    text: "A flexible, adaptable engagement model — full-time or temporary, onsite, domestic or offshore — that supports the evolving human capital needs of our clients.",
    source: "Mission; Professional Services",
    icon: "SlidersHorizontal",
  },
  {
    title: "Business-value orientation",
    text: "The primary driver for IT consulting is value, delivered through measurable business results: lower costs, quicker time-to-market or greater productivity.",
    source: "Company Profile",
    icon: "TrendingUp",
  },
  {
    title: "Collaboration and long-term relationships",
    text: "We are great at teaming with our clients and partners toward shared goals, and we build life-long relationships through our behaviors.",
    source: "Mission & Values",
    icon: "Handshake",
  },
  {
    title: "Reliable delivery",
    text: "Disciplined processes that help achieve project goals on time and on budget — clearly defined commitments, clearly communicated and met.",
    source: "Application Development; Mission",
    icon: "BadgeCheck",
  },
];

/**
 * Testimonials published on /testimonials.php. Preserved verbatim but NOT featured on the
 * home page until the owner confirms permission and accuracy (note the organisation is
 * named "TEXAS CONCRETE" here while other pages say "US Concrete" / "Texas Concrete").
 */
export const testimonials = [
  {
    quote:
      "We have done business with GenuineIT, and they have handled an IT Sourcing for us. Our results with them have always been good!",
    name: "Micheal J.",
    role: "Project Manager",
    organization: "Autoliv",
  },
  {
    quote:
      "The service delivered to TEXAS CONCRETE by GenuineIT is the most professional in the field that I have experienced. Their ability to match the client’s requirements with the candidates’ skills/achievements results in a small but very relevant selection of candidates. They are extremely thorough and their follow-through and support throughout the recruitment process is always exemplary.",
    name: "Sammy",
    role: "Manager",
    organization: "Texas Concrete",
  },
];

/** From the corporate brochure (2018 PDF) — "Services" and "Global Staffing Services" panels. */
export const brochureStaffing = {
  services: ["IT Staff Augmentation", "Global Staffing Services", "Managed Sourcing and RPO", "goSOFT — Soft Skills Training"],
  staffAugmentation:
    "With GenuineIT contract staffing services, you have a partner that understands and actively works with the technology solutions that will shape your future success. Our industry knowledge, pool of IT professionals and commitment to client satisfaction are key reasons GenuineIT has a proven track record of success.",
  managedSourcing:
    "GenuineIT adopts your critical business processes and enhances them with new workflows to create efficiencies — hiring the best temporary labor quickly and cost-effectively, while giving your company a competitive edge and allowing your employees to focus on core business needs.",
  managedSourcingServices: ["Needs assessment", "Workforce planning", "Business reviews and strategy", "Vendor management"],
  directManagement:
    "Our goal is to help you achieve the most cost-effective resource allocation possible. From sourcing and evaluating candidates to employee on-boarding, we provide comprehensive program management to help you meet your corporate goals.",
  smallBusiness:
    "GenuineIT provides expert recruitment services to small businesses that need an affordable alternative to in-house talent search and placement functions. We understand the challenges small companies face — many have never used a recruiting firm before, but find that as they grow they do not have the time or staff needed to provide quality recruitment for their firm.",
  keyPoints: [
    { title: "Quality focus", text: "Our comprehensive system of research and assessment allows us to sift through candidates and identify those who are unqualified with a high degree of accuracy." },
    { title: "Advantages", text: "Build your business around a solid core group of employees, fill remaining positions on a flexible, as-needed basis, and grow without adding permanent staff." },
    { title: "Domain experience", text: "We understand software development because our recruiters come from the software development industry, where they maintain networks of relationships." },
  ],
};
