import type { CatalogGroup, DetailPage } from "@/types/content";

/** Enterprise solutions migrated from genuineitllc.com (ERP, CRM, content, data and commerce). */

export const solutionGroups: CatalogGroup[] = [
  { id: "erp", title: "ERP & Enterprise Applications", description: "Oracle, SAP and Microsoft Dynamics implementation, upgrade and support." },
  { id: "crm", title: "Customer Relationship Management", description: "Salesforce and Siebel CRM strategy, implementation and support." },
  { id: "content", title: "Content & Collaboration", description: "Enterprise content management and SharePoint portals." },
  { id: "data-commerce", title: "Data & Digital Commerce", description: "Business intelligence, data warehousing and e-commerce platforms." },
];

export const solutions: DetailPage[] = [
  {
    slug: "oracle-applications",
    title: "Oracle Applications Expertise",
    navTitle: "Oracle Applications",
    summary: "Oracle E-Business Suite implementation, migration and support across financials, supply chain, manufacturing and HCM.",
    lead: "GenuineIT has delivered Oracle E-Business Suite implementations providing integrated e-commerce order capture, inventory management, financial and business management, and reporting services — including third-party integrations and complex Electronic Data Interchange (EDI).",
    group: "erp",
    icon: "Layers",
    legacyPath: "/oracle-app-expertise.php",
    blocks: [
      {
        kind: "prose",
        heading: "Full ERP support throughout daily operations",
        body: [
          "We provide full ERP support throughout daily business operations, including implementation services and ERP database management. We offer deep skills in purchasing automation, notifications, HRMS and CRM implementation.",
          "Oracle E-Business Suite runs the gamut of business applications — from transactional applications and inventory management to financials, procurement, human resources and customer relationship management — with reduced downtime and shorter upgrade cycles supporting enterprise-wide operating and financial systems.",
          "Its applications are built on a unified information architecture that consolidates data from Oracle and non-Oracle applications and provides a consistent definition of customers, suppliers, partners and employees across the enterprise. The result: current performance metrics, financial ratios and profit-and-loss summaries that roll up across departments, products and geographies.",
        ],
      },
      {
        kind: "list",
        heading: "Benefits",
        variant: "cards",
        items: [
          { title: "Cut costs", text: "Integrated applications reduce the need for software integration, data translation and customization." },
          { title: "Increase revenue", text: "Across front- and back-office functions." },
          { title: "Trusted data", text: "Access current, accurate and consistent data — a single source of truth for daily business intelligence." },
        ],
      },
      {
        kind: "split",
        heading: "GenuineIT provides",
        columns: [
          {
            heading: "Oracle E-Business Suite",
            items: [
              "Implementation (R12 / 11i / 11.0.3) and migration (10.7 to 11i / 11.0.3 / R12)",
              "Oracle Financials — General Ledger, Accounts Payable, Accounts Receivable, Cost Accounting",
              "Oracle SCM — Order Management and Inventory Management",
              "Oracle Manufacturing (Shop Floor) — Discrete / Process / Flow",
              "Oracle HCM and HRMS — Human Resources and Self-Service Applications",
            ],
          },
          {
            heading: "Oracle Data Warehousing",
            items: [
              "Oracle Database",
              "Oracle Business Intelligence (BI)",
              "Oracle Business Integration — Fusion Middleware",
              "Oracle Portals",
            ],
          },
          {
            heading: "Oracle Technologies",
            items: [
              "Strategy consulting / re-architecting",
              "ERP analytics",
              "Data migration",
              "Corporate performance management",
              "Metadata management",
              "Data access and data mining",
              "Data integration and data quality",
            ],
          },
        ],
      },
    ],
    technologies: ["Oracle E-Business Suite R12 / 11i", "Oracle Database", "Oracle BI", "Fusion Middleware", "EDI"],
    reviewNotes: [
      "Legacy text: 'We supply Oracle Certified Implementation Services' — wording implies a vendor certification; reduced to 'implementation services' pending proof.",
      "Legacy listed Oracle Database 9i/10g/11g — versions retired from the page; confirm current versions.",
      "Vendor marketing claims ('the only software that can provide…', 'the leader in…') removed.",
    ],
    related: [
      { section: "solutions", slug: "sap" },
      { section: "solutions", slug: "business-intelligence" },
      { section: "industries", slug: "manufacturing" },
    ],
  },
  {
    slug: "sap",
    title: "SAP",
    navTitle: "SAP & ERP Expertise",
    seoTitle: "SAP Implementation, Upgrade & Support",
    summary: "SAP implementations, rollouts, upgrades, production support and development backed by proven tools and methodology.",
    lead: "GenuineIT's results-driven SAP capabilities, business knowledge, technical insight and implementation experience address today's most pressing business challenges.",
    group: "erp",
    icon: "Warehouse",
    legacyPath: "/sap.php",
    blocks: [
      {
        kind: "prose",
        heading: "Our focus",
        body: [
          "Our SAP practice is equipped with proven tools, methodologies, templates and accelerators to deliver robust implementations, faster rollouts, low-risk upgrades, dependable production support and quality development. GenuineIT tools and intellectual capital are applied to every engagement.",
        ],
      },
      {
        kind: "list",
        heading: "Our strengths",
        variant: "cards",
        items: [
          { title: "Experienced SAP professionals", text: "Industry experts, solution architects, and functional and technical consultants with several years of industry experience." },
          { title: "Enterprise value creation", text: "Aligning people, processes and technology to support the SAP business case." },
          { title: "Tailored solutions", text: "We identify SAP solutions that address the enterprise's particular requirements, then tailor them to fit your needs." },
          { title: "Accelerated delivery", text: "Time-tested techniques and the GenuineIT methodology for SAP." },
          { title: "Lower total cost of ownership", text: "A delivery model that leverages a network of resources for outsourcing, consulting and systems integration." },
        ],
      },
      {
        kind: "prose",
        heading: "SAP upgrades",
        body: [
          "An SAP upgrade is an opportunity to extract the best returns from your long-term SAP investment at a low incremental cost. Every enterprise faces different upgrade challenges and needs solutions for its unique IT landscape.",
          "Upgrade projects can be intimidating: limited insight to estimate time and resources, and limited in-house knowledge. Done correctly, with the right partner, those challenges can be overcome. GenuineIT provides consulting, managed services, training and support for SAP upgrades and enhancements, working with you through planning, implementation, operation and ongoing optimization — with minimal disruption.",
        ],
      },
      {
        kind: "split",
        columns: [
          { heading: "GenuineIT offers", items: ["Proven business solutions", "Cost-effective installation and implementations", "Complete life-cycle support to lower total cost of ownership", "Increased customer satisfaction", "Industry best practices"] },
          { heading: "GenuineIT advantages", items: ["Rapid deployment", "Cost-effective", "Minimized risk", "Detailed blueprint of activity", "High-quality execution", "Rigorous testing", "Preservation of all functionality", "Standardized metrics"] },
        ],
      },
    ],
    technologies: ["SAP — all modules", "SAP upgrades", "SAP production support"],
    reviewNotes: ["Legacy text referenced 'a SAP Global Delivery Center' and 'Genuine IT global practice' — withheld pending verification of delivery locations."],
    related: [
      { section: "solutions", slug: "oracle-applications" },
      { section: "solutions", slug: "microsoft-dynamics" },
      { section: "services", slug: "change-management" },
    ],
  },
  {
    slug: "microsoft-dynamics",
    title: "Microsoft Dynamics",
    summary: "Microsoft Dynamics ERP and CRM solutions delivered using the Sure Step methodology, from diagnostic to deployment.",
    lead: "GenuineIT provides a range of Microsoft Dynamics solutions and services — familiar and adaptable Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) — designed to meet almost any business need and support accurate decision-making.",
    group: "erp",
    icon: "LayoutGrid",
    legacyPath: "/microsoft-dynamics.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Using Microsoft's Sure Step methodology from the diagnostic stage through deployment, we offer strong value in the Dynamics space. Our delivery capabilities are further enhanced by domain practices in manufacturing, healthcare and life sciences, and retail — key contributors to addressing customer requirements on the Dynamics platform.",
        ],
      },
      {
        kind: "list",
        heading: "Key industry frameworks",
        variant: "cards",
        items: [
          { title: "Automotive suppliers", text: "Pre-packaged hosted and on-premises solution." },
          { title: "IFRS", text: "International Financial Reporting Standards planning and convergence solution." },
          { title: "Customer 360", text: "A 360-degree view of customers on CRM." },
          { title: "FMCG secondary sales", text: "Add-on portal to capture secondary sales." },
          { title: "Retail back office", text: "Pre-packaged back-office solution with a Smart Shop connector." },
        ],
      },
    ],
    technologies: ["Microsoft Dynamics ERP", "Microsoft Dynamics CRM", "Sure Step methodology"],
    reviewNotes: ["Legacy text: 'With our Microsoft COE' — Center of Excellence claim withheld pending confirmation."],
    related: [
      { section: "solutions", slug: "sap" },
      { section: "industries", slug: "retail" },
      { section: "industries", slug: "manufacturing" },
    ],
  },
  {
    slug: "salesforce-crm",
    title: "Salesforce CRM",
    summary: "Salesforce.com CRM consulting and implementation for marketing, sales, service and legacy-system integration.",
    lead: "GenuineIT's Salesforce CRM practice understands the dilemmas clients face and works with customers to improve their business — helping IT teams move critical business functionality to the cloud.",
    group: "crm",
    icon: "CloudCog",
    legacyPath: "/salesforce-crm.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Our Salesforce CRM practice brings CRM consulting and implementation expertise that helps clients control fixed-cost investments. GenuineIT works with clients as a transformation partner, helping them choose a best-fit, scalable, secure on-demand CRM solution and supporting execution of Salesforce.com implementations with a mature set of methodologies, frameworks and tools.",
        ],
      },
      {
        kind: "list",
        heading: "Business functions we support",
        variant: "grid",
        items: ["Marketing", "Sales", "Customer service and support", "Integration with legacy systems"],
      },
      {
        kind: "split",
        heading: "GenuineIT value proposition",
        columns: [
          { heading: "Optimized cost", items: ["Reusable components", "Resources with multiple skills", "Shared support model", "Continuous training"] },
          { heading: "Reduced time-to-market", items: ["Ready infrastructure for demonstrating CRM functions across product lines", "Ready-to-deploy solutions"] },
          { heading: "Improved flexibility", items: ["Ready-to-deploy team", "Ramp-up and ramp-down of team", "24x7 resource availability"] },
          { heading: "Competency", items: ["Frequent knowledge-sharing sessions", "Product expertise across Salesforce (SFDC) and Force.com", "Complementary technologies: reporting, BI and integration using WSDL"] },
        ],
      },
    ],
    technologies: ["Salesforce.com", "Force.com", "WSDL integration"],
    reviewNotes: ["Withheld: '80% team is certified', '100% offshore-centric execution model' (conflicts with onshore staffing positioning) and 'enormous years of … expertise'."],
    related: [
      { section: "solutions", slug: "siebel-crm" },
      { section: "services", slug: "application-integration" },
      { section: "services", slug: "cloud-services" },
    ],
  },
  {
    slug: "siebel-crm",
    title: "Siebel CRM",
    summary: "Siebel CRM strategy, lifecycle implementation, upgrades, localization, performance tuning and production support.",
    lead: "With experience designing and implementing solutions for organizations of all sizes in major vertical markets, GenuineIT offers comprehensive Siebel CRM services.",
    group: "crm",
    icon: "Contact",
    legacyPath: "/siebel.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "GenuineIT Siebel consultants have implementation experience across industries and technical-functional areas, providing customized, effective business solutions based on technical and industry process knowledge.",
          "Our working relationships across sales, product marketing and expert services groups help us provide quick turnarounds on product-specific issues and bring the right mix of products and expert resources to implementation engagements.",
        ],
      },
      {
        kind: "list",
        heading: "Services",
        variant: "columns",
        items: [
          "CRM strategy and roadmap definition",
          "IT architecture and strategy",
          "Siebel / Oracle implementation services",
          "Complete lifecycle implementations — business analysis, process re-engineering, design, development, testing and deployment",
          "Specialized Siebel modules including Product Configuration, ePricer, Order Management and Incentive Compensation",
          "Proprietary tooling for performance evaluation, tuning and enhancement",
          "Production support and maintenance, including enhancements and application maintenance",
          "Siebel upgrades, Unicode migrations and single sign-on services",
          "Internationalization and localization for multi-language, multi-currency rollouts",
          "Data quality and migration services",
        ],
      },
    ],
    technologies: ["Siebel CRM", "ePricer", "Product Configurator", "Order Management", "Incentive Compensation"],
    reviewNotes: ["Legacy text: 'Siebel-certified consultants' — certification claim reduced to 'consultants' pending proof."],
    related: [
      { section: "solutions", slug: "salesforce-crm" },
      { section: "solutions", slug: "oracle-applications" },
      { section: "services", slug: "production-support" },
    ],
  },
  {
    slug: "content-management",
    title: "Enterprise Content Management",
    navTitle: "Content Management",
    summary: "ECM consulting and implementation to capture, manage, store, preserve and deliver enterprise information assets.",
    lead: "GenuineIT's Enterprise Content Management (ECM) services aim to deliver productivity gains by helping enterprises capture, manage, store, preserve and deliver their information assets in the best possible way.",
    group: "content",
    icon: "FolderTree",
    legacyPath: "/content-mgmt-solution.php",
    blocks: [
      {
        kind: "split",
        heading: "Consulting and implementation",
        columns: [
          {
            heading: "Consulting / workshop / assessment",
            items: [
              "ECM audit and business case development",
              "ECM portfolio assessment",
              "ECM product fitment analysis",
              "ECM framework development",
              "ECM strategy best practices",
              "ECM roadmap development",
            ],
          },
          {
            heading: "Implementation services",
            items: [
              "Scanning and imaging",
              "Document management",
              "Web content management",
              "Records management",
              "Digital asset management",
              "Content workflow",
              "Content integration",
              "Content security",
              "Enterprise search",
              "Integration services",
              "Migration (SharePoint, LiveLink, Documentum, Oracle UCM and similar platforms)",
            ],
          },
        ],
      },
      {
        kind: "list",
        heading: "GenuineIT methodology & best practices",
        variant: "numbered",
        items: ["Information life cycle", "Information architecture", "Taxonomy and metadata", "Content policies and governance", "Content security", "User adoption and change management"],
      },
      {
        kind: "list",
        heading: "GenuineIT value proposition",
        variant: "check",
        items: [
          "Thought leadership in enterprise content management and knowledge management",
          "In-depth knowledge of ECM application areas and enabling technologies across platforms",
          "Ability to start small and scale quickly while keeping the big picture in mind",
          "The 80-20 principle — alleviating major pain areas through focused initiatives",
          "Ability to identify and articulate knowledge needs across the organization",
          "Domain expertise in retail, manufacturing, life sciences and utilities",
          "Technology-agnostic advice for the best-fit solution",
          "Ability to make several technology pieces work together, leveraging existing IT investments",
        ],
      },
    ],
    technologies: ["SharePoint", "LiveLink", "Documentum", "Oracle UCM", "Sitecore"],
    reviewNotes: ["Legacy: 'Alliances with the best of breed technology providers' — unnamed alliances withheld pending verification."],
    related: [
      { section: "solutions", slug: "sharepoint" },
      { section: "services", slug: "web-application-development" },
      { section: "industries", slug: "energy-utilities" },
    ],
  },
  {
    slug: "sharepoint",
    title: "SharePoint Consulting",
    summary: "SharePoint portals, custom web parts and workflows, governance, migration and adoption — architected around business scenarios.",
    lead: "GenuineIT has a team of domain and subject-matter experts, functional and technical consultants, solution architects and SharePoint developers. Implementation review, solution architecture, functionality mapping, integration, migration analysis, governance, adoption training and best-practice consulting are the hallmarks of our SharePoint services.",
    group: "content",
    icon: "Share2",
    legacyPath: "/share-point-consulting.php",
    blocks: [
      {
        kind: "split",
        heading: "Offerings & implementation tracks",
        columns: [
          {
            heading: "SharePoint offerings",
            items: [
              "Portal conceptualization — customer, employee and supplier portals",
              "Information consolidation assessment",
              "SharePoint requirements spotlight",
              "Fast track to SharePoint",
              "SharePoint best practices",
              "ECM / portal implementation roadmap",
            ],
          },
          {
            heading: "Implementation tracks",
            items: [
              "Out-of-the-box implementation",
              "Design and development of site themes and templates",
              "Custom web parts and business-centric applications",
              "Custom workflows",
              "Custom security providers and authentication models",
              "Migration from earlier SharePoint versions, LiveLink and similar platforms",
            ],
          },
        ],
      },
      {
        kind: "list",
        heading: "GenuineIT best practices",
        variant: "grid",
        items: ["Information architecture design", "SharePoint governance", "Content governance", "Enterprise rollout", "User adoption and change management"],
      },
      {
        kind: "list",
        heading: "GenuineIT value proposition",
        variant: "cards",
        items: [
          { title: "Mapped to your scenarios", text: "Experience architecting and implementing SharePoint solutions helps us map product functionality precisely to business scenarios." },
          { title: "Implementation guidelines", text: "Best-practice implementation guidelines built from experience captured and distilled over the years." },
          { title: "Governance & adoption", text: "A SharePoint governance model and training adoption roadmap for successful rollout and acceptance." },
          { title: "Migration tooling", text: "Migration guidelines and tools to move effectively from older SharePoint versions, plus experience integrating SharePoint with EMC Documentum across ECM, BPM and collaboration." },
        ],
      },
      {
        kind: "list",
        heading: "Benefits of SharePoint services",
        variant: "columns",
        items: [
          { title: "Improve team productivity", text: "Team workspaces, shared calendars, document libraries, announcements, alerts, blogs and wikis connect people with the information they need." },
          { title: "Manage documents with integrity", text: "Required check-out, version history and restore, and document- and item-level security." },
          { title: "Get users up to speed quickly", text: "Familiar navigation and integration with Microsoft Office programs." },
          { title: "Tailor to business processes", text: "Application templates for specific business processes or sets of tasks." },
          { title: "Build collaboration quickly", text: "Deploy from single-server configurations to robust enterprise configurations with minimal administrative effort." },
          { title: "Reduce security complexity", text: "Advanced administrative controls for site provisioning, membership, permissions and storage limits." },
          { title: "Granular control", text: "Permissions down to the document or item level, with self-service workspaces inside preset policies." },
          { title: "Robust storage", text: "Check-in/check-out, version history, custom metadata, customizable views and recycle-bin recovery." },
          { title: "Scale to business needs", text: "Manage server farms, servers and sites via browser or command-line utilities." },
          { title: "A foundation for web applications", text: "A common framework for document management and collaboration on which web applications can be built." },
        ],
      },
    ],
    technologies: ["SharePoint", "MOSS 2007", "Windows SharePoint Services", "EMC Documentum", "BizTalk"],
    legacyPlatform: true,
    reviewNotes: ["Legacy page is centred on SharePoint 2001–2007 (MOSS 2007, WSS 3.0). Version-specific references were generalized; recommend owner refresh for current SharePoint / Microsoft 365."],
    related: [
      { section: "solutions", slug: "content-management" },
      { section: "services", slug: "application-integration" },
      { section: "services", slug: "change-management" },
    ],
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence & Data Warehousing",
    navTitle: "BI & Data Warehousing",
    summary: "BI, data warehousing, ETL, data quality, governance and MDM services that turn data into effective, timely decisions.",
    lead: "Making real decisions on massive volumes of data is one of the major BI and data warehousing challenges enterprises face. Many solutions already struggle with the volume of data available for analysis.",
    group: "data-commerce",
    icon: "ChartColumn",
    legacyPath: "/business-intelligence-data-warehousing.php",
    blocks: [
      {
        kind: "list",
        heading: "Executives must be able to",
        variant: "numbered",
        items: [
          "Provide the right people with the right information at the right time",
          "Monitor market conditions, customer preferences, future trends and demographic shifts",
          "Make sound business decisions based on accurate, current and comprehensive information",
        ],
        outro: "Combining enterprise data warehousing, business intelligence, enterprise architecture and process integration, GenuineIT BI/DW services help ensure your organization is not a victim of data quality and availability issues — and can make better decisions faster.",
      },
      {
        kind: "list",
        heading: "Discovery, assessment and development services",
        variant: "grid",
        items: [
          "Data warehousing",
          "Business intelligence",
          "Performance management",
          "BI analytical reporting, visualizations and dashboards",
          "Data integration",
          "ETL",
          "Data quality process and infrastructure",
          "Data governance and stewardship",
          "Master data management",
        ],
      },
      {
        kind: "prose",
        heading: "Transforming data into effective, timely decisions",
        body: [
          "Our BI services address a fundamental challenge of any business: closing the loop between business planning and execution. Misalignment of business and BI strategy, time and cost overruns, and complex data infrastructure prevent organizations from achieving their goals. We partner with customers to advise, build and co-manage an effective BI implementation strategy with a sustainable, cost-effective execution model.",
          "BI systems combined with data warehouse initiatives transform operational data into an analytical structure that gives executives a historical view of operations — reducing the burden on IT and enabling proactive rather than reactive decisions.",
          "The people and processes that govern your data are critical. Data quality and stewardship, combined with the right governance model, bring people and processes together so decisions are based on timely, accurate information.",
        ],
      },
    ],
    technologies: ["Informatica", "DataStage", "Cognos", "Business Objects", "MicroStrategy", "MSBI / Power BI", "OBIEE"],
    reviewNotes: ["Withheld third-party statistic: 'over 85% of BI implementations fail to meet the objectives…' (no source cited)."],
    related: [
      { section: "services", slug: "data-management" },
      { section: "solutions", slug: "oracle-applications" },
      { section: "industries", slug: "government" },
    ],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    navTitle: "E-Commerce",
    summary: "E-commerce design, development, hosting and consulting for online, social and mobile commerce.",
    lead: "E-commerce now reaches well beyond simple B2C and B2B shopping portals. Social networking has made consumers active participants in marketing and selling, and mobile applications have opened a direct new channel for retail.",
    group: "data-commerce",
    icon: "ShoppingCart",
    legacyPath: "/ecommerce.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "The key to a competitive edge in growing e-commerce markets is a great customer experience: a sharp user interface, secure data management, a solid point of sale, rapid performance and the ability to handle large amounts of traffic.",
        ],
      },
      {
        kind: "list",
        heading: "Services to help transform your business",
        variant: "cards",
        items: [
          { title: "End-to-end e-commerce", text: "Website design and development through hosting, consulting and promotional services." },
          { title: "Online, social & mobile commerce" },
          { title: "Specialized web portals" },
          { title: "Interactive advertising" },
        ],
      },
      {
        kind: "list",
        heading: "GenuineIT capabilities",
        intro: "We have worked with multiple workflow modeling and reporting tools to provide cost-effective, fast and reliable e-commerce software product development. Capabilities include:",
        variant: "check",
        items: [
          "Web-based administration products for managing inventory, coupon codes and gift certificates",
          "Web portals for travel, ticketing and event management",
          "Websites optimized for user-generated content",
          "Shopping services for mobile phones",
          "Robust, scalable platforms for digital content delivery",
          "Online storefronts, catalogs and shopping carts",
        ],
      },
    ],
    related: [
      { section: "industries", slug: "retail" },
      { section: "services", slug: "web-application-development" },
      { section: "solutions", slug: "content-management" },
    ],
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
