import type { CatalogGroup, DetailPage } from "@/types/content";

/**
 * Services migrated from genuineitllc.com. Copy is the legacy text with grammar,
 * spelling and repetition cleaned up. Numerical performance claims that could not
 * be verified were withheld and are listed in docs/owner-approval-required.md.
 * IT Staffing has its own hand-built page at /services/it-staffing.
 */

export const serviceGroups: CatalogGroup[] = [
  { id: "talent", title: "Talent & Staffing", description: "Technology professionals for contract, project and full-time needs." },
  { id: "consulting", title: "Business & IT Consulting", description: "Advisory, process and program services aligned to business goals." },
  { id: "engineering", title: "Application & Product Engineering", description: "Design, build, integrate, test and sustain business software." },
  { id: "managed", title: "Cloud & Managed Services", description: "Run, monitor and support infrastructure, data and applications." },
  { id: "modernization", title: "Modernization & Mobile", description: "Migrate legacy platforms and extend applications to mobile and learning." },
];

export const services: DetailPage[] = [
  // ---------------------------------------------------------------- Talent
  {
    slug: "professional-services",
    title: "Professional Services",
    summary: "Human capital expertise that boosts your internal teams — full-time or temporary — and keeps projects on track.",
    lead: "As times and business needs change, so do the skills and services required. Discovery is what we do first and foremost: we work to understand your workforce challenges, then prioritize opportunities and identify remedies for business impact.",
    group: "talent",
    icon: "Handshake",
    legacyPath: "/professional-services.php",
    blocks: [
      {
        kind: "prose",
        heading: "Local professional experts, working alongside your teams",
        body: [
          "GenuineIT, a provider of professional technology services, boosts your internal expertise and keeps your projects on track with our professional experts. By working closely with public and private sector clients, GenuineIT enables them to leverage technological innovation and achieve maximum results, supporting clients across geographies.",
          "Our professional services help clients through complete and independent planning phases, enabling them to visualize solution blueprints and implementation roadmaps that are best aligned to their goals. GenuineIT can mobilize the right people, skills and technologies to help clients define and implement recruitment needs — reducing the time and effort of their IT talent search.",
        ],
      },
      {
        kind: "quote",
        text: "What matters most to GenuineIT is that you have the very best of our human capital expertise working with you to achieve your performance goals.",
      },
      {
        kind: "list",
        heading: "Recruit, manage and retain talent at all levels",
        intro: "Whether you need a full-time or temporary employee, GenuineIT has a range of capabilities to help you:",
        variant: "cards",
        items: [
          { title: "Discovery first", text: "Understand your workforce challenges before recommending a remedy." },
          { title: "Planning & blueprints", text: "Independent planning phases that produce solution blueprints and implementation roadmaps." },
          { title: "Mobilize the right people", text: "Bring together the right people, skills and technologies for your recruitment needs." },
          { title: "Full-time or temporary", text: "Flexible support for permanent hires and temporary engagements alike." },
        ],
      },
      {
        kind: "prose",
        heading: "Industries we support",
        body: [
          "GenuineIT is determined to help enterprises make better products that benefit people. We are extending our competence in serving worldwide clients in the Aerospace, Automotive, Engineering and Manufacturing, Industrial, Consumer Goods and other product-centric industries.",
          "We do business by drawing strength from each other to deliver value to our clients, and we are committed to every partnership we make — based on our knowledge, skills and infrastructure — to deliver the desired human capital expertise.",
        ],
      },
    ],
    related: [
      { section: "services", slug: "training" },
      { section: "services", slug: "it-outsourcing" },
      { section: "industries", slug: "manufacturing" },
    ],
  },
  {
    slug: "training",
    title: "Project Management & Training",
    navTitle: "Training & Consultant Development",
    summary: "Instructor-led online training, mentoring and job support that keeps GenuineIT consultants current with industry needs.",
    lead: "At GenuineIT, we believe training creates a huge impact in the IT industry. Technologies continuously change, new ones emerge and older ones become obsolete — to be in sync with tomorrow, we believe we need training today.",
    group: "talent",
    icon: "GraduationCap",
    legacyPath: "/training.php",
    blocks: [
      {
        kind: "prose",
        heading: "Training designed around real-world scenarios",
        body: [
          "We provide online training to our consultants in different technologies to meet industry needs. Our training and mentoring services help build the right skills to support IT and network-related projects, with certified professionals providing training, support and guidance.",
          "Our programs combine real-world scenarios with years of hands-on experience and research. Online courses are accessible at home, at work or while travelling, and include interactive content such as simulations, skill assessments, video and audio to create an engaging, effective learning environment.",
          "Online training provides a live, instructor-led experience over the Internet that meets specific learning objectives. Instructors and students share an interactive experience, including active discussions, simultaneous document viewing and application sharing.",
        ],
      },
      {
        kind: "list",
        heading: "What our program includes",
        variant: "check",
        items: [
          "Expert training by highly qualified, industry-experienced and certified consultants",
          "Remote training for off-site candidates",
          "Flexible training hours",
          "Resume preparation and marketing",
          "Mock interviews",
          "Technical support and mentoring by technical experts",
          "Competitive salary package",
          "Job support",
          "Visa processing",
          "Continuous support even after placement",
        ],
      },
      {
        kind: "list",
        heading: "Technologies covered",
        variant: "pills",
        items: [
          "Selenium Testing",
          "Mobile Apps Testing",
          "QTP",
          "Big Data",
          "Cloud Computing",
          "OBIEE",
          "Java",
          "Hadoop",
          ".NET — Windows & Web Forms",
          "SharePoint",
          "SAP — All Modules",
          "ETL: Informatica / BO / DataStage / Data Marting / Data Mapping",
          "Reporting: MicroStrategy / QlikView / Cognos",
          "SQL Developer — MySQL, T-SQL",
          "Business Analysis",
        ],
        outro: "We also provide support on a need basis.",
      },
    ],
    reviewNotes: [
      "Legacy text: 'We are an E-Verified company.' Retained on Resources page with E-Verify link; confirm current enrollment.",
      "'Competitive salary package' and 'Visa processing' are employment statements — confirm they remain accurate.",
    ],
    related: [
      { section: "services", slug: "professional-services" },
      { section: "services", slug: "quality-assurance" },
      { section: "services", slug: "e-learning" },
    ],
  },

  // ---------------------------------------------------------------- Consulting
  {
    slug: "it-outsourcing",
    title: "IT Outsourcing",
    summary: "Onshore, offshore and nearshore technology solutions that make GenuineIT a single point of contact for your IT needs.",
    lead: "In a fast-paced global economy, business issues are ever-changing and require adaptability to sustain growth, preserve competitive advantage and maintain profitability. IT has moved from being a differentiator to a necessary part of doing business.",
    group: "consulting",
    icon: "Globe",
    legacyPath: "/it-out-sourcing.php",
    blocks: [
      {
        kind: "prose",
        heading: "A partnership, not a transaction",
        body: [
          "GenuineIT provides onshore, offshore and nearshore technology solutions and services to enterprises and technology companies. We help clients deal with changing business environments and technology issues, guiding them through designing and implementing the right solution — transforming complex processes and vast amounts of data into strategic information for smarter, faster decisions.",
          "Clients entrust us as a results-driven business partner for IT infrastructure management, application development, QA and testing, and IT outsourcing needs. Our mission is to build and maintain strong, long-term client relationships, and we have provided IT outsourcing services to organizations irrespective of their size, sector or location.",
        ],
      },
      {
        kind: "list",
        heading: "Why GenuineIT for your outsourcing needs",
        intro: "We offer a comprehensive range of IT services so we can become your single point of contact — flexible outsourcing solutions to optimize service levels, improve cost structures, strengthen competitive positioning and expand market presence.",
        variant: "cards",
        items: [
          { title: "Reduced risk and cost", text: "An offshore development center (ODC) lets you maximize development activities while experimenting with emerging technologies or expanding business capabilities." },
          { title: "Rapid implementation & scalability", text: "We help companies reduce cost, risk and time-to-market while improving product quality as requirements evolve." },
          { title: "Seamless integration", text: "Dedicated voice and data connectivity with secure network and firewall measures, so our facilities become your extended development environment." },
          { title: "A unique relationship framework", text: "Access to technical resources and a Project Management Organization (PMO), reducing concerns about communication, control and culture." },
          { title: "High-quality solutions", text: "Our team uses current technologies, and our processes are governed by a Quality Management System (QMS)." },
        ],
      },
      {
        kind: "list",
        heading: "Our phased approach to creating an ODC",
        variant: "numbered",
        items: ["Identify", "Build", "Operate", "Maintain"],
        outro: "With GenuineIT as your IT outsourcing partner, you can reach your business goals faster and with greater cost-efficiency.",
      },
      {
        kind: "list",
        heading: "Our portfolio of services",
        variant: "columns",
        items: [
          "Business and technology consulting",
          "IT outsourcing services",
          "Application services",
          "Replacement technology services",
          "Mobile computing services",
          "Enterprise 2.0 computing services",
          "DW/BI solutions managed services",
          "Virtualization services",
          "MS Dynamics services",
          "QA and testing services",
        ],
      },
    ],
    reviewNotes: [
      "Withheld: 'cost savings of up to 60%' and 'With more than 15 Years of experience' (unverified / time-relative).",
      "Withheld: 'collaborating with some of the world's leading organizations' superlative; 24x7 connectivity claim reworded.",
    ],
    related: [
      { section: "services", slug: "program-management-support" },
      { section: "services", slug: "production-support" },
      { section: "services", slug: "quality-assurance" },
    ],
  },
  {
    slug: "change-management",
    title: "Change Management",
    summary: "Consultants who align expectations, build communications and integrate teams so organizations embrace business change.",
    lead: "Change management is critical to the success of business change projects, and that success depends on a well-planned and well-executed change management effort.",
    group: "consulting",
    icon: "RefreshCcw",
    legacyPath: "/change-mgmnt.php",
    blocks: [
      {
        kind: "prose",
        heading: "People-first transformation",
        body: [
          "GenuineIT change management consultants have the background and training required to successfully implement change management within an organization. Our specialists apply best practices to help organizations accept the significant changes caused by business change projects.",
          "Our consultants align expectations, build communications and help integrate teams while remaining mindful of the organization's current work styles and culture. We help develop the documentation and communication that support the messaging of the new organization, and we can develop and manage training to help people move from the current state to the future state.",
        ],
      },
      {
        kind: "list",
        heading: "Our focus areas",
        variant: "columns",
        items: [
          "Business process management and improvement",
          "ERP organizational assessment, change, design and support",
          "ERP performance measurement and optimization",
          "Training needs analysis and content development",
          "Training delivery and follow-up",
          "Communications planning and execution",
          "Business case design and implementation",
          "Post-implementation audit to track and report progress against the business case",
          "Obstacle identification and solution implementation",
          "Process and organizational enhancements designed to fully optimize new enterprise technologies",
        ],
      },
    ],
    related: [
      { section: "services", slug: "enterprise-architecture" },
      { section: "services", slug: "bpm-services" },
      { section: "solutions", slug: "sap" },
    ],
  },
  {
    slug: "enterprise-architecture",
    title: "Enterprise Architecture",
    summary: "Business architects and analysts who connect business strategy, process and technology across complex environments.",
    lead: "At GenuineIT, we know business architecture is a critical component of the overall enterprise architecture.",
    group: "consulting",
    icon: "Network",
    legacyPath: "/enterprise-architecture.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "GenuineIT business architects have extensive, hands-on experience designing the architectural organization of a business and the best-practice documentation required to define and support it. We also understand the significant architectural aspects of business analysis — where business architecture and analysis converge.",
        ],
      },
      {
        kind: "split",
        heading: "Two complementary roles",
        columns: [
          {
            heading: "Business Architecture",
            items: [
              "The business architect role requires knowledge and skills that are both broad and deep.",
              "Our consultants have experience across multiple hardware and software environments and are comfortable providing solutions for complex, heterogeneous systems.",
              "Our business architects are often seasoned senior technologists who have led multiple projects through the software or systems development life cycle (SDLC) in a variety of roles.",
              "They communicate ideas clearly — verbally and in writing — to executive staff, business sponsors and technical resources, in the language of each group.",
            ],
          },
          {
            heading: "Business Analysis",
            items: [
              "Our business analysts hold a specialized position tackling a variety of challenges and responsibilities.",
              "Their main responsibility is to ensure the operational efficacy and excellence of an organization.",
              "They design and document workflows, and manage and provide solutions for new business-unit ideas, trends and concepts through current technology.",
              "Working across industries, they understand customer requirements and business process management, then translate them into process, policy, people or software requirements.",
            ],
          },
        ],
      },
    ],
    related: [
      { section: "services", slug: "change-management" },
      { section: "services", slug: "soa-services" },
      { section: "services", slug: "application-integration" },
    ],
  },
  {
    slug: "bpm-services",
    title: "BPM Management Services",
    navTitle: "Business Process Management",
    summary: "Process-centric solutions to identify, design, execute, monitor and measure business processes against strategic goals.",
    lead: "In today's rapidly changing business landscape, organizations struggle to cope with the dynamics of their ecosystem — customers, people, vendors, partners and infrastructure. The ability to respond quickly stems from effective processes.",
    group: "consulting",
    icon: "Workflow",
    legacyPath: "/bpm-mgmnt-services.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "GenuineIT Business Process Management (BPM) software and services empower organizations of all sizes to meet and exceed customer expectations, and to anticipate — not just react to — shifts in the marketplace, all while keeping costs under control.",
          "We offer rich experience and deep expertise in BPM technology. Our BPM services offer process-centric solutions to identify, design, execute, document, monitor, control and measure both automated and non-automated business processes, achieving results consistent with an organization's strategic goals.",
        ],
      },
      {
        kind: "list",
        heading: "BPM service offerings",
        intro: "Offerings include, but are not limited to:",
        variant: "numbered",
        items: [
          "Business process management strategy and roadmap development",
          "Process mapping and analysis (as-is)",
          "Process design and modeling (to-be)",
          "Process optimization using industry best practices",
          "Process deployment",
          "Process monitoring and controlling",
        ],
      },
    ],
    related: [
      { section: "services", slug: "program-management-support" },
      { section: "services", slug: "soa-services" },
      { section: "services", slug: "business-process-outsourcing" },
    ],
  },
  {
    slug: "program-management-support",
    title: "Program Management Support",
    summary: "Program and project management consulting and managed services through GenuineIT's IT Management Optimization practice.",
    lead: "GenuineIT offers program and project management services through its IT Management Optimization (IMO) practice, delivering consulting and managed services built on established know-how gained from years of industry experience.",
    group: "consulting",
    icon: "SquareKanban",
    legacyPath: "/program-mgmnt-support.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Our services illustrate IT investment flow and the impact of key inter-related IT processes that influence project and program cost, quality and throughput.",
          "We also offer deep expertise in BPM technology: process-centric solutions to identify, design, execute, document, monitor, control and measure automated and non-automated business processes in line with an organization's strategic goals.",
        ],
      },
      {
        kind: "list",
        heading: "Processes we address",
        variant: "grid",
        items: ["Project portfolio management", "Program and project management", "Quality management", "Sourcing management"],
        outro: "IMO's expertise in each of these processes helps ensure the right issues are addressed, the right way.",
      },
      {
        kind: "list",
        heading: "IMO service offerings",
        intro: "IMO has established specific offerings geared to some of today's most pressing IT management issues:",
        variant: "cards",
        items: [
          { title: "IT Investment Management Diagnostic", text: "A diagnostic consulting service that evaluates the effectiveness and alignment of current processes and provides specific, actionable recommendations to optimize them." },
          { title: "PMO Managed Service", text: "Outsourcing an existing or desired PMO function to improve its efficiency and overall effectiveness for the organization it serves." },
          { title: "Application Portfolio Outsourceability Diagnostic", text: "An independent evaluation of the benefits and risks of outsourcing targeted applications, with recommendations on what and how to outsource." },
          { title: "Offshore Risk Assessment Service", text: "A managed service that independently evaluates and profiles application and provider risks within an existing offshore portfolio." },
        ],
      },
    ],
    reviewNotes: ["Legacy copy called the PMO Managed Service 'an industry first' — superlative withheld."],
    related: [
      { section: "services", slug: "bpm-services" },
      { section: "services", slug: "it-outsourcing" },
      { section: "services", slug: "change-management" },
    ],
  },
  {
    slug: "business-process-outsourcing",
    title: "Business Process Outsourcing",
    summary: "Customer technical support, customer service, help desk and data entry services delivered with structured quality review.",
    lead: "Companies expect more from Business Process Outsourcing (BPO) than low-cost transaction processing. You expect quality service, a partner to help you transform, and a team that understands and responds to your unique needs.",
    group: "consulting",
    icon: "Headset",
    legacyPath: "/business-process-outsourcing.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "The GenuineIT BPO team builds on consultancy practice, domain knowledge and proven project management methodologies. Our BPO representatives provide support services that deliver real business value.",
          "Our team ensures a dependable supply of versatile, competent professionals with strong language and communication skills, well suited to the diverse requirements of the global BPO market.",
        ],
      },
      {
        kind: "list",
        heading: "BPO services",
        variant: "cards",
        items: [
          { title: "Customer Technical Support", text: "First-call resolution backed by a response tracking system for quality review. Trained, experienced representatives provide round-the-clock support via web, email, chat or voice." },
          { title: "Customer Service", text: "Customer Relationship Management (CRM) programs including customized solutions, right-sourcing and continuous training." },
          { title: "Help Desk Technical Support", text: "Help desk, external customer support, products, services and operations support, problem and request tracking, and support resource management — plus internal IT help desk and employee support." },
          { title: "Data Entry & Processing", text: "Form, check and image processing, OCR clean-up, survey processing, data mining and cleansing, and insurance claim processing; conversion of book, PDF, XML, SGML, HTML, CAD, catalog and document formats." },
        ],
      },
      {
        kind: "list",
        heading: "Benefits",
        intro: "GenuineIT end-to-end outsourcing solutions and standardized practices help you:",
        variant: "check",
        items: [
          "Improve operations and cost efficiencies",
          "Stay focused on your primary business",
          "Face sudden changes and competitive shifts with greater agility",
          "Take advantage of best-practice expertise",
          "Win new business and enhance existing relationships",
          "Transform and innovate to drive strategic value",
        ],
      },
    ],
    reviewNotes: ["Withheld superlatives: 'world-class service', 'finest BPO support services', 'one of the best BPO service providers'. Confirm BPO remains an active offering."],
    related: [
      { section: "services", slug: "bpm-services" },
      { section: "services", slug: "it-outsourcing" },
      { section: "solutions", slug: "salesforce-crm" },
    ],
  },

  // ---------------------------------------------------------------- Engineering
  {
    slug: "application-development",
    title: "Application Development",
    summary: "Application Development and Management (ADM): analysis, design, build, testing, implementation and maintenance of business applications.",
    lead: "GenuineIT's Application Development and Management (ADM) services provide analysis, design, development, testing, implementation and maintenance of your business applications.",
    group: "engineering",
    icon: "CodeXml",
    legacyPath: "/application-development.php",
    blocks: [
      {
        kind: "prose",
        heading: "Flexible, objective technical and business services",
        body: [
          "We offer services ranging from traditional mainframe or client/server application development and maintenance to legacy modernization, portal development, service-oriented architecture, wireless and mobility solutions, and ERP support.",
          "Our disciplined processes help us achieve project goals on time and on budget, with a single point of contact for your project questions. With GenuineIT at the helm of your ADM efforts, you can focus on core business issues instead of IT project minutiae — and we conduct ADM projects with an eye on results: cost containment, faster time-to-value and minimized risk.",
        ],
      },
      {
        kind: "prose",
        heading: "Custom development built for the long term",
        body: [
          "For GenuineIT, application development is not about the short term. It's about the application lifecycle, business results and enduring value. We employ model-driven and service-oriented architectures to create reusable components, driving down the total cost of application development.",
          "We incorporate the interaction of rules, services and flows so your application addresses business needs and technical requirements while supporting long-term strategy. Well-planned, quality development reduces future resource requirements, simplifies configuration management and performance, and is essential for integrating new and emerging technologies.",
        ],
      },
      {
        kind: "prose",
        heading: "Legacy modernization and enhancement",
        body: [
          "Transforming established applications to a more modern architecture or language is a cost-effective way to maximize your IT investment. GenuineIT helps bridge the architectural gap between legacy and current technologies by extending, wrapping or replacing existing applications — and helps you understand the benefits and risks of each option.",
          "We help clients modernize applications by extracting business rules as part of a migration plan, or by performing web and component integration to increase data visibility.",
        ],
      },
      {
        kind: "list",
        heading: "Client focus in every engagement",
        variant: "cards",
        items: [
          { title: "Listen first", text: "We begin each engagement by listening to and understanding your specific needs, then determine which solution best achieves your goals while balancing risk and cost." },
          { title: "Flexible delivery", text: "ADM projects can be performed at your site, at a domestic or offshore center, or any combination — considering security, timelines, expertise, infrastructure and communication." },
          { title: "Proven methodology", text: "We integrate our processes with yours at project initiation, defining inputs, outputs, acceptance criteria, communication plans and management processes early so we can hit the ground running." },
        ],
      },
    ],
    technologies: ["Mainframe", "Client/Server", "Service-Oriented Architecture", "Portals", "ERP support", "Mobility"],
    reviewNotes: ["Withheld: 'Total cost-of-ownership reductions of 20%–30% for many of our clients', 'global presence … an office near you', 'helped countless clients'."],
    related: [
      { section: "services", slug: "application-integration" },
      { section: "services", slug: "web-application-development" },
      { section: "services", slug: "legacy-software-migration" },
    ],
  },
  {
    slug: "application-integration",
    title: "Application Integration",
    summary: "ESB, SOA and point-to-point integration connecting CRM, ERP, SaaS and on-premises applications in real time.",
    lead: "Your business depends on applications and data spread everywhere — inside the firewall, across your business network, among SaaS apps and on the internet. Delivering the right data and integrating it on the fly across business functions is a relentless requirement.",
    group: "engineering",
    icon: "Cable",
    legacyPath: "/application-integration.php",
    blocks: [
      {
        kind: "list",
        heading: "Integration challenges we solve",
        variant: "check",
        items: [
          "Moving data to the cloud",
          "Synchronizing cloud front-office applications (such as sales force automation) with on-premises back-office systems",
          "Automating B2B processes faster and more cost-effectively",
          "Mobile-enabling legacy B2C applications",
          "Migrating CMS content",
          "Delivering new integrations in days or weeks rather than months or years",
        ],
        outro: "Best-of-breed enterprise and home-grown applications are often inherently incompatible — yet almost everything your business does requires more than one of them.",
      },
      {
        kind: "prose",
        heading: "Integration made easy",
        body: [
          "GenuineIT application integration solutions offer versatile, cost-effective integration supporting Enterprise Service Bus (ESB), Service-Oriented Architecture (SOA) and point-to-point architectures. Reduce the complexity of your IT infrastructure and improve its reliability, flexibility and scalability, so you can focus on improving your business rather than worrying whether your infrastructure can adapt.",
          "Our solutions are designed to connect natively to major enterprise applications — ideal for integrating Customer Relationship Management (CRM), accounting data and Enterprise Resource Planning (ERP) — within a real-time, event-driven or message-based infrastructure.",
        ],
      },
      {
        kind: "prose",
        heading: "GenuineIT expertise",
        body: [
          "We help you attain integration maturity for everything from data synchronization, to functional application integration, to seamless and secure business-process integration and optimization. Our offerings are based on current solutions, frameworks and methodologies, powered by industry best practices and knowledge repositories.",
          "We have experience delivering large-scale, complex integration solutions across industries, in addition to customized business solutions, using the most appropriate tools and techniques.",
        ],
      },
      {
        kind: "list",
        heading: "Tools and techniques",
        variant: "pills",
        items: [
          "Service-Oriented Architecture (SOA)",
          "Business Process Management (BPM)",
          "Business Activity Monitoring (BAM)",
          "Complex Event Processing (CEP)",
          "Enterprise Service Bus (ESB)",
        ],
      },
    ],
    technologies: ["ESB", "SOA", "BPM", "BAM", "CEP", "CRM & ERP connectors"],
    reviewNotes: [
      "Legacy copy contained 'With Kennedy Sot, you can reduce the complexity…' — apparently text from another company. Rewritten as a GenuineIT statement; please confirm.",
      "Withheld: 'over a decade of delivering…' (time-relative).",
    ],
    related: [
      { section: "services", slug: "soa-services" },
      { section: "services", slug: "application-development" },
      { section: "solutions", slug: "salesforce-crm" },
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    summary: "Custom web-based business software — inventory, order, HR, CRM, call center and accounting systems — accessible anywhere.",
    lead: "Web-based application development encompasses database integration and intranet and extranet application deployment, providing essential support for businesses of all types.",
    group: "engineering",
    icon: "AppWindow",
    legacyPath: "/web-app-development.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Web-based software allows business users to access data from any machine within the office or over the internet from anywhere. This is especially significant for businesses with multiple branches that need to keep data synchronized, and for owners who need to track sales, inventory, accounting and related information while away from the office.",
          "With GenuineIT, you will find a cost-effective, comprehensive and customized solution for your web-based application needs. The technology we choose depends on the nature of your business and its requirements.",
        ],
      },
      {
        kind: "list",
        heading: "Examples of web-based business applications",
        variant: "grid",
        items: [
          "Inventory management system",
          "Order management and processing system",
          "Human resource management system",
          "Customer relationship management system",
          "Call center management system",
          "Accounting system",
        ],
      },
    ],
    technologies: ["C", "C++", "Java", "J2EE", "Servlets", "Struts", "PHP", "MySQL", "MS SQL", "HTML", "CSS", "AJAX", "JavaScript"],
    related: [
      { section: "services", slug: "application-development" },
      { section: "solutions", slug: "ecommerce" },
      { section: "solutions", slug: "content-management" },
    ],
  },
  {
    slug: "soa-services",
    title: "SOA Services",
    summary: "Full-lifecycle service-oriented integration: building and reusing services, testing SOA implementations and SOA-based engineering.",
    lead: "GenuineIT delivers full-lifecycle integration solutions to large and medium enterprises. With expertise in SOA systems integration, we are serious about guiding customers on how to get SOA right — quick time to value and implementation capability are our strengths.",
    group: "engineering",
    icon: "Boxes",
    legacyPath: "/soa-services.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Our SOA solutions provide business process flexibility, automation and cost optimization. GenuineIT takes an end-to-end lifecycle approach to defining and implementing SOA solutions that meet your precise needs: we work to clearly understand your needs, determine the best approach with a standards-based application and infrastructure environment, and help architect, consolidate, integrate and improve it based on SOA.",
          "With the increased agility SOA provides, you can align IT resources to your business goals more easily and cost-effectively.",
        ],
      },
      {
        kind: "list",
        heading: "SOA service offerings",
        variant: "grid",
        items: [
          "Building services",
          "Reusing functionality by extracting it into services",
          "Testing SOA implementations",
          "Service-oriented integration",
          "SOA-based engineering services",
        ],
      },
      {
        kind: "list",
        heading: "Benefits",
        variant: "check",
        items: [
          "A pragmatic, iterative approach to SOA adoption for enterprises",
          "Delivery of SOA using our methodologies, frameworks, IP and tools",
          "A dedicated SOA Center of Excellence that develops tools, IP and SOA-centric material",
          "Process flexibility and cost-efficient automation",
        ],
      },
    ],
    reviewNotes: ["Legacy: 'GenuineIT also acquires a partnership with SOA industry leaders' — unnamed partnership; withheld pending verification."],
    related: [
      { section: "services", slug: "application-integration" },
      { section: "services", slug: "bpm-services" },
      { section: "services", slug: "enterprise-architecture" },
    ],
  },
  {
    slug: "product-development",
    title: "Product Development",
    summary: "End-to-end software product development — from a rough idea through architecture, development, testing and maintenance.",
    lead: "Our clients often start working with us when they have only a rough idea. GenuineIT provides end-to-end software development solutions so you can focus more on business and less on technology.",
    group: "engineering",
    icon: "Rocket",
    legacyPath: "/product-development.php",
    blocks: [
      {
        kind: "split",
        heading: "From challenge to capability",
        columns: [
          {
            heading: "Challenges",
            items: [
              "Understanding the business requirement but not the technology",
              "A rough idea that requires research",
              "Shrinking time and cost margins",
              "The need to innovate to keep pace with competitors",
              "Ever-evolving business requirements",
              "Adapting to ever-changing technologies",
              "Support and maintenance",
            ],
          },
          {
            heading: "GenuineIT provides",
            items: [
              "End-to-end software development solutions",
              "Concept and idea development",
              "Architecture, development, testing and maintenance",
              "Usability engineering",
              "Expertise in building fully integrated systems",
              "Experienced programmers and product managers",
            ],
          },
        ],
      },
      {
        kind: "list",
        heading: "Benefits",
        variant: "cards",
        items: [
          { title: "Business focus", text: "Focus more on business and less on technology." },
          { title: "Room to grow", text: "Greater flexibility for growth." },
          { title: "Lower TCO", text: "A lower total cost of ownership." },
          { title: "Always available", text: "24x7 availability." },
          { title: "A business product", text: "We help you build a business product — not just a technology solution." },
        ],
      },
    ],
    related: [
      { section: "services", slug: "product-management" },
      { section: "services", slug: "prototyping" },
      { section: "services", slug: "sustenance-engineering" },
    ],
  },
  {
    slug: "product-management",
    title: "Product Management",
    summary: "Market-driven product strategy, planning and process — helping technology companies build products that gain wide adoption.",
    lead: "Building a “whole product” calls for a holistic understanding of key market segments, their needs and their differing adoption of products. How often do products launch only to fail to gain traction beyond a small group of enthusiastic early adopters?",
    group: "engineering",
    icon: "Target",
    legacyPath: "/product-management.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "GenuineIT helps technology companies plan for wider product acceptance by building segment-specific scenarios in at the development stage, and preparing for the modifications, variants or activities (training, support) that take a product across its potential market.",
          "A robust product strategy for medium- to long-term growth also needs strategic bandwidth and management resources that many founders are short on. By defining market problems in user terms and understanding the market's unique DNA, we help you conceptualize products that truly matter to customers.",
          "As part of our product management process, we draw up a market plan that acts as the blueprint for future marketing efforts — not a theoretical document, but the means to ensure every team shares an accurate understanding of the company's current position and future plans.",
        ],
      },
      {
        kind: "list",
        heading: "A focused product marketing process based on",
        variant: "numbered",
        items: [
          "Target market, segment and value chain characterization",
          "Description of the company's or group's business model",
          "Communicating business value and product positioning",
          "Evaluation of pricing and competitive strategies",
          "Building a company- or group-specific competitive strategy",
        ],
      },
      {
        kind: "prose",
        heading: "Product management process",
        body: [
          "Given the pace of market dynamics, ideas, product objectives and critical tasks can slip through the gaps when managers focus on transactional data. We begin with a Product Performance Assessment to evaluate current structure, roles, core processes, practices and beliefs before implementation.",
          "GenuineIT helps companies structure product strategy, planning, development and marketing using the Product Manager's Toolkit (PMTK) — a collection of workflow tools and templates for moving from ad hoc, individual-dependent chaos to efficient, result-oriented product management. We adapt these to real-market scenarios and structure repeatable processes that improve decision-making, information reuse and knowledge retention.",
        ],
      },
    ],
    related: [
      { section: "services", slug: "product-development" },
      { section: "services", slug: "prototyping" },
      { section: "services", slug: "enterprise-architecture" },
    ],
  },
  {
    slug: "prototyping",
    title: "Prototyping",
    summary: "Prototypes that clarify requirements, compare design choices and demonstrate how a system will work before it is built.",
    lead: "Successful software products create their own challenges — demand for new features and technology, pressure to minimize upgrade problems and reduce prices. Prototyping helps teams make the right decisions early.",
    group: "engineering",
    icon: "PenTool",
    legacyPath: "/prototyping.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "While you focus on innovation and new products, GenuineIT helps you reduce cost of ownership and maximize return on investment. As a specialist in product engineering, we use prototyping to give design focus and direction and to involve stakeholders from the start.",
        ],
      },
      {
        kind: "list",
        heading: "GenuineIT's prototyping benefits",
        variant: "cards",
        items: [
          { title: "Clarify requirements" },
          { title: "Increase understanding of a conceptual system" },
          { title: "Provide design focus and direction" },
          { title: "Compare alternative design choices" },
          { title: "Involve business stakeholders" },
          { title: "Involve end users" },
          { title: "Visualize and model workflows" },
          { title: "Identify what won't work — early" },
          { title: "Demonstrate how a built system will work" },
          { title: "Gain support from senior management or investors" },
        ],
      },
    ],
    reviewNotes: ["The legacy Prototyping page reused two paragraphs from the Sustenance Engineering page. The duplicated paragraphs are kept on Sustenance Engineering; this page keeps the prototyping benefits."],
    related: [
      { section: "services", slug: "product-development" },
      { section: "services", slug: "product-management" },
      { section: "services", slug: "sustenance-engineering" },
    ],
  },
  {
    slug: "sustenance-engineering",
    title: "Sustenance Engineering",
    summary: "Sustaining engineering for mature software products: enhancements, bug fixes, patches, porting and L1/L2 product support.",
    lead: "Post-market existence comprises the majority of a software product's lifecycle and must be maintained methodically to realize the product's full capability and return on investment.",
    group: "engineering",
    icon: "Wrench",
    legacyPath: "/sustenance-eng.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Successful software products create their own challenges — demand for new features and current technology, pressure to minimize upgrade problems and reduce prices. Companies sustaining software products must upgrade faster, minimize bugs with each release, support customers at all levels and maintain satisfaction.",
          "While you focus on innovation and developing new products, GenuineIT takes responsibility for nurturing your existing, mature products — helping reduce cost of ownership and maximize ROI by releasing your valuable resources for new product development. As a specialist in product engineering, we understand the critical role sustenance engineering plays in a product's long-term success.",
        ],
      },
      {
        kind: "list",
        heading: "We can take on the entire sustaining engineering process",
        variant: "check",
        items: [
          "Enhancements and bug fixing",
          "Service pack releases and patch tracking",
          "Forward and backward porting to merge enhancements with core product development",
          "Coordination with development teams for future releases",
        ],
      },
      {
        kind: "split",
        heading: "Key services",
        columns: [
          { heading: "Level 1 — Product Support", items: ["Technical personnel with access to the code base who recreate user problems and devise workarounds."] },
          { heading: "Level 2 — Product Maintenance", items: ["Technical personnel who manage the code, make code changes, release periodic patches and deliver permanent solutions."] },
        ],
      },
      {
        kind: "list",
        heading: "Related services we manage",
        variant: "grid",
        items: [
          "Scripting assistance (creation and troubleshooting)",
          "Assistance during customer migrations to new releases",
          "Documentation of known solutions for the knowledge repository",
          "Performance testing of customer situations",
          "Support for multiple customer versions, including multilingual versions",
        ],
      },
    ],
    related: [
      { section: "services", slug: "production-support" },
      { section: "services", slug: "product-development" },
      { section: "services", slug: "quality-assurance" },
    ],
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance & Testing",
    summary: "Automation, regression, performance, integration and compatibility testing that improves quality while reducing time-to-market.",
    lead: "Quality assurance and testing are two of the most critical components of maintaining a competitive edge — yet achieving the right degree of in-house testing can be challenging, expensive and resource-intensive.",
    group: "engineering",
    icon: "ShieldCheck",
    legacyPath: "/quality-assurance.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "GenuineIT offers a comprehensive range of testing and QA services that adhere to high standards of security, integration and industry-standard processes. Using QA expertise and team flexibility, we help increase the quality of clients' products while reducing time-to-market, management risk and operating costs.",
          "With release cycles shrinking and technical complexity increasing, QA and testing can become a capacity constraint. GenuineIT lets you free up development time to focus on new features and on fixing defects that are critical to your competitive edge. We offer regression, compatibility, alpha and beta, integration and performance testing.",
        ],
      },
      {
        kind: "prose",
        heading: "A customer-focused QA process framework",
        body: [
          "We engage with customers to understand current and future needs — aiming not only to meet requirements but to exceed expectations.",
        ],
      },
      {
        kind: "split",
        heading: "Core testing practices",
        columns: [
          {
            heading: "Automation & regression testing",
            items: [
              "Automate functional test scenarios to build a reusable, repeatable test repository",
              "Functional and regression suites built on robust test cases",
              "Tool selection guidance for current and future needs",
              "Creating test harnesses, scripts and test data",
              "Defining test frameworks and reporting for test runs",
              "Executing test runs in different environments",
            ],
          },
          {
            heading: "Performance testing",
            items: [
              "Validate that systems can handle anticipated load before go-live",
              "Address performance risks early under simulated, realistic user load",
              "Introduce a domain perspective to performance testing",
              "Plan and implement performance test strategies",
              "Tool report analysis to diagnose and optimize the system",
            ],
          },
        ],
      },
      {
        kind: "list",
        heading: "QA and testing services include",
        variant: "grid",
        items: ["Test program management", "Automation and regression testing", "Performance benchmarking", "Web testing"],
      },
      {
        kind: "list",
        heading: "Benefits",
        intro: "GenuineIT ensures agreed standards and procedures are followed, resulting in:",
        variant: "check",
        items: [
          "Fewer latent defects, reducing effort and time",
          "Higher reliability",
          "Reduced maintenance costs",
          "Reduced life-cycle cost of software",
        ],
      },
    ],
    technologies: ["Selenium", "QTP", "Mobile testing", "Performance tooling"],
    reviewNotes: ["Legacy copy referenced 'dedicated testing labs' and 'multiple test optimization tools' — withheld pending confirmation."],
    related: [
      { section: "services", slug: "sustenance-engineering" },
      { section: "services", slug: "application-development" },
      { section: "services", slug: "training" },
    ],
  },

  // ---------------------------------------------------------------- Managed
  {
    slug: "cloud-services",
    title: "Cloud Services",
    summary: "Cloud expertise and hosted web, virtual and dedicated servers that help businesses re-imagine IT for agility and efficiency.",
    lead: "Most businesses realize that sustaining all of their technology on-site has outlived its usefulness. Change is necessary, but decision-makers are often too consumed with daily fires to determine a long-term solution.",
    group: "managed",
    icon: "Cloud",
    legacyPath: "/cloud-services.php",
    blocks: [
      {
        kind: "prose",
        heading: "Re-imagine IT with the cloud as the foundation",
        body: [
          "More and more businesses are moving to the cloud for increased business agility and operational economies. GenuineIT provides the expertise and technology to help you leverage today's approaches to enterprise computing.",
          "GenuineIT can help you re-imagine IT using our cloud solutions as the foundation. We offer web, virtual and dedicated servers hosted in a secure data center, helping you eliminate the hassle and cost of managing and maintaining your own equipment and freeing limited resources to focus on other projects.",
        ],
      },
      {
        kind: "list",
        heading: "Benefits of GenuineIT cloud services",
        intro: "Benefits include, but are not limited to:",
        variant: "cards",
        items: [
          { title: "Consolidate & standardize", text: "Create efficiency by consolidating and standardizing your IT environment." },
          { title: "Scale with demand", text: "Meet growing demands from users and customers." },
          { title: "Faster time to market", text: "Speed the delivery of new applications and services." },
          { title: "Lower energy use", text: "Significantly lower energy consumption." },
          { title: "Move forward", text: "Leverage IT to move the business forward, not just maintain the status quo." },
          { title: "Expert support", text: "Supplement in-house knowledge with expertise from certified engineers and developers." },
        ],
      },
      {
        kind: "prose",
        body: ["GenuineIT has helped organizations large and small reduce the cost of administration, development, testing and deployment of applications in the cloud."],
      },
    ],
    technologies: ["Azure", "AWS", "Virtual servers", "Dedicated servers", "Cloud computing"],
    reviewNotes: ["Legacy text: 'hosted in our secure data center' and 'a fraction of the cost of an on-premise solution' — confirm hosting offering is current."],
    related: [
      { section: "services", slug: "network-operations-center" },
      { section: "services", slug: "data-management" },
      { section: "services", slug: "application-integration" },
    ],
  },
  {
    slug: "configuration-management",
    title: "Configuration Management",
    summary: "A centralized, accurate infrastructure model and best-practice change and configuration management processes.",
    lead: "IT infrastructures are too large and complex to be managed by individuals or with spreadsheets, paper-based systems and local databases. A Configuration Management System (CMS) is a must-have to regain and maintain control of IT.",
    group: "managed",
    icon: "Settings2",
    legacyPath: "/configuration-mgmnt.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "The shift toward strategic IT planning has driven the need for a centralized model of infrastructure to support rapid, low-risk change and high-quality IT support. Configuration management provides information essential to delivering and supporting IT services: it creates and maintains a comprehensive, accurate infrastructure model shared by all IT processes across the organization.",
        ],
      },
      {
        kind: "list",
        heading: "The value of configuration management",
        variant: "columns",
        items: [
          "Enable a service-oriented view of the infrastructure",
          "Facilitate IT planning to meet business demand",
          "Provide trend analysis for proactive problem management",
          "Decrease risk by assessing the business impact of change",
          "Support efficient release management",
          "Improve security",
          "Facilitate efficient license and legislative compliance",
          "Support infrastructure standardization",
          "Identify and redeploy under-used components",
          "Calculate accurate lifetime total cost of ownership (TCO) of components and provisioning cost of services",
        ],
      },
      {
        kind: "prose",
        heading: "Integrated change and configuration management",
        body: [
          "Change management is vital, and configuration management supplies the information required to assess the business risk, cost and impact of change. Most companies implement change and configuration management concurrently to gain full strategic control of the infrastructure.",
          "GenuineIT configuration management expertise improves the efficiency and quality of solution delivery. Throughout your project's lifecycle, we ensure the integrity and control of all approved changes — software, hardware and more — through standardized, best-practice configuration management processes, procedures and tools.",
        ],
      },
    ],
    related: [
      { section: "services", slug: "change-management" },
      { section: "services", slug: "production-support" },
      { section: "services", slug: "network-operations-center" },
    ],
  },
  {
    slug: "data-management",
    title: "Data Management Services",
    summary: "Master data, migration, governance, quality and metadata services that give enterprises a single, unified view of their business.",
    lead: "Enterprises struggle to achieve a single, unified view of their business. GenuineIT helps clients discover business cases around data management, bring down operational costs and serve customer needs in near real time.",
    group: "managed",
    icon: "Database",
    legacyPath: "/data-mgmnt.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Organization-wide metadata management, master data management (MDM) and data quality management are critical to transformations such as information visibility across a fragmented supply chain, a single view of the customer and customer-centricity.",
          "Our experience in the enterprise data management space means you can count on our competency and flexibility to handle the complex, sensitive nature of data management. Our talent pool works through well-ordered, agile and standardized methodologies across a wide range of businesses and industries.",
        ],
      },
      {
        kind: "list",
        heading: "Services",
        variant: "grid",
        items: [
          "Master Data Management (MDM)",
          "Data migration",
          "Data governance",
          "Data quality",
          "Metadata management",
          "Customer data integration",
          "Product information management",
        ],
      },
      {
        kind: "prose",
        body: [
          "Our data management service is driven by disciplined, structured quality processes — all wrapped within a strong data privacy and security envelope. Whether it is reference, market or derived data, GenuineIT has the technical depth and domain expertise to address diverse business challenges with scalable, multi-tier and customizable solutions.",
        ],
      },
    ],
    reviewNotes: ["Legacy text referenced 'Global Delivery Centers' — withheld pending verification of delivery locations."],
    related: [
      { section: "solutions", slug: "business-intelligence" },
      { section: "services", slug: "cloud-services" },
      { section: "services", slug: "legacy-software-migration" },
    ],
  },
  {
    slug: "network-operations-center",
    title: "Network Operations Center",
    summary: "Remote infrastructure management — servers, storage, databases, networks, security, email and desktops — around the clock.",
    lead: "An organization's business depends on its IT infrastructure. Maximum uptime means uninterrupted business. Remote Infrastructure Management provides cost-effective 24x7 operations that support clients across global time zones.",
    group: "managed",
    icon: "Activity",
    legacyPath: "/network-operation-center.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "With advances in internet and communication technologies, much of an organization's IT infrastructure can be managed remotely. Remote Infrastructure Management covers the monitoring and management of business-critical IT infrastructure, IT service desk and professional services (consultancy, implementation and management).",
        ],
      },
      {
        kind: "list",
        heading: "Remote infrastructure management includes",
        variant: "grid",
        items: ["Server management", "Storage management", "Database management", "Network management", "Security management", "Email management", "Desktop support"],
      },
      {
        kind: "list",
        heading: "Why organizations choose remote infrastructure management",
        variant: "check",
        items: [
          "Improved IT infrastructure uptime and productivity",
          "Simplified operations management and focus on core competencies",
          "Enhanced ability to adopt new technology",
          "Transparency and control",
          "Better return on IT investment",
          "Scalability on the fly — upgrade or downgrade as required and avoid fixed overheads",
          "Access to domain expertise and 24/7/365 availability",
          "Industry best practices and quality",
          "Cost efficiency in IT infrastructure",
          "Proactive problem identification and pre-emptive resolution",
        ],
      },
    ],
    reviewNotes: ["Withheld: 'more than 85% of … infrastructure … can be managed remotely' and 'drive down IT infrastructure cost by as much as 40%'."],
    related: [
      { section: "services", slug: "production-support" },
      { section: "services", slug: "cloud-services" },
      { section: "services", slug: "configuration-management" },
    ],
  },
  {
    slug: "production-support",
    title: "Production Support",
    summary: "A Production Management Efficiency model that improves the stability, governance and cost of application support operations.",
    lead: "The GenuineIT Production Management Efficiency (PME) model helps enterprises enhance the efficiency of their production support operations.",
    group: "managed",
    icon: "LifeBuoy",
    legacyPath: "/production-support.php",
    blocks: [
      {
        kind: "list",
        heading: "The challenge",
        intro: "Organizations deploy multiple applications to support a globally spread business, using different practices to maintain them. Differences in processes, methodologies and tools lead to inefficiency:",
        variant: "check",
        items: [
          "Higher cost of managing applications",
          "Operational inefficiency in the production environment",
          "Lack of a governance structure in production and support",
          "Inconsistent and incomplete service performance measurement",
          "Difficulty in managing tacit knowledge assets",
        ],
      },
      {
        kind: "prose",
        heading: "The solution",
        body: [
          "GenuineIT leverages an onsite-offshore consulting model with consultants experienced in process, application management, assessments, technology and tools. Onsite teams assess and analyze the client's processes, tools and applications; the offshore team performs in-depth analysis of the observations. The model ensures the right skills for the engagement and a cost-effective, 24x7 delivery model.",
        ],
      },
      {
        kind: "list",
        heading: "Our consulting methodology focuses on",
        variant: "numbered",
        items: [
          "Building synergies across production support units through common definitions of processes and tools",
          "Leveraging industry best practices to design an integrated operating model",
          "Establishing a rationalized L1–L2–L3 resource model, leveraging onsite-offshore delivery for cost optimization",
          "Setting up an architecture for effectiveness and efficiency — and continually improving it",
        ],
      },
      {
        kind: "list",
        heading: "PME design principles",
        intro: "The engagement starts with assessment, followed by development and deployment. With a strong focus on application stability, lower TCO and efficiency, the PME model is designed to:",
        variant: "cards",
        items: [
          { title: "Clear expectations", text: "Give every stakeholder well-defined roles and responsibilities." },
          { title: "Standard processes", text: "Define processes that are easy to implement, manage and continually improve." },
          { title: "Sustained improvement", text: "Sustain improvements in a changing environment." },
          { title: "Operational excellence", text: "Build in dimensions that improve overall efficiency of application support." },
        ],
      },
    ],
    related: [
      { section: "services", slug: "sustenance-engineering" },
      { section: "services", slug: "network-operations-center" },
      { section: "services", slug: "it-outsourcing" },
    ],
  },

  // ---------------------------------------------------------------- Modernization & mobile
  {
    slug: "legacy-software-migration",
    title: "Legacy Software Migration",
    summary: "Tool-assisted migration of PowerBuilder, COBOL, VB, FoxPro, Delphi, Oracle Forms and more to .NET, Java EE and Oracle ADF.",
    lead: "Many companies are migrating legacy applications to modern technologies such as .NET, J2EE and WebSphere, driven by growing business needs, rising maintenance costs, fewer skilled resources on legacy technologies and tight delivery schedules.",
    group: "modernization",
    icon: "ArrowRightLeft",
    legacyPath: "/legacy-sw-migration.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "GenuineIT uses an automated migration utility that converts and migrates legacy applications to modern technologies such as .NET, Java EE, WebSphere, Oracle ADF and Fusion Middleware — retaining the value of existing business logic. The approach offers a complete end-to-end migration solution covering assessment, migration/transformation and integration.",
        ],
      },
      {
        kind: "split",
        heading: "Migration paths",
        columns: [
          {
            heading: "Application modernization",
            items: [
              "PowerBuilder, COBOL, Visual Basic and FoxPro applications to Microsoft .NET",
              "Java / J2EE",
              "PowerBuilder to web",
              "SOA, cloud-enabled, WebSphere-based J2EE technologies",
            ],
          },
          {
            heading: "To Oracle ADF / Fusion Middleware",
            items: [
              "Legacy Oracle Forms to Oracle ADF / web-based applications",
              "Oracle Pro*C forms to Oracle ADF applications",
              "Legacy middleware applications to Oracle Fusion Middleware",
            ],
          },
          {
            heading: "From VB, VB6, Delphi, MS Access and Progress to",
            items: ["Microsoft .NET", "Java / J2EE", "Open-source platforms", "Legacy application modernization framework"],
          },
        ],
      },
      {
        kind: "list",
        heading: "GenuineIT value proposition",
        variant: "check",
        items: [
          "Strong expertise and migration experience with complex projects",
          "Quality solutions delivered cost-effectively",
          "A safe, low-risk approach",
          "A customer-centric approach to project management",
          "Talented, highly skilled IT resources",
          "Clearly defined deliverables at every stage of the project",
        ],
      },
      {
        kind: "list",
        heading: "Benefits",
        variant: "cards",
        items: [
          { title: "Reuse what works", text: "Convert legacy applications to current technology while regaining the value of existing code." },
          { title: "Automated processes", text: "Automated migration with minimal human intervention reduces errors." },
          { title: "Faster than a rewrite", text: "Cost and time savings over a complete re-write, and a faster path to market." },
          { title: "Modern architecture", text: "Three-tier architecture for enterprise-class quality of service." },
          { title: "BPM & SOA enablement", text: "Automated business processes and greater interoperability between applications." },
          { title: "Cloud & virtualization", text: "Scalable, pay-per-use infrastructure that reduces infrastructure, support and maintenance spend." },
        ],
      },
    ],
    technologies: [".NET", "Java EE", "WebSphere", "Oracle ADF", "Fusion Middleware", "PowerBuilder", "COBOL", "Visual Basic", "FoxPro", "Delphi", "MS Access", "Progress"],
    reviewNotes: ["Withheld numeric claims: '40–60% of code converted', 'savings around 65%', 'saves 30–50% of time', 'reusability of 50–60%', 'reducing up to 30% of capital investments', 'TCO slashed by 40% and ROI doubled', '100% customer-centric'."],
    related: [
      { section: "services", slug: "application-server-migration" },
      { section: "services", slug: "application-development" },
      { section: "solutions", slug: "oracle-applications" },
    ],
  },
  {
    slug: "application-server-migration",
    title: "Application Server Software Migration",
    navTitle: "Application Server Migration",
    summary: "WebLogic-to-JBoss migration through a seven-step Replacement Technology Practice that preserves business functionality.",
    lead: "GenuineIT's Application Server Migration Solution helps enterprises migrate from WebLogic Application Server to JBoss Application Server, with much of the migration process automated.",
    group: "modernization",
    icon: "Server",
    legacyPath: "/application-server-sw-migration.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Through its Replacement Technology Practice, GenuineIT helps enterprises reduce their IT budget and increase returns. The solution is an end-to-end, cost-effective option for enterprises spending heavily on licensing and support — especially those that find many WebLogic features unnecessary for their business purposes.",
        ],
      },
      {
        kind: "list",
        heading: "A seven-step approach",
        intro: "GenuineIT follows industry best practices in its Replacement Technology Practice:",
        variant: "numbered",
        items: ["Effort estimation", "Assessment", "Preparation", "Migration", "Enhancements", "Testing", "Post-migration support"],
      },
      {
        kind: "list",
        heading: "Benefits",
        variant: "check",
        items: [
          "Reduced license and support costs compared with WebLogic Application Server",
          "Lower migration cost than re-writing",
          "Business functionality and value retained through a complete, comprehensive migration process",
          "Access to the robust, user-friendly features of JBoss Application Server",
          "Multiple delivery models — on-premises, cloud and SaaS-based deployments",
          "Faster to market, as most of the migration process is automated",
        ],
      },
    ],
    technologies: ["WebLogic", "JBoss Application Server"],
    reviewNotes: ["Withheld numeric claims: '40–50% of the migration process is automated', 'reduces IT budget by 3–4 times', 'saves 50–60% of migration cost'. Legacy page repeated its text twice; de-duplicated."],
    related: [
      { section: "services", slug: "legacy-software-migration" },
      { section: "services", slug: "cloud-services" },
      { section: "services", slug: "application-development" },
    ],
  },
  {
    slug: "android-development",
    title: "Android Application Development",
    navTitle: "Android Development",
    summary: "Custom Android applications built with the Android SDK, tested in simulators and ported to devices.",
    lead: "Companies are looking for Android developers to bring their business ideas to one of the most widely used mobile platforms. Much of Android's popularity owes to the open-source nature of the OS.",
    group: "modernization",
    icon: "Smartphone",
    legacyPath: "/android-appln-development.php",
    legacyPlatform: true,
    blocks: [
      {
        kind: "prose",
        heading: "Android development at GenuineIT",
        body: [
          "GenuineIT works with the Android SDK. Its built-in features provide immense flexibility to develop diverse smart mobile applications for technology companies and entrepreneurs alike — across pharmaceuticals, sales force automation, entertainment, games, location-based services and utility applications.",
          "GenuineIT has Android application developers with expertise in building custom applications, testing in a simulator and porting to mobile devices. Core Android applications include an email client, SMS program, calendar, maps, browser and contacts, written using the Java programming language.",
        ],
      },
      {
        kind: "list",
        heading: "Advantages of the Android platform",
        variant: "columns",
        items: [
          "GSM, EDGE, CDMA, Bluetooth, Wi-Fi, EV-DO and UMTS technologies to send and receive data across mobile networks",
          "Comprehensive libraries for 2D and 3D graphics",
          "A wide range of libraries for image, audio and video files",
          "Video camera, touchscreen, GPS, accelerometer and magnetometer features",
          "Inter-process communication (IPC) message passing",
          "SQLite for data storage",
          "App export and signing for publishing",
        ],
      },
      {
        kind: "list",
        heading: "Client segments",
        variant: "pills",
        items: ["Multimedia", "Location-based tools", "Barcode scanners", "Travel guides", "Games", "Utility applications"],
      },
    ],
    technologies: ["Android SDK", "Java", "SQLite"],
    reviewNotes: ["Legacy statistics ('more than 50,000 Android apps') and 'P2P using Google Talk' are outdated and were removed. Page content reflects an earlier mobile era; owner may wish to refresh or retire."],
    related: [
      { section: "services", slug: "iphone-development" },
      { section: "services", slug: "windows-mobile-development" },
      { section: "services", slug: "blackberry-development" },
    ],
  },
  {
    slug: "iphone-development",
    title: "iPhone Application Development",
    navTitle: "iPhone Development",
    summary: "iPhone apps from feasibility study and SDK study through UI and prototype design, development, testing and App Store approval.",
    lead: "GenuineIT works in accordance with the rules and guidelines set by Apple — carrying out the feasibility study and planning the whole solution with a team of iPhone experts.",
    group: "modernization",
    icon: "TabletSmartphone",
    legacyPath: "/iphone-app-dev.php",
    legacyPlatform: true,
    blocks: [
      {
        kind: "list",
        heading: "Our process",
        variant: "numbered",
        items: ["Feasibility study and planning", "SDK study", "UI and prototype design", "Development", "Testing", "Apple approval and App Store release"],
      },
      {
        kind: "list",
        heading: "GenuineIT iPhone expertise",
        variant: "grid",
        items: [
          "On-device portals",
          "Themes, icons and design",
          "Native website applications",
          "Messaging clients",
          "Travel, navigation and weather apps",
          "M-commerce",
          "Business and sales applications",
        ],
      },
      {
        kind: "split",
        heading: "How we work",
        columns: [
          { heading: "Application development process", items: ["Innovative thinking and in-depth technical knowledge are essential. We build iPhone applications from scratch by working closely with clients to find feasible solutions for their ideas or business needs."] },
          { heading: "UI design & prototype", items: ["UI design and prototype development are key to scalable applications. Our team follows a UI and prototype process based on your idea and concept, including customized themes and icons."] },
          { heading: "SDK study", items: ["Our team follows the iPhone SDK closely, including the latest updates, to deliver current application services."] },
        ],
      },
      {
        kind: "quote",
        text: "You tell us your ideas and we will give you robust and scalable applications that take your business to new heights.",
      },
    ],
    technologies: ["iOS SDK"],
    reviewNotes: ["Outdated statistic removed ('App Store offers more than 500,000 applications'); 'iTunes' updated to 'App Store'."],
    related: [
      { section: "services", slug: "android-development" },
      { section: "services", slug: "windows-mobile-development" },
      { section: "services", slug: "prototyping" },
    ],
  },
  {
    slug: "blackberry-development",
    title: "BlackBerry Application Development",
    navTitle: "BlackBerry Development",
    summary: "Mobile business solutions for BlackBerry devices with end-to-end responsibility and real-time project tracking.",
    lead: "GenuineIT's BlackBerry development team has expertise in developing mobile business solutions, with a focus on technical excellence that delivers business value.",
    group: "modernization",
    icon: "Smartphone",
    legacyPath: "/blackberry-app-dev.php",
    legacyPlatform: true,
    blocks: [
      {
        kind: "prose",
        body: [
          "We build custom applications for BlackBerry devices — including BlackBerry Bold, Curve, Storm and Pearl — to suit your needs, providing cost-effective solutions optimized to your requirements.",
        ],
      },
      {
        kind: "list",
        heading: "Solution offerings",
        variant: "check",
        items: [
          "Experience developing BlackBerry applications for clients from diverse industries",
          "Solutions and services streamlined to client requirements to help achieve business goals",
          "End-to-end responsibility for fast turnaround and high-quality output at a reasonable rate",
          "Real-time tracking of project progress through a constant touch point between client and team",
          "Technical support from our BlackBerry application developers",
          "For long-term outsourced projects, close analysis with real-time updates and deliverables",
        ],
      },
    ],
    reviewNotes: ["BlackBerry device platforms are discontinued. Page migrated for completeness; recommend the owner retire or archive it."],
    related: [
      { section: "services", slug: "android-development" },
      { section: "services", slug: "iphone-development" },
      { section: "services", slug: "windows-mobile-development" },
    ],
  },
  {
    slug: "windows-mobile-development",
    title: "Windows Mobile Development",
    summary: "End-to-end Windows Mobile application development using Microsoft .NET technologies.",
    lead: "We provide end-to-end development services in Windows Mobile application development. Our programmers have extensive knowledge in app development to help you expand your mobile application's user base.",
    group: "modernization",
    icon: "MonitorSmartphone",
    legacyPath: "/windows-app-dev.php",
    legacyPlatform: true,
    blocks: [
      {
        kind: "split",
        heading: "Working with GenuineIT",
        columns: [
          {
            heading: "Outsourcing Windows Mobile applications",
            items: [
              "Before outsourcing, define the roles and responsibilities of application programmers, determine how your existing process will need to adapt, agree on communication modes, processes and channels, and plan resource acquisition.",
              "Outsourcing is a long-term vision — we aim to build an enduring bond with our clients.",
            ],
          },
          {
            heading: "Hiring Windows Mobile developers",
            items: [
              "Our developers use technologies such as Microsoft .NET.",
              "We have developed applications across Windows Mobile 5.0, 6.0, 6.1 and 6.5.",
              "Our in-house team delivers robust, reliable applications that are easy to update for future enhancements, and our project management approach supports on-time delivery.",
            ],
          },
        ],
      },
    ],
    technologies: ["Microsoft .NET", "Windows Mobile 5.0–6.5"],
    reviewNotes: ["Windows Mobile is discontinued. Page migrated for completeness; recommend retiring or archiving."],
    related: [
      { section: "services", slug: "android-development" },
      { section: "services", slug: "iphone-development" },
      { section: "services", slug: "application-development" },
    ],
  },
  {
    slug: "e-learning",
    title: "E-Learning",
    summary: "E-learning consulting, blueprints and adoption programs that close skill gaps and support continuous learning.",
    lead: "The most important asset of any organization is its people. The way an organization increases its human capital is by nurturing its people and becoming a learning organization.",
    group: "modernization",
    icon: "BookOpen",
    legacyPath: "/e-learning.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "GenuineIT e-learning solutions provide a system for continuous learning and development: skill-gap analysis, a roadmap to bridge the gap, and ongoing upgrading of skill sets. The objective is to meet business goals, deliver strong ROI and strengthen the organization's competitiveness.",
        ],
      },
      {
        kind: "list",
        heading: "Business problems e-learning addresses",
        variant: "check",
        items: [
          "Rolling out enterprise systems such as ERP or SCM",
          "Ongoing sales, product and process training for geographically dispersed admin, sales and technical teams",
          "Reducing time-to-market for a new product",
          "Delivering induction programs for new employees",
          "Converting existing distance-learning programs to online programs for academic organizations",
        ],
      },
      {
        kind: "prose",
        heading: "A considered roll-out",
        body: [
          "Enterprise e-learning is complex. It requires a deep understanding of objectives, target audience, and cultural and infrastructure issues at both the delivery and user ends. GenuineIT determines the best way to deliver e-learning to every stakeholder — employees, dealers, customers or shareholders — by defining a roadmap, developing programs and delivering them with appropriate technology.",
        ],
      },
      {
        kind: "list",
        heading: "GenuineIT services include",
        variant: "numbered",
        items: ["Pre-consulting, consulting, strategy and services", "Formulating an e-learning blueprint", "E-learning adoption", "Return on investment (ROI) calculations"],
      },
    ],
    related: [
      { section: "services", slug: "training" },
      { section: "services", slug: "change-management" },
      { section: "solutions", slug: "content-management" },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
