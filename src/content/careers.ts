import type { JobPosting } from "@/types/content";

/**
 * Job postings displayed on https://genuineitllc.com/careers.php (retrieved 2026-11-24).
 * Wording is preserved verbatim, except that obvious capitalization artifacts in the
 * source (e.g. "ApI", "SOAp", "ERp", "TCp/Ip") were restored to standard acronyms and
 * one misspelling ("pyathon") corrected. Every change is listed in
 * docs/content-migration-report.md. Active status has NOT been verified — the legacy
 * page did not show posting dates — so no JobPosting structured data is emitted.
 *
 * 46 further postings exist only inside HTML comments on the legacy page (not displayed);
 * they are archived in docs/archived-job-postings.json for owner review.
 */

const SPECIALTY_EDUCATION =
  "Bachelor’s degree in Computer Science Engineering or equivalent field. For a position at the level offered, it is not uncommon for the incumbent to also hold a master’s degree and/or number of years of experience in a similar position. These minimum prerequisites for the offered position clearly make it a specialty occupation.";

const APPLY = "Mail resume to GenuineIT, 9894 Bissonnet St., # 827, Houston, TX 77036.";

const SOURCE = "https://genuineitllc.com/careers.php";

export const careersIntro = {
  culture:
    "Being a performance-driven organization, GenuineIT thrives on employee-driven activities and recognizes inspired contributions. We welcome new ideas and innovation from all levels and areas of operation. The infectious energy in the atmosphere infuses enthusiasm in all initiatives and endeavours across the organization. Employees are encouraged in their choice of areas of contribution, to grow with the company and explore the wide expanse of available opportunities. At GenuineIT, you will find a sense of fulfilment, pride and fun while you carve your niche in an evolving career.",
  /** Legacy wording; "urgent positions open" is not repeated as a current claim because status is unverified. */
  contact:
    "You are welcome to contact us so one of our HR associates can walk you through career prospects or the company. To schedule a meeting or a telephone call, please email careers@genuineitllc.com, or send your resume with your contact details and the position you are seeking.",
  domesticFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdoDh-KSnX0wLub2QE4FWKUeUnNul5iG0tvtdjPOL-n1aimbw/viewform",
};

