import type { CatalogGroup, DetailPage } from "@/types/content";

/** Industry pages migrated from genuineitllc.com. No case studies or client implementations are implied. */

export const industryGroups: CatalogGroup[] = [
  { id: "energy-industrial", title: "Energy & Industrial", description: "Utilities, oil and gas, manufacturing and aerospace & defense." },
  { id: "financial", title: "Financial Services", description: "Banking, capital markets and insurance." },
  { id: "health", title: "Health & Life Sciences", description: "Healthcare, pharmaceutical and life sciences organizations." },
  { id: "public-consumer", title: "Public Sector, Media & Consumer", description: "Government, transportation, communications and retail." },
];

export const industries: DetailPage[] = [
  {
    slug: "energy-utilities",
    title: "Energy & Utilities",
    summary: "Domain expertise across the utilities value chain — upstream, midstream, downstream and back-office operations.",
    lead: "The Energy and Utilities (E&U) practice of GenuineIT brings domain expertise and exposure to utility markets, has participated in the regulation and deregulation journey of energy markets, and actively helps customers achieve their goals and objectives.",
    group: "energy-industrial",
    icon: "Zap",
    legacyPath: "/utilities.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "GenuineIT's E&U practice has built expertise across the entire Energy and Utilities value chain — upstream, midstream and downstream sectors and back-office operations — through cumulative experience on several projects over several years.",
        ],
      },
      {
        kind: "split",
        heading: "Expertise across the value chain",
        columns: [
          { heading: "Upstream", items: ["Transmission outage and generation availability", "Asset management and maintenance", "Inventory control", "Fuel management"] },
          { heading: "Midstream", items: ["Network analysis, MIMS", "Balancing mechanism", "Integrated energy management (BETTA)", "Mains risk priority management", "SCADA", "GIS"] },
          { heading: "Downstream", items: ["Emergency meter work", "Job issue system", "Demand derivation system", "Field force device replacement", "Connections work management and AMR", "Market intelligence and provision of information"] },
          { heading: "Back-office operations", items: ["Knowledge management", "Enterprise collaboration", "EUC applications", "Infrastructure management", "ERP"] },
        ],
      },
      {
        kind: "list",
        heading: "Service offerings",
        intro: "GenuineIT's Energy and Utilities practice provides services including:",
        variant: "columns",
        items: [
          "Analyzing and implementing regulatory and deregulatory changes",
          "Legacy systems",
          "Business process alignment and IT system improvements",
          "Rapid application development to drive business benefits",
          "Regulatory reporting",
          "Program assurance",
          "Performance management",
          "Application separation and consolidation due to deregulation or mergers and acquisitions",
          "System integration",
          "Green IT services",
        ],
        outro: "We specialize in Advanced Meter Management and energy trading with our framework-based solution, for prototype and proof-of-concept implementations.",
      },
      {
        kind: "list",
        heading: "GenuineIT value proposition",
        variant: "cards",
        items: [
          { title: "Energy trading frameworks", text: "Framework-based development for energy trading, including an SOA-based energy trading framework for flexibility, reusability and competitive strategy." },
          { title: "Advisory councils", text: "Bridging the gap between industry and service providers through market-based advisory councils." },
          { title: "Domain + IT best practice", text: "Working with utilities domain and market experts to bring industry best practices and IT services together." },
          { title: "Core technology solutions", text: "Automatic Meter Management (AMM), asset and work management, energy trading, balancing mechanism, field force automation and straight-through processing (STP) integration." },
        ],
      },
    ],
    technologies: ["SCADA", "GIS", "AMR / AMM", "MIMS", "ERP"],
    reviewNotes: ["Withheld: 'backed by 15 years of hands-on experience' (time-relative; conflicts with other tenure statements). Legacy 'Partnership with leading Utilities domain and market experts' reworded as 'working with'."],
    related: [
      { section: "industries", slug: "oil-gas" },
      { section: "solutions", slug: "content-management" },
      { section: "services", slug: "application-integration" },
    ],
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    summary: "IT services and ERP solutions for upstream, midstream and downstream oil and gas — from production accounting to compliance.",
    lead: "By the very nature of its products, the oil and gas industry shows wide variation in business requirements across upstream, midstream and downstream segments.",
    group: "energy-industrial",
    icon: "Fuel",
    legacyPath: "/oil-gas.php",
    blocks: [
      {
        kind: "list",
        heading: "Top challenges the industry faces",
        variant: "columns",
        items: [
          "Enterprise manufacturing solutions designed for the process industry",
          "Price volatility creating extreme pressure on profitability",
          "Stringent environmental, health, safety and securities compliance",
          "Collaboration with trading partners",
          "Proactive, optimal utilization of assets",
          "Managing the engineering change process",
          "Controlling projects to meet delivery targets",
          "Integrating diverse sources of exploration information to manage risk",
          "Managing oil well profitability and lifecycle",
          "Managing complex plant turnarounds and maximizing profitability",
        ],
      },
      {
        kind: "prose",
        heading: "Reaching new levels of business efficiency",
        body: [
          "The oil and gas industry is responsible for a broad spectrum of cutting-edge technology for finding and producing petroleum reserves — yet back-office processes typically run on more mature systems. GenuineIT combines end-to-end IT services, industry-proven oil and gas solutions and upstream expertise to help organizations create agile, cost-effective infrastructures.",
          "Through an accountable, flexible approach, GenuineIT can also manage back-office functions on a client's behalf, allowing organizations to focus fully on reaching new frontiers.",
        ],
      },
      {
        kind: "list",
        heading: "GenuineIT experience and expertise",
        variant: "check",
        items: [
          "Professionals providing solutions and services to the oil and gas industry",
          "Industry-proven solutions in production accounting, financial accounting, production management, land administration and marketing",
          "Specialized services for royalty trusts to synchronize land management, production, marketing and financial accounting",
          "Environmental solutions in employee health and safety, product stewardship, incident management and regulatory compliance, including REACH",
        ],
      },
      {
        kind: "list",
        heading: "Where our domain specialists add value",
        variant: "cards",
        items: [
          { title: "Full product footprint", text: "Functionality for upstream, midstream and downstream oil and gas." },
          { title: "Project costing", text: "Project costing and accounting to manage complex projects." },
          { title: "HCM & knowledge", text: "HCM and knowledge management tools for every layer of the workforce." },
          { title: "Services procurement", text: "Flexible services procurement with collaboration and sourcing capabilities." },
          { title: "Condition-based maintenance", text: "Transform reactive maintenance strategies into proactive ones." },
          { title: "Advanced planning", text: "Real-time collaboration for planning across all horizons." },
          { title: "Process manufacturing", text: "Modeling and managing complex process flows in manufacturing." },
        ],
      },
    ],
    reviewNotes: ["Legacy text: 'Genuine IT has been reckoned as a Global Systems integrator … to prepare our \"Real Estate & Infrastructure Clients\"' — appears copied from another context; withheld."],
    related: [
      { section: "industries", slug: "energy-utilities" },
      { section: "solutions", slug: "oracle-applications" },
      { section: "solutions", slug: "sap" },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    summary: "Oracle and SAP ERP, supply chain, product development and BI consulting that make IT a true transformation enabler.",
    lead: "Manufacturing companies everywhere are changing. Rising customer expectations and increasing competition pressure margins, pushing companies to innovate on products and services amid growing operational complexity.",
    group: "energy-industrial",
    icon: "Factory",
    legacyPath: "/manufacturing.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Companies can no longer be run the traditional way. In this competitive market, those who control costs, invest in product innovation and reduce time to market will surge ahead. We believe IT can enable the culture change that drives companies in that direction, and we engage with customers as a true transformation partner.",
          "Our experienced consultants have engaged in projects of diverse complexity — from long-term engagements with large enterprises to quick, short-cycle implementations for SMEs. We deliver enterprise-class solutions core to manufacturing and supply chain, along with the related services that make IT enablement most effective end to end.",
        ],
      },
      {
        kind: "list",
        heading: "Consulting practice",
        intro: "We help devise an IT enablement strategy based on your organization's IT readiness and future growth plans, so IT can be used as a true business transformation tool:",
        variant: "grid",
        items: [
          "Oracle ERP — manufacturing and supply chain implementation",
          "SAP — implementation in the manufacturing and supply chain space",
          "Product development",
          "Manufacturing operations",
          "Demand-driven supply chain",
          "Supply chain management",
          "Reverse logistics — service supply chain",
          "Business intelligence / enterprise performance management",
        ],
      },
    ],
    reviewNotes: ["Legacy: 'many fortune companies engaged with us for long periods' — reworded to 'long-term engagements with large enterprises'; confirm."],
    related: [
      { section: "solutions", slug: "oracle-applications" },
      { section: "solutions", slug: "sap" },
      { section: "services", slug: "product-development" },
    ],
  },
  {
    slug: "defense",
    title: "Aerospace & Defense",
    summary: "Solutions for aerospace and defense organizations facing complex supply networks, compliance and long-term service programs.",
    lead: "The aerospace and defense industry is looking to acquire speed, flexibility and precision. As deregulation, globalization and military transformation create new challenges, GenuineIT helps aerospace and defense companies improve performance through tailored solutions.",
    group: "energy-industrial",
    icon: "Plane",
    legacyPath: "/defence.php",
    blocks: [
      {
        kind: "list",
        heading: "The biggest challenges in the industry",
        variant: "columns",
        items: [
          "Managing complex supply networks",
          "Effective use of assets and asset performance",
          "Dynamic marketing requirements",
          "Pressure on pricing and cost management",
          "Stringent compliance requirements",
          "Measuring route profitability and aircraft load management",
          "Responding to rapidly changing demand for production parts, spares and maintenance",
        ],
      },
      {
        kind: "list",
        heading: "Services",
        variant: "pills",
        items: [
          "Aerospace and defense security",
          "Business process outsourcing",
          "Engineering services",
          "Global offset commitments",
          "Global supply chain",
          "M&A and post-merger integration",
          "Mission software",
          "Program profitability",
          "Shifting to services",
          "Sustainability",
          "Talent management",
        ],
      },
      {
        kind: "prose",
        body: [
          "GenuineIT's aerospace and defense solutions are designed to address the challenges the industry faces now and in the future. Performance-based logistics, availability contracting, low-cost carrier models and long-term commercial Maintenance, Repair and Overhaul (MRO) contracts are making services an increasingly vital component of a products-dominated industry.",
        ],
      },
      {
        kind: "list",
        heading: "Capabilities and value",
        intro: "Our solution and domain experts study your business scenarios and priorities, compare them with best practices and suggest solutions that help you:",
        variant: "check",
        items: [
          "Attain performance excellence throughout operations",
          "Achieve manufacturing excellence",
          "Manage complex maintenance and spares effectively",
          "Manage global contracts effectively",
          "Strengthen security to prevent unauthorized access to confidential information and protect privacy",
          "Manage subcontractors and collaborators efficiently",
          "Gain financial accountability and compliance",
        ],
        outro: "Designing, building and running complex, long-term programs at a defined service level is our business — helping clients address their pain points and implement aerospace and defense solutions.",
      },
    ],
    reviewNotes: ["Withheld: 'GenuineIT has teamed with the world's top aerospace and defense companies for over decades' — unverified client and tenure claim."],
    related: [
      { section: "industries", slug: "manufacturing" },
      { section: "services", slug: "business-process-outsourcing" },
      { section: "services", slug: "professional-services" },
    ],
  },
  {
    slug: "banking",
    title: "Banking & Financial Services",
    navTitle: "Banking",
    summary: "Service-oriented, component-based solutions for capital markets, personal financial services, insurance and corporate banking.",
    lead: "Financial services institutions must address current economic conditions while preparing for tomorrow's evolving marketplace. With experience in banking, insurance and capital markets, GenuineIT can streamline business processes through service-oriented, component-based architectures reusable across processes and applications.",
    group: "financial",
    icon: "Landmark",
    legacyPath: "/banking.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "We help manage risk and ensure you get the maximum benefit from security technology investments — allowing you to focus on the products and services that grow and strengthen your position in the marketplace.",
        ],
      },
      {
        kind: "list",
        heading: "Financial services market segments we have served",
        variant: "cards",
        items: [
          { title: "Capital markets", text: "Asset management, sales and trading, investment banking." },
          { title: "Personal financial services", text: "Retail banking and brokerage, consumer financial services, private and high-net-worth banking." },
          { title: "Insurance", text: "Life, property and casualty, risk management, reinsurance." },
          { title: "Corporate banking", text: "Payments and transaction processing, middle-market banking." },
        ],
      },
      {
        kind: "list",
        heading: "Solution sets that help clients manage change",
        variant: "columns",
        items: [
          { title: "CRM", text: "Managing customer relationships to improve revenue and retention." },
          { title: "IT security", text: "Security solutions tailored to your needs that fix issues at the root cause with minimal business disruption." },
          { title: "Service-oriented architecture", text: "Integrated business applications delivered with minimal changes to application code or structure." },
          { title: "Legacy modernization", text: "Extend and modernize older applications to achieve the benefits of newer ones." },
          { title: "IT outsourcing", text: "The right mix of outsourced, managed and project services." },
          { title: "Wireless & mobility", text: "Mobile office solutions and higher levels of customer care." },
        ],
      },
      {
        kind: "list",
        heading: "Services for financial industry clients",
        variant: "pills",
        items: ["Back-office integration", "Content management", "Customer relationship management (CRM)", "Electronic business and internet", "Outsourcing services", "Security architecture", "Third-party integration"],
      },
    ],
    related: [
      { section: "industries", slug: "insurance" },
      { section: "services", slug: "soa-services" },
      { section: "services", slug: "legacy-software-migration" },
    ],
  },
  {
    slug: "insurance",
    title: "Insurance",
    summary: "Strategy, process and technology for property & casualty, life and healthcare insurers navigating risk, regulation and change.",
    lead: "Risk, government regulation and fraud are just a few issues insurance companies face daily — add data management and integrating new technologies into product and service distribution, and there is a lot on your plate.",
    group: "financial",
    icon: "Umbrella",
    legacyPath: "/insurance.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "With industry knowledge and a balanced view of strategy, people, process and technology, GenuineIT helps you define, develop and deploy systems that improve partner collaboration, optimize distribution channels and drive down the cost of running your company. We help property and casualty and life insurers improve performance, applying industry experience and commitment to outcomes to plan and implement complex business and operational change.",
          "Rising costs and healthcare reform mandates also demand transformation across the healthcare community — using knowledge in new ways, from the back office to the doctor's office, to deliver more effective, efficient and affordable care.",
        ],
      },
      {
        kind: "list",
        heading: "Our focus within insurance",
        variant: "grid",
        items: ["Commercial property and casualty", "Personal property and casualty", "Life insurance and investments", "Healthcare strategy"],
      },
      {
        kind: "list",
        heading: "How our consultants help",
        intro: "Our consultants bring industry insight gained through hands-on experience. We can help you:",
        variant: "numbered",
        items: [
          "Conduct market research",
          "Develop business strategy",
          "Map results to strategy for enhanced insight",
          "Develop IT strategies and roadmaps",
          "Design and implement business-focused technology solutions",
          "Implement Six Sigma and industry best practices",
        ],
      },
    ],
    reviewNotes: [
      "Withheld: 'worked closely with many of the world's leading insurers'.",
      "Legacy text used the phrase 'Insight Driven Health' (a third-party marketing phrase) — removed.",
    ],
    related: [
      { section: "industries", slug: "banking" },
      { section: "industries", slug: "health-care" },
      { section: "solutions", slug: "business-intelligence" },
    ],
  },
  {
    slug: "health-care",
    title: "Health Care",
    summary: "Healthcare IT solutions and services designed to reduce costs, improve speed to market and engage consumers.",
    lead: "Our long-standing client relationships reflect our ability to move quickly and efficiently through market and business transformation. GenuineIT is built on experienced, qualified staff with industry knowledge — so you can conserve business resources through the change process.",
    group: "health",
    icon: "HeartPulse",
    legacyPath: "/health-care.php",
    blocks: [
      {
        kind: "prose",
        heading: "Robust systems for constant change",
        body: [
          "In today's environment of rules and regulations, healthcare companies rely on information systems to track customer and policy information. Constant regulatory change and reform affect people, processes, the business and technology across the entire organization. Healthcare organizations need robust IT systems and processes that easily adapt to changing market conditions.",
          "Innovation is a key differentiator in this industry, and a technology-enabled innovation process can help healthcare payers compete more effectively.",
        ],
      },
      {
        kind: "list",
        heading: "GenuineIT healthcare IT solutions are designed to",
        variant: "cards",
        items: [
          { title: "Reduce costs" },
          { title: "Improve speed to market" },
          { title: "Engage consumers" },
        ],
        outro: "Our solutions and services let you focus on managing business transformation without sacrificing critical resources to the change process.",
      },
    ],
    reviewNotes: ["Withheld: 'trusted change partner for numerous commercial payer and provider clients, as well as Federal and state government agencies' — unverified client claim."],
    related: [
      { section: "industries", slug: "pharma-life-sciences" },
      { section: "industries", slug: "insurance" },
      { section: "services", slug: "data-management" },
    ],
  },
  {
    slug: "pharma-life-sciences",
    title: "Pharmacy & Life Sciences",
    navTitle: "Pharma & Life Sciences",
    summary: "Helping pharmaceutical and life sciences organizations meet regulatory change and build resilient supply chains.",
    lead: "Healthcare and pharmaceutical organizations are responding not only to requirements for reform but to the increasingly powerful influence of consumers. They rely on information systems to achieve compliance, manage policy and customer information, and find new ways to reach end users.",
    group: "health",
    icon: "FlaskConical",
    legacyPath: "/pharmaceauticals.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Consumer, portfolio, regulatory and operating challenges create unprecedented complexity — and opportunity — as life sciences companies strive for competitive differentiation. GenuineIT professionals help companies overcome industry challenges, achieve business objectives, drive sustainable growth and deliver life-enhancing health solutions for patients, families and caregivers.",
        ],
      },
      {
        kind: "list",
        heading: "Supply chain performance",
        intro: "We are committed to tackling the most challenging supply chain issues. GenuineIT helps life sciences clients improve their supply chain by:",
        variant: "check",
        items: [
          "Working with suppliers and customers in new regions and emerging markets",
          "Readjusting capacity to handle new types of products",
          "Diversifying channels to ensure essential products reach the market at speed",
        ],
        outro: "By combining the best thinking and people, we help your organization deliver real results that drive superior supply chain performance.",
      },
    ],
    reviewNotes: ["Legacy text 'With over enormous of years experience' removed. Legacy page repeated the supply-chain paragraph twice; de-duplicated."],
    related: [
      { section: "industries", slug: "health-care" },
      { section: "solutions", slug: "microsoft-dynamics" },
      { section: "services", slug: "data-management" },
    ],
  },
  {
    slug: "government",
    title: "Government",
    summary: "Custom solutions, ADM, BI/DW, security, packaged enterprise solutions and managed services for state and local government.",
    lead: "Government agencies — city, county, state or federal — face unique challenges. Increasing effectiveness while maintaining or lowering the cost of new technology requires exceptional balance, and the right technology partner can give local government the edge it needs.",
    group: "public-consumer",
    icon: "Building",
    legacyPath: "/government.php",
    blocks: [
      {
        kind: "prose",
        heading: "Capabilities that help state and local government succeed",
        body: [
          "GenuineIT's public sector experience includes helping states and local entities achieve their goals.",
          "From school districts, housing authorities, municipal courts and law enforcement agencies to public utilities, transportation authorities, and health and human services agencies, the responsibilities of local government span a wide range of functions.",
        ],
      },
      {
        kind: "list",
        heading: "Services for government",
        variant: "cards",
        items: [
          { title: "Custom solutions" },
          { title: "Application Development and Management (ADM)" },
          { title: "Business intelligence / data warehousing" },
          { title: "Security" },
          { title: "Packaged enterprise solutions" },
          { title: "Outsourcing solutions and managed services" },
        ],
      },
    ],
    related: [
      { section: "industries", slug: "transportation" },
      { section: "solutions", slug: "business-intelligence" },
      { section: "services", slug: "application-development" },
    ],
  },
  {
    slug: "transportation",
    title: "Transportation",
    summary: "ERP, integration, data governance and enterprise mobility for departments of transportation, transit, port and toll agencies.",
    lead: "The transportation industry has grown significantly, and the market has become demanding and volatile. Organizations must keep pace with advances while continuously addressing a demanding set of priorities.",
    group: "public-consumer",
    icon: "TrainFront",
    legacyPath: "/transportation.php",
    blocks: [
      {
        kind: "list",
        heading: "What transportation organizations must address",
        variant: "columns",
        items: [
          "Highly customized service offerings",
          "Collaboration with multiple partners",
          "Pressure on pricing and profitability",
          "Managing customer relationships efficiently and cost-effectively",
          "Enhancing employee productivity",
          "The growing influence of self-service",
          "Asset management and return on investment",
          "Heightened security requirements",
        ],
      },
      {
        kind: "prose",
        heading: "GenuineIT expertise",
        body: [
          "More than ever, transportation organizations must be conscientious, skilled stewards of public funds. GenuineIT transportation specialists focus on advanced technologies and solutions for public sector organizations such as departments of transportation, transit agencies, highway departments, turnpike agencies, port authorities, regional transportation districts and toll agencies.",
          "We offer services in the areas today's transportation leaders need — ERP, system assessments, implementation, integration and managed services — as well as data governance, data architecture and enterprise mobility services that streamline processes and decision-making.",
        ],
      },
      {
        kind: "list",
        heading: "Value our recommended solutions can bring",
        variant: "check",
        items: [
          "CRM solutions for every kind of customer interaction, building customer loyalty",
          "Efficient contract management and billing",
          "Smart, e-enabled technologies that increase value for customers",
          "Improved revenue with accurate quotes and real-time order management",
          "Compliance solutions that safeguard brand and reputation",
          "Effectively managed maintenance programs, configuration, planning and execution",
          "Self-service options for partner collaboration",
        ],
      },
    ],
    reviewNotes: ["Legacy: 'delivers solutions that are preconfigured for transportation organization processes' — withheld pending confirmation of a packaged offering."],
    related: [
      { section: "industries", slug: "government" },
      { section: "solutions", slug: "salesforce-crm" },
      { section: "services", slug: "data-management" },
    ],
  },
  {
    slug: "communications",
    title: "Communications, Media & Entertainment",
    navTitle: "Communications",
    summary: "Helping broadcast, entertainment, portal, publishing and information services companies adapt to the digital age.",
    lead: "Rapid technology evolution continues to drive dramatic change. Data democratization, new content formats and a plethora of devices mean industry players must embrace new operating models and IT platforms that go beyond cost-cutting to enhance business performance.",
    group: "public-consumer",
    icon: "RadioTower",
    legacyPath: "/communications.php",
    blocks: [
      {
        kind: "prose",
        body: [
          "Market realities continue to reshape media and entertainment: technology platforms evolve rapidly, new business models emerge, consumer viewing habits change and competition arises from multiple sectors. GenuineIT helps media and entertainment companies adapt — simplifying operations, better understanding consumers, providing content effectively and capitalizing on new opportunities.",
        ],
      },
      {
        kind: "list",
        heading: "Who we help",
        intro: "GenuineIT helps entertainment, broadcast, publishing and portal companies adapt to the realities of the digital age:",
        variant: "grid",
        items: ["Broadcast", "Entertainment", "Portals", "Publishing"],
      },
      {
        kind: "split",
        heading: "Segments we serve",
        columns: [
          { heading: "Information services", items: ["Exponential growth in data volume, migration to new digital media and the upsurge of content formats are forcing firms large and small to rethink their strategies. We help information providers address the real-time mindset of today's audiences."] },
          { heading: "Media & entertainment", items: ["Revenue pressure, the accelerating online transition and new devices are creating virtual businesses with new models and pricing strategies. We help clients navigate the shifting landscape in print and publishing, film, music, interactive media and broadcasting."] },
        ],
      },
      {
        kind: "prose",
        heading: "Delivery excellence",
        body: [
          "GenuineIT delivery brings together industry insight, solutions and skilled professionals focused on generating measurable business value through reliable, cost-effective and consistently high-quality services. Clients come to us to meet immediate business challenges and to gain long-term value through continuous improvement.",
          "Our environment of continuous improvement matches the culture of our clients and helps us attain ever-higher levels of productivity, precision and predictability. Our collaborative approach emphasizes speed to market and client focus, and our consultants offer business and technical knowledge to power innovation and create new revenue streams.",
        ],
      },
    ],
    reviewNotes: [
      "Withheld: 'We partner with the world's top providers of financial, scientific and legal information' and 'unmatched breadth of industrialized capabilities' — unverified.",
      "Several sentences on the legacy page closely resemble third-party consulting marketing copy; recommend owner review of originality.",
    ],
    related: [
      { section: "solutions", slug: "content-management" },
      { section: "solutions", slug: "ecommerce" },
      { section: "services", slug: "web-application-development" },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    summary: "An IT engagement model focused on reducing IT cost and response time with SLA-driven performance.",
    lead: "A retailer's expectations of its CIO are focused on two key areas: reducing IT cost and reducing IT response time.",
    group: "public-consumer",
    icon: "Store",
    legacyPath: "/retails.php",
    blocks: [
      {
        kind: "split",
        heading: "The GenuineIT engagement model",
        columns: [
          { heading: "The model ensures", items: ["Complete visibility and control over the engagement", "An IT department that is independent of specific people and technologies", "An SLA-driven performance and rewards plan"] },
          { heading: "GenuineIT value proposition", items: ["Cost reduction and a leaner IT organization", "Faster response time and better service", "Business-aligned IT"] },
        ],
      },
    ],
    reviewNotes: ["The legacy Retail page had headings ('GenuineIT Methodology', 'GenuineIT Best Practices') with no content beneath them — likely missing images. Owner should supply the missing content."],
    related: [
      { section: "solutions", slug: "ecommerce" },
      { section: "solutions", slug: "microsoft-dynamics" },
      { section: "services", slug: "it-outsourcing" },
    ],
  },
];

export const getIndustry = (slug: string) => industries.find((s) => s.slug === slug);

/** Sectors named on the legacy Professional Services page without dedicated pages. */
export const additionalSectors = ["Aerospace", "Automotive", "Engineering & Manufacturing", "Industrial", "Consumer Goods", "Product-centric industries"];