export const jobs: JobPosting[] = [
  {
    id: "git-job-001",
    title: "Software Developer",
    openings: "1",
    category: "Software Engineering",
    responsibilities: [
      "Gather and analyze the requirements provided from Business, and review functional specifications with the team.",
      "Collaborate with solution architects, business analysts, and agile teams to enhance existing products and develop new applications",
      "Manage Application using software methodology Scrum Agile process to meet the quality standards.",
      "Develop/Enhance new components and implement web application for various requirements/brands using existing component library following Helix principles.",
      "Conduct unit and functional testing to ensure high-quality deliverables. Develop and maintain SOAP and RESTful web services.",
      "Responsible for managing the application for various brands performance and any downtime incidents.",
    ],
    education: [SPECIALTY_EDUCATION],
    applyInstructions: APPLY,
    skills: ["Scrum / Agile", "Helix", "SOAP", "REST", "Unit testing"],
    status: "listed-unverified",
    legacySource: SOURCE,
  },
  {
    id: "git-job-002",
    title: "Software Engineer/DevOps Engineer",
    openings: "1",
    category: "DevOps & Release",
    responsibilities: [
      "Gather and analyze the requirements provided from Business, and review functional specifications with the team.",
      "Deploy and manage infrastructure on public clouds (AWS, GCP, Azure or Pivotal).",
      "Develop, maintain and enhance pre and post build scripts (Shell, YAML, Python).",
      "Deploy, Build and maintain Docker containers using Azure CLI. Create Docker images, docker-files, maintain versions and debug issues related to environments deployed in docker containers",
      "Develop and program functionality of web application by using C#, ASP.NET MVC, Glass mapper methodologies, SXA, Sitecore templates, renderings, UI technologies.",
      "Create, maintain and deploy scripts for IaC (Infrastructure as Code) viz. Terraform, Ansible.",
      "Implement scalable and sustainable data engineering tools such as Azure, AWS, and python along with CI/CD pipelines.",
    ],
    education: [SPECIALTY_EDUCATION],
    applyInstructions: APPLY,
    skills: ["AWS", "GCP", "Azure", "Docker", "Terraform", "Ansible", "C#", "ASP.NET MVC", "Sitecore", "CI/CD", "Python"],
    status: "listed-unverified",
    legacySource: SOURCE,
  },
  {
    id: "git-job-003",
    title: "Software Engineer-Applications (API) Development & Integration",
    openings: "1",
    category: "Software Engineering",
    responsibilities: [
      "Gather and analyze the requirements provided from Business, and review functional specifications with the team.",
      "Expertise in Spring boot, Hibernate, JPA, REST, SOAP services and SOA. Experience in database design, application usage of relational and non-relational databases",
      "Decide on the platforms and coding standards to be used in project development.",
      "In-depth knowledge of JavaScript, CSS, HTML, and front-end languages. Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux",
    ],
    education: [SPECIALTY_EDUCATION],
    applyInstructions: APPLY,
    skills: ["Spring Boot", "Hibernate", "JPA", "REST", "SOAP", "SOA", "React", "JavaScript"],
    status: "listed-unverified",
    legacySource: SOURCE,
  },
  {
    id: "git-job-004",
    title: "Software Developer / SiteCore Developer",
    openings: "1",
    category: "Enterprise Applications",
    responsibilities: [
      "Gather and analyze the requirements provided from Business, and review functional specifications with the team.",
      "Design, program and develop the web application using Sitecore as Content Management System.",
      "Manage Application using software methodology Scrum Agile process to meet the quality standards.",
      "Develop/Enhance new components and implement web application for various requirements/brands using existing component library following Helix principles.",
      "Develop and program functionality of web application by using C#, ASP.NET MVC, Glass mapper methodologies, SXA, Sitecore templates, renderings, UI technologies.",
      "Migrate the webpages and various Html pages from Sitecore 7.5 & 8.2 environment to Sitecore 10.1 environment.",
      "Responsible for managing the application for various brands performance and any downtime incidents.",
    ],
    education: [SPECIALTY_EDUCATION],
    applyInstructions: APPLY,
    skills: ["Sitecore", "C#", "ASP.NET MVC", "SXA", "Helix", "Scrum / Agile"],
    status: "listed-unverified",
    legacySource: SOURCE,
  },
  {
    id: "git-job-005",
    title: "Software Engineer/Release Engineer",
    openings: "1",
    category: "DevOps & Release",
    responsibilities: [
      "Define program and release criteria, driving release quality metrics and improvements.",
      "Collaborate with executives, service leaders, and project managers to drive initiatives and ensure alignment with company and technical goals",
      "Establish critical metrics to measure the success and efficiency of the product/program.",
      "Conduct regular evaluations and assessments to identify areas for improvement.",
      "Provide technical assistance and guidance to the development group. Perform required activities to move upgrades in applications through Development, Quality and Certification to production systems.",
    ],
    education: ["Requires educational equivalent Master’s or Bachelor’s degree with specialization in Computer applications / Information Technology field."],
    applyInstructions: APPLY,
    skills: ["Release management", "Quality metrics", "Program management"],
    status: "listed-unverified",
    legacySource: SOURCE,
  },
  {
    id: "git-job-006",
    title: "Application Developer",
    openings: "1",
    category: "Software Engineering",
    responsibilities: [
      "Design and development as per specification, stage Code deployment, participate in daily scrums, Create technical user stories.",
      "Work with ASP.Net Web Forms, ASP.Net State Management, ASP.Net Caching features.",
      "Work using technologies like C#, ASP.Net with MVC. Design and Developing new enhancements, performance tuning in SQL Server and Application.",
      "Work on web applications JavaScript / jQuery, WCF, WebAPI, Bootstrap for UI, SQL Server, and Entity Framework.",
      "Production issue analysis, resolving them and updating customer.",
    ],
    education: ["Bachelor Degree or equivalent in a relevant Computer science or Technology field."],
    applyInstructions: APPLY,
    skills: ["C#", "ASP.NET", "MVC", "SQL Server", "WCF", "Web API", "Entity Framework", "jQuery"],
    status: "listed-unverified",
    legacySource: SOURCE,
  },
  {
    id: "git-job-007",
    title: ".Net Developer",
    openings: "1",
    category: "Software Engineering",
    responsibilities: [
      "Helping client to understand requirement and implementation process design and develop codes and components based on architecture using ERP, programming techniques like Debugging, Update Debugging, performance Tuning and python",
      "Participate in Grooming the Requirements with All the Stakeholders (Business, Development Team and QA Team)",
      "Involve in all phases of software development cycle from gathering business requirements, designing the database, development, and maintenance of the web applications.",
      "Involve in Implementation and production Support projects and in configuring post processing framework actions, Sales & Distribution and delivery handling.",
      "Design system architecture to implement the technical requirements and review with Organization Enterprise Architecture team",
      "Provide High Level Design solutions with workflow chart, and prototypes wherever feasible",
      "Provide On-site support and be available 24 X 7 for emergency production issues and any other reasonably related work",
    ],
    education: [SPECIALTY_EDUCATION],
    applyInstructions: APPLY,
    skills: [".NET", "ERP", "Python", "Performance tuning", "Production support"],
    status: "listed-unverified",
    legacySource: SOURCE,
  },
  {
    id: "git-job-008",
    title: "Software Developer",
    openings: "1",
    category: "Contact Center",
    responsibilities: [
      "Analyze business requirements, provide time estimates, create and modify Call Routing Strategies, preparation of design documents, system development, and production handover.",
      "Continuously improve system performance reports, perform root cause analysis for system outages; suggest improvements to ensure system up-time.",
      "Knowledge of voice networking technologies including TCP/IP, SDP, DHCP, TFTP, VLAN, SIP, UDP, QoS, VoIP, and VLAN design.",
      "Working experience of Contact Center Technologies (IVR, SIP, CTI, WFM, VXML, CCPulse, CCAnalyzer, Verint Recording, Genesys Framework, GAX, CIM, HA Architecture, AVAYA IVR, Voice Call Routing).",
      "Developing touch tone, speech and Self Service IVR. Strong expertise in Chat/SMS/COBROS and Hands-on experience with coding using Genesys IVR tool.",
      "Reporting (CCA, Infomart), G-Plus adapter for WFM (experienced on Verint and NICE).",
    ],
    education: ["Bachelor’s Degree in computer science or related field of education."],
    applyInstructions: APPLY,
    skills: ["Genesys", "IVR", "SIP", "CTI", "VoIP", "Avaya", "Verint", "NICE"],
    status: "listed-unverified",
    legacySource: SOURCE,
  },
];

export const getJob = (id: string) => jobs.find((j) => j.id === id);
export const jobCategories = Array.from(new Set(jobs.map((j) => j.category)));
