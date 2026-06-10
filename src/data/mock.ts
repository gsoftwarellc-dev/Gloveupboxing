// Data store - awaiting real data import from "Clients & Projects CRM.xlsx"

export interface Candidate {
  id: number
  name: string
  role: string
  status: string
  location: string
  postcode: string
  discipline: string
  email: string
  phone: string
  salary: number
  experienceYears: number
  travelRadius: number
  rating: number
  tags: string[]
  availability?: string
  noticePeriod?: string
  source: string
  recruiter: string
  dateAdded: string
  lastContacted: string
  rightToWork: boolean
  notes?: number
  certificates?: string[]
  skills?: string[]
  employmentHistory?: { company: string; role: string; from: string; to: string; current: boolean }[]
  references?: { name: string; role: string; status: string }[]
}

export interface Client {
  id: number
  name: string
  revenue: string
}

export interface Vacancy {
  id: number
  title: string
  client: string
  location: string
  postcode: string
  salary: string
  discipline: string
  type: string
  status: string
  recruiter: string
  dateAdded: string
  deadline: string
  description: string
  applications: number
  shortlisted: number
  interviews: number
  requiredCerts?: string[]
  priority?: string
  visibility?: string
  project?: string
  published?: boolean
}

export interface ProjectContact {
  type: 'person' | 'org'
  name: string
  role: string
  email?: string
  phone?: string
}

export interface Project {
  id: number
  name: string
  client: string
  location: string
  postcode: string
  status: string
  stage: string
  startDate: string
  endDate: string
  value: string | number
  rolesNeeded: number
  contacts: ProjectContact[]
  opportunityScore: number
  sector?: string
  priority?: string
  mainContractor?: string | null
  tags?: string[]
  notes?: string
}

export const candidates: Candidate[] = [];

export const clients: Client[] = [];

export const vacancies: Vacancy[] = [];

export const pipelineStages = [
  { key: 'New Application',     color: '#6b7280', badge: 'badge-gray' },
  { key: 'Shortlisted',         color: '#8b5cf6', badge: 'badge-blue' },
  { key: 'Contacted',           color: '#f59e0b', badge: 'badge-yellow' },
  { key: 'Meeting Arranged',    color: '#ec4899', badge: 'badge-purple' },
  { key: 'Interview Done',      color: '#14b8a6', badge: 'badge-blue' },
  { key: 'Rejected',            color: '#dc2626', badge: 'badge-red' },
  { key: 'Qualified',           color: '#b8942e', badge: 'badge-gold' },
  { key: 'Placed',              color: '#3b82f6', badge: 'badge-blue' }
];

export const projects: Project[] = [
  {
    "id": 1,
    "name": "Christs College Library - New Library & Alterations",
    "client": "Barnes Construction Limited",
    "location": "Christs College Library, St Andrews Street, Cambridge, Cambridgeshire, CB2 3BU",
    "postcode": "CB2 3BU",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£20m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Education",
    "priority": "Priority 1",
    "mainContractor": null,
    "tags": [
      "Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Planner",
      "Buyer",
      "Document Controller"
    ],
    "notes": "Barnes Construction has secured the main contract and is mobilising for a July 2026 start. £20m education and heritage project involving demolition, new library construction, refurbishment works, landscaping and temporary facilities. Strong opportunity to engage commercial, operational and technical staff before delivery ramps up."
  },
  {
    "id": 2,
    "name": "Broadwater Farm Estate Phase 2 - 176 Apartments",
    "client": "London Borough of Haringey / Broadwater Farm Estate",
    "location": "Tottenham, London, N17 6HX",
    "postcode": "N17 6HX",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£100m (Est)",
    "rolesNeeded": 9,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Formation Design & Build Limited",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Site Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Design Manager",
      "Resident Liaison Manager"
    ],
    "notes": "Major £100m estate regeneration/refurbishment project. Contractor appointed. Start due July 2026. 193 residential units over 7 storeys. High-value refurbishment scheme likely requiring multiple commercial, management and site staff throughout the programme. Immediate target contact: George Layton (Contract Manager) george.layton@formationdnb.co.uk. Extremely strong recruitment opportunity."
  },
  {
    "id": 3,
    "name": "Gonville & Caius College, Murray Easton Building - Refurbishment",
    "client": "Gonville & Caius College",
    "location": "Cambridge, Cambridgeshire, CB2 1TA",
    "postcode": "CB2 1TA",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Cocksedge Building Contractors Limited",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Buyer",
      "M&E Manager"
    ],
    "notes": "Refurbishment of student and Fellows' accommodation including new kitchens, showers, heating system and access control. Listed building consent granted. Contractor appointed. Estimated August 2026 start with 7-month programme. Good recruitment opportunity but smaller team requirements than major residential or industrial schemes. Key contact: Adrian Bishop (Project Manager)."
  },
  {
    "id": 4,
    "name": "Saxton 4x4 Limited - Handover Building",
    "client": "Saxton 4x4 Limited",
    "location": "Chelmsford, Essex, CM1 3AG",
    "postcode": "CM1 3AG",
    "status": "active",
    "stage": "Pre-Construction",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£8.3m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Commercial Office",
    "priority": "Priority 3",
    "mainContractor": "Contractor Not Yet Appointed",
    "tags": [
      "Main Contractor",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Site Manager"
    ],
    "notes": "Planning granted. £8.3m new-build car dealership, offices and multi-storey car park. Start due July 2026. Contractor not yet identified. Follow up with client, architect and planning team to establish procurement route and contractor appointment."
  },
  {
    "id": 5,
    "name": "Lemonade Building - Cladding Remediation Works",
    "client": "Redrow Homes South Midlands",
    "location": "Barking, Essex, IG11 7PX",
    "postcode": "IG11 7PX",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£10m",
    "rolesNeeded": 9,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Lawtech Limited",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Site Manager",
      "Design Manager",
      "Senior Design Co-ordinator",
      "Quantity Surveyor",
      "Commercial Manager",
      "Facades Manager",
      "Cladding Manager"
    ],
    "notes": "£10m cladding remediation and fire safety project on a 17-storey residential building. Contractor appointed. Start due July 2026 with 9-month programme. High demand for façade, cladding, fire remediation and commercial staff. Key contact identified: Louise Stawell (Senior Design Co-ordinator) louise.stawell@lawtechgroup.co.uk."
  },
  {
    "id": 6,
    "name": "National Grid UK Limited - National Grid Substation Construction",
    "client": "National Grid Property Holdings",
    "location": "Various Locations Throughout London",
    "postcode": "",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Multiple Contractors Appointed (Siemens Energy, Trant Engineering, Skanska, Costain, Galliford Try, BAM Nuttall, OCU Group, Laing O'Rourke, Kirby Group & Others)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Electrical Project Manager",
      "M&E Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Civil Engineering Manager",
      "Site Engineer",
      "Electrical Engineer"
    ],
    "notes": "Major National Grid framework covering substation construction, M&E installations and major civils. Multiple Tier 1 contractors appointed. Starts June 2026. One of the strongest recruitment opportunities due to the number of contractors involved and the specialist engineering requirements. Contact every contractor on the framework. High likelihood of permanent and freelance requirements across PM, QS, Site Management, Engineering and Commercial functions."
  },
  {
    "id": 7,
    "name": "NNR Global Logistics - Extension",
    "client": "NNR Global Logistics UK Limited",
    "location": "Feltham, Middlesex, TW14 8NG",
    "postcode": "TW14 8NG",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Commercial Office",
    "priority": "Priority 3",
    "mainContractor": "Contractor Not Yet Appointed",
    "tags": [
      "Main Contractor",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Site Manager"
    ],
    "notes": "Extension and refurbishment of office and warehouse building. Planning approved and July 2026 start shown, however no contractor has been identified. Opportunity exists to contact the client and architect (DDWH Architects) to establish procurement status and contractor appointment. Worth monitoring but lower priority than projects with live contractors already appointed."
  },
  {
    "id": 8,
    "name": "Hemel One - Industrial Development",
    "client": "Hemel Hempstead Investment LLP",
    "location": "Hemel Hempstead, Hertfordshire, HP2 7YU",
    "postcode": "HP2 7YU",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£8.8m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Industrial & Logistics",
    "priority": "Priority 1",
    "mainContractor": "Parkway Construction (M.K.) Limited (Preferred Bidder)",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Design Manager",
      "Assistant Site Manager"
    ],
    "notes": "Major industrial and distribution development. Preferred bidder already identified (Parkway Construction), with other bidders including Magrock and Wilten. June 2026 start. Strong recruitment opportunity as contractor appointment appears imminent. Contact Parkway immediately and consider approaching Magrock and Wilten as they may have priced the project and be recruiting for similar schemes."
  },
  {
    "id": 9,
    "name": "LHC - Supply and Installation of Communal Doors and Entrance Doors",
    "client": "LHC Procurement Group",
    "location": "Various Locations Throughout London",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-26",
    "endDate": "",
    "value": "£100m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Multiple Approved Contractors (Ian Williams, Anglian Building Products, Sovereign Group, Astraseal, Ventro Group, CLC Contractors, Harmony Fire, Warrior Doors and others)",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Site Manager",
      "Fire Door Manager",
      "Passive Fire Protection Manager",
      "Operations Manager",
      "Estimator",
      "Buyer"
    ],
    "notes": "£100m framework for supply and installation of communal doors, entrance doors and associated products across multiple locations. Large framework with 20+ approved contractors. Excellent recruitment opportunity due to volume of works, multiple contractors and specialist fire-door/compliance sector. Contact every contractor on the framework. Strong potential for repeat placements across commercial, operational and project delivery teams."
  },
  {
    "id": 10,
    "name": "Kingsland Road Arches - Development Works",
    "client": "Transport for London / Places for London Limited",
    "location": "Bethnal Green, London, E2 8AF",
    "postcode": "E2 8AF",
    "status": "active",
    "stage": "Tender",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£10.6m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "General Construction",
    "priority": "Priority 1",
    "mainContractor": "Contractor Not Yet Appointed (Bidders: Walker Construction Limited, Etec Contract Services Limited)",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Buyer"
    ],
    "notes": "£10.6m TfL development as part of the wider Kingsland Viaduct Works portfolio. Tender stage with bidders already identified. Contractor appointment expected soon. Strong opportunity to target Walker Construction and Etec Contract Services before award. Public sector project with good visibility and potential for multiple project delivery hires."
  },
  {
    "id": 11,
    "name": "Tilbury Pier Foreshore Redevelopment - Tilbury Project D",
    "client": "Thurrock Borough Council",
    "location": "Tilbury, Essex, RM18 7NJ",
    "postcode": "RM18 7NJ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£20m (Est)",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Henderson & Taylor Limited",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "General Manager",
      "Civil Engineer",
      "Commercial Manager",
      "Groundworks Manager"
    ],
    "notes": "£20m public sector regeneration and infrastructure project. Contractor appointed (Henderson & Taylor). Confirmed Q3 2026 start. Strong civils, groundworks and infrastructure recruitment opportunity. Named contacts include Roland Gibbins (General Manager) 07960 728157 and Shaun Gibbins (Quantity Surveyor) shaun.gibbins@henderson-taylor.co.uk. High-value project with direct contractor access and strong likelihood of operational and commercial recruitment requirements."
  },
  {
    "id": 12,
    "name": "University of Oxford - Summertown House Refurbishment",
    "client": "University of Oxford",
    "location": "Oxford, Oxfordshire, OX2 7QZ",
    "postcode": "OX2 7QZ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£8m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Contractor Not Yet Appointed (Bidders: Beard Limited, Kingerlee Limited, Savvy Construction Limited)",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Design Manager"
    ],
    "notes": "University refurbishment creating 79 student apartments. Currently at Stage 1 of a 2-stage tender with contractor yet to be appointed. Strong opportunity because bidders have been identified and contractor award should be approaching. Target Beard, Kingerlee and Savvy Construction immediately as they are actively involved in the procurement process and likely recruiting on similar projects."
  },
  {
    "id": 13,
    "name": "National Gallery - Galleries 30-31 Overroof and Refurb",
    "client": "The National Gallery",
    "location": "Trafalgar Square, Westminster, London, WC2N",
    "postcode": "",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-06-12",
    "endDate": "",
    "value": "£6.2m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "General Construction",
    "priority": "Priority 2",
    "mainContractor": "Contractor Not Yet Appointed",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Quantity Surveyor",
      "M&E Project Manager",
      "Building Services Manager",
      "Design Manager"
    ],
    "notes": "High-profile National Gallery refurbishment involving gallery upgrades, roof glazing, solar blinds, air conditioning, ductwork and façade insulation. Tender stage with contractor yet to be appointed. Specialist refurbishment and heritage project likely to attract experienced London fit-out, heritage and M&E contractors. Worth monitoring for contractor award but less immediate recruitment potential than projects with appointed contractors already mobilising."
  },
  {
    "id": 14,
    "name": "The Taper Building, Long Lane - Recladding",
    "client": "Grey GR Limited Partnership",
    "location": "Southwark, London, SE1 4GT",
    "postcode": "SE1 4GT",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£6m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Faithdean Limited",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Site Manager",
      "Facade Manager",
      "Design Manager",
      "Commercial Manager"
    ],
    "notes": "Contractor appointed (Faithdean Limited). Recladding and façade remediation project with planning approval secured and start expected Q3 2026. Strong recruitment opportunity due to specialist cladding package, London location and live contractor involvement. Key contact already identified: Mark Copland (Senior Quantity Surveyor) m.copland@faithdean.co.uk. Worth contacting immediately regarding mobilisation plans, commercial team growth and project staffing requirements."
  },
  {
    "id": 15,
    "name": "Ontario Point - External Cladding",
    "client": "Barratt East London Limited",
    "location": "Rotherhithe, London, SE16 7ED",
    "postcode": "SE16 7ED",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "M Clarke & Sons (Preferred Bidder)",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Site Manager",
      "Facade Manager",
      "Design Manager",
      "Commercial Manager"
    ],
    "notes": "External cladding remediation project with July 2026 start. M Clarke & Sons named as preferred bidder, making them the most likely contractor to secure the works. Barratt acting as client, PM and QS. Strong opportunity to approach M Clarke ahead of mobilisation as façade and remediation projects typically require additional commercial and operational staff. Monitor for contractor confirmation but recruitment activity often starts before formal award."
  },
  {
    "id": 16,
    "name": "Harrow School - Sport Buildings",
    "client": "Harrow School",
    "location": "Harrow, Middlesex, HA1 3HP",
    "postcode": "HA1 3HP",
    "status": "active",
    "stage": "Tender",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£15m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Education",
    "priority": "Priority 2",
    "mainContractor": "Contractor Not Yet Appointed (Morgan Sindall Construction & Carey Group PLC Bidding)",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "M&E Manager",
      "Construction Manager"
    ],
    "notes": "£15m new-build sports hall and swimming pool project. Tender stage with Morgan Sindall Construction and Carey Group PLC identified as bidders. Gardiner & Theobald acting as Project Manager and Quantity Surveyor. Strong recruitment potential due to project value and specialist sports/leisure construction package. Worth contacting Morgan Sindall and Carey Group now as contractor selection is likely approaching and pre-construction recruitment may already be underway."
  },
  {
    "id": 17,
    "name": "Corbetts Lane - Industrial Units",
    "client": "Telereal Trillium",
    "location": "South Bermondsey, London, SE16 2TE",
    "postcode": "SE16 2TE",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£6.4m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Commercial Office",
    "priority": "Priority 3",
    "mainContractor": "Contractor Not Yet Appointed",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Site Manager",
      "Design Manager",
      "Commercial Manager"
    ],
    "notes": "Industrial and office development with planning approved and September 2026 start forecast. No contractor, preferred bidder or tender information currently identified. Client is Telereal Trillium, a major property owner and developer. Worth monitoring for contractor appointment over the coming months, but currently there is no direct recruitment route. Focus should be on tracking contractor award rather than active candidate marketing at this stage."
  },
  {
    "id": 18,
    "name": "Centreway Apartments - EWI Replacement",
    "client": "Barratt East London Limited",
    "location": "Ilford, Essex, IG1 1NJ",
    "postcode": "IG1 1NJ",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Hugh L.S. McConnell Limited (Bidder)",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Site Manager",
      "Facade Manager",
      "Commercial Manager",
      "Design Manager"
    ],
    "notes": "External Wall Insulation (EWI) replacement project with July 2026 start. Barratt East London acting as Client, Project Manager and Quantity Surveyor. Hugh L.S. McConnell currently identified as bidder, but no preferred bidder or contractor appointment confirmed. Strong façade and remediation recruitment sector with good potential once contractor appointment is made. Monitor closely for contractor award and begin building relationships with Hugh L.S. McConnell's commercial and operational teams."
  },
  {
    "id": 19,
    "name": "42 Berkeley Square - External Refurbishment",
    "client": "Berkeley Square Holdings Limited",
    "location": "Berkeley Square, Westminster, London, W1J 5AW",
    "postcode": "W1J 5AW",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Retail",
    "priority": "Priority 3",
    "mainContractor": "Contractor Not Yet Appointed",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Site Manager",
      "Commercial Manager",
      "Design Manager"
    ],
    "notes": "High-end West End refurbishment including roof reconstruction, terraces, green roof, window replacement, landscaping and M&E upgrades. Planning approved and project team appointed, however no contractor, bidder or preferred contractor currently identified. Exigere Project Services acting as Quantity Surveyor and Storey Project acting as Project Manager. Worth monitoring for contractor appointment but currently lacks a direct recruitment route."
  },
  {
    "id": 20,
    "name": "G Park 1 London Docklands - Data Centre",
    "client": "GLP Lutterworth MPS 9 Limited",
    "location": "Silvertown, London, E16 2AB",
    "postcode": "E16 2AB",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£1.5bn",
    "rolesNeeded": 13,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "John Sisk & Son Ltd (Preferred Bidder)",
    "tags": [
      "Data Centre Project Director",
      "Project Director",
      "Construction Director",
      "Contracts Manager",
      "Project Manager",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Commercial Director",
      "Design Manager",
      "M&E Manager",
      "Commissioning Manager",
      "Site Manager",
      "Package Manager"
    ],
    "notes": "Massive £1.5bn data centre development. Preferred bidder already identified as John Sisk & Son. Enabling works, groundworks, remediation, utilities, substations and major data centre construction package. Start due June 2026. One of the strongest recruitment opportunities on your tracker. Data centre projects typically require large project teams and continual recruitment throughout the programme. Immediate target should be John Sisk commercial and operational teams. Also worth approaching Mace and TSL Projects who previously bid. Demolition package awarded to Metro Deconstruction. Key contact: Paul Bower (Senior Contracts Manager) paul@metro.uk.net."
  },
  {
    "id": 21,
    "name": "Chelwood House Gloucester Square - External Cladding",
    "client": "London Borough of Southwark",
    "location": "Gloucester Square, London, W2 2SZ",
    "postcode": "W2 2SZ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "General Construction",
    "priority": "Priority 2",
    "mainContractor": "Bell Building Projects Limited (Bidder)",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Site Manager",
      "Facade Manager",
      "Commercial Manager",
      "Design Manager"
    ],
    "notes": "External cladding replacement project with July 2026 start. Bell Building Projects identified as bidder, although no preferred bidder or contractor award has been confirmed. Public-sector funded remediation scheme. Strong recruitment potential due to cladding sector demand and London location. Worth engaging Bell Building Projects now and monitoring for contractor appointment as recruitment activity often begins ahead of mobilisation."
  },
  {
    "id": 22,
    "name": "Lidl Food Store - Atlas Trade Park, Fraser Road",
    "client": "Lidl UK GmbH",
    "location": "Erith, Kent, DA8 1QS",
    "postcode": "DA8 1QS",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£5.4m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Retail",
    "priority": "Priority 3",
    "mainContractor": "Contractor Not Yet Appointed",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Site Manager",
      "Buyer",
      "Commercial Manager"
    ],
    "notes": "New-build Lidl food store and self-storage development following demolition. Planning approved and expected to start August 2026, however the project remains at pre-tender stage with no contractor, bidder or preferred contractor identified. Lidl developments are often awarded to established retail contractors, but there is currently no direct recruitment route. Worth monitoring for tender progression and contractor appointment. Key client contact available: Phil Daily (Project Manager) phil.daily@lidl.co.uk."
  },
  {
    "id": 23,
    "name": "National Physical Laboratory - Data Centre & Associated Secure Works",
    "client": "National Physical Laboratory (NPL)",
    "location": "Teddington, Middlesex, TW11 0LW",
    "postcode": "TW11 0LW",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£9.6m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Data Centre",
    "priority": "Priority 1",
    "mainContractor": "Orostream International Contracts",
    "tags": [
      "Data Centre Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Commercial Director",
      "Design Manager",
      "M&E Project Manager",
      "Commissioning Manager",
      "Security Project Manager"
    ],
    "notes": "High-assurance secure data centre project with confirmed contractor appointment and confirmed July 2026 start date. Specialist secure facility requiring significant M&E, security infrastructure and commissioning packages. Contractor already appointed, meaning recruitment activity is likely happening now. Immediate target should be Orostream International Contracts and associated supply chain. Key client contact available: Gary Phillips (Procurement Manager) gary.phillips@npl.co.uk."
  },
  {
    "id": 24,
    "name": "Kings House School - Redevelopment",
    "client": "Kings House School",
    "location": "Richmond, Surrey, TW10 6ES",
    "postcode": "TW10 6ES",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£8m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Education",
    "priority": "Priority 2",
    "mainContractor": "LIFE Build Solutions Limited (Preferred Bidder)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Design Manager",
      "M&E Manager",
      "Commercial Manager",
      "Buyer"
    ],
    "notes": "18-month school redevelopment including new classrooms, sports hall extension, music and drama facilities, refurbishment works and demolition. LIFE Build Solutions currently preferred bidder but not officially appointed main contractor. Two-stage tender process still ongoing. Strong future opportunity but recruitment activity likely later in 2026. Primary contact: Kevin Edge (Quantity Surveyor) kevin.edge@lifebuild.co.uk. Client has specifically requested no direct contact regarding the project."
  },
  {
    "id": 25,
    "name": "Kingsway House - Warehouse Building",
    "client": "Royal Gourmet",
    "location": "Luton, Bedfordshire, LU4 8RJ",
    "postcode": "LU4 8RJ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£7.6m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Industrial & Logistics",
    "priority": "Priority 2",
    "mainContractor": "Not Yet Appointed",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Buyer",
      "Design Manager"
    ],
    "notes": "Warehouse development following demolition of existing building. Detail planning granted under reference 25/01196/FUL. Contractor not yet appointed. Start date December 2026 with 8-month programme. Current opportunity is through project team and client-side contacts rather than recruitment. Monitor for main contractor appointment. Key contacts include Joe Kong (Operations Manager) joe.kong@royalgourmet.co.uk and Kevin Yeung (Director) kevin.yeung@royalgourmet.co.uk. Arctica Limited acting as Architect, Project Manager and Quantity Surveyor."
  },
  {
    "id": 26,
    "name": "Cyprus Place, Ferndale Street - 220 Apartments",
    "client": "Populo Living",
    "location": "Beckton, London, E6 6BF",
    "postcode": "E6 6BF",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£75m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Hill Partnerships Limited",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Assistant Site Manager",
      "Design Manager",
      "Document Controller"
    ],
    "notes": "220-unit residential development over 9 buildings with a 32-month programme. Main contractor Hill Partnerships already appointed. Multiple subcontractors already being brought onto the scheme including NewRise Drylining, RB Emerson, APW Glazing, NorDan and Metsec. Project is entering mobilisation phase and recruitment demand is highly likely. Excellent target project due to size, duration and contractor certainty. Key contacts include Adam O'Donnell (Managing Director) adam.odonnell@newrisedrylining.com, Nathan O'Donnell (Project Manager) nathan.odonnell@newrisedrylining.com, Scott Withrington (Project Director) scott.withrington@emersons.uk.com and Joanna Harding (Project Designer) joannaharding@hill.co.uk."
  },
  {
    "id": 27,
    "name": "Brent Cross Cricklewood, Plot 23 - 352 Bed Co Living Units",
    "client": "BXS Limited Partnership",
    "location": "Willesden, London, NW10 4NE",
    "postcode": "NW10 4NE",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£72m",
    "rolesNeeded": 13,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "JJ Rhatigan & Company Limited",
    "tags": [
      "Project Director",
      "Construction Manager",
      "Senior Project Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Design Manager",
      "Assistant Site Manager"
    ],
    "notes": "352-bed co-living development across a 14-storey building. Main contractor JJ Rhatigan appointed and project already on site (5% progress). 24-month programme running until June 2028. Large London residential scheme with substantial staffing requirements across delivery and commercial teams. Key contacts include Frank Cowell (Project Director) fcowell@jjrhatigan.com, Ger Mahon (Quantity Surveyor) gmahon@jjrhatigan.com and Rory Quinn (Quantity Surveyor) rquinn@jjrhatigan.com. Financial close still being finalised but contractor already engaged and project progressing."
  },
  {
    "id": 28,
    "name": "Willow Lane - 21 Industrial Units",
    "client": "Petchey Properties Plc",
    "location": "Mitcham, Surrey, CR4 4UY",
    "postcode": "CR4 4UY",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£12.9m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Industrial & Logistics",
    "priority": "Priority 2",
    "mainContractor": "Not Yet Appointed",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Design Manager",
      "Assistant Site Manager"
    ],
    "notes": "Development of 21 industrial units following demolition of the existing site. Detail planning granted under reference 24/P3210. Tender documents due to be issued in late July 2026 and contractor has not yet been appointed. 17-month programme with good future recruitment potential once contractor procurement begins. Key contact is William Morris (Asset Manager) wmorris@petchey.co.uk. Monitor closely from July-August 2026 for contractor appointment and tender outcome."
  },
  {
    "id": 29,
    "name": "Barking Riverside Area, Plots 210 A&B - 651 Flats",
    "client": "London & Quadrant Housing Trust / Homes England / Greater London Authority / Barking Riverside Limited",
    "location": "Barking, Essex, IG11 0FU",
    "postcode": "IG11 0FU",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£48.8m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Not Yet Appointed",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Design Manager",
      "Assistant Site Manager"
    ],
    "notes": "Major residential development comprising 651 flats across 4 buildings up to 15 storeys. Reserved matters approved and expected to start August 2026 with a 32-month programme. No main contractor appointed yet, making this a contractor-award opportunity. Large housing association-backed scheme involving L&Q, Homes England and the GLA. Monitor closely for contractor appointment during summer 2026. Key contacts include David Lewis (Executive Director) d.lewis@lqgroup.org.uk, John Cutler j.cutler@lqgroup.org.uk and Tom Copley t.copley@lqgroup.org.uk."
  },
  {
    "id": 30,
    "name": "The Royal Household - HVAC & BMS Servicing And Maintenance",
    "client": "The Royal Household",
    "location": "Various Locations Throughout London",
    "postcode": "",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£3.8m",
    "rolesNeeded": 9,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "General Construction",
    "priority": "Priority 2",
    "mainContractor": "CBRE Limited",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Mechanical Project Manager",
      "HVAC Engineer",
      "BMS Engineer",
      "Service Manager",
      "Commercial Manager",
      "Quantity Surveyor",
      "Facilities Manager"
    ],
    "notes": "Three-year HVAC and BMS servicing and maintenance contract across Royal Household properties. CBRE appointed as contractor with Forth Building Services as HVAC subcontractor. Although contract value is lower than major construction schemes, long-term maintenance programmes often generate recurring recruitment needs. Key contacts include Annabel Sharp (CBRE) annabel.sharp@cbre.com and Nik Vidler (Royal Household) nik.vidler@royal.uk. Strong opportunity for mechanical, FM, HVAC and BMS recruitment rather than traditional construction site roles."
  },
  {
    "id": 31,
    "name": "Crystal Palace Park Phase 2 - 202 Flats",
    "client": "Clarion Housing Group",
    "location": "Penge, London, SE20 8DT",
    "postcode": "SE20 8DT",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-08-31",
    "endDate": "",
    "value": "£60m",
    "rolesNeeded": 13,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Not Yet Appointed (Higgins Partnerships / McAleer & Rushe / Graham Construction bidding)",
    "tags": [
      "Project Director",
      "Construction Manager",
      "Senior Project Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Design Manager",
      "Assistant Site Manager"
    ],
    "notes": "202 affordable homes with a £60m value and a 4-year programme running until August 2030. Tender closes 09 July 2026 with contractor award expected 21 August 2026. Higgins Partnerships, McAleer & Rushe and Graham Construction currently bidding. One of the strongest contractor-award opportunities in Barbour ABI due to size, duration and imminent award date. Key contacts include Ben Worby (Project Manager) admin@rund.co.uk and Ross Raftery (Associate Director) ross.raftery@lichfields.uk."
  },
  {
    "id": 32,
    "name": "Watford Borough Council - Temporary Accommodation Management And Maintenance",
    "client": "Watford Borough Council",
    "location": "Watford, Hertfordshire",
    "postcode": "",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£3.2m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "General Construction",
    "priority": "Priority 3",
    "mainContractor": "Not Yet Appointed",
    "tags": [
      "Contracts Manager",
      "Property Manager",
      "Facilities Manager",
      "Maintenance Manager",
      "Building Surveyor",
      "Compliance Manager"
    ],
    "notes": "Three-year property management and maintenance contract covering 26 temporary accommodation properties owned by Watford Borough Council. Tender closes 02 July 2026 with award expected 31 August 2026. This is a facilities management and maintenance contract rather than a construction project. Limited demand for traditional construction recruitment roles. Monitor only if targeting FM, property maintenance or housing maintenance contractors."
  },
  {
    "id": 33,
    "name": "31-43 Putney High Street - Hotel, Office and Retail Units",
    "client": "Not Confirmed",
    "location": "Putney, London, SW15 1SP",
    "postcode": "SW15 1SP",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£25m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": "Main Contractor Not Yet Appointed",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Design Manager",
      "Construction Manager"
    ],
    "notes": "179-bedroom hotel, offices, restaurant and retail development following demolition of existing building. Detail planning granted. Main contractor appointment currently delayed but project remains due to start August 2026. This is exactly the type of project to monitor aggressively as contractor appointment is imminent. Once awarded there will be a full project team mobilisation. 27-month programme creates strong recruitment potential. Key contacts include Marlon Deam (DP9) – marlon.deam@dp9.co.uk, Mark Maurizi (WAMM Consultants) – m.maurizi@wammconsultants.com, and Sadia Luckett (Nimbus Engineering) – sadia@nimbusengineering.co.uk."
  },
  {
    "id": 34,
    "name": "One Portal Way - Old Oak - Building A & F - 845 Apartments and Offices",
    "client": "Old Oak & Park Royal Development Corporation / Imperial College London",
    "location": "Acton, London, W3 6RS",
    "postcode": "W3 6RS",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£150m",
    "rolesNeeded": 18,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Main Contractor Not Yet Appointed",
    "tags": [
      "Project Director",
      "Construction Director",
      "Senior Project Manager",
      "Project Manager",
      "Contracts Manager",
      "Senior Site Manager",
      "Site Manager",
      "Commercial Manager",
      "Commercial Lead",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Buyer",
      "Design Manager",
      "Technical Manager",
      "Package Manager",
      "M&E Manager",
      "Planner",
      "Document Controller"
    ],
    "notes": "845-unit Build-to-Rent and Co-Living development comprising a 55-storey tower and 18-storey tower with co-working space and public realm works. £150m scheme with 36-month programme. Main contractor has not yet been appointed despite confirmed Q3 2026 start. One of the strongest recruitment opportunities currently available. Large project team will be required once contractor appointment is confirmed. Monitor closely during July-August. Key contact: Emilia Harrison (Iceni Projects) – eharrison@iceniprojects.com. Enabling works already progressing via Downwell Enabling. Lewis Turnbull (Contracts Manager) – lewis@downwell.co.uk."
  },
  {
    "id": 35,
    "name": "Stratford High Street - 692 Bed Student Accommodation & Public House",
    "client": "Dominus Group",
    "location": "Stratford, London, E15 1AJ",
    "postcode": "E15 1AJ",
    "status": "active",
    "stage": "Pre-Construction",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£64.5m",
    "rolesNeeded": 15,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Main Contractor Not Yet Appointed",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Contracts Manager",
      "Construction Manager",
      "Commercial Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Buyer",
      "Design Manager",
      "Technical Manager",
      "M&E Manager",
      "Planner",
      "Document Controller"
    ],
    "notes": "692-bed student accommodation scheme with commercial workspace and public house. 31-storey development with 30-month programme. Detail planning granted and start confirmed for October 2026. No main contractor currently listed despite project progressing towards start date. Strong likelihood of contractor appointment within the next few months. Major London PBSA (Purpose Built Student Accommodation) scheme with significant recruitment potential across commercial, operational and technical teams. Key contact: Olivia Burton (Construction Manager, Dominus Group) – olivia.burton@dominusgroup.com. Also monitor via Louise Overton (DP9) – louise.overton@dp9.co.uk."
  },
  {
    "id": 36,
    "name": "Streatham Vale - 100 Woodgate Drive - 258 Apartments",
    "client": "Barratt (West London) Limited",
    "location": "Streatham, London, SW16 5YP",
    "postcode": "SW16 5YP",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£30m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Barratt (West London) Limited",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Buyer",
      "Assistant Site Manager",
      "Technical Coordinator",
      "Design Manager",
      "Construction Manager"
    ],
    "notes": "258 apartments across 4 blocks with retail and commercial space. Site recently sold to Barratt London and works due to commence Q3 2026. Barratt are delivering directly rather than appointing an external main contractor. 28-month programme with 14-storey elements. Strong recruitment opportunity but slightly lower score as Barratt typically recruit through established internal channels and preferred suppliers. Focus on Barratt's commercial, technical and production teams in the lead-up to mobilisation."
  },
  {
    "id": 37,
    "name": "Pinner Road - 37 Flats",
    "client": "MML Investments Limited",
    "location": "Harrow, Middlesex, HA1 4EU",
    "postcode": "HA1 4EU",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-10-02",
    "endDate": "",
    "value": "£2.8m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "Not Confirmed (Neilcott Construction Limited Preferred Bidder/Bidder)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Assistant Site Manager",
      "Buyer"
    ],
    "notes": "37-flat residential scheme across 3 blocks. Detail planning granted with conditions. Project remains in tender stage with Neilcott Construction identified as bidder but not confirmed as main contractor. Smaller £2.8m development with 14-month programme. Recruitment potential exists but significantly lower than larger residential schemes. Worth monitoring for contractor appointment closer to start date, but focus should remain on higher-value projects first. Key contacts include David Gregory (Director, MML Investments) – enquiries@mmlinvestments.com and Ben Stonebridge (Planner, HGH Consulting) – bstonebridge@hghconsulting.com."
  },
  {
    "id": 38,
    "name": "1 Hanover Square - Office, Retail And Restaurant",
    "client": "Global Holdings Management Group / Nautilina Limited",
    "location": "Westminster, London, W1S 1HA",
    "postcode": "W1S 1HA",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£20m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": "Main Contractor Not Yet Appointed",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Construction Manager",
      "Senior Site Manager",
      "Site Manager",
      "Commercial Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Technical Manager",
      "M&E Manager",
      "Buyer"
    ],
    "notes": "Major West End office refurbishment and redevelopment scheme including retail, restaurant, roof terraces, landscaping and extensive structural alterations. Demolition works are already underway via Erith Group, but the main construction contractor has not yet been confirmed. 24-month programme in a prime London location. Strong recruitment opportunity due to contractor appointment still outstanding and significant commercial, technical and operational resource requirements likely once the build phase commences. Key contact: Andrew Ross (Construction Director, Global Holdings) – andrew.ross@gh-mgmt.com."
  },
  {
    "id": 39,
    "name": "King Edmund School - Phase 2",
    "client": "Department For Education",
    "location": "Rochford, Essex, SS4 1TL",
    "postcode": "SS4 1TL",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Late October 2026",
    "endDate": "",
    "value": "£20m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Education",
    "priority": "Priority 1",
    "mainContractor": "Kier Eastern Limited",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Contracts Manager",
      "Construction Manager",
      "Buyer",
      "Design Manager",
      "M&E Manager",
      "Planner"
    ],
    "notes": "New teaching block, sports hall, swimming pool extension and refurbishment works with demolition of existing buildings. Kier Eastern confirmed as main contractor under a Design & Build contract. GTEK Group currently undertaking enabling works only. 18-month programme with DfE funding. Strong recruitment opportunity due to confirmed contractor and upcoming mobilisation phase. Best contacts are Tom Holroyd (Project Manager) – tom.holroyd@kier.co.uk and Wayne Bennison (Quantity Surveyor) – wayne.bennison@kier.co.uk. Works due to commence late October 2026."
  },
  {
    "id": 40,
    "name": "Eaton Court, Maylands Avenue - Industrial Warehouse",
    "client": "Tungsten Properties Limited",
    "location": "Hemel Hempstead, Hertfordshire, HP2 7TR",
    "postcode": "HP2 7TR",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£6.9m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Industrial & Logistics",
    "priority": "Priority 2",
    "mainContractor": "TBC (Tender Stage) – Faircloth Construction Limited & Magrock Limited Bidding",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Contracts Manager",
      "Buyer",
      "Design Manager",
      "Planner"
    ],
    "notes": "New industrial warehouse development following demolition. Design & Build contract currently at tender stage with planning approval still being sought. Faircloth Construction and Magrock identified as bidders. Tender closes July 2026 with estimated start November 2026. Good opportunity to build relationships with bidding contractors before award. Contact both bidders to establish likelihood of appointment and upcoming recruitment requirements. Strong industrial/logistics sector project but lower urgency than schemes with a confirmed contractor."
  },
  {
    "id": 41,
    "name": "Unit 5A, Bell Green Retail Park - M&S Food Hall",
    "client": "West Midlands Pension Fund / Marks & Spencer Plc",
    "location": "Sydenham, London, SE26 4PR",
    "postcode": "SE26 4PR",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£2.2m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Retail",
    "priority": "Priority 3",
    "mainContractor": "TBC (Tender Stage) – Bowmer & Kirkland (Bidder)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Fit-Out Manager",
      "Quantity Surveyor",
      "Contracts Manager",
      "Site Engineer"
    ],
    "notes": "Retail fit-out project for new M&S Food Hall. Tender stage with Bowmer & Kirkland identified as bidder. Planning approved and project due to start Q3 2026. Short 6-month programme means limited recruitment requirement compared with major new-build schemes. Worth contacting Bowmer & Kirkland and MAC Construction Consultants to establish contractor appointment status and mobilisation plans. Lower priority due to small value and fit-out nature."
  },
  {
    "id": 42,
    "name": "Abbey College, Ramsey - Teaching Accommodation",
    "client": "Abbey College",
    "location": "Ramsey, Huntingdon, Cambridgeshire, PE26 1DG",
    "postcode": "PE26 1DG",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£2.4m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Education",
    "priority": "Priority 3",
    "mainContractor": "Meridian Construction Services",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Contracts Manager",
      "Assistant Site Manager"
    ],
    "notes": "Contractor already appointed (Meridian Construction Services). New teaching block, reception area, access road, parking and refurbishment works. Planning approval still being sought but start date confirmed for December 2026. Education sector project with a 10-month programme. Recruitment opportunities likely limited due to project size, but worth contacting Meridian to understand wider workload and future schemes. Better as a secondary target rather than a primary focus project."
  },
  {
    "id": 43,
    "name": "Earls Court - BW05/BW07 - 490 Apartments",
    "client": "Delancey Estates",
    "location": "Earls Court, London, SW5 9SY",
    "postcode": "SW5 9SY",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£40.8m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "TBC (Main Contractor Not Yet Appointed)",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Contracts Manager",
      "Commercial Manager",
      "Buyer",
      "Assistant Site Manager"
    ],
    "notes": "Major 490-unit residential development within the wider Earls Court regeneration. Reserved matters approved and start targeted for August 2026. Main contractor has not yet been appointed following redesign of the wider scheme after Delancey acquired the development. Excellent opportunity to approach Delancey Estates, Arcadis and the consultant team ahead of contractor appointment. One of the strongest recruitment opportunities currently identified due to project value, scale, location and imminent mobilisation. Monitor closely for contractor award."
  },
  {
    "id": 44,
    "name": "Holland Road, Little Clacton - 50 Houses",
    "client": "Oakland Country Homes",
    "location": "Little Clacton, Essex, CO16 9RZ",
    "postcode": "CO16 9RZ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£6m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "TBC (Developer Build / Contractor Not Yet Identified)",
    "tags": [
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Contracts Manager",
      "Buyer",
      "Project Manager"
    ],
    "notes": "50-unit housing development with planning approved and expected to commence Q3 2026. No contractor currently identified, creating an opportunity to engage directly with Oakland Country Homes before mobilisation. Medium-sized residential scheme with a 19-month programme. Potential recruitment opportunities exist but likely limited compared to larger residential developments. Focus on establishing whether Oakland will self-deliver or appoint an external main contractor."
  },
  {
    "id": 45,
    "name": "New Era Estate - 199 Flats & Retail Units",
    "client": "Dolphin Square Foundation / Hoxton Regeneration Limited",
    "location": "Islington, London, N1 5QJ",
    "postcode": "N1 5QJ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£15.4m",
    "rolesNeeded": 9,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "TBC (Tender Stage) – Hill Partnerships Limited (Bidder)",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Contracts Manager",
      "Design Manager",
      "Buyer",
      "Assistant Site Manager"
    ],
    "notes": "199-unit residential and retail development currently in tender stage. Tender closes 26 June 2026 with a September 2026 start date. Hill Partnerships identified as a bidder and could be well positioned for appointment. Design & Build contract with a 30-month programme. Strong recruitment opportunity due to project size, London location, imminent contractor award and lengthy construction duration. Contact Hill Partnerships and the client team before contract award to establish mobilisation plans and resource requirements."
  },
  {
    "id": 46,
    "name": "65 Gresham Street - Redevelopment",
    "client": "JP Morgan Asset Management / Hines UK / Lipton Rogers Developments",
    "location": "City of London, EC2V 7NQ",
    "postcode": "EC2V 7NQ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£200m",
    "rolesNeeded": 15,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Mace Limited",
    "tags": [
      "Project Director",
      "Construction Director",
      "Project Manager",
      "Senior Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "M&E Manager",
      "Package Manager",
      "Planner",
      "Buyer",
      "Contracts Manager"
    ],
    "notes": "One of the strongest projects currently on the market. £200m City of London commercial redevelopment with Mace already appointed as main contractor and works now live on site (5% progress). 21-month programme running through to March 2028. Multiple specialist subcontractors already being appointed including Phoenix ME and Otis. Immediate recruitment opportunities likely across commercial, construction, design and M&E functions. High-value flagship London project with major contractor involvement and active mobilisation. Contact Mace, Phoenix ME and key project personnel immediately."
  },
  {
    "id": 47,
    "name": "1-36 Priter Road - 35 Flats",
    "client": "London Borough of Southwark",
    "location": "Rotherhithe, London, SE16 4QW",
    "postcode": "SE16 4QW",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£7.5m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Mount Anvil Construction Limited",
    "tags": [
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Project Manager",
      "Contracts Manager",
      "Buyer"
    ],
    "notes": "35-unit residential development with Mount Anvil already appointed as contractor. Planning granted and start anticipated Q3 2026. Despite the relatively small unit count, the project benefits from a lengthy 30-month programme and an established London residential contractor. Good opportunity to engage Mount Anvil regarding project mobilisation and wider London pipeline requirements. More valuable as a contractor relationship-building project than as a major standalone recruitment opportunity."
  },
  {
    "id": 48,
    "name": "HDD Abingdon - 75 Bed Care Home",
    "client": "Lovett Care Limited",
    "location": "N/O Copenhagen Drive, Abingdon, Oxfordshire, OX14 1RF",
    "postcode": "OX14 1RF",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£15.3m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "General Construction",
    "priority": "Priority 1",
    "mainContractor": "Kori Construction",
    "tags": [
      "Contracts Manager",
      "Quantity Surveyor",
      "Site Manager",
      "Project Manager",
      "Buyer",
      "Assistant Site Manager",
      "Design Manager"
    ],
    "notes": "75-bed care home development with contractor appointed and start confirmed for September 2026. Kori Construction are already mobilising with a QS, Buyer and Contracts Manager identified on the project. Care home projects often require lean teams, making key management hires highly valuable. Direct access is available to decision-makers including Paul Cannon (Contracts Manager), Keith Hayes (Buyer) and Elliott Bosch (Quantity Surveyor), making this a strong recruitment target with immediate engagement potential."
  },
  {
    "id": 49,
    "name": "Glasshouse Walk - Office & Halls Of Residence",
    "client": "London School of Economics (LSE)",
    "location": "7 Glasshouse Walk, Kennington, London, SE11 5ES",
    "postcode": "SE11 5ES",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£50m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Hollybrook Limited",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Planner",
      "Commercial Manager",
      "Document Controller",
      "Assistant Site Manager"
    ],
    "notes": "£50m student accommodation and office development for LSE. Demolition is already underway through Ferrari Demolition and Hollybrook have confirmed as main contractor. Main construction starts November 2026 with an 18-month programme. This is exactly the type of project where Hollybrook will be strengthening project delivery and commercial teams before mobilisation. Named QS already identified, making it a strong live recruitment target."
  },
  {
    "id": 50,
    "name": "Bridge Road East - Industrial & Storage Unit",
    "client": "Safestore Plc",
    "location": "Norton Building, Bridge Road East, Welwyn Garden City, AL7 1JR",
    "postcode": "AL7 1JR",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£3m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Retail",
    "priority": "Priority 2",
    "mainContractor": "TBA (Contract Awarded)",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Contracts Manager",
      "Construction Manager"
    ],
    "notes": "Safestore redevelopment comprising industrial units and self-storage. Contractor has reportedly been awarded but not yet disclosed. This creates a short window where recruitment opportunities often emerge as the successful contractor begins mobilising. Smaller value scheme but contractor identification could unlock immediate hiring opportunities."
  },
  {
    "id": 51,
    "name": "Harrow Road - 144 Flats, Retail, Community Centre & Care Homes",
    "client": "Westminster City Council",
    "location": "291 Harrow Road, Maida Vale, London, W9 3RN",
    "postcode": "W9 3RN",
    "status": "active",
    "stage": "Tender",
    "startDate": "Q4 2026",
    "endDate": "",
    "value": "£80m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Wates Construction (Preferred Bidder)",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Design Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Planner",
      "Buyer",
      "Assistant Site Manager"
    ],
    "notes": "£80m mixed-use development comprising 144 flats, care accommodation, community facilities and commercial space. Wates are preferred bidder and remain in pole position for the contract. Five-year programme creates substantial recruitment potential across site, commercial and technical disciplines. Westminster City Council involvement means strong funding and long-term pipeline opportunities."
  },
  {
    "id": 52,
    "name": "Kings Road - 9 Houses",
    "client": "London Borough of Haringey",
    "location": "Kings Road Car Park Site, 8 Kings Road, Tottenham, London, N17 8NP",
    "postcode": "N17 8NP",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 3,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "TBA (Frencon Construction / Etec Contract Services bidding)",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor"
    ],
    "notes": "Small residential scheme comprising 9 houses. Tender stage with contractor not yet appointed. Limited project team size and low project value mean minimal recruitment potential compared with larger schemes currently in your pipeline."
  },
  {
    "id": 53,
    "name": "Upavon Way & Northwood Crescent - 265 Houses",
    "client": "Taylor Wimpey (Bristol)",
    "location": "Carterton, Oxfordshire, OX18 1JJ",
    "postcode": "OX18 1JJ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£30.3m",
    "rolesNeeded": 9,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Taylor Wimpey (Bristol)",
    "tags": [
      "Site Manager",
      "Senior Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Technical Coordinator",
      "Design Manager",
      "Buyer",
      "Contracts Manager"
    ],
    "notes": "265-unit housing development being delivered directly by Taylor Wimpey. Large volume housing schemes require substantial site, commercial and technical teams over a multi-year build programme. Developer-to-build status means recruitment decisions sit directly with Taylor Wimpey rather than an external contractor."
  },
  {
    "id": 54,
    "name": "Genesis House, 17 Godliman Street - Hotel",
    "client": "Travelodge Hotels Limited",
    "location": "17 Godliman Street, City of London, EC4V 5BD",
    "postcode": "EC4V 5BD",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£3.6m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Hotel & Leisure",
    "priority": "Priority 2",
    "mainContractor": "TBA",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "M&E Manager"
    ],
    "notes": "95-bed Travelodge hotel conversion in the City of London. Planning approved and professional team appointed, but no main contractor identified yet. The strongest recruitment angle is through Travelodge's wider development pipeline rather than this individual project."
  },
  {
    "id": 55,
    "name": "Lower Road, Nash Mills - Fire Safety Works",
    "client": "Crest Nicholson South",
    "location": "Longman House & Associated Blocks, Hemel Hempstead, HP3 9GH",
    "postcode": "HP3 9GH",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "KDD Construction Limited",
    "tags": [
      "Contracts Manager",
      "Fire Safety Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Building Safety Manager",
      "Project Manager"
    ],
    "notes": "£5m fire safety remediation programme across multiple occupied residential buildings. KDD Construction are already appointed as both designer and contractor. Fire remediation remains a specialist sector with ongoing demand for experienced building safety and compliance professionals."
  },
  {
    "id": 56,
    "name": "Queens Park Primary School - Remedial Works",
    "client": "S Wallace",
    "location": "Queens Park Primary School, Droop Street, London, W10 4DQ",
    "postcode": "W10 4DQ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£5.5m",
    "rolesNeeded": 3,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Education",
    "priority": "Priority 3",
    "mainContractor": "TBA",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor"
    ],
    "notes": "School refurbishment and remedial works package. Planning approved but no contractor appointed and no major contractor involvement identified. Moderate value but limited recruitment visibility at this stage."
  },
  {
    "id": 57,
    "name": "Ilford Lane - 4 Retail Units & 9 Flats",
    "client": "Wingate Builders Merchants",
    "location": "340-348 Ilford Lane, Ilford, Essex, IG1 2LX",
    "postcode": "IG1 2LX",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 30,
    "sector": "Residential",
    "priority": "Priority 4",
    "mainContractor": "Residential / Retail",
    "tags": [
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Project Manager",
      "Buyer"
    ],
    "notes": "Small developer-led scheme comprising 9 flats and 4 retail units. Contractor, client and QS are all handled by Wingate Builders Merchants, limiting recruitment opportunities and reducing the size of the site team required."
  },
  {
    "id": 58,
    "name": "Old Falcon Hotel, Market Square - 14 Flats & Commercial Unit",
    "client": "The Whitfield Group Limited",
    "location": "Old Falcon Hotel, 12 Market Square, St Neots, Cambridgeshire, PE19 2AW",
    "postcode": "PE19 2AW",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 30,
    "sector": "Residential",
    "priority": "Priority 4",
    "mainContractor": "Residential / Commercial Refurbishment",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Building Surveyor",
      "Heritage Refurbishment Specialists"
    ],
    "notes": "Listed building refurbishment and conversion project with contractor, QS and PM already appointed through The Whitfield Group. Limited recruitment opportunities due to project size, but heritage refurbishment schemes can occasionally require specialist construction professionals."
  },
  {
    "id": 59,
    "name": "Linton Lodge Hotel - Extension & Improvements",
    "client": "Khanna Enterprises Oxford Ltd",
    "location": "Linton Lodge Hotel, 11-13 Linton Road, Oxford, Oxfordshire, OX2 6UJ",
    "postcode": "OX2 6UJ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£3m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Hotel & Leisure",
    "priority": "Priority 3",
    "mainContractor": "Hotel",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Hotel Fit-Out Manager",
      "Construction Manager"
    ],
    "notes": "Hotel extension and refurbishment project delivering 42 additional bedrooms. Scheme was previously delayed due to operator changes and appears to be moving forward for a September 2026 start. Moderate recruitment potential due to refurbishment, extension and fit-out elements, although project value remains relatively small."
  },
  {
    "id": 60,
    "name": "Shakespeare Road - 278 Flats",
    "client": "Legal & General Group PLC / McAleer & Rushe Limited",
    "location": "E/O The Shakespeare Road, Herne Hill, London, SE24 0PT",
    "postcode": "SE24 0PT",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£67m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager",
      "Package Manager",
      "Facade Manager",
      "Commercial Manager",
      "Engineer"
    ],
    "notes": "Major £67m residential development known as The Coal Yard. Main contractor McAleer & Rushe is appointed, enabling works have started and main construction begins July 2026. Large multi-block scheme with a 31-month programme creating strong recruitment opportunities across construction, commercial and management disciplines."
  },
  {
    "id": 61,
    "name": "Charlton House And Albany Road Regeneration",
    "client": "London Borough of Hounslow",
    "location": "Charlton House, Albany Road, Brentford, Middlesex, TW8 0NG",
    "postcode": "TW8 0NG",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£60m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Regeneration",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Commercial Manager",
      "Construction Manager",
      "Project Engineer",
      "Package Manager",
      "Regeneration Manager"
    ],
    "notes": "Major £60m regeneration scheme delivering 209 flats, commercial space and public realm improvements. Scheme has been retendered with contractor appointment expected following procurement. Long 36-month programme creates strong recruitment potential across management, commercial and technical construction disciplines."
  },
  {
    "id": 62,
    "name": "Caxton Grove - 36 Flats & Community Centre",
    "client": "London Borough of Tower Hamlets / Formation Design & Build Limited",
    "location": "Caxton Hall Community Centre & Adj Caxton Grove, Caxton Grove, Bow, London, E3 2EE",
    "postcode": "E3 2EE",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£20.4m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential / Community",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager",
      "Engineer",
      "Commercial Manager"
    ],
    "notes": "Public sector residential and community development delivering 36 flats and a new community centre. Contractor Formation Design & Build has been appointed and the project is underway with completion due December 2028. Good recruitment potential due to the live status, public sector funding and 30-month programme duration."
  },
  {
    "id": 63,
    "name": "52-56 Lant Street - Replacement Cladding",
    "client": "Residential Management Group / Starfish Construction Limited",
    "location": "52-56 Lant Street, Southwark, London, SE1 1RB",
    "postcode": "SE1 1RB",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£6m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Cladding Remediation",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Cladding Manager",
      "Façade Manager",
      "Quantity Surveyor",
      "Building Surveyor",
      "Contracts Manager",
      "Health & Safety Manager"
    ],
    "notes": "£6m cladding remediation scheme involving replacement of combustible cladding to 67 apartments. Main contractor Starfish Construction has been appointed and works commence September 2026. Strong recruitment potential for façade, remediation and fire-safety specialists due to the specialist nature of the package and fixed delivery programme."
  },
  {
    "id": 64,
    "name": "Brent Cross Campus - Data Centre - LON1B2",
    "client": "Pure Data Centres Group Limited / Glencar Construction Limited",
    "location": "Brent Cross Data Centre, 721a North Circular Road, Cricklewood, London, NW2 7AH",
    "postcode": "NW2 7AH",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Fourth Quarter 2026",
    "endDate": "",
    "value": "£100m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Data Centre",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "M&E Manager",
      "Commissioning Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Electrical Engineer",
      "Mechanical Engineer",
      "Data Centre Engineers"
    ],
    "notes": "Major £100m 70MW data centre development with Glencar Construction already appointed as main contractor. Large-scale specialist project with a 24-month programme, creating excellent recruitment opportunities across construction management, M&E, commissioning, commercial and technical disciplines. One of the strongest recruitment opportunities in the current pipeline."
  },
  {
    "id": 65,
    "name": "Queen Mary University London, Phase 2A - Queens Building & Octagon Refurbishment",
    "client": "Queen Mary University London",
    "location": "Queens Building & Octagon, Queen Mary University, 327 Mile End Road, London, E1 4NS",
    "postcode": "E1 4NS",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£10m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Education",
    "priority": "Priority 2",
    "mainContractor": "Education / University Refurbishment",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Construction Manager",
      "Quantity Surveyor",
      "Design Manager",
      "M&E Manager",
      "Electrical Engineer",
      "Mechanical Engineer",
      "Fit-Out Manager",
      "Building Services Manager"
    ],
    "notes": "University refurbishment and fit-out project involving internal alterations, new glazed atrium, café installation, roof plant upgrades and accessibility improvements. Tender stage project with a 12-month programme. Good recruitment potential across fit-out, refurbishment, M&E and project management disciplines, particularly once the main contractor is appointed."
  },
  {
    "id": 66,
    "name": "Anvil House, Matthias Road - Self Storage Facility",
    "client": "Matthias Road PropCo Limited",
    "location": "Anvil House, 8-34 Matthias Road, Stoke Newington, London, N16 8QD",
    "postcode": "N16 8QD",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£3.3m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Commercial Office",
    "priority": "Priority 3",
    "mainContractor": "Self Storage / Industrial / Commercial",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Civil Engineer",
      "Structural Engineer",
      "Construction Manager"
    ],
    "notes": "New build self-storage facility with retail and workspace units following demolition. Planning approval still being sought, with demolition contractor already involved. Smaller commercial scheme with limited project team size but potential opportunities once a main contractor is appointed."
  },
  {
    "id": 67,
    "name": "One Granary Street, Moorfields Eye Hospital Trust - Office Fit-Out",
    "client": "Moorfields Eye Hospital NHS Trust / 8 Build",
    "location": "One Granary Street, Camden Town, London, NW1 0NT",
    "postcode": "NW1 0NT",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£4.5m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Healthcare",
    "priority": "Priority 2",
    "mainContractor": "Office Fit-Out / Healthcare",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Fit-Out Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager",
      "Commercial Manager",
      "Project Quantity Surveyor"
    ],
    "notes": "Office fit-out project for Moorfields Eye Hospital NHS Trust. Scheme has progressed to Stage 2 tender"
  },
  {
    "id": 68,
    "name": "83 New Kent Road - Alterations & Refurbishment",
    "client": "Regent Meadows Limited",
    "location": "83 New Kent Road, Southwark, London, SE1 6RD",
    "postcode": "SE1 6RD",
    "status": "active",
    "stage": "Pre-Construction",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£4m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential Conversion & Refurbishment",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Construction Manager",
      "Fit-Out Manager",
      "Refurbishment Manager",
      "Assistant Site Manager"
    ],
    "notes": "Residential conversion and refurbishment project with planning approved and July 2026 start confirmed. Quinn (London) already identified as a bidder, giving a potential route into contractor-side recruitment. Small but active London refurbishment scheme with opportunities across site management and commercial functions."
  },
  {
    "id": 69,
    "name": "Forest End School, Marston Moreteyne - Classroom & Sports Pitch",
    "client": "Central Bedfordshire Council / RG Carter Limited",
    "location": "Forest End School, Marston Moreteyne, Bedford, MK43 0NE",
    "postcode": "MK43 0NE",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2.5m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Education",
    "priority": "Priority 2",
    "mainContractor": "Education / School New Build",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager",
      "Assistant Site Manager",
      "Engineer"
    ],
    "notes": "New classroom block, sports pitch and external works project. RG Carter identified as preferred bidder with Mace acting as project manager and quantity surveyor. Small value project but strong visibility of delivery team and confirmed September 2026 start."
  },
  {
    "id": 70,
    "name": "Church End School - Classroom Block & MUGA",
    "client": "Central Bedfordshire Council / RG Carter Limited",
    "location": "Marston Moreteyne VC School, Church Walk, Marston Moreteyne, Bedford, MK43 0NE",
    "postcode": "MK43 0NE",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2.5m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Education",
    "priority": "Priority 2",
    "mainContractor": "Education / School New Build",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager",
      "Assistant Site Manager",
      "Site Engineer"
    ],
    "notes": "New classroom block, MUGA, sports pitch reconfiguration, car park extension and associated external works. RG Carter identified as preferred bidder with Mace acting as Project Manager and Quantity Surveyor. Small project value but strong contractor visibility and confirmed delivery programme."
  },
  {
    "id": 71,
    "name": "43-54 John Newton Court - External Refurbishment",
    "client": "London & Quadrant Housing Trust / Wates Construction Limited",
    "location": "43-54 John Newton Court, Welling, Kent, DA16 2AQ",
    "postcode": "DA16 2AQ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£10m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Cladding & Refurbishment / Social Housing",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Resident Liaison Officer",
      "Retrofit Manager",
      "Facades Manager",
      "Roofing Manager",
      "Planned Works Manager"
    ],
    "notes": "£10m occupied residential refurbishment including EWI, window replacement, roofing works, Solar PV installation and external upgrades across 132 homes. Wates Construction already appointed with a confirmed July 2026 start, creating strong recruitment opportunities across social housing, planned works and retrofit disciplines."
  },
  {
    "id": 72,
    "name": "Land Park Lane, Kensworth - 26 Houses",
    "client": "Old Kensworth Property Company",
    "location": "Orchard Estate, Land Park Lane, Kensworth, Dunstable, Bedfordshire, LU6 2PZ",
    "postcode": "LU6 2PZ",
    "status": "active",
    "stage": "Pre-Construction",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2.6m",
    "rolesNeeded": 4,
    "contacts": [
      {
        "type": "person",
        "name": "David Berryman",
        "role": "Secretary",
        "email": "",
        "phone": ""
      },
      {
        "type": "person",
        "name": "Martin Andrews",
        "role": "Director",
        "email": "martin.andrews@mac-ltd.co.uk",
        "phone": ""
      },
      {
        "type": "person",
        "name": "Guy Siragher",
        "role": "Architect",
        "email": "gsiragher@rdcllc.co.uk",
        "phone": ""
      }
    ],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "Residential New Build",
    "tags": [
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Project Manager"
    ],
    "notes": "Small residential development of 26 houses with associated roads, landscaping and parking. Planning approved but no contractor, bidder or delivery team identified. Limited recruitment opportunities expected due to project size and lack of contractor visibility."
  },
  {
    "id": 73,
    "name": "Udney Park Road - Nursery & 3 Dwellings",
    "client": "Bluett Properties Limited / Sardonyx Construction Limited",
    "location": "2 - 4 Udney Park Road, Teddington, Middlesex, TW11 9BB",
    "postcode": "TW11 9BB",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£2.7m",
    "rolesNeeded": 5,
    "contacts": [
      {
        "type": "person",
        "name": "Tom Spencer",
        "role": "Project Manager",
        "email": "",
        "phone": "07958 793188"
      },
      {
        "type": "person",
        "name": "William Edwards",
        "role": "Director",
        "email": "",
        "phone": "07855 891491"
      },
      {
        "type": "org",
        "name": "Bluett Properties Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Sardonyx Construction Limited",
        "role": "Contractor"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Nursery & Residential Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Contracts Manager"
    ],
    "notes": "Redevelopment of brownfield site to deliver a nursery and 3 residential dwellings. Contractor already appointed with construction commencing July 2026, creating a live recruitment route despite the modest project value."
  },
  {
    "id": 74,
    "name": "FTG Ardleigh Facility - Storage & Distribution Centre Phase 1",
    "client": "Flying Trade Group",
    "location": "Adj Ipswich Road And Wick Lane, Ardleigh, Colchester, Essex, CO7 7QL",
    "postcode": "CO7 7QL",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q2 2026",
    "endDate": "",
    "value": "£15m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "person",
        "name": "Harry Dulai",
        "role": "Managing Director",
        "email": "harry.dulai@suryafoods.com",
        "phone": "01255 553652"
      },
      {
        "type": "person",
        "name": "Tony Osbourne",
        "role": "Contract Manager",
        "email": "tony.osbourne@suryafoods.com",
        "phone": "01255 553652"
      },
      {
        "type": "person",
        "name": "Simon Taylor",
        "role": "Project Leader",
        "email": "simon@b3-architects.co.uk",
        "phone": ""
      },
      {
        "type": "person",
        "name": "Ben Stevens",
        "role": "Civil Engineer",
        "email": "info@iceniconsulting.co.uk",
        "phone": ""
      },
      {
        "type": "person",
        "name": "Robert Diamond",
        "role": "Engineer",
        "email": "robert.diamond@ingletonwood.co.uk",
        "phone": ""
      }
    ],
    "opportunityScore": 90,
    "sector": "Industrial & Logistics",
    "priority": "Priority 1",
    "mainContractor": "Industrial / Storage & Distribution Centre",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Engineer",
      "M&E Manager",
      "Logistics Manager",
      "Warehouse Construction Specialists"
    ],
    "notes": "15,000sqm chilled and frozen food storage and distribution facility currently on-site with construction underway. Large industrial scheme with a 24-month programme and significant operational infrastructure requirements creating strong recruitment potential."
  },
  {
    "id": 75,
    "name": "Akeman Road - 51 Houses and 4 Apartments",
    "client": "Backhouse Housing Limited",
    "location": "Witney Road, SW/O Akeman Road, Witney, Oxfordshire, OX29 6RP",
    "postcode": "OX29 6RP",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£15m",
    "rolesNeeded": 9,
    "contacts": [
      {
        "type": "person",
        "name": "Faith Beeson",
        "role": "Wright",
        "email": "faith.beeson-wright@backhousehousing.com",
        "phone": "01225 614970"
      },
      {
        "type": "person",
        "name": "Stuart Walter",
        "role": "Senior Land Manager",
        "email": "stuart.walter@backhousehousing.com",
        "phone": "01225 614970"
      },
      {
        "type": "person",
        "name": "Eduardo Silvino",
        "role": "Senior Civil Engineer",
        "email": "edie.silvino@morgancs-consult.com",
        "phone": ""
      },
      {
        "type": "person",
        "name": "Ben Metcalfe",
        "role": "Director",
        "email": "info@pad-design.com",
        "phone": ""
      },
      {
        "type": "person",
        "name": "Robin Shepherd",
        "role": "Director",
        "email": "robin@cocreation-uk.com",
        "phone": ""
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Housing Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Buyer",
      "Engineer",
      "Design Manager"
    ],
    "notes": "55-unit residential development comprising 51 houses and 4 apartments with 22 affordable homes. Developer-builder model with Backhouse Housing acting as client, contractor, project manager and quantity surveyor, giving direct access to key hiring decision makers ahead of a confirmed September 2026 start."
  },
  {
    "id": 76,
    "name": "Former West End Central Police Station - Office, Restaurant & Training Unit",
    "client": "Savile Row1 Limited / Henigman",
    "location": "West End Central Police Station, 27 Savile Row, Westminster, London, W1S 2EX",
    "postcode": "W1S 2EX",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£25m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "person",
        "name": "Imogen Christodoulou",
        "role": "Associate",
        "email": "ichristodoulou@hoarelea.com",
        "phone": "020 3668 7193"
      },
      {
        "type": "person",
        "name": "Abdul Elmenani",
        "role": "Architect",
        "email": "aelmenani@plparchitecture.com",
        "phone": "020 3006 3900"
      },
      {
        "type": "person",
        "name": "Tom Hawkley",
        "role": "Planner",
        "email": "tom.hawkley@dp9.co.uk",
        "phone": "020 7004 1700"
      },
      {
        "type": "org",
        "name": "McGee Group Limited",
        "role": "Demolition Contractor"
      },
      {
        "type": "org",
        "name": "Gardiner & Theobald Limited",
        "role": "Project Manager & QS"
      }
    ],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": "Commercial Office Development",
    "tags": [
      "Project Manager",
      "Construction Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Commercial Manager",
      "M&E Manager",
      "Package Manager",
      "Engineer"
    ],
    "notes": "Prime Central London commercial redevelopment delivering a new office building with restaurant and training facilities following demolition of the existing police station. Strong recruitment potential due to project value, prestigious location, specialist consultants and lengthy programme."
  },
  {
    "id": 77,
    "name": "Delta Point, Wellesley Road - 27 Bed Extension",
    "client": "Croydon Investments Limited",
    "location": "Delta Point, 35 Wellesley Road, Croydon, Surrey, CR0 2GU",
    "postcode": "CR0 2GU",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£6.6m",
    "rolesNeeded": 7,
    "contacts": [
      {
        "type": "person",
        "name": "Blima Stroh",
        "role": "Director",
        "email": "",
        "phone": ""
      },
      {
        "type": "person",
        "name": "Bethany Firkins",
        "role": "Planner",
        "email": "beth@centroplan.co.uk",
        "phone": "07775 068652"
      },
      {
        "type": "person",
        "name": "James Beauford",
        "role": "Criterion Capital Limited",
        "email": "reception@criterioncapital.co.uk",
        "phone": "020 7432 2444"
      },
      {
        "type": "person",
        "name": "Damian Tungatt",
        "role": "Director",
        "email": "info@markidesassociates.co.uk",
        "phone": "07930 323 147"
      },
      {
        "type": "person",
        "name": "Matthew Vaughan",
        "role": "Acoustic Consultant",
        "email": "matthew@hawkinsenvironmental.co.uk",
        "phone": "01256 522 332"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential Extension Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Engineer",
      "Contracts Manager"
    ],
    "notes": "Three-storey extension to an existing residential building delivering 27 new apartments. Reasonable recruitment opportunity due to the 19-month programme and medium-sized residential package, although no contractor has yet been identified."
  },
  {
    "id": 78,
    "name": "North Acton to Hanger Lane - Cutting Remedial Work",
    "client": "Transport for London / Skanska UK",
    "location": "North Acton to Hanger Lane, Ealing, London, W5",
    "postcode": "",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£24m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "Transport For London",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Skanska UK",
        "role": "Contractor"
      },
      {
        "type": "org",
        "name": "Balfour Beatty Group Limited",
        "role": "Bidder"
      },
      {
        "type": "org",
        "name": "M Group Transport (Rail and Aviation) Limited",
        "role": "Bidder"
      },
      {
        "type": "org",
        "name": "Enable Infrastructure Limited",
        "role": "Bidder"
      }
    ],
    "opportunityScore": 90,
    "sector": "Infrastructure & Civil",
    "priority": "Priority 1",
    "mainContractor": "Rail & Infrastructure Remedial Works",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Construction Manager",
      "Section Engineer",
      "Senior Engineer",
      "Quantity Surveyor",
      "Contracts Manager",
      "Rail Manager",
      "Civils Manager",
      "Temporary Works Coordinator"
    ],
    "notes": "Major TfL infrastructure stabilisation project involving remedial works to rail cuttings between North Acton and Hanger Lane. Skanska already appointed with works commencing June 2026, providing an excellent route into rail and infrastructure recruitment opportunities."
  },
  {
    "id": 79,
    "name": "10 Great Pulteney Street - Refurbishment",
    "client": "Endurance Land / 8 Build",
    "location": "Unlimited House, 10 Great Pulteney Street, Westminster, London, W1F 9NB",
    "postcode": "W1F 9NB",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q4 2026",
    "endDate": "",
    "value": "£30m",
    "rolesNeeded": 9,
    "contacts": [
      {
        "type": "person",
        "name": "Belinda Neilson",
        "role": "Assistant Planning Consultant",
        "email": "bneilson@geraldeve.com",
        "phone": "020 7493 3338"
      },
      {
        "type": "person",
        "name": "Gerry Taylor",
        "role": "Partner",
        "email": "gerry@taylorprojectservices.com",
        "phone": "020 7743 6602"
      },
      {
        "type": "person",
        "name": "Luke Taylor",
        "role": "Associate Partner",
        "email": "luke@taylorprojectservices.com",
        "phone": "020 7743 6602"
      },
      {
        "type": "person",
        "name": "Ben Alexander",
        "role": "Acoustic Engineer",
        "email": "ben.alexander@ventaacoustics.com",
        "phone": ""
      },
      {
        "type": "org",
        "name": "8 Build",
        "role": "Bidder"
      }
    ],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Commercial Office Refurbishment",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Construction Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "M&E Manager",
      "Contracts Manager",
      "Project Engineer"
    ],
    "notes": "High-value West End office refurbishment and extension project including new basement works, façade alterations and additional office floors. Strong recruitment opportunity due to project value, central London location and the involvement of 8 Build, a contractor heavily active in commercial fit-out and refurbishment schemes."
  },
  {
    "id": 80,
    "name": "Stirling Way - Warehouse & Offices",
    "client": "Harleyford Capital / Faircloth Construction Limited",
    "location": "Quickco, Stirling Way, Borehamwood, Hertfordshire, WD6 2AX",
    "postcode": "WD6 2AX",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 9,
    "contacts": [
      {
        "type": "person",
        "name": "Alex Palmer",
        "role": "Contracts Manager",
        "email": "alex@faircloth.co.uk",
        "phone": "01892 784488"
      },
      {
        "type": "person",
        "name": "Dean Harrison",
        "role": "Managing Director",
        "email": "dean.harrison@harleyfordcapital.com",
        "phone": "020 7409 5500"
      },
      {
        "type": "person",
        "name": "Thomas Mallindine",
        "role": "Managing Director",
        "email": "thomas.mallindine@harleyfordcapital.com",
        "phone": "020 7409 5500"
      },
      {
        "type": "person",
        "name": "David Watts",
        "role": "Project Manager",
        "email": "david.watts@childerstonepm.com",
        "phone": "07862 671206"
      },
      {
        "type": "person",
        "name": "Scott Price",
        "role": "Director",
        "email": "scottp@kampcl.com",
        "phone": "07769 365050"
      }
    ],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Industrial Warehouse & Office Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Engineer",
      "M&E Manager"
    ],
    "notes": "New-build warehouse and office development with associated infrastructure, landscaping and EV charging facilities. Contractor already appointed with a confirmed July 2026 start, creating a direct recruitment route into both the delivery and commercial teams."
  },
  {
    "id": 81,
    "name": "Guildhall - Mechanical And Associated Electrical Services Upgrades",
    "client": "City of London Corporation",
    "location": "Guildhall, Gresham Street, City of London, EC2V 7HH",
    "postcode": "EC2V 7HH",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£2.4m",
    "rolesNeeded": 7,
    "contacts": [
      {
        "type": "org",
        "name": "City of London Corporation",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Tender reference identified",
        "role": "2026/S 000-048693"
      }
    ],
    "opportunityScore": 70,
    "sector": "Industrial & Logistics",
    "priority": "Priority 2",
    "mainContractor": "M&E Infrastructure Upgrade",
    "tags": [
      "M&E Project Manager",
      "Mechanical Project Engineer",
      "Electrical Project Engineer",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Commissioning Engineer"
    ],
    "notes": "Mechanical and associated electrical services upgrades within the operational Guildhall estate, including plant replacement, distribution upgrades and supporting builders works. Public sector M&E project with specialist requirements but limited visibility on delivery teams at present."
  },
  {
    "id": 82,
    "name": "Avondale Square Estate, Phase 1 - External Works & Electrical Upgrades",
    "client": "City of London Corporation",
    "location": "Avondale Square Estate, Bermondsey, Southwark, London, SE1 5HA",
    "postcode": "SE1 5HA",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£12m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "City of London Corporation",
        "role": "Client"
      },
      {
        "type": "person",
        "name": "Tender Reference: 2026/S 000",
        "role": "048724",
        "email": "",
        "phone": ""
      }
    ],
    "opportunityScore": 70,
    "sector": "Infrastructure & Civil",
    "priority": "Priority 2",
    "mainContractor": "External Works & Electrical Infrastructure Upgrade",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Electrical Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Electrical Engineer",
      "Civils Engineer",
      "Resident Liaison Manager"
    ],
    "notes": "£12m estate improvement scheme involving external works, civils packages and electrical infrastructure upgrades. Stronger opportunity than most pre-tender schemes due to project value and confirmed programme, but recruitment routes remain limited until contractor appointment."
  },
  {
    "id": 83,
    "name": "York Way Estate - External Works & Electrical Upgrades",
    "client": "City of London Corporation",
    "location": "York Way Estate, Holloway, London, N7 9PX",
    "postcode": "N7 9PX",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£9.6m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "City of London Corporation",
        "role": "Client"
      },
      {
        "type": "person",
        "name": "Tender Reference: 2026/S 000",
        "role": "048728",
        "email": "",
        "phone": ""
      }
    ],
    "opportunityScore": 70,
    "sector": "Infrastructure & Civil",
    "priority": "Priority 2",
    "mainContractor": "External Works & Electrical Infrastructure Upgrade",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Electrical Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Electrical Engineer",
      "Civils Engineer",
      "Resident Liaison Manager"
    ],
    "notes": "External works and electrical infrastructure upgrade programme across the York Way Estate. Public sector refurbishment and infrastructure package with a confirmed start date, although procurement remains at pre-tender stage and no contractor has yet been identified."
  },
  {
    "id": 84,
    "name": "One Salisbury Square - Cat A Fitout - Design And Build",
    "client": "City of London Corporation",
    "location": "One Salisbury Square, City, London, EC4Y 8AE",
    "postcode": "EC4Y 8AE",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£18m",
    "rolesNeeded": 9,
    "contacts": [
      {
        "type": "org",
        "name": "City of London Corporation",
        "role": "Client"
      },
      {
        "type": "person",
        "name": "Tender Reference: 2026/S 000",
        "role": "048667",
        "email": "",
        "phone": ""
      }
    ],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Commercial Office Fit-Out",
    "tags": [
      "Project Manager",
      "Fit-Out Project Manager",
      "Site Manager",
      "Construction Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "M&E Manager",
      "Contracts Manager"
    ],
    "notes": "High-value Category A commercial office fit-out to be delivered under a single-stage design and build contract. Significant recruitment potential due to project value, City of London location and the specialist fit-out delivery team likely required once the contractor is appointed."
  },
  {
    "id": 85,
    "name": "The Mayor and Commonalty and Citizens of the City of London - BRP Wayfinding",
    "client": "City of London Corporation",
    "location": "Various Locations Throughout London, City of London, EC2P",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£3.8m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "City of London Corporation",
        "role": "Client"
      },
      {
        "type": "person",
        "name": "Tender Reference: 2026/S 000",
        "role": "048636",
        "email": "",
        "phone": ""
      }
    ],
    "opportunityScore": 50,
    "sector": "General Construction",
    "priority": "Priority 3",
    "mainContractor": "Wayfinding & Estate Infrastructure Programme",
    "tags": [
      "Construction Manager",
      "Project Manager",
      "Design Manager",
      "Wayfinding Consultant",
      "Graphic Designer",
      "Project Coordinator"
    ],
    "notes": "Barbican Renewal Programme wayfinding package involving strategy, design and implementation works across the estate. More of a specialist consultancy and design-led project than a traditional construction scheme, resulting in limited recruitment opportunities for mainstream construction professionals."
  },
  {
    "id": 86,
    "name": "26-52 Whytecliffe Road South - 247 Flats",
    "client": "V Fund Limited / RAA Development Group Limited / Regent Land & Developments Limited",
    "location": "26-52 Whytecliffe Road South, Purley, Surrey, CR8 2AW",
    "postcode": "CR8 2AW",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£18.5m",
    "rolesNeeded": 9,
    "contacts": [
      {
        "type": "org",
        "name": "V Fund Limited / Regent Land & Developments / RAA Development Group",
        "role": "Clients"
      },
      {
        "type": "org",
        "name": "CS2",
        "role": "Employer's Agent & QS"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential Apartments",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Technical Coordinator",
      "Commercial Manager",
      "Finishing Manager"
    ],
    "notes": "Large 247-unit residential development with planning secured and a substantial 30-month programme. Strong residential recruitment opportunity due to project size, but score reduced because no contractor or preferred bidder has yet been identified despite the scheme progressing toward a September 2026 start."
  },
  {
    "id": 87,
    "name": "Ellington Court - 58 Flats",
    "client": "Akelius UK Twelve Limited",
    "location": "R/O Ellington Court, High Street, Southgate, London, N14 6LB",
    "postcode": "N14 6LB",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£4.3m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "Akelius UK Twelve Limited",
        "role": "Client & Project Manager"
      },
      {
        "type": "org",
        "name": "Monica Polinelli",
        "role": "Construction Manager"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential Apartments",
    "tags": [
      "Construction Manager",
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Finishing Manager",
      "Technical Coordinator"
    ],
    "notes": "58-unit residential development with planning approved and a confirmed September 2026 start. Good opportunity due to the live programme and named client-side construction contact, but recruitment potential is reduced by the relatively small contract value and absence of an appointed main contractor."
  },
  {
    "id": 88,
    "name": "Even Frampton Park Road - 69 Apartments",
    "client": "London Borough of Hackney / Kind & Company (Builders) Limited",
    "location": "Block 48-106, Even Frampton Park Road, Hackney, London, E9 6NE",
    "postcode": "E9 6NE",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q4 2026",
    "endDate": "",
    "value": "£23m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "London Borough of Hackney",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Kind & Company",
        "role": "Preferred Bidder"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Apartments",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Technical Manager",
      "Buyer",
      "Finishing Manager"
    ],
    "notes": "£23m residential scheme with a 36-month programme and a preferred bidder already identified. Strong recruitment opportunity due to contractor involvement, long construction duration and local authority backing. Ideal target ahead of mobilisation as project teams are likely to be assembled during 2026."
  },
  {
    "id": 89,
    "name": "Burwash Manor Redevelopment",
    "client": "M Radford (Private Client)",
    "location": "Burwash Manor, School Lane, Barton, Cambridge, Cambridgeshire, CB23 7BD",
    "postcode": "CB23 7BD",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2.7m",
    "rolesNeeded": 4,
    "contacts": [
      {
        "type": "org",
        "name": "M Radford",
        "role": "Client"
      }
    ],
    "opportunityScore": 25,
    "sector": "Residential",
    "priority": "Priority 4",
    "mainContractor": "Education / Mixed-Use Development",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Assistant Site Manager"
    ],
    "notes": "Small mixed-use scheme comprising education facilities, offices, retail space, hydrotherapy unit and 3 houses. Planning approved with an estimated September 2026 start, but recruitment potential is limited due to the low project value, short programme and absence of a contractor or preferred bidder."
  },
  {
    "id": 90,
    "name": "Earls Hall Drive - 150 Houses, 30 Apartments & 8 Commercial Units",
    "client": "Galliard Homes Limited",
    "location": "St Johns Plant Centre, Earls Hall Drive, Clacton-on-Sea, Essex, CO16 8BP",
    "postcode": "CO16 8BP",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£28.1m",
    "rolesNeeded": 12,
    "contacts": [
      {
        "type": "org",
        "name": "Galliard Homes Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Hydrock Consulting",
        "role": "Stantec"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential & Mixed-Use Development",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Senior Site Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Buyer",
      "Design Manager",
      "Technical Coordinator",
      "Commercial Manager",
      "Finishing Manager"
    ],
    "notes": "Major mixed-use residential development delivering 180 units and commercial space over a 32-month programme. Demolition phase has already been completed and construction is due to commence in July 2026, creating strong recruitment potential. Galliard Homes' direct involvement significantly increases the likelihood of hiring activity across operational and commercial teams."
  },
  {
    "id": 91,
    "name": "Railway Street - 3 Commercial Units & 10 Flats",
    "client": "Chelmsford City Council / TJ Evers Limited",
    "location": "Railway Street, Chelmsford, Essex, CM1 1QS",
    "postcode": "CM1 1QS",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2.6m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "Chelmsford City Council",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "TJ Evers Limited",
        "role": "Contractor"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential & Commercial Mixed-Use",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Assistant Site Manager",
      "Design Coordinator",
      "Finishing Manager"
    ],
    "notes": "Small mixed-use development, but the presence of an appointed contractor significantly improves recruitment potential. TJ Evers has already secured the project and mobilisation will take place ahead of the September 2026 start, creating opportunities for site and commercial hires despite the relatively low contract value."
  },
  {
    "id": 92,
    "name": "The Portfolio, Bishops Avenue - 33 Flats",
    "client": "Alvarium Investments",
    "location": "Ilkley House, Redcroft & The Georgians, 51 The Bishops Avenue, East Finchley, London, N2 0BJ",
    "postcode": "N2 0BJ",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£10m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "Alvarium Investments",
        "role": "Client"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Luxury Residential Apartments",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Technical Manager",
      "Finishing Manager",
      "Commercial Manager"
    ],
    "notes": "Luxury residential development on the prestigious Bishops Avenue featuring high-specification amenities including a gym, swimming pool, cinema, spa and retail facilities. Strong project value and lengthy programme create recruitment potential, although no contractor or preferred bidder has yet been identified."
  },
  {
    "id": 93,
    "name": "Grove Technology Park Phase 1 - Blocks E, F & G Storage Buildings",
    "client": "TOF Corporate Trustee Limited / Barnwood Limited",
    "location": "Grove Technology Park, Grove Business Centre, Downsview Road, Wantage, Oxfordshire, OX12 9FF",
    "postcode": "OX12 9FF",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£20m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "TOF Corporate Trustee Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Barnwood Limited",
        "role": "Contractor"
      },
      {
        "type": "org",
        "name": "Vince Perez",
        "role": "Contracts Manager"
      }
    ],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Industrial & Storage Development",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Commercial Manager",
      "Buyer",
      "Construction Manager"
    ],
    "notes": "Large industrial and storage development with an appointed main contractor and confirmed July 2026 start. The combination of £20m value, 14-month programme and significant industrial floor space creates strong recruitment potential. Barnwood will likely require operational, commercial and technical staff as mobilisation progresses."
  },
  {
    "id": 94,
    "name": "Assembly Covent Garden Hotel, Alhambra House - 30 Bed Extension",
    "client": "Criterion Capital Limited / West End Property Company Limited",
    "location": "Alhambra House, 27-31 Charing Cross Road, Westminster, London, WC2H 0AU",
    "postcode": "WC2H 0AU",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 7,
    "contacts": [
      {
        "type": "org",
        "name": "Criterion Capital Limited",
        "role": "Client & Architect"
      },
      {
        "type": "org",
        "name": "West End Property Company Limited",
        "role": "Client"
      }
    ],
    "opportunityScore": 70,
    "sector": "Hotel & Leisure",
    "priority": "Priority 2",
    "mainContractor": "Hotel Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Hotel Fit-Out Manager"
    ],
    "notes": "Hotel extension project in a prime Central London location with a contract already awarded and a September 2026 start anticipated. Recruitment potential is strengthened by the awarded contract and 15-month programme, although the relatively modest project value and unknown contractor limit visibility into upcoming hiring activity."
  },
  {
    "id": 95,
    "name": "Red Kite House, Howbery Park - 400KW ASHP & 42KW Solar Panels",
    "client": "Department for Environment, Food and Rural Affairs (DEFRA)",
    "location": "Red Kite House, Howbery Park, Wallingford, Oxfordshire, OX10 8BD",
    "postcode": "OX10 8BD",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£42.4m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "DEFRA",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Southern Planning Practice Limited",
        "role": "Planner"
      }
    ],
    "opportunityScore": 70,
    "sector": "Infrastructure & Civil",
    "priority": "Priority 2",
    "mainContractor": "Renewable Energy / M&E Infrastructure",
    "tags": [
      "Project Manager",
      "M&E Project Manager",
      "Electrical Project Manager",
      "Mechanical Project Engineer",
      "Sustainability Manager",
      "Building Services Manager",
      "Commissioning Manager",
      "Site Manager"
    ],
    "notes": "Large-value public sector decarbonisation project involving significant air source heat pump and solar PV infrastructure. Long programme duration and specialist M&E scope create strong recruitment opportunities, particularly within mechanical, electrical and sustainability disciplines. However, no contractor has yet been identified which slightly limits immediate recruitment visibility."
  },
  {
    "id": 96,
    "name": "Broadwater Farm Estate Phase 2 - 176 Apartments",
    "client": "London Borough of Haringey / Formation Design & Build Limited / Konform (UK) Limited",
    "location": "Rochford & Martlesham, Griffin Road, Broadwater Farm Estate, Tottenham, London, N17 6HX",
    "postcode": "N17 6HX",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£100m",
    "rolesNeeded": 11,
    "contacts": [
      {
        "type": "org",
        "name": "London Borough of Haringey",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Formation Design & Build",
        "role": "Main Contractor"
      },
      {
        "type": "org",
        "name": "Konform",
        "role": "Groundworks/Civils"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Refurbishment / Estate Regeneration",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Buyer",
      "Commercial Manager",
      "Resident Liaison Officer",
      "M&E Manager",
      "Construction Manager"
    ],
    "notes": "Major London estate regeneration project with contractor and specialist subcontractors already appointed. £100m value creates substantial recruitment potential across commercial, operational and refurbishment teams. Mobilisation is imminent with a July 2026 start, making this one of the strongest live opportunities for construction recruitment activity."
  },
  {
    "id": 97,
    "name": "Grand Union, Phase 4b, Plot K - 168 Apartments",
    "client": "St George Developments Limited",
    "location": "Former 25-28 Northfields, Phase 4b, Plot K, Beresford Avenue, Wembley, Middlesex, HA0 1NW",
    "postcode": "HA0 1NW",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£20m",
    "rolesNeeded": 11,
    "contacts": [
      {
        "type": "org",
        "name": "St George Developments",
        "role": "Client/Developer/Main Contractor"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential New Build",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Technical Coordinator",
      "Buyer",
      "Construction Manager"
    ],
    "notes": "Major residential development comprising 168 apartments within the wider Grand Union masterplan. St George are acting as client, developer and contractor, creating direct access to hiring managers and reducing procurement uncertainty. Long programme and large unit count provide strong recruitment opportunities across construction, commercial and technical disciplines."
  },
  {
    "id": 98,
    "name": "Knowsley House, 173-176 Sloane Street - Refurbishment",
    "client": "Cadogan Estates Limited",
    "location": "Knowsley House, 173-176 Sloane Street, Westminster, London, SW1X 9QG",
    "postcode": "SW1X 9QG",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£6.5m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "Cadogan Estates Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Blackburn & Co",
        "role": "Project Manager"
      },
      {
        "type": "org",
        "name": "John McAslan & Partners",
        "role": "Architect"
      }
    ],
    "opportunityScore": 70,
    "sector": "General Construction",
    "priority": "Priority 2",
    "mainContractor": "Commercial Refurbishment / Façade Remediation",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Building Surveyor",
      "Design Manager",
      "Façade Manager",
      "Commercial Manager",
      "M&E Manager"
    ],
    "notes": "High-end refurbishment and façade improvement scheme in a prime Chelsea location. Strong professional team already appointed and likely to require specialist refurbishment expertise. However, no main contractor has yet been identified which limits immediate recruitment opportunities compared to projects with live site teams already mobilising."
  },
  {
    "id": 99,
    "name": "Cambridge City Council - DCM Remedial Works",
    "client": "Cambridge City Council",
    "location": "Various Locations Throughout Cambridge, Cambridgeshire, CB2",
    "postcode": "",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£24m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "Cambridge City Council",
        "role": "Client"
      }
    ],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Social Housing Remedial Works / Planned Maintenance",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Resident Liaison Officer",
      "Repairs Manager",
      "Asset Manager",
      "Building Surveyor",
      "Operations Manager"
    ],
    "notes": "Large-scale public sector remedial works framework focused on damp, condensation and mould remediation across multiple housing assets. Long-term programme extending to 2031 creates sustained recruitment demand across operational, commercial and housing maintenance teams. Although the contractor has not yet been appointed, the scale, value and duration make this a highly attractive future recruitment opportunity."
  },
  {
    "id": 100,
    "name": "Amelia Street - 152 Student Accommodation",
    "client": "Imperial Homes South Limited",
    "location": "31 Amelia Street, Walworth, London, SE17 3PY",
    "postcode": "SE17 3PY",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£11.4m",
    "rolesNeeded": 9,
    "contacts": [
      {
        "type": "org",
        "name": "Imperial Homes South Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Rolfe Judd Limited",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "Faulkner Browns",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Meinhardt",
        "role": "Civil & M&E"
      },
      {
        "type": "org",
        "name": "Caneparo Associates Limited",
        "role": "Transport Consultant"
      },
      {
        "type": "org",
        "name": "Hawkins Environmental Limited",
        "role": "Acoustic Consultant"
      }
    ],
    "opportunityScore": 70,
    "sector": "Commercial Office",
    "priority": "Priority 2",
    "mainContractor": "PBSA / Student Accommodation",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Design Manager",
      "M&E Manager",
      "Buyer",
      "Engineer"
    ],
    "notes": "New build student accommodation development providing 152 student beds over 8 storeys with landscaping and associated access works following demolition. Strong London PBSA scheme with a two-year construction programme and good recruitment potential across site, commercial and technical disciplines."
  },
  {
    "id": 101,
    "name": "Wembley Point, Stonebridge Place - 515 Flats, Retail & Sports Facility",
    "client": "Canada Israel / Wembley Towers Limited",
    "location": "Wembley Point, Stonebridge Place, 1 Harrow Road and 5-15 Harrow Road, Wembley, Middlesex, HA9 6DE",
    "postcode": "HA9 6DE",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£300m",
    "rolesNeeded": 15,
    "contacts": [
      {
        "type": "org",
        "name": "Canada Israel",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Wembley Towers Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Avanton",
        "role": "Delivery Partner / Project Manager"
      },
      {
        "type": "org",
        "name": "Patel Taylor Architects",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "AECOM",
        "role": "QS"
      },
      {
        "type": "org",
        "name": "Hoare Lea",
        "role": "M&E"
      },
      {
        "type": "org",
        "name": "Walsh Group",
        "role": "Civil & Structural"
      },
      {
        "type": "org",
        "name": "WSP",
        "role": "Transport"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Mixed-Use High Rise Development",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Construction Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "M&E Manager",
      "Buyer",
      "Planner",
      "Document Controller",
      "Engineer"
    ],
    "notes": "Three tower development up to 32 storeys delivering 515 apartments, retail space and a boxing gym. One of the strongest residential schemes in London with a £300m value and a 34-month programme. Expected to require a substantial delivery team across construction, commercial and technical disciplines."
  },
  {
    "id": 102,
    "name": "Naked Wolfe (HK) Limited - Office",
    "client": "Naked Wolfe (HK) Limited",
    "location": "27-28 Windmill Street, Westminster, London, W1T 2JJ",
    "postcode": "W1T 2JJ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2m",
    "rolesNeeded": 5,
    "contacts": [
      {
        "type": "org",
        "name": "Naked Wolfe (HK) Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Savills UK Limited",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "Marek Wojciechowski Architects",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Expedition Engineering",
        "role": "Structural Engineer"
      },
      {
        "type": "org",
        "name": "Webb Yates Engineers",
        "role": "M&E"
      }
    ],
    "opportunityScore": 50,
    "sector": "Commercial Office",
    "priority": "Priority 3",
    "mainContractor": "Office Refurbishment / Commercial",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Building Services Manager"
    ],
    "notes": "Office redevelopment including facade and entrance reconfiguration, replacement works, plant installation and roof terrace. Compact central London commercial refurbishment likely to require a small but experienced project delivery team."
  },
  {
    "id": 103,
    "name": "23-27 Victoria Road - 37 Apartments & Commercial Unit",
    "client": "Gralaw Limited",
    "location": "23-27 Victoria Road, Romford, Essex, RM1 2JT",
    "postcode": "RM1 2JT",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£3m",
    "rolesNeeded": 5,
    "contacts": [
      {
        "type": "org",
        "name": "Gralaw Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Avison Young",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "Eight Associates",
        "role": "M&E"
      }
    ],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "Residential / Mixed Use Development",
    "tags": [
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Project Manager",
      "Buyer"
    ],
    "notes": "New build development comprising 37 apartments and a ground floor commercial unit following demolition. Smaller scheme but still capable of generating recruitment opportunities with a likely compact site team. Architect has entered administration, which may affect programme and procurement progression."
  },
  {
    "id": 104,
    "name": "4 Wych Elm - 90 Apartments & Flexible Commercial Floorspace",
    "client": "Ripped Gym Basildon",
    "location": "4 Wych Elm, Harlow, Essex, CM20 1QP",
    "postcode": "CM20 1QP",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£6.2m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "Ripped Gym Basildon",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Ackroyd Lowrie Associates",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Town Centre Regeneration",
        "role": "QS"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential / Mixed Use Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Assistant Site Manager",
      "Design Manager",
      "Commercial Manager"
    ],
    "notes": "Demolition and redevelopment scheme delivering 90 apartments with flexible commercial floorspace in a prominent town centre location. Mid-rise development ranging from 6 to 15 storeys with a 19-month programme. Stronger recruitment potential than most projects in this value bracket due to the scale of residential delivery and mixed-use element."
  },
  {
    "id": 105,
    "name": "Beth Shmuel Synagogue, Golders Green Road - Redevelopment",
    "client": "Beis Shmuel Synagogue",
    "location": "Beth Shmuel Synagogue, 169-171 Golders Green Road & 2 Woodstock Avenue, Golders Green, London, NW11 9BY",
    "postcode": "NW11 9BY",
    "status": "active",
    "stage": "Pre-Construction",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 3,
    "contacts": [
      {
        "type": "org",
        "name": "Beis Shmuel Synagogue",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "John Stebbing Architects",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Henry Planning",
        "role": "Planner"
      }
    ],
    "opportunityScore": 30,
    "sector": "Residential",
    "priority": "Priority 4",
    "mainContractor": "Mixed Use Development",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor"
    ],
    "notes": "Mixed-use development comprising a synagogue, community offices, function hall and 4 residential units. Planning approved with a confirmed construction programme, however the scheme is relatively small and unlikely to require a significant site management team."
  },
  {
    "id": 106,
    "name": "Elim Estate - 34 Apartments",
    "client": "Leathermarket JMB",
    "location": "Elim Estate, Elim Street, Southwark, London, SE1 4QB",
    "postcode": "SE1 4QB",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£4m",
    "rolesNeeded": 4,
    "contacts": [
      {
        "type": "org",
        "name": "Leathermarket JMB",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Calford Seaden",
        "role": "PM/QS"
      },
      {
        "type": "org",
        "name": "EngineersHRW",
        "role": "Civil & Structural Engineer"
      },
      {
        "type": "org",
        "name": "XCO2 Energy",
        "role": "M&E"
      }
    ],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "Residential Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Assistant Site Manager"
    ],
    "notes": "34-apartment residential development in Southwark with planning approved and a confirmed September 2026 start. Professional team appointed including Calford Seaden and EngineersHRW. Smaller scheme with a limited site team requirement but still offers recruitment opportunities once contractor procurement progresses."
  },
  {
    "id": 107,
    "name": "Colechurch House, Tooley Street - Offices",
    "client": "CIT Group Plc",
    "location": "Colechurch House, Tooley Street, Southwark, London, SE1 2XS",
    "postcode": "SE1 2XS",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£115.5m",
    "rolesNeeded": 9,
    "contacts": [
      {
        "type": "org",
        "name": "CIT Group Plc",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Mace",
        "role": "Delivery Partner"
      },
      {
        "type": "org",
        "name": "Foster & Partners",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Arcadis",
        "role": "QS"
      },
      {
        "type": "org",
        "name": "Sweco",
        "role": "M&E"
      }
    ],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": "Commercial Office Development",
    "tags": [
      "Project Director",
      "Construction Director",
      "Project Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Package Manager",
      "M&E Manager"
    ],
    "notes": "Major zero-carbon commercial office development creating a landmark workplace, retail, restaurant and leisure destination in Central London. Backed by an exceptional consultant team including Mace, Foster & Partners, Arcadis and Sweco. Large value, long programme and high-profile delivery make this one of the strongest recruitment opportunities currently available."
  },
  {
    "id": 108,
    "name": "30-31 Haymarket - Hotel & Rooftop Extensions",
    "client": "Crown Properties GB Limited / Midas Two Limited",
    "location": "30-31 Haymarket, Westminster, London, SW1Y 4EX",
    "postcode": "SW1Y 4EX",
    "status": "active",
    "stage": "Pre-Construction",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 5,
    "contacts": [
      {
        "type": "org",
        "name": "Crown Properties GB Limited",
        "role": "Client/PM"
      },
      {
        "type": "org",
        "name": "Build Generation",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Seneca Group",
        "role": "M&E"
      },
      {
        "type": "org",
        "name": "Mason Navarro Pledge",
        "role": "Structural Engineer"
      }
    ],
    "opportunityScore": 50,
    "sector": "Hotel & Leisure",
    "priority": "Priority 3",
    "mainContractor": "Hotel Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Assistant Site Manager",
      "Design Manager"
    ],
    "notes": "Conversion of existing building into hotel accommodation with rooftop extensions, restaurant, bar and reception facilities. Prime Central London location with planning approved and a confirmed start date, however the short programme and relatively small value limit recruitment potential."
  },
  {
    "id": 109,
    "name": "Stay Hotel - Airport Way",
    "client": "Molo Hotels Luton 2 Limited",
    "location": "The Courtyard By Marriott Hotel, Airport Way, Luton, Bedfordshire, LU2 9LF",
    "postcode": "LU2 9LF",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£10.3m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "Molo Hotels Luton 2 Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "ICA Architects & Designers",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Arup",
        "role": "Civil & Structural Engineer"
      },
      {
        "type": "org",
        "name": "Butler Consulting",
        "role": "M&E"
      }
    ],
    "opportunityScore": 70,
    "sector": "Hotel & Leisure",
    "priority": "Priority 2",
    "mainContractor": "Hotel Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Assistant Site Manager",
      "Design Manager",
      "M&E Manager"
    ],
    "notes": "171-bedroom hotel development including bar, lounge, fitness suite, meeting rooms and associated infrastructure. Large hotel scheme with a 24-month programme and strong consultant team. No contractor currently appointed but project value and duration create solid recruitment potential."
  },
  {
    "id": 110,
    "name": "10-13 Urban Hive - 48 Flats & Commercial Unit",
    "client": "Pleasant Hill Properties",
    "location": "10-13 Urban Hive, Theydon Road, Clapton, London, E5 9BQ",
    "postcode": "E5 9BQ",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£7m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "Pleasant Hill Properties",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Fourth Space Limited",
        "role": "Architect & Planner"
      },
      {
        "type": "org",
        "name": "MP Projects",
        "role": "QS"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential Development / Mixed Use",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Assistant Site Manager",
      "Design Manager",
      "Commercial Manager"
    ],
    "notes": "48 apartments and commercial space in Hackney with planning approved and a September 2026 start. Mid-sized London residential scheme with a 19-month programme. No contractor appointed yet but strong potential for future recruitment activity once procurement progresses."
  },
  {
    "id": 111,
    "name": "Leigham Court Road - 35 Flats",
    "client": "Pocket Living Limited",
    "location": "49b & R/O 49 & 49b Leigham Court Road, Streatham, London, SW16 2NF",
    "postcode": "SW16 2NF",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Q4 2026",
    "endDate": "",
    "value": "£6m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "Pocket Living Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Baqus Group Plc",
        "role": "Project Manager/QS"
      },
      {
        "type": "org",
        "name": "Robert Bird Group",
        "role": "Civil & Structural Engineer"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential Development",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Assistant Site Manager",
      "Design Manager",
      "Commercial Manager"
    ],
    "notes": "35-flat residential development with planning approved and a respected developer in Pocket Living. The scheme has suffered long delays and is expected to be retendered, creating an opportunity for contractor appointments and recruitment activity. While not yet mobilised, it has stronger recruitment potential than many smaller residential schemes due to the developer's track record and London location."
  },
  {
    "id": 112,
    "name": "Bourne Capital - Queensway",
    "client": "Bourne Capital / Greenfour Limited",
    "location": "Olympia Mews, 28-34 Queensway, Paddington, London, W2 3RX",
    "postcode": "W2 3RX",
    "status": "active",
    "stage": "Pre-Construction",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£3.9m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "Bourne Capital",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Greenfour Limited",
        "role": "Project Manager/QS"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Mixed-Use Residential & Retail Development",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Assistant Site Manager",
      "Commercial Manager",
      "Design Manager"
    ],
    "notes": "Mixed-use development comprising 35 residential units and retail space in Central London. Professional team is established and planning is approved, however the project has experienced delays and no contractor has yet been identified. Recruitment opportunities are likely but currently lack the visibility seen on stronger live schemes."
  },
  {
    "id": 113,
    "name": "Bonner Road, Bethnal Green - 274 Flats & Retail",
    "client": "Clarion Housing Group / JJ Rhatigan & Company Limited",
    "location": "Former London Chest Hospital, Bonner Road, Bethnal Green, London, E2 9JX",
    "postcode": "E2 9JX",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£32m",
    "rolesNeeded": 14,
    "contacts": [
      {
        "type": "org",
        "name": "Clarion Housing Group",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "JJ Rhatigan & Company Limited",
        "role": "Main Contractor"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Regeneration & Mixed-Use Development",
    "tags": [
      "Project Director",
      "Project Manager",
      "Construction Manager",
      "Contracts Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Technical Manager",
      "Buyer",
      "Finishing Manager",
      "M&E Manager"
    ],
    "notes": "Major London regeneration scheme delivering 341 homes alongside commercial and community space. Contractor already appointed and project is moving on-site with a programme running through to 2031. Excellent recruitment potential across commercial, operational and technical teams due to scale, duration and complexity of the development."
  },
  {
    "id": 114,
    "name": "Brixton Road, Dorrell Place, Stockwell - Hotel & Retail Unit",
    "client": "Miraj Investments Limited",
    "location": "452-456 Brixton Road, 1-11 Dorrell Place, Stockwell, London, SW9 8EA",
    "postcode": "SW9 8EA",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 7,
    "contacts": [
      {
        "type": "org",
        "name": "Miraj Investments Limited",
        "role": "Client"
      }
    ],
    "opportunityScore": 70,
    "sector": "Hotel & Leisure",
    "priority": "Priority 2",
    "mainContractor": "Hotel Development & Mixed-Use Commercial",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Contracts Manager",
      "Construction Manager",
      "Fit-Out Manager",
      "Commercial Manager"
    ],
    "notes": "96-bedroom hotel development with retail space in a prime South London location. Planning is approved and the scheme is progressing towards construction, however no main contractor or preferred bidder has been identified. The hotel sector can generate strong recruitment demand but procurement visibility remains limited at this stage."
  },
  {
    "id": 115,
    "name": "Beaumont Road, Great Oakley - 86 Houses & Community Centre",
    "client": "Raer Group / Great Oakley Developments Ltd",
    "location": "Adj Great Oakley Primary School, Beaumont Road, Great Oakley, Harwich, Essex, CO12 5BA",
    "postcode": "CO12 5BA",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£13.4m",
    "rolesNeeded": 9,
    "contacts": [
      {
        "type": "org",
        "name": "Raer Group",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Great Oakley Developments Ltd",
        "role": "Client"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential New Build & Community Facility",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Buyer",
      "Contracts Manager",
      "Construction Manager",
      "Community Building Manager"
    ],
    "notes": "Residential development comprising 86 houses alongside a new community centre. Planning is secured and the scheme is progressing towards construction, however no main contractor has yet been identified. Good opportunity due to housing volume and community infrastructure element, but stronger opportunities exist where contractors have already been appointed."
  },
  {
    "id": 116,
    "name": "Cambridge City Council - Responsive Repairs - South",
    "client": "Cambridge City Council",
    "location": "Various Locations Throughout Cambridge, Cambridgeshire, CB2",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£16.8m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "Cambridge City Council",
        "role": "Client"
      }
    ],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Social Housing Responsive Repairs Framework",
    "tags": [
      "Contracts Manager",
      "Operations Manager",
      "Repairs Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Supervisor",
      "Resident Liaison Officer",
      "Building Surveyor",
      "Voids Manager"
    ],
    "notes": "Major responsive repairs framework covering housing maintenance and tenant repair requests across the southern housing stock. Long-term framework delivery creates sustained recruitment demand for operational, commercial and management personnel. Responsive repairs contracts are typically workforce-heavy and generate recurring recruitment opportunities throughout the contract period."
  },
  {
    "id": 117,
    "name": "Cambridge City Council - Responsive Repairs - North",
    "client": "Cambridge City Council",
    "location": "Various Locations Throughout Cambridge, Cambridgeshire, CB2",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£19.2m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "Cambridge City Council",
        "role": "Client"
      }
    ],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Social Housing Responsive Repairs Framework",
    "tags": [
      "Contracts Manager",
      "Operations Manager",
      "Repairs Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Supervisor",
      "Resident Liaison Officer",
      "Building Surveyor",
      "Voids Manager"
    ],
    "notes": "Major responsive repairs framework covering housing maintenance and tenant repair requests across the northern housing stock. The five-year duration provides consistent recruitment opportunities across management, commercial and operational teams. Responsive repairs contracts are labour-intensive and typically require ongoing recruitment due to workforce turnover and framework expansion."
  },
  {
    "id": 118,
    "name": "Toot Baldon, North - Sewage Pumping Station",
    "client": "Thames Water Utilities Limited",
    "location": "To Ne/O Toot Baldon, Toot Baldon, Oxford, Oxfordshire, OX44 9NE",
    "postcode": "OX44 9NE",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£2m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "Thames Water Utilities Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Thames Water Property Limited",
        "role": "Architect"
      }
    ],
    "opportunityScore": 70,
    "sector": "General Construction",
    "priority": "Priority 2",
    "mainContractor": "Infrastructure / Utilities",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Civil Engineer",
      "Utilities Manager",
      "Quantity Surveyor",
      "Contracts Manager"
    ],
    "notes": "Sewage pumping station with associated access roads and landscaping works."
  },
  {
    "id": 119,
    "name": "Chatelain House - 23 Flats & 283 Bed Student Accommodation & Commercial Use",
    "client": "Fabrix London / Patrizia UK",
    "location": "Chatelain House, 182-202 Walworth Road, Walworth, London, SE17 1JJ",
    "postcode": "SE17 1JJ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£20.4m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "Fabrix London",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Patrizia UK",
        "role": "Client"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "PBSA / Residential / Mixed-Use",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Construction Manager",
      "Engineer"
    ],
    "notes": "Erection of 23 residential apartments, 283-bed student accommodation scheme, commercial, office and community space with associated landscaping, access and parking following demolition."
  },
  {
    "id": 120,
    "name": "Stevenage Fire Station - Sleeping Accommodation",
    "client": "Hertfordshire County Council",
    "location": "Stevenage Fire Station, St Georges Way, Stevenage, Hertfordshire, SG1 1HS",
    "postcode": "SG1 1HS",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2.4m",
    "rolesNeeded": 5,
    "contacts": [
      {
        "type": "org",
        "name": "Hertfordshire County Council",
        "role": "Client & Architect"
      },
      {
        "type": "org",
        "name": "Ashe Construction Limited",
        "role": "Bidder"
      },
      {
        "type": "org",
        "name": "T&B (Contractors) Limited",
        "role": "Bidder"
      },
      {
        "type": "org",
        "name": "Neville Special Projects Limited",
        "role": "Bidder"
      },
      {
        "type": "org",
        "name": "G & S Hutchinson Limited",
        "role": "Bidder"
      }
    ],
    "opportunityScore": 70,
    "sector": "General Construction",
    "priority": "Priority 2",
    "mainContractor": "Public Sector / Blue Light / Refurbishment",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Contracts Manager",
      "Site Engineer"
    ],
    "notes": "Extension and refurbishment works to provide improved sleeping accommodation and associated garden area at Stevenage Fire Station."
  },
  {
    "id": 121,
    "name": "Broadway - 9 Flats",
    "client": "South Oxfordshire & Vale of White Horse District Council",
    "location": "116, 118 & 120 Broadway, Didcot, Oxfordshire, OX11 8AB",
    "postcode": "OX11 8AB",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£4.6m",
    "rolesNeeded": 5,
    "contacts": [
      {
        "type": "org",
        "name": "South Oxfordshire & Vale of White Horse District Council",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Edgars Limited",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "Oxford Direct Services Trading Limited",
        "role": "Contractor"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential Development",
    "tags": [
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Project Manager",
      "Contracts Manager"
    ],
    "notes": "Erection of 8 one-bedroom and 1 two-bedroom flats with associated landscaping following demolition of existing buildings."
  },
  {
    "id": 122,
    "name": "Hayes Bridge Retail Park - LON6 Data Centre",
    "client": "Colt Data Centre Services",
    "location": "Hayes Bridge Retail Park & Heathrow Interchange, Uxbridge Road, Hayes, Middlesex, UB4 0RH",
    "postcode": "UB4 0RH",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£17.2m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "Colt Data Centre Services",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Savills",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "Studio NWA",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Ridge & Partners LLP",
        "role": "Project Manager"
      },
      {
        "type": "org",
        "name": "Arup",
        "role": "Civil & Structural Engineer"
      },
      {
        "type": "org",
        "name": "Cundall",
        "role": "M&E Engineer"
      }
    ],
    "opportunityScore": 90,
    "sector": "Retail",
    "priority": "Priority 1",
    "mainContractor": "Data Centre / Mission Critical",
    "tags": [
      "Project Manager",
      "Construction Manager",
      "Site Manager",
      "M&E Manager",
      "Electrical Project Manager",
      "Mechanical Project Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Commissioning Manager"
    ],
    "notes": "Construction of a 27MW data centre building with associated site access, infrastructure and landscaping works."
  },
  {
    "id": 123,
    "name": "Alban Dobson House - 29 Flats & Community Facility",
    "client": "Haig Housing Trust",
    "location": "Alban Dobson House, Green Lane, Morden, Surrey, SM4 5NS",
    "postcode": "SM4 5NS",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£2.5m",
    "rolesNeeded": 5,
    "contacts": [
      {
        "type": "org",
        "name": "Haig Housing Trust",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Bell Cornwell LLP",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "Formation Architects Limited",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Nimbus Engineering Consultants",
        "role": "Civil Engineer"
      },
      {
        "type": "org",
        "name": "SLR Consulting",
        "role": "Transport"
      },
      {
        "type": "org",
        "name": "Kind & Company (Builders) Ltd",
        "role": "Bidder"
      }
    ],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Residential / Affordable Housing",
    "tags": [
      "Site Manager",
      "Assistant Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Contracts Manager"
    ],
    "notes": "Erection of 29 apartments comprising 9 one-bed, 12 two-bed, 6 three-bed and 2 four-bed flats with associated access, parking and landscaping following demolition of the existing building."
  },
  {
    "id": 124,
    "name": "Natural History Museum - Western Galleries Feasibility & Restoration",
    "client": "Natural History Museum",
    "location": "Natural History Museum, Cromwell Road, South Kensington, London, SW7 5BD",
    "postcode": "SW7 5BD",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£10m",
    "rolesNeeded": 7,
    "contacts": [
      {
        "type": "org",
        "name": "Natural History Museum",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Haworth Tompkins Limited",
        "role": "Building Surveyor & Principal Designer"
      }
    ],
    "opportunityScore": 90,
    "sector": "General Construction",
    "priority": "Priority 1",
    "mainContractor": "Heritage / Refurbishment / Public Attraction",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Heritage Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager"
    ],
    "notes": "Restoration and refurbishment of the Natural History Museum's Western Galleries including the Dinosaur Gallery, Origins Gallery, Old General Herbarium and associated back-of-house areas as part of the museum's 150th anniversary transformation programme."
  },
  {
    "id": 125,
    "name": "1-3 St Pauls Churchyard - Office Refurbishment & Alterations",
    "client": "Royal London Asset Management Limited / RLUKREF Nominees (UK) One Limited",
    "location": "1-3 St Pauls Churchyard, City of London, EC4V 3QH",
    "postcode": "EC4V 3QH",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£23m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "Royal London Asset Management",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "RLUKREF Nominees (UK) One Ltd",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Avison Young",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "EPR Architects",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Gardiner & Theobald",
        "role": "Project Manager & QS"
      },
      {
        "type": "org",
        "name": "Waterman Building Services",
        "role": "Structural Engineer"
      },
      {
        "type": "org",
        "name": "Arup",
        "role": "M&E Engineer"
      },
      {
        "type": "org",
        "name": "Collins Construction Ltd",
        "role": "Bidder"
      },
      {
        "type": "org",
        "name": "8 Build",
        "role": "Bidder"
      }
    ],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Commercial Office Refurbishment",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Building Services Manager"
    ],
    "notes": "Major refurbishment and alteration works to an existing commercial office building including façade improvements, window upgrades, terrace reconfigurations, entrance alterations, rooflight replacement, plant relocation and associated works."
  },
  {
    "id": 126,
    "name": "NPL Management Limited - Specialist Laboratory Facilities",
    "client": "National Physical Laboratory (NPL)",
    "location": "NPL Management Limited, Hampton Road, Teddington, Middlesex, TW11 0LW",
    "postcode": "TW11 0LW",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£24m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "National Physical Laboratory",
        "role": "Client"
      }
    ],
    "opportunityScore": 90,
    "sector": "General Construction",
    "priority": "Priority 1",
    "mainContractor": "Laboratories / Science & Technology / Life Sciences",
    "tags": [
      "Project Manager",
      "Construction Manager",
      "Site Manager",
      "M&E Manager",
      "Design Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Commissioning Manager"
    ],
    "notes": "Design and Build project comprising specialist laboratory upgrades and new-build laboratory facilities at the National Physical Laboratory campus."
  },
  {
    "id": 127,
    "name": "Village School - Expansion Works",
    "client": "London Borough of Brent",
    "location": "Village School, Grove Park, The Hyde, London, NW9 0JY",
    "postcode": "NW9 0JY",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£7.2m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "London Borough of Brent",
        "role": "Client"
      }
    ],
    "opportunityScore": 70,
    "sector": "Education",
    "priority": "Priority 2",
    "mainContractor": "Education / Public Sector",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager"
    ],
    "notes": "Design and Build expansion works at Village School including new educational facilities and associated construction works."
  },
  {
    "id": 128,
    "name": "Erith Quarry Parcels 5 & 8 - 132 Houses",
    "client": "Erith Hills LLP",
    "location": "Part Of Erith Quarry Site, Fraser Road, Erith, Kent, DA8 1FH",
    "postcode": "DA8 1FH",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£13.8m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "Erith Hills LLP",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Anderson Group Limited",
        "role": "Contractor"
      },
      {
        "type": "org",
        "name": "The PHI Group Limited",
        "role": "Frame Contractor"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Housing",
    "tags": [
      "Site Manager",
      "Senior Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Buyer",
      "Assistant Site Manager",
      "Engineer"
    ],
    "notes": "132-house residential development with access roads, parking, highway works and landscaping."
  },
  {
    "id": 129,
    "name": "Upper Delph Drove - Industrial And Distribution Units",
    "client": "AG Wright & Son Farms Limited",
    "location": "New England Farm, Upper Delph Drove, Haddenham, Ely, Cambridgeshire, CB6 3PB",
    "postcode": "CB6 3PB",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£3.7m",
    "rolesNeeded": 7,
    "contacts": [
      {
        "type": "org",
        "name": "AG Wright & Son Farms Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Cheffins Planning & Development",
        "role": "Planner & Architect"
      },
      {
        "type": "org",
        "name": "EAS TP",
        "role": "Transport & Flood Consultant"
      }
    ],
    "opportunityScore": 70,
    "sector": "Industrial & Logistics",
    "priority": "Priority 2",
    "mainContractor": "Industrial / Logistics",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Buyer",
      "Construction Manager",
      "Engineer"
    ],
    "notes": "Industrial, storage and distribution units with parking, access roads, cycle facilities and associated landscaping works."
  },
  {
    "id": 130,
    "name": "Stow Lane, Sandy Lane - 101 Houses",
    "client": "Seagate Homes",
    "location": "E/O Stow Lane, Sandy Lane, Wisbech, Cambridgeshire, PE13 2JU",
    "postcode": "PE13 2JU",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£10.1m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "Seagate Homes",
        "role": "Client, Architect, QS & Contractor"
      },
      {
        "type": "org",
        "name": "Pegasus Planning Group",
        "role": "Planner & Landscape Architect"
      },
      {
        "type": "org",
        "name": "Baily Garner",
        "role": "Employer's Agent"
      },
      {
        "type": "org",
        "name": "Tetra Tech",
        "role": "M&E Consultant"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Housing",
    "tags": [
      "Site Manager",
      "Senior Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Buyer",
      "Engineer",
      "Assistant Site Manager"
    ],
    "notes": "101-unit housing development comprising two, three and four-bedroom homes with associated parking, roads and landscaping works."
  },
  {
    "id": 131,
    "name": "Green Street - 189 Houses & Community Building",
    "client": "Griggs Options Limited / Thrive Homes Limited",
    "location": "Lyndhurst Farm, Green Street, Borehamwood, Hertfordshire, WD6 1NF",
    "postcode": "WD6 1NF",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q4 2026",
    "endDate": "",
    "value": "£50.7m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "Griggs Options Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Thrive Homes Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Griggs Homes",
        "role": "Delivery Partner"
      },
      {
        "type": "org",
        "name": "Hill Partnerships Limited",
        "role": "Contractor"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Housing",
    "tags": [
      "Senior Site Manager",
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Buyer",
      "Technical Coordinator",
      "Design Manager",
      "Engineer"
    ],
    "notes": "189-unit residential development comprising houses, flats and a community building with extensive parking, access roads and landscaping works."
  },
  {
    "id": 132,
    "name": "Cardamom Court - 37 Extra Care Apartments",
    "client": "Anchor Hanover Group",
    "location": "Cardamom Court, 1 Grantham Road, Manor Park, London, E12 5LU",
    "postcode": "E12 5LU",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-20",
    "endDate": "",
    "value": "£13.1m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "org",
        "name": "Anchor Hanover Group",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Kind & Company (Builders) Limited",
        "role": "Contractor"
      },
      {
        "type": "org",
        "name": "PRP Architects",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Dice Consulting Engineers",
        "role": "Civil Engineer"
      },
      {
        "type": "person",
        "name": "Start 20",
        "role": "Aug",
        "email": "",
        "phone": ""
      },
      {
        "type": "person",
        "name": "Finish 18",
        "role": "Aug",
        "email": "",
        "phone": ""
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Extra Care / Residential",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Site Manager",
      "Design Manager",
      "Buyer",
      "Engineer"
    ],
    "notes": "Erection of a four-storey extension building providing 37 additional extra care apartments with associated landscaping following demolition works."
  },
  {
    "id": 133,
    "name": "Bull Farm, Pitsea - 66 Bed Care Home",
    "client": "LNT Care Developments Limited / ASP Care Developments",
    "location": "Bull Farm, London Road, Pitsea, Basildon, Essex, SS13 2DD",
    "postcode": "SS13 2DD",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Late June 2026",
    "endDate": "",
    "value": "£3.3m",
    "rolesNeeded": 7,
    "contacts": [
      {
        "type": "org",
        "name": "LNT Care Developments Limited",
        "role": "Client & Contractor"
      },
      {
        "type": "org",
        "name": "ASP Care Developments",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Bidwells LLP",
        "role": "Planner"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Care Home",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Buyer",
      "Construction Manager",
      "Engineer"
    ],
    "notes": "Demolition of existing buildings and construction of a new 66-bed residential care home with associated drainage, parking, access and landscaping works."
  },
  {
    "id": 134,
    "name": "Manor Lodge School, Shenley - Basil Flashman Extension",
    "client": "Manor Lodge School",
    "location": "Manor Lodge School, Ridge Hill, Shenley, Radlett, Hertfordshire, WD7 9BG",
    "postcode": "WD7 9BG",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£3.5m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "Manor Lodge School",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "HGH Consulting",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "IID Architects",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Buxton Building Contractors Limited",
        "role": "Bidder"
      }
    ],
    "opportunityScore": 70,
    "sector": "Education",
    "priority": "Priority 2",
    "mainContractor": "Education",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Construction Manager",
      "Engineer"
    ],
    "notes": "Extension to the Basil Flashman building including a new sports hall, multi-function space, staircase, landscaping, parking and associated works."
  },
  {
    "id": 135,
    "name": "The Brassworks - Refurbishment",
    "client": "OpenAI",
    "location": "The Brassworks, 32 York Way, Islington, London, N1 9AB",
    "postcode": "N1 9AB",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£3m",
    "rolesNeeded": 6,
    "contacts": [
      {
        "type": "org",
        "name": "OpenAI",
        "role": "Client & End User"
      },
      {
        "type": "org",
        "name": "Turley Associates",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "BW Workplace Experts",
        "role": "Preferred Bidder"
      }
    ],
    "opportunityScore": 70,
    "sector": "Commercial Office",
    "priority": "Priority 2",
    "mainContractor": "Commercial Office Refurbishment",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager"
    ],
    "notes": "Office refurbishment comprising replacement glazing, courtyard security improvements, fencing, gates, paving, CCTV installation and associated external works."
  },
  {
    "id": 136,
    "name": "Crystal Palace Football Club Redevelopment",
    "client": "Crystal Palace Football Club",
    "location": "Selhurst Park, Whitehorse Lane, Selhurst, London, SE25 6PU",
    "postcode": "SE25 6PU",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£150m",
    "rolesNeeded": 13,
    "contacts": [
      {
        "type": "org",
        "name": "Crystal Palace Football Club",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Lendlease",
        "role": "Preferred Bidder / Delivery Partner"
      },
      {
        "type": "org",
        "name": "KSS Group",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Mott MacDonald",
        "role": "Civil, Structural & Transport"
      },
      {
        "type": "org",
        "name": "Core Five",
        "role": "QS"
      },
      {
        "type": "org",
        "name": "ME Engineers",
        "role": "M&E"
      }
    ],
    "opportunityScore": 90,
    "sector": "Healthcare",
    "priority": "Priority 1",
    "mainContractor": "Stadium Redevelopment",
    "tags": [
      "Project Director",
      "Construction Director",
      "Project Manager",
      "Contracts Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Package Manager",
      "Construction Manager",
      "M&E Manager",
      "Engineering Manager"
    ],
    "notes": "Major redevelopment of Selhurst Park increasing stadium capacity from 34,000 with a new main stand, enhanced hospitality areas, improved accessibility facilities, football pitch expansion, community facilities and associated infrastructure works."
  },
  {
    "id": 137,
    "name": "The National Gallery - Project Domani, New Wing",
    "client": "The National Gallery",
    "location": "The National Gallery, Trafalgar Square, Westminster, London, WC2N 5DN",
    "postcode": "WC2N 5DN",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£375m",
    "rolesNeeded": 16,
    "contacts": [
      {
        "type": "org",
        "name": "The National Gallery",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "BDP",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "MICA Architects",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Kengo Kuma & Associates",
        "role": "Architect"
      }
    ],
    "opportunityScore": 90,
    "sector": "General Construction",
    "priority": "Priority 1",
    "mainContractor": "Cultural / Public Sector New Build",
    "tags": [
      "Project Director",
      "Construction Director",
      "Programme Director",
      "Project Manager",
      "Senior Project Manager",
      "Contracts Manager",
      "Commercial Director",
      "Commercial Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Senior Design Manager",
      "Construction Manager",
      "Package Manager",
      "Site Manager",
      "Engineering Manager",
      "M&E Manager"
    ],
    "notes": "New wing development forming part of Project Domani. Construction of a major new extension on the final remaining section of the National Gallery estate at St Vincent House. Long-term flagship cultural project within central London."
  },
  {
    "id": 138,
    "name": "The Sloane, Colebrook Court - 29 Flats & Retail Unit",
    "client": "The Chelsea Society",
    "location": "Colebrook Court, Sloane Avenue, Chelsea, London, SW3 3DJ",
    "postcode": "SW3 3DJ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£35m",
    "rolesNeeded": 11,
    "contacts": [
      {
        "type": "org",
        "name": "The Chelsea Society",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Newmark",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "Squire & Partners",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Evolve Consulting Engineers",
        "role": "Civil & Structural"
      },
      {
        "type": "org",
        "name": "Hoare Lea",
        "role": "M&E"
      },
      {
        "type": "org",
        "name": "Knight Frank",
        "role": "Surveyor"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Build-to-Rent Residential",
    "tags": [
      "Project Director",
      "Contracts Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Engineering Manager",
      "M&E Manager",
      "Construction Manager"
    ],
    "notes": "Construction of a 9-storey build-to-rent development comprising 29 apartments (15 one-bed, 8 two-bed, 6 three-bed) and ground floor retail unit following demolition works, with associated infrastructure and landscaping."
  },
  {
    "id": 139,
    "name": "New Barnsbury Estate - Phase 1A, 1B & 3A",
    "client": "Newlon Housing Trust",
    "location": "Barnsbury Estate, Islington, London, N1 0TY",
    "postcode": "N1 0TY",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£56.2m",
    "rolesNeeded": 14,
    "contacts": [
      {
        "type": "org",
        "name": "Newlon Housing Trust",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Mount Anvil Construction",
        "role": "Main Contractor"
      },
      {
        "type": "org",
        "name": "Pollard Thomas Edwards",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Stantec",
        "role": "Civil & Structural"
      },
      {
        "type": "org",
        "name": "Foreman Roberts",
        "role": "M&E"
      },
      {
        "type": "org",
        "name": "Farrer Huxley",
        "role": "Landscape"
      },
      {
        "type": "org",
        "name": "Statom Group",
        "role": "Demolition"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Residential Regeneration",
    "tags": [
      "Project Director",
      "Construction Director",
      "Contracts Manager",
      "Senior Project Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Engineering Manager",
      "M&E Manager",
      "Construction Manager",
      "Package Manager"
    ],
    "notes": "Major estate regeneration involving demolition, groundworks and construction of 711 residential units across multiple phases. Phases 1A and 1B will run concurrently, with Phase 3A extending into the next decade. Includes public realm, landscaping, highways and infrastructure works."
  },
  {
    "id": 140,
    "name": "1 St Martins Le Grand - Refurbishment",
    "client": "Ho Bee Land Limited",
    "location": "1 St Martins Le Grand, City of London, EC1A 4AS",
    "postcode": "EC1A 4AS",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "Ho Bee Land Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Avison Young",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "Orms Architects",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Savills",
        "role": "Project Manager"
      },
      {
        "type": "org",
        "name": "Quantem Consulting",
        "role": "QS"
      },
      {
        "type": "org",
        "name": "Elliott Wood Partnership",
        "role": "Structural & Civil"
      },
      {
        "type": "org",
        "name": "Hilson Moran",
        "role": "M&E"
      }
    ],
    "opportunityScore": 70,
    "sector": "Commercial Office",
    "priority": "Priority 2",
    "mainContractor": "Office Refurbishment & Commercial Redevelopment",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Building Services Manager",
      "M&E Manager",
      "Project Architect",
      "Construction Manager"
    ],
    "notes": "Refurbishment and redevelopment of existing building to provide upgraded office accommodation, commercial space, drinking establishment, landscaping, access improvements and associated demolition works."
  },
  {
    "id": 141,
    "name": "12 Berkeley Street - Refurbishment & Roof Works",
    "client": "Buckview Limited",
    "location": "12 Berkeley Street, Westminster, London, W1J 8DT",
    "postcode": "W1J 8DT",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£15m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "Buckview Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Newmark",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "DLA Architecture",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "Morgan Real Estate",
        "role": "Project Manager"
      },
      {
        "type": "org",
        "name": "Abakus Consulting",
        "role": "QS"
      },
      {
        "type": "org",
        "name": "Davies Maguire & Whitby",
        "role": "Structural Engineer"
      },
      {
        "type": "org",
        "name": "Troup Bywaters + Anders",
        "role": "M&E"
      }
    ],
    "opportunityScore": 90,
    "sector": "Retail",
    "priority": "Priority 1",
    "mainContractor": "Commercial Refurbishment & Extension",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Construction Manager",
      "M&E Manager",
      "Building Services Manager"
    ],
    "notes": "High-end refurbishment and extension project including replacement mansard roof, additional storey extension, terrace works, basement infill, shopfront upgrades and full internal reconfiguration."
  },
  {
    "id": 142,
    "name": "29-31 Hill Street - Internal & External Alterations",
    "client": "Berkeley Square Holdings Limited",
    "location": "29-31 Hill Street, Westminster, London, W1J 5LS",
    "postcode": "W1J 5LS",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q4 2026",
    "endDate": "",
    "value": "£20m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "org",
        "name": "Berkeley Square Holdings Limited",
        "role": "Client"
      },
      {
        "type": "org",
        "name": "Newmark",
        "role": "Planner"
      },
      {
        "type": "org",
        "name": "Ben Adams Architects",
        "role": "Architect"
      },
      {
        "type": "org",
        "name": "AECOM",
        "role": "QS"
      },
      {
        "type": "org",
        "name": "Webb Yates Engineers",
        "role": "Structural & Civil"
      },
      {
        "type": "org",
        "name": "Mecserve",
        "role": "M&E"
      },
      {
        "type": "org",
        "name": "Collins Construction",
        "role": "Bidder"
      },
      {
        "type": "org",
        "name": "KPH Group",
        "role": "Demolition Contractor"
      }
    ],
    "opportunityScore": 90,
    "sector": "General Construction",
    "priority": "Priority 1",
    "mainContractor": "High-End Commercial Refurbishment",
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Construction Manager",
      "M&E Manager",
      "Building Services Manager"
    ],
    "notes": "Comprehensive refurbishment and alteration project within a prime Mayfair location involving internal and external upgrades, engineering works and associated refurbishment packages."
  },
  {
    "id": 143,
    "name": "Ongar Road - 80 Flats & Lidl Shell Only",
    "client": "Lidl UK GmbH / Taylor Wimpey",
    "location": "Land At Wates Way, Ongar Road, Brentwood, Essex, CM15 9AZ",
    "postcode": "CM15 9AZ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "TBC (£Multi-Million)",
    "rolesNeeded": 12,
    "contacts": [
      {
        "type": "person",
        "name": "Laurent Plopeanu",
        "role": "Project Director",
        "email": "laurent.plopeanu@taylorwimpey.com",
        "phone": "01277 236800"
      },
      {
        "type": "person",
        "name": "James Kiddell",
        "role": "Quantity Surveyor",
        "email": "SalesTWEastLondon@taylorwimpey.com",
        "phone": "01277 236800"
      },
      {
        "type": "person",
        "name": "Matthew Aylen",
        "role": "Assistant Site Manager",
        "email": "SalesTWEastLondon@taylorwimpey.com",
        "phone": "07824 829770"
      },
      {
        "type": "person",
        "name": "Paul Dowsett",
        "role": "Commercial Director",
        "email": "paul@oconnellcontracting.com",
        "phone": "07885 049637"
      },
      {
        "type": "person",
        "name": "Laura Johnson",
        "role": "Contracts Manager",
        "email": "laura@demcom.co.uk",
        "phone": "07511 209060"
      },
      {
        "type": "person",
        "name": "Dan Meads",
        "role": "Managing Director",
        "email": "dan@demcom.co.uk",
        "phone": "07919 097379"
      },
      {
        "type": "person",
        "name": "Sandor Farkas",
        "role": "Senior Construction Consultant",
        "email": "sandor.farkas@lidl.co.uk",
        "phone": "07779 854329"
      }
    ],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": null,
    "tags": [
      "Project Director",
      "Contracts Manager",
      "Senior Site Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Buyer",
      "Design Manager",
      "Engineer",
      "Commercial Manager",
      "Groundworks Manager"
    ],
    "notes": ""
  },
  {
    "id": 144,
    "name": "Homes for NHS Staff – Finchley - 130 Flats",
    "client": "Howarth Homes Limited",
    "location": "Adj Finchley Memorial Hospital, Granville Road, North Finchley, London, N12 0JE",
    "postcode": "N12 0JE",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£13m",
    "rolesNeeded": 11,
    "contacts": [
      {
        "type": "person",
        "name": "Dave Willmore",
        "role": "Commercial Director",
        "email": "dave.willmore@howarthhomes.co.uk",
        "phone": "01895 454888"
      },
      {
        "type": "person",
        "name": "Dimitris Linardatos",
        "role": "Partner (Price & Myers)",
        "email": "dlinardatos@pricemyers.com",
        "phone": "020 7631 5128"
      },
      {
        "type": "person",
        "name": "Kirsty Burwood",
        "role": "Associate (Price & Myers)",
        "email": "kburwood@pricemyers.com",
        "phone": "020 7631 5128"
      },
      {
        "type": "person",
        "name": "Ritika Kothari",
        "role": "Assistant Engineer (Stantec)",
        "email": "ritika.kothari@stantec.com",
        "phone": "020 3824 6600"
      },
      {
        "type": "person",
        "name": "Kostas Mastronikolaou",
        "role": "Associate Director (XCO2)",
        "email": "kostasm@xco2energy.com",
        "phone": "020 7700 1000"
      },
      {
        "type": "person",
        "name": "Neil Swanson",
        "role": "Director (Landscape Projects)",
        "email": "neil@landscapeprojects.co.uk",
        "phone": "020 7608 2963"
      }
    ],
    "opportunityScore": 85,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": null,
    "tags": [
      "Commercial Director",
      "Contracts Manager",
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Buyer",
      "Design Manager",
      "Technical Coordinator",
      "Engineer"
    ],
    "notes": ""
  },
  {
    "id": 145,
    "name": "63-81 Pelham Street - Office Building",
    "client": "The Wellcome Trust Limited",
    "location": "63-81 Pelham Street, South Kensington, London, SW7 2NL",
    "postcode": "SW7 2NL",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£52m",
    "rolesNeeded": 12,
    "contacts": [
      {
        "type": "person",
        "name": "Damien Murray",
        "role": "Contracts Manager",
        "email": "damien.murray@mcaleer-rushe.co.uk",
        "phone": "07436 830775"
      },
      {
        "type": "person",
        "name": "Nicholas Elliot",
        "role": "Quantity Surveyor",
        "email": "info@mcaleer-rushe.co.uk",
        "phone": "028 8676 3741"
      },
      {
        "type": "person",
        "name": "Kali Hagenstede",
        "role": "Project Manager",
        "email": "kali.hagenstede@erith.com",
        "phone": "07884 588737"
      },
      {
        "type": "person",
        "name": "Katie Nicholson",
        "role": "Senior Architect",
        "email": "katienicholson@piercyandco.com",
        "phone": "020 7424 9611"
      },
      {
        "type": "person",
        "name": "Emma Hardy",
        "role": "Planner",
        "email": "emma.hardy@dp9.co.uk",
        "phone": "07513 704431"
      },
      {
        "type": "person",
        "name": "Scott Hedges",
        "role": "Mechanical Engineer",
        "email": "shedges@watkinspayne.co.uk",
        "phone": "07801 206466"
      }
    ],
    "opportunityScore": 95,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": null,
    "tags": [
      "Contracts Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Construction Manager",
      "Package Manager",
      "Engineer",
      "Planner"
    ],
    "notes": ""
  },
  {
    "id": 146,
    "name": "Boundary House - Hotel, Restaurant & Retail",
    "client": "RP Assets Limited",
    "location": "Boundary House, 7-17 Jewry Street, City of London, EC3N 2EX",
    "postcode": "EC3N 2EX",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£30.7m",
    "rolesNeeded": 10,
    "contacts": [
      {
        "type": "person",
        "name": "Mark Ryder",
        "role": "Partner (Hoare Lea)",
        "email": "markryder@hoarelea.com",
        "phone": "020 7890 2500"
      },
      {
        "type": "person",
        "name": "Tim Kenning",
        "role": "Associate (Elliott Wood Partnership)",
        "email": "t.kenning@elliottwood.co.uk",
        "phone": "020 8544 0033"
      }
    ],
    "opportunityScore": 75,
    "sector": "Hotel & Leisure",
    "priority": "Priority 2",
    "mainContractor": null,
    "tags": [
      "Project Manager",
      "Development Manager",
      "Design Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Site Manager",
      "Construction Manager",
      "Building Services Manager",
      "Planner",
      "Engineer"
    ],
    "notes": ""
  },
  {
    "id": 147,
    "name": "Clare House Stables - 35 Houses & 6 Bungalows",
    "client": "White Crown Stables Limited",
    "location": "E/O Clare House Stables, Stetchworth Road, Dullingham, Newmarket, Suffolk, CB8 9UJ",
    "postcode": "CB8 9UJ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£7.9m",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "person",
        "name": "Dennis Brocklesby",
        "role": "Director (Lynwood Associates)",
        "email": "dennis@lynwoodassociates.co.uk",
        "phone": "01638 661044"
      },
      {
        "type": "person",
        "name": "Jamie Crawley",
        "role": "Director (MTC Engineering)",
        "email": "jcrawley@mtcengineering.co.uk",
        "phone": "01223 837270"
      },
      {
        "type": "person",
        "name": "Kirsten Bowden",
        "role": "Director",
        "email": "kirsten.bowden@hotmail.co.uk",
        "phone": "07790 907241"
      },
      {
        "type": "person",
        "name": "Patrick Lanaway",
        "role": "Transport Consultant",
        "email": "planaway@slrconsulting.com",
        "phone": "07900 217849"
      }
    ],
    "opportunityScore": 65,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": null,
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Buyer",
      "Engineer",
      "Technical Coordinator"
    ],
    "notes": ""
  },
  {
    "id": 148,
    "name": "1 Runwell Road - 29 Apartments & Retail Unit",
    "client": "Renown Developments Limited",
    "location": "1 Runwell Road, Wickford, Essex, SS11 7BZ",
    "postcode": "SS11 7BZ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£2.2m",
    "rolesNeeded": 7,
    "contacts": [
      {
        "type": "person",
        "name": "Stephen Alderdice",
        "role": "Director",
        "email": "architect@stephenalderdice.com",
        "phone": "07980 853234"
      },
      {
        "type": "person",
        "name": "John Davies",
        "role": "Structural/Civil Engineer",
        "email": "",
        "phone": "07730 979592"
      }
    ],
    "opportunityScore": 45,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": null,
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Buyer",
      "Engineer"
    ],
    "notes": ""
  },
  {
    "id": 149,
    "name": "1 Appold Street - Offices & Restaurant",
    "client": "British Land / GIC / Herbert Smith Freehills",
    "location": "1 Appold Street, Broadgate, City of London, EC2M 2QT",
    "postcode": "EC2M 2QT",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£273m",
    "rolesNeeded": 16,
    "contacts": [
      {
        "type": "person",
        "name": "Tony Boorer",
        "role": "Project Director",
        "email": "tony.boorer@skanska.co.uk",
        "phone": "01923 776666"
      },
      {
        "type": "person",
        "name": "Kesh Gehananehan",
        "role": "Project Manager",
        "email": "kesh.gehananehan@skanska.co.uk",
        "phone": "01923 776666"
      },
      {
        "type": "person",
        "name": "Terry Muckian",
        "role": "Managing Director",
        "email": "terry.muckian@skanska.co.uk",
        "phone": "01923 776666"
      },
      {
        "type": "person",
        "name": "Hugo Slater",
        "role": "Quantity Surveyor",
        "email": "hugo.slater@corefive.co.uk",
        "phone": "020 3141 5555"
      },
      {
        "type": "person",
        "name": "David Rudd",
        "role": "Mechanical Engineer",
        "email": "drudd@hilsonmoran.com",
        "phone": "020 7940 8888"
      },
      {
        "type": "person",
        "name": "Charlotte Allen",
        "role": "Planner",
        "email": "charlotte.allen@dp9.co.uk",
        "phone": "07514 731838"
      },
      {
        "type": "person",
        "name": "Johnathan Lovejoy",
        "role": "Property Manager",
        "email": "info@britishland.com",
        "phone": "020 7486 4466"
      }
    ],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": null,
    "tags": [
      "Project Director",
      "Construction Director",
      "Senior Project Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Package Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Building Services Manager",
      "MEP Manager",
      "Planner",
      "Engineer",
      "Sustainability Manager"
    ],
    "notes": ""
  },
  {
    "id": 150,
    "name": "Cambridge Science Park, Milton - R&D & Office",
    "client": "Trinity College",
    "location": "Cambridge Science Park, 440 Milton Road, Cambridge, CB4 0QA",
    "postcode": "CB4 0QA",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£30m",
    "rolesNeeded": 13,
    "contacts": [
      {
        "type": "person",
        "name": "Jamie Trivedi",
        "role": "Bateman",
        "email": "jamie.trivedi-bateman@trin.cam.ac.uk",
        "phone": "01223 338400"
      },
      {
        "type": "person",
        "name": "Iain Ballantyne",
        "role": "Director",
        "email": "iain.ballantyne@CB3Consulting.co.uk",
        "phone": "07872 912666"
      },
      {
        "type": "person",
        "name": "Ben Richardson",
        "role": "Director",
        "email": "ben.richardson@burohappold.com",
        "phone": "020 7927 9700"
      },
      {
        "type": "person",
        "name": "Thomas Webster",
        "role": "Director",
        "email": "tom.webster@webbyates.co.uk",
        "phone": "07734 823463"
      },
      {
        "type": "person",
        "name": "Agata Lo Certo",
        "role": "Director",
        "email": "info@webbyates.co.uk",
        "phone": "020 3696 1550"
      },
      {
        "type": "person",
        "name": "Emma Woods",
        "role": "Planner",
        "email": "emma.woods@dp9.co.uk",
        "phone": "020 7004 1700"
      },
      {
        "type": "person",
        "name": "Maddie Wild",
        "role": "Planner",
        "email": "info@sphere25.co.uk",
        "phone": "07521 391374"
      }
    ],
    "opportunityScore": 85,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": null,
    "tags": [
      "Project Manager",
      "Design Manager",
      "Technical Manager",
      "Construction Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Building Services Manager",
      "MEP Manager",
      "Planner",
      "Engineer",
      "Sustainability Manager"
    ],
    "notes": ""
  },
  {
    "id": 151,
    "name": "1-66 & 79-132 Hamilton Close - External Refurbishment",
    "client": "London Borough of Haringey",
    "location": "1-66 & 79-132 Hamilton Close, Tottenham, London, N17 9EF",
    "postcode": "N17 9EF",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£3m",
    "rolesNeeded": 9,
    "contacts": [
      {
        "type": "person",
        "name": "Ben White",
        "role": "Quantity Surveyor",
        "email": "benwhite@chasberger.co.uk",
        "phone": "020 8357 3600"
      },
      {
        "type": "person",
        "name": "Charlie Baitup",
        "role": "Architect",
        "email": "charliebaitup@ridge.co.uk",
        "phone": "020 7593 3400"
      },
      {
        "type": "person",
        "name": "Keith Noble",
        "role": "Associate",
        "email": "knoble@ridge.co.uk",
        "phone": "020 7593 3400"
      }
    ],
    "opportunityScore": 65,
    "sector": "Commercial Office",
    "priority": "Priority 2",
    "mainContractor": null,
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Resident Liaison Officer",
      "Cladding Manager",
      "Facades Manager",
      "Window Installation Manager"
    ],
    "notes": ""
  },
  {
    "id": 152,
    "name": "The Interchange, Station Road - Offices & Educational Space",
    "client": "Canmoor Developments",
    "location": "The Interchange, 81-85 Station Road, Croydon, Surrey, CR0 2RD",
    "postcode": "CR0 2RD",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£34.1m (est)",
    "rolesNeeded": 12,
    "contacts": [
      {
        "type": "person",
        "name": "Matthew Doudican",
        "role": "Associate Director",
        "email": "mdoudican@velocity-tp.com",
        "phone": "020 3336 7310"
      },
      {
        "type": "person",
        "name": "Leona Hannify",
        "role": "Planner",
        "email": "lhannify@iceniprojects.com",
        "phone": "07972 894016"
      }
    ],
    "opportunityScore": 85,
    "sector": "Education",
    "priority": "Priority 1",
    "mainContractor": null,
    "tags": [
      "Project Director",
      "Contracts Manager",
      "Senior Project Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Design Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Building Services Manager",
      "Fit Out Manager"
    ],
    "notes": ""
  },
  {
    "id": 153,
    "name": "Cantay House - Drinking Establishments, Live Music Venue & Office",
    "client": "Landid Property Holdings Limited / Elwood Fund Management",
    "location": "Cantay House, 36-39 Park End Street, Oxford, Oxfordshire, OX1 1JD",
    "postcode": "OX1 1JD",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£3.9m (est)",
    "rolesNeeded": 8,
    "contacts": [
      {
        "type": "person",
        "name": "Darren Arekion",
        "role": "Managing Director",
        "email": "darren.arekion@kingerlee.co.uk",
        "phone": "01865 840000"
      },
      {
        "type": "person",
        "name": "Neville Jones",
        "role": "Site Manager",
        "email": "neville.jones@kingerlee.co.uk",
        "phone": "07793 671361"
      },
      {
        "type": "person",
        "name": "James Silver",
        "role": "Development Director",
        "email": "james@landid.co.uk",
        "phone": "020 7495 9100"
      },
      {
        "type": "person",
        "name": "James Smith",
        "role": "Senior Associate",
        "email": "",
        "phone": "01223 810532"
      }
    ],
    "opportunityScore": 70,
    "sector": "Hotel & Leisure",
    "priority": "Priority 2",
    "mainContractor": null,
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Fit Out Manager",
      "Building Services Manager",
      "Design Coordinator"
    ],
    "notes": ""
  },
  {
    "id": 154,
    "name": "Christs College Library - New Library & Alterations",
    "client": "Christ's College Cambridge",
    "location": "Christs College Library, St Andrews Street, Cambridge, Cambridgeshire, CB2 3BU",
    "postcode": "CB2 3BU",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£20m",
    "rolesNeeded": 11,
    "contacts": [
      {
        "type": "person",
        "name": "Ashley Brown",
        "role": "Buyer",
        "email": "abrown@barnesconstruction.co.uk",
        "phone": "01473 272222"
      },
      {
        "type": "person",
        "name": "Dan Tree",
        "role": "Senior Quantity Surveyor",
        "email": "dtree@barnesconstruction.co.uk",
        "phone": "01473 272222"
      },
      {
        "type": "person",
        "name": "Phil Browne",
        "role": "Contract Manager",
        "email": "pbrowne@barnesconstruction.co.uk",
        "phone": "01473 272222"
      },
      {
        "type": "person",
        "name": "Martin Spooner",
        "role": "Director of College Operations",
        "email": "martin.spooner@christs.cam.ac.uk",
        "phone": "01223 334900"
      },
      {
        "type": "person",
        "name": "Charlotte Bailey",
        "role": "01223 810990",
        "email": "charlotte.bailey@turley.co.uk",
        "phone": ""
      }
    ],
    "opportunityScore": 85,
    "sector": "Education",
    "priority": "Priority 1",
    "mainContractor": null,
    "tags": [
      "Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Planner",
      "Buyer",
      "Document Controller"
    ],
    "notes": ""
  },
  {
    "id": 155,
    "name": "Albert Embankment - Cultural Space, Student Accommodation & Cafe",
    "client": "Ocubis Limited / Urbanest",
    "location": "36-46 Albert Embankment, Southwark, London, SE1 7TL",
    "postcode": "SE1 7TL",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£60m",
    "rolesNeeded": 15,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "JRL Group",
    "tags": [
      "Project Director",
      "Contracts Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Construction Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "M&E Manager",
      "Planner",
      "Package Manager",
      "Facades Manager",
      "Commercial Manager"
    ],
    "notes": "Major £60m student accommodation and mixed-use development comprising 872 student beds across a 30-storey tower alongside refurbishment of Vintage House. Confirmed on site with JRL Group appointed as main contractor and Ark M&E already secured. 39-month programme creates strong ongoing recruitment opportunities across operational, commercial and technical disciplines."
  },
  {
    "id": 156,
    "name": "The Smith Centre, Fairmile - 115 Bed Extra Care Development",
    "client": "Elysian Residences / Senior Living Investment Partners Limited",
    "location": "The Smith Centre, Fairmile, Henley on Thames, Oxfordshire, RG9 6AB",
    "postcode": "RG9 6AB",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "Second Quarter 2026",
    "endDate": "",
    "value": "£47m",
    "rolesNeeded": 14,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Bennett Construction Limited",
    "tags": [
      "Project Director",
      "Contracts Manager",
      "Construction Manager",
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "M&E Manager",
      "Building Services Manager",
      "Planner",
      "Buyer"
    ],
    "notes": "£47m extra care and retirement living development comprising 115 apartments with gym, swimming pool, restaurant, bar, office space and extensive landscaping. Bennett Construction appointed as main contractor with Briggs & Forrester secured for M&E delivery. Large live project with strong demand for commercial, operational and technical construction professionals throughout the programme."
  },
  {
    "id": 157,
    "name": "Baynard Avenue - 72 Houses",
    "client": "Denbury Homes Limited",
    "location": "N/O Baynard Avenue, Baynard Avenue, Flitch Green, Dunmow, Essex, CM6 3FD",
    "postcode": "CM6 3FD",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£9.9m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Denbury Homes Limited",
    "tags": [
      "Commercial Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Site Manager",
      "Assistant Site Manager",
      "Contracts Manager",
      "Project Manager",
      "Buyer",
      "Technical Coordinator",
      "Design Coordinator",
      "Planner"
    ],
    "notes": "72-unit residential development being delivered directly by Denbury Homes under a developer-build model. Reserved matters approval currently being sought with a confirmed November 2026 start. Good opportunity to engage the commercial and operational team before mobilisation. Moderate-sized housing scheme likely to require additional site and commercial resource as delivery progresses."
  },
  {
    "id": 158,
    "name": "6 Mantle Road - Commercial & Residential Building",
    "client": "Hambridge Homes",
    "location": "6 Mantle Road, Brockley, London, SE4 2EX",
    "postcode": "SE4 2EX",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£12m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Greennow Limited",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Senior Technical Manager",
      "Design Manager",
      "Technical Coordinator",
      "Buyer",
      "Commercial Manager",
      "Mechanical Engineer",
      "Civil Engineer"
    ],
    "notes": "£12m mixed-use development comprising residential and commercial floorspace across a 6-storey building following demolition. Developer-build scheme with Hambridge Homes delivering through Greennow Limited. Confirmed August 2026 start with an 18-month programme. Strong opportunity to engage commercial, technical and operational staff ahead of mobilisation and throughout delivery."
  },
  {
    "id": 159,
    "name": "Unilever House - Refurbishment And Alterations",
    "client": "Sloane Blackfriars Limited",
    "location": "Unilever House, 100 Victoria Embankment, City, London, EC4Y 0DH",
    "postcode": "EC4Y 0DH",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£7m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Commercial Office",
    "priority": "Priority 2",
    "mainContractor": "Bowmer & Kirkland Limited (Bidder)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Mechanical & Electrical Manager",
      "Planner",
      "Commercial Manager",
      "Package Manager"
    ],
    "notes": "Refurbishment and alteration of the iconic Unilever House including façade modifications, roof terrace reconfiguration, plant upgrades, cycle facilities and office floorplate improvements. Design & build procurement with Bowmer & Kirkland currently involved as bidder. Strong opportunity to engage commercial and pre-construction teams before contractor appointment and mobilisation."
  },
  {
    "id": 160,
    "name": "Camberwell Leisure Centre - Decarbonisation Works",
    "client": "London Borough Of Southwark",
    "location": "Camberwell Leisure Centre, Artichoke Place, Camberwell Church Street, Southwark, London, SE5 8TS",
    "postcode": "SE5 8TS",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-10-27",
    "endDate": "",
    "value": "£3.2m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Hotel & Leisure",
    "priority": "Priority 2",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Mechanical Project Manager",
      "Electrical Project Manager",
      "Building Services Manager",
      "Sustainability Manager",
      "Energy Manager",
      "Quantity Surveyor",
      "M&E Quantity Surveyor",
      "Design Manager"
    ],
    "notes": "Public sector decarbonisation programme covering five Southwark leisure centres with a combined contract value exceeding £12m. Currently at pre-tender stage with market engagement completed. Strong opportunity for M&E, sustainability and energy-focused recruitment once the successful contractor is appointed."
  },
  {
    "id": 161,
    "name": "Garrett Street - Affordable Workspace Project",
    "client": "London Borough of Islington",
    "location": "Garrett Street, Islington, London, EC1Y 0TY",
    "postcode": "EC1Y 0TY",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£4.1m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "General Construction",
    "priority": "Priority 3",
    "mainContractor": "TBC",
    "tags": [
      "Workspace Manager",
      "Facilities Manager",
      "Operations Manager",
      "Commercial Manager",
      "Property Manager",
      "Asset Manager",
      "Leasing Manager"
    ],
    "notes": "Affordable workspace scheme seeking an operator to manage the facility under a 7-year lease agreement. This is primarily an operational and facilities-focused opportunity rather than a construction recruitment project. Limited construction recruitment potential as the scheme is currently focused on workspace management and operation."
  },
  {
    "id": 162,
    "name": "London Borough of Hillingdon - The Servicing and Repair of Passenger Lifts",
    "client": "London Borough of Hillingdon",
    "location": "Various Locations Throughout Uxbridge, Uxbridge, Middlesex, UB8",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£2.5m",
    "rolesNeeded": 9,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "General Construction",
    "priority": "Priority 3",
    "mainContractor": "TBC",
    "tags": [
      "Lift Engineer",
      "Lift Supervisor",
      "Lift Service Manager",
      "Contracts Manager",
      "Compliance Manager",
      "Maintenance Manager",
      "Operations Manager",
      "Asset Manager",
      "Facilities Manager"
    ],
    "notes": "Public sector maintenance contract covering servicing, repairs and LOLER inspections across more than 100 lift assets within Hillingdon Council's housing portfolio. Primarily a maintenance and compliance contract rather than a construction project. Recruitment opportunities are likely to be specialist lift engineering and facilities management focused."
  },
  {
    "id": 163,
    "name": "Harlow And Gilston - Gilston Park Estate",
    "client": "Harlow District Council / Epping Forest District Council / Grosvenor Limited / Places for People",
    "location": "Harlow & Gilston, Harlow, Essex, CM20 2RH",
    "postcode": "CM20 2RH",
    "status": "active",
    "stage": "Pre-Construction",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£1bn",
    "rolesNeeded": 18,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Barratt Redrow PLC (Delivery Partner)",
    "tags": [
      "Project Director",
      "Construction Director",
      "Contracts Manager",
      "Senior Contracts Manager",
      "Project Manager",
      "Senior Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Technical Manager",
      "Engineering Manager",
      "Planner",
      "Buyer",
      "Land Manager",
      "Development Manager"
    ],
    "notes": "One of the largest residential-led developments in the South East with up to 8,500 homes, retirement living, schools, commercial space, infrastructure and community facilities delivered over multiple phases. £1bn scheme with a build programme running into the 2030s. Exceptional recruitment opportunity across construction, commercial, technical, planning and development disciplines. This is the type of scheme capable of generating repeat placements for years."
  },
  {
    "id": 164,
    "name": "Windmill Road - 27 Houses & 4 Flats",
    "client": "SOHA Housing Limited",
    "location": "W/O Windmill Road, Thame, Oxfordshire, OX9 2DT",
    "postcode": "OX9 2DT",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£7.5m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "LIFE Build Solutions Limited",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Buyer",
      "Design Coordinator",
      "Technical Coordinator",
      "Civil Engineer"
    ],
    "notes": "31-unit residential development comprising 27 houses and 4 flats being delivered under a design and build contract. Project has experienced delays due to utility constraints but remains scheduled for an August 2026 start. Main contractor LIFE Build Solutions is already secured, creating an immediate route into the delivery team before mobilisation."
  },
  {
    "id": 165,
    "name": "Water Eaton - Mixed Use Development",
    "client": "TBC",
    "location": "OS Parcel 4347 E/o Pipal Cottage, Water Eaton, Oxford, Oxfordshire, OX1 1DP",
    "postcode": "OX1 1DP",
    "status": "active",
    "stage": "Pre-Construction",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£150m",
    "rolesNeeded": 18,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Bellway Homes Limited South Midlands",
    "tags": [
      "Project Director",
      "Construction Director",
      "Contracts Manager",
      "Senior Contracts Manager",
      "Project Manager",
      "Senior Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Technical Manager",
      "Engineering Manager",
      "Buyer",
      "Land Manager",
      "Development Manager",
      "Planner"
    ],
    "notes": "Major mixed-use development comprising up to 800 homes alongside a primary school, community centre, park and ride, cycle infrastructure, community facilities and public realm. Bellway has confirmed delivery of the residential element. Large multi-phase development expected to create long-term demand for commercial, operational, technical and planning professionals. Excellent opportunity for repeat placements over several years."
  },
  {
    "id": 166,
    "name": "823 Brighton Road - M&S Food Hall & Creative Centre",
    "client": "Grove Property",
    "location": "823 Brighton Road, Purley, Surrey, CR8 2BJ",
    "postcode": "CR8 2BJ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Fourth Quarter 2026",
    "endDate": "",
    "value": "£3.4m",
    "rolesNeeded": 9,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Industrial & Logistics",
    "priority": "Priority 3",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Structural Engineer",
      "Building Services Engineer",
      "Commercial Manager",
      "Contracts Manager"
    ],
    "notes": "Mixed-use development comprising M&S Food Hall, industrial space, creative studios and cultural enterprise space following partial demolition. Relatively small £3.4m scheme with no main contractor currently disclosed. Worth monitoring for contractor appointment but unlikely to generate significant recruitment volume compared to larger schemes."
  },
  {
    "id": 167,
    "name": "The River Club - Extension & Refurbishment",
    "client": "The River Club",
    "location": "The River Club, Old Malden Lane, Worcester Park, Surrey, KT4 7PX",
    "postcode": "KT4 7PX",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Hotel & Leisure",
    "priority": "Priority 3",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Building Services Manager",
      "Facilities Project Manager"
    ],
    "notes": "Leisure refurbishment and extension project including a new gymnasium, swimming pool extension, changing facilities, café, padel courts and community hall upgrades. Small £2m scheme with no contractor currently identified. Limited recruitment potential but worth monitoring for contractor appointment closer to mobilisation."
  },
  {
    "id": 168,
    "name": "326-330 High Holborn - Offices",
    "client": "High Holborn Limited",
    "location": "Holborn Gate, 326-330 High Holborn, Westminster, London, WC1V 6DR",
    "postcode": "WC1V 6DR",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£20m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Senior Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Commercial Manager",
      "Construction Manager",
      "Planner"
    ],
    "notes": "Major 34,410 sqm office-led development in Central London with a 31-month programme. Contractor not yet announced, creating an excellent opportunity to engage consultants and client-side teams ahead of main contractor appointment. Strong potential for management, commercial and technical recruitment once procurement progresses."
  },
  {
    "id": 169,
    "name": "Carnarvon Terrace - 28 Flats",
    "client": "Tendring District Council",
    "location": "High Street Car Park, Carnarvon Road, Clacton on Sea, Essex, CO15 6QF",
    "postcode": "CO15 6QF",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£15m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Commercial Manager",
      "Construction Manager",
      "Planner",
      "Buyer",
      "Document Controller"
    ],
    "notes": "Publicly funded residential and community development comprising 28 flats, community units and significant parking provision. Design & Build contract currently out to tender with award expected July 2026, making this an ideal opportunity to identify the successful contractor before mobilisation. Strong potential for commercial, operational and technical recruitment throughout delivery."
  },
  {
    "id": 170,
    "name": "Leigham Court Road - 92 Apartments",
    "client": "TBC",
    "location": "35-37 Leigham Court Road & West & R/O 39-49 Leigham Court Road, Streatham, London, SW16 2ND",
    "postcode": "SW16 2ND",
    "status": "active",
    "stage": "Tender",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£6.9m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "Legendre UK Limited (Bidder)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Commercial Manager",
      "Construction Manager",
      "Planner",
      "Building Services Manager"
    ],
    "notes": "92-unit residential development comprising three residential blocks with community and commercial space. Currently at tender stage with Legendre UK involved as a bidder. Long 32-month programme provides recruitment opportunities across commercial, operational and technical disciplines once contractor appointment is confirmed. Better opportunity if Legendre secure the project."
  },
  {
    "id": 171,
    "name": "Timber Square, Phase 2 - Mixed Development",
    "client": "LS Timber Square Developer Limited",
    "location": "Timber Square (Phase 2), 63 Ewer Street, Southwark, London, SE1 0NR",
    "postcode": "SE1 0NR",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£103.8m",
    "rolesNeeded": 15,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": "TBC",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Project Manager",
      "Construction Manager",
      "Contracts Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Building Services Manager",
      "Planner",
      "Package Manager",
      "Document Controller"
    ],
    "notes": "Major £103.8m mixed-use regeneration scheme comprising office, retail, gymnasium, restaurant, cultural space, live music venue, nightclub, cinema, theatre and leisure facilities across 51,895 sqm. Large-scale refurbishment and remodelling project with a 24-month programme. Main contractor has not yet been announced, making this an excellent opportunity to engage key consultants and client-side stakeholders ahead of procurement. Strong recruitment potential across commercial, operational, design and management functions."
  },
  {
    "id": 172,
    "name": "13-31 Dunstable Road - 291 Flats",
    "client": "Comer Homes",
    "location": "13-31 Dunstable Road, Luton, Bedfordshire, LU1 1BG",
    "postcode": "LU1 1BG",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "TBC",
    "rolesNeeded": 13,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Comer Homes",
    "tags": [
      "Project Director",
      "Construction Director",
      "Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Building Services Manager",
      "Planner",
      "Buyer"
    ],
    "notes": "291-unit residential scheme across two 21-storey buildings with podium and rooftop gardens, landscaping and infrastructure works. Developer-led project with Comer Homes acting as both client and contractor, creating direct recruitment access. Large-scale residential development with a 32-month programme and strong demand for commercial, operational and technical staff throughout delivery."
  },
  {
    "id": 173,
    "name": "George Street - 145 Bedroom Aparthotel & Community Use",
    "client": "Marick Real Estate / Makespace Oxford / Staycity Group",
    "location": "Oxfords City Centre, Between George Street & Gloucester Green, Oxford, OX1 2BT",
    "postcode": "OX1 2BT",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£48.8m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": "TBC (Contractor Expected June/July 2026)",
    "tags": [
      "Project Manager",
      "Senior Project Manager",
      "Contracts Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Commercial Manager",
      "Construction Manager",
      "Planner",
      "Document Controller"
    ],
    "notes": "£48.8m city-centre aparthotel development comprising 145 aparthotel beds, community space, public realm improvements and demolition works. Main contractor expected to be appointed around June/July 2026 making this an ideal pre-construction recruitment target. Strong opportunity to engage both client-side and contractor-side teams before mobilisation."
  },
  {
    "id": 174,
    "name": "Garrett Street - Affordable Workspace Project",
    "client": "London Borough of Islington",
    "location": "Central London",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£4.1m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "General Construction",
    "priority": "Priority 2",
    "mainContractor": "Workspace Operator TBC",
    "tags": [
      "Project Manager",
      "Operations Manager",
      "Workspace Manager",
      "Facilities Manager",
      "Commercial Manager",
      "Property Manager",
      "Business Development Manager"
    ],
    "notes": "Appointment of an operator to manage a new affordable workspace facility under a 7-year lease agreement. Includes management, occupation strategy, tenant acquisition and operational delivery."
  },
  {
    "id": 175,
    "name": "Camberwell Leisure Centre - Decarbonisation Works",
    "client": "London Borough Of Southwark",
    "location": "South London",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£12.1m Framework Value",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": "Main Contractor TBC",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "Mechanical Project Manager",
      "Electrical Project Manager",
      "Site Manager",
      "Design Manager",
      "Building Services Manager",
      "M&E Quantity Surveyor",
      "Sustainability Manager",
      "Commissioning Manager"
    ],
    "notes": "Decarbonisation works across five Southwark leisure centres including energy efficiency upgrades, plant replacement, low-carbon heating systems, electrical upgrades and associated refurbishment works."
  },
  {
    "id": 176,
    "name": "Unilever House - Refurbishment And Alterations",
    "client": "Sloane Blackfriars Limited",
    "location": "City of London",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£7m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Main Contractor TBC (Bowmer & Kirkland Bidder)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Building Services Manager",
      "Technical Services Manager",
      "Project Engineer"
    ],
    "notes": "Refurbishment and alterations to Unilever House including office floorplate reconfiguration, façade works, roof terrace alterations, MEP upgrades, cycle facilities and CAT A office refurbishment works."
  },
  {
    "id": 177,
    "name": "6 Mantle Road - Commercial & Residential Building",
    "client": "Hambridge Homes / Greennow Limited",
    "location": "Brockley, South East London",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£12m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Greennow Limited (Developer Builder)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Technical Coordinator",
      "Buyer",
      "Estimator"
    ],
    "notes": "Construction of a new 6-storey mixed-use development comprising residential and commercial floorspace with associated landscaping, access roads, parking and demolition of the existing building."
  },
  {
    "id": 178,
    "name": "Baynard Avenue - 72 Houses",
    "client": "Denbury Homes Limited",
    "location": "Flitch Green, Great Dunmow, Essex",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£9.9m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Denbury Homes Limited (Developer Builder)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Commercial Manager",
      "Technical Coordinator",
      "Design Manager",
      "Buyer",
      "Estimator"
    ],
    "notes": "Development of 72 houses comprising 1, 2, 3 and 4-bedroom homes with associated infrastructure, roads, drainage, landscaping, parking and external works. Denbury Homes are delivering the scheme directly as developer and contractor."
  },
  {
    "id": 179,
    "name": "The Smith Centre, Fairmile - 115 Bed Extra Care Development",
    "client": "Elysian Residences / Senior Living Investment Partners",
    "location": "Fairmile, Henley-on-Thames, Oxfordshire",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q2 2026 - Q4 2027",
    "endDate": "",
    "value": "£47m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": "Bennett Construction Limited",
    "tags": [
      "Project Manager",
      "Senior Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Construction Manager",
      "Design Manager",
      "Building Services Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Commercial Manager",
      "M&E Project Manager"
    ],
    "notes": "Construction of a 115-unit luxury retirement and extra care development including swimming pool, gym, restaurant, bar, office space, extensive landscaping and associated infrastructure following demolition works."
  },
  {
    "id": 180,
    "name": "Albert Embankment - Cultural Space, Student Accommodation & Cafe",
    "client": "Ocubis Limited / Urbanest",
    "location": "Albert Embankment, London, SE1 7TL",
    "postcode": "SE1 7TL",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£60m",
    "rolesNeeded": 13,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Main Contractor Not Listed (Enabling Works Underway)",
    "tags": [
      "Project Director",
      "Construction Director",
      "Project Manager",
      "Senior Project Manager",
      "Construction Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Design Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Building Services Manager",
      "Commercial Manager"
    ],
    "notes": "Refurbishment of Vintage House alongside construction of a 30-storey student accommodation development providing 872 student beds with office space, cultural space, landscaping and associated infrastructure works. Major Central London scheme with a 39-month programme."
  },
  {
    "id": 181,
    "name": "St Catharines College, Hobson Building - Refurbishment & Rooftop Plant",
    "client": "St Catharines College Cambridge",
    "location": "Trumpington Street, Cambridge, Cambridgeshire, CB2 1RL",
    "postcode": "CB2 1RL",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£3m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Education",
    "priority": "Priority 2",
    "mainContractor": "Contractor Not Yet Awarded (8 Build / Barnes Construction Bidding)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Building Services Manager",
      "Mechanical Project Manager",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager"
    ],
    "notes": "Refurbishment of the Hobson Building including installation of rooftop mechanical plant, structural alterations and associated refurbishment works within St Catharine's College Cambridge."
  },
  {
    "id": 182,
    "name": "Southend-on-Sea City Council - Intelligent Transport Systems",
    "client": "Southend-on-Sea City Council",
    "location": "Various Locations Throughout Southend-on-Sea, Essex",
    "postcode": "",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£3.6m",
    "rolesNeeded": 9,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Infrastructure & Civil",
    "priority": "Priority 2",
    "mainContractor": "Contractor Not Yet Awarded (Tender Live)",
    "tags": [
      "Project Manager",
      "Contracts Manager",
      "ITS Engineer",
      "Traffic Signal Engineer",
      "Electrical Project Manager",
      "Electrical Site Manager",
      "Commissioning Engineer",
      "Maintenance Manager",
      "Operations Manager"
    ],
    "notes": "Framework covering supply, installation and maintenance of Intelligent Transport Systems including traffic signals, VMS signs, RGB signs, car park guidance systems, vehicle activated signs and associated highway technology infrastructure across Southend."
  },
  {
    "id": 183,
    "name": "Bath Road - Landscaping",
    "client": "Skyport Enterprise UK Limited",
    "location": "1-1A Bath Road, Heathrow, Hounslow, Middlesex, TW6 2AA",
    "postcode": "TW6 2AA",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£2.5m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "General Construction",
    "priority": "Priority 2",
    "mainContractor": "Not Yet Appointed",
    "tags": [
      "Landscape Contracts Manager",
      "Landscape Project Manager",
      "Site Manager",
      "Landscaping Supervisor",
      "Quantity Surveyor",
      "Estimator",
      "Commercial Manager",
      "Operations Manager"
    ],
    "notes": "Landscaping package associated with a major Heathrow-area development. Works include external landscaping, hard and soft landscaping, public realm improvements, parking areas and associated external works."
  },
  {
    "id": 184,
    "name": "Cannon Bridge House - Refurbishment",
    "client": "Cannon Bridge Properties Limited / Feldberg Capital",
    "location": "Cannon Bridge House, City, London, EC4R 2YA",
    "postcode": "EC4R 2YA",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£50m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Wates Group (Preferred Bidder)",
    "tags": [
      "Project Director",
      "Construction Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Commercial Manager",
      "SHEQ Manager"
    ],
    "notes": "Full refurbishment of a major City of London office building including demolition, structural alterations and complete M&E replacement. Enabling works due August 2026 with main construction commencing November 2026."
  },
  {
    "id": 185,
    "name": "Christs College Library - New Library & Alterations",
    "client": "Christ's College Cambridge",
    "location": "Christ's College Library, St Andrews Street, Cambridge, Cambridgeshire, CB2 3BU",
    "postcode": "CB2 3BU",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£20m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Education",
    "priority": "Priority 1",
    "mainContractor": "Barnes Construction Limited",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Design Manager",
      "Construction Manager",
      "Building Services Manager",
      "Commercial Manager",
      "Buyer"
    ],
    "notes": "Demolition of existing library and construction of a new library facility including bridge re-provision, internal alterations, landscaping and temporary college facilities. High-profile Cambridge education project with contractor now appointed."
  },
  {
    "id": 186,
    "name": "Cantay House - Drinking Establishments, Live Music Venue & Office",
    "client": "Landid Property Holdings Limited / Elwood Fund Management",
    "location": "Cantay House, 36-39 Park End Street, Oxford, Oxfordshire, OX1 1JD",
    "postcode": "OX1 1JD",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£3.9m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Commercial Office",
    "priority": "Priority 2",
    "mainContractor": "Kingerlee Limited",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Commercial Manager"
    ],
    "notes": "Refurbishment and conversion of existing building into a live music venue, drinking establishment, office accommodation and associated external works following partial demolition. BREEAM Excellent targeted scheme in Oxford city centre."
  },
  {
    "id": 187,
    "name": "The Interchange, Station Road - Offices & Educational Space",
    "client": "Canmoor Developments",
    "location": "The Interchange, 81-85 Station Road, Croydon, Surrey, CR0 2RD",
    "postcode": "CR0 2RD",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£34.1m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Education",
    "priority": "Priority 1",
    "mainContractor": "TBC",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Construction Manager",
      "Commercial Manager"
    ],
    "notes": "Conversion of existing building to create educational space and office accommodation across 22,705sqm. Large-scale £34.1m commercial and education-led redevelopment with a 22-month programme. Strong opportunity for operational, commercial and technical recruitment once the main contractor is appointed."
  },
  {
    "id": 188,
    "name": "Station Road Car Park - Office Block",
    "client": "South Oxfordshire & Vale of White Horse District Council",
    "location": "Station Road Car Park, Station Road, Didcot, Oxfordshire, OX11 7NN",
    "postcode": "OX11 7NN",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-07-01",
    "endDate": "",
    "value": "£7.9m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Commercial Office",
    "priority": "Priority 2",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Construction Manager"
    ],
    "notes": "New-build office development comprising open-plan office space, meeting rooms, reception area, kitchen facilities, landscaping, access works and parking. Public sector-backed commercial office scheme with a 13-month construction programme."
  },
  {
    "id": 189,
    "name": "Beaumont School - Rebuilding Programme Wave 3",
    "client": "Department For Education",
    "location": "Beaumont School, Austen Way, St Albans, Hertfordshire, AL4 0XB",
    "postcode": "AL4 0XB",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£5m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Education",
    "priority": "Priority 2",
    "mainContractor": "Willmott Dixon Construction Limited (Preferred Bidder)",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Senior Design Manager",
      "Building Services Manager"
    ],
    "notes": "New two-storey teaching block, meter room building and associated landscaping following demolition of an existing school building. Department for Education funded project delivered through the Rebuilding Programme Wave 3 framework."
  },
  {
    "id": 190,
    "name": "University Of Hertfordshire - School of Health & Social Work",
    "client": "University of Hertfordshire",
    "location": "University Of Hertfordshire, College Lane, Hatfield, Hertfordshire, AL10 9AB",
    "postcode": "AL10 9AB",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£28.6m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Education",
    "priority": "Priority 1",
    "mainContractor": "TBC",
    "tags": [
      "Project Director",
      "Project Manager",
      "Senior Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Construction Manager",
      "Planner"
    ],
    "notes": "New university building with associated landscaping and infrastructure works following demolition of existing buildings. Major higher education scheme valued at £28.6m with a 29-month programme. Strong opportunity for operational, commercial and technical recruitment once the main contractor is appointed."
  },
  {
    "id": 191,
    "name": "RAF Wyton - 56 Living Accommodation",
    "client": "Defence Infrastructure Organisation",
    "location": "Se/O Technical Library & Conference Centre, Pathfinder Way, Wyton, Huntingdon, Cambridgeshire, PE28 2EA",
    "postcode": "PE28 2EA",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£2.8m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Building Services Manager",
      "Defence Project Manager"
    ],
    "notes": "New build 56-bed single living accommodation block at RAF Wyton. Small Ministry of Defence accommodation scheme delivered through the Defence Infrastructure Organisation. Two-storey residential-style development with a 14-month programme."
  },
  {
    "id": 192,
    "name": "Kew Bridge Steam Museum - Great Engine House Refurbishment",
    "client": "Kew Bridge Steam Museum",
    "location": "Kew Bridge Steam Museum, Green Dragon Lane, Brentford, Middlesex, TW8 0EN",
    "postcode": "TW8 0EN",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£2m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Infrastructure & Civil",
    "priority": "Priority 3",
    "mainContractor": "TBC",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Heritage Project Manager",
      "Building Surveyor"
    ],
    "notes": "Heritage refurbishment project involving roof replacement, structural underpinning, window overhaul, drainage works, leadwork, render repairs and internal/external redecoration to the Great Engine House. Small specialist refurbishment scheme with a short construction programme."
  },
  {
    "id": 193,
    "name": "Hollingsworth House - 24 Studios And 4 Flats",
    "client": "Devonshire Investment Corporation Limited",
    "location": "Hollingsworth House, 177-185 Lewisham High Street, Lewisham, London, SE13 6AA",
    "postcode": "SE13 6AA",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£2.5m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager"
    ],
    "notes": "Conversion of existing building into 24 one-bed studios and 4 one-bed flats. Small residential conversion scheme in Lewisham with prior approval granted. Site is being marketed for sale which creates uncertainty around delivery and contractor appointment."
  },
  {
    "id": 194,
    "name": "Hopkinson House - Emergency Accommodation",
    "client": "Westminster City Council",
    "location": "Hopkinson House, 88 Vauxhall Bridge Road, Westminster, London, SW1V 2RW",
    "postcode": "SW1V 2RW",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-27",
    "endDate": "",
    "value": "£16.8m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Assistant Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Commercial Manager",
      "Building Services Manager",
      "Fit-Out Manager"
    ],
    "notes": "Fit-out and conversion of Hopkinson House to provide 31 temporary accommodation units. Public sector project in Central London with a long delivery programme extending to 2029. Strong fit-out and refurbishment opportunity with likely demand for project management, commercial and building services professionals."
  },
  {
    "id": 195,
    "name": "96-102 Broadway - 268 Bed Apart Hotel",
    "client": "Luxgrove Capital Partners",
    "location": "96-102 Broadway, West Ealing, London, W13 0SY",
    "postcode": "W13 0SY",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£90m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Healthcare",
    "priority": "Priority 1",
    "mainContractor": "TBC",
    "tags": [
      "Project Director",
      "Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Commercial Manager",
      "Construction Manager",
      "Building Services Manager",
      "Planner"
    ],
    "notes": "268-bed apart-hotel development with ground floor offices and café accommodation. Large-scale £90m hospitality-led scheme in West London with planning secured and construction expected to commence in late 2026. Main contractor not yet appointed, creating an opportunity to identify the successful contractor before mobilisation."
  },
  {
    "id": 196,
    "name": "Urban Edge, West Road - Industrial Distribution Unit",
    "client": "Goya Developments / HE5 Crewe UK GP Limited",
    "location": "37-39 West Road, Tottenham, London, N17 0QT",
    "postcode": "N17 0QT",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£8m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Faircloth Construction Limited",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Construction Manager",
      "Building Services Manager",
      "Commercial Manager",
      "Logistics Manager"
    ],
    "notes": "New industrial, storage and distribution facility with ancillary office space, service yard, parking and landscaping following demolition. 12-month industrial build in North London with main contractor already secured."
  },
  {
    "id": 197,
    "name": "Brentwood School - Hough Sports Building",
    "client": "Brentwood School",
    "location": "Hough Building, Brentwood School, Ingrave Road, Brentwood, Essex, CM15 8AS",
    "postcode": "CM15 8AS",
    "status": "active",
    "stage": "Mobilising",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£10.2m",
    "rolesNeeded": 11,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Education",
    "priority": "Priority 1",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Senior Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "M&E Manager",
      "Civil Engineer",
      "Structural Engineer"
    ],
    "notes": "New multi-purpose sports building with associated landscaping following demolition of the existing facility. Independent school development with a 25-month programme and significant consultant team already appointed."
  },
  {
    "id": 198,
    "name": "Magistrates Court, Queens Road - Extension",
    "client": "Romulus Wimbledon Limited",
    "location": "Magistrates Court, Queens Road, Wimbledon, London, SW19 8PF",
    "postcode": "SW19 8PF",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£2m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "General Construction",
    "priority": "Priority 3",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Landscape Manager"
    ],
    "notes": "Public realm improvement and extension project involving paving, planting, lighting, cycle stands, seating, façade"
  },
  {
    "id": 199,
    "name": "Stratford High Street - 355 Flats, Cafe & Music Venue",
    "client": "Pickstock Development Limited",
    "location": "68-70 Stratford High Street, Stratford, London, E15 2PY",
    "postcode": "E15 2PY",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q4 2026",
    "endDate": "",
    "value": "£27.2m",
    "rolesNeeded": 15,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "TBC (Ardmore Group Bidder)",
    "tags": [
      "Project Manager",
      "Senior Project Manager",
      "Contracts Manager",
      "Construction Manager",
      "Senior Site Manager",
      "Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Commercial Manager",
      "Design Manager",
      "Technical Manager",
      "Building Services Manager",
      "M&E Manager",
      "Planner",
      "Document Controller"
    ],
    "notes": "Build-to-rent development comprising 355 apartments across two residential towers up to 27 storeys, together with a café, music venue, public realm improvements, landscaping and associated infrastructure works. 25% affordable housing provision included."
  },
  {
    "id": 200,
    "name": "Chelmsford Road - 51 Houses & 91 Flats",
    "client": "Countryside Properties (UK) Limited",
    "location": "Chelmsford Road, Mountnessing, Brentwood, Essex, CM15 8SD",
    "postcode": "CM15 8SD",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Q4 2026",
    "endDate": "",
    "value": "£17m",
    "rolesNeeded": 13,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Countryside Properties (UK) Limited",
    "tags": [
      "Project Manager",
      "Senior Site Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Commercial Manager",
      "Technical Manager",
      "Design Manager",
      "Engineer",
      "Land Manager",
      "Buyer",
      "Planner"
    ],
    "notes": "Residential development comprising 142 units including 51 houses and 91 flats with associated infrastructure, landscaping, parking and access works. Developer-led scheme being delivered directly by Countryside Properties."
  },
  {
    "id": 201,
    "name": "60 Queen Victoria Street - Extension & Refurbishment",
    "client": "BREO Hundred Limited",
    "location": "60 Queen Victoria Street, City, London, EC4N 4TR",
    "postcode": "EC4N 4TR",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£70m",
    "rolesNeeded": 18,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Mace Limited",
    "tags": [
      "Project Director",
      "Senior Project Manager",
      "Project Manager",
      "Contracts Manager",
      "Construction Manager",
      "Senior Site Manager",
      "Site Manager",
      "Commercial Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "M&E Manager",
      "Sustainability Manager",
      "Planner",
      "Package Manager",
      "Procurement Manager",
      "Document Controller"
    ],
    "notes": "£70m City of London office refurbishment, extension and Cat A fit-out project involving full replacement of MEP infrastructure, basement redevelopment, reception refurbishment, café space, meeting rooms and extensive office fit-out works across an 11-storey commercial building."
  },
  {
    "id": 202,
    "name": "West One Shopping Centre - Office Redevelopment",
    "client": "WOSC 1 Nominee Limited / British Land Corporation Plc",
    "location": "West One Shopping Centre, 75 Davies Street, Oxford Street, Westminster, London, W1C 2JS",
    "postcode": "W1C 2JS",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£99m",
    "rolesNeeded": 17,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "McLaren Construction Limited",
    "tags": [
      "Project Director",
      "Senior Project Manager",
      "Project Manager",
      "Contracts Manager",
      "Construction Manager",
      "Senior Site Manager",
      "Site Manager",
      "Commercial Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "M&E Manager",
      "Planner",
      "Package Manager",
      "Procurement Manager",
      "Document Controller"
    ],
    "notes": "Major West End office redevelopment involving demolition, structural alterations and refurbishment to create high-specification office space. Project targeting NABERS 5-Star, BREEAM Excellent, EPC A and WELL Enabled accreditation."
  },
  {
    "id": 203,
    "name": "Scott House - Student Accommodation And Office",
    "client": "YourTRIBE",
    "location": "Scott House, 185 Grove Street, Deptford, London, SE8 3SH",
    "postcode": "SE8 3SH",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£44.7m",
    "rolesNeeded": 14,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "TBC",
    "tags": [
      "Project Manager",
      "Senior Project Manager",
      "Contracts Manager",
      "Construction Manager",
      "Site Manager",
      "Senior Site Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Commercial Manager",
      "Building Services Manager",
      "M&E Manager",
      "Planner",
      "Document Controller"
    ],
    "notes": "27-storey student accommodation and office development delivering 137 student beds alongside commercial office space, landscaping, public realm improvements and access works. Large-scale mixed-use scheme in Deptford with extensive enabling works already underway."
  },
  {
    "id": 204,
    "name": "Fitzjohns Avenue - 35 Flats",
    "client": "39 Fitzjohns Avenue Limited",
    "location": "39 Fitzjohns Avenue, Hampstead, London, NW3 5JY",
    "postcode": "NW3 5JY",
    "status": "active",
    "stage": "Tender",
    "startDate": "Q3 2026",
    "endDate": "",
    "value": "£4m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "TBC (Tender Stage)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Structural Engineer",
      "Commercial Manager"
    ],
    "notes": "Conversion and extension project delivering 35 residential apartments comprising 11 one-bed, 20 two-bed and 4 three-bed units in Hampstead. Private residential development with tendering contractors already identified."
  },
  {
    "id": 205,
    "name": "Shelter and Small Hut Building, Kings Promenade - Mixed Developments",
    "client": "Tendring District Council",
    "location": "Former Public Convenience/ Beach Patrol Unit, Shelter And Small Hut Building, Kings Promenade, Clacton on Sea, Essex, CO15 5AF",
    "postcode": "CO15 5AF",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-10-01",
    "endDate": "",
    "value": "£5.4m",
    "rolesNeeded": 8,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Infrastructure & Civil",
    "priority": "Priority 2",
    "mainContractor": "TBC",
    "tags": [
      "Site Manager",
      "Project Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Civil Engineer",
      "Structural Engineer",
      "Design Manager"
    ],
    "notes": "Change of use and refurbishment scheme involving mixed-use developments, hard landscaping, lighting works, external seating areas, balustrading, shutters, cycle parking and associated infrastructure works across three structures on Clacton seafront."
  },
  {
    "id": 206,
    "name": "Premier Park Data Centre",
    "client": "Segro Plc / Pure Data Centres Group Limited",
    "location": "Unit F, 6 Premier Park Road, Willesden, London, NW10 7NZ",
    "postcode": "NW10 7NZ",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£1bn",
    "rolesNeeded": 20,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Commercial Office",
    "priority": "Priority 1",
    "mainContractor": "Glencar Construction Limited (Preferred Bidder)",
    "tags": [
      "Project Director",
      "Senior Project Manager",
      "Project Manager",
      "Contracts Manager",
      "Construction Manager",
      "Senior Site Manager",
      "Site Manager",
      "Commercial Director",
      "Commercial Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "M&E Manager",
      "Electrical Project Manager",
      "Mechanical Project Manager",
      "Design Manager",
      "Planning Manager",
      "Commissioning Manager",
      "Package Manager",
      "Procurement Manager",
      "Document Controller"
    ],
    "notes": "£1bn hyperscale data centre development comprising a three-storey data centre, support offices, substations, cooling infrastructure, power systems, landscaping and upgraded access works. Targeting BREEAM Excellent and EPC A rating."
  },
  {
    "id": 207,
    "name": "216 Oxford Street - Alterations And Refurbishment",
    "client": "Ingka",
    "location": "216 Oxford Street, Westminster, London, W1C 1DA",
    "postcode": "W1C 1DA",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Second Quarter 2026",
    "endDate": "",
    "value": "£7.5m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "General Construction",
    "priority": "Priority 2",
    "mainContractor": "Overbury",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Senior Site Manager",
      "Contracts Manager",
      "Quantity Surveyor",
      "Senior Quantity Surveyor",
      "Design Manager",
      "Building Services Manager",
      "Commercial Manager",
      "Package Manager"
    ],
    "notes": "Major refurbishment and external envelope works to a landmark Oxford Street building including basement works, roof alterations, cladding replacement, internal refurbishment and associated upgrades."
  },
  {
    "id": 208,
    "name": "Balham High Road - 7 Houses",
    "client": "Indigo Scott",
    "location": "222 Balham High Road, Balham, London, SW12 9BS",
    "postcode": "SW12 9BS",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-12-01",
    "endDate": "",
    "value": "£3.5m",
    "rolesNeeded": 3,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "TBC (Contractor Not Yet Appointed)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Quantity Surveyor"
    ],
    "notes": "Development of 7 luxury five-bedroom houses with associated landscaping and boundary treatments following demolition. Small private residential scheme in South West London."
  },
  {
    "id": 209,
    "name": "Flint Street - 36 Flats",
    "client": "Corona Investments Limited",
    "location": "Formally The New Venue, Flint Street, West Thurrock, Grays, Essex, RM20 3HA",
    "postcode": "RM20 3HA",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£3.6m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "TBC (Contractor Not Yet Appointed)",
    "tags": [
      "Site Manager",
      "Assistant Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor"
    ],
    "notes": "36-flat residential development comprising 6 one-bedroom and 30 two-bedroom apartments with associated access and landscaping works. Small private residential scheme with a 14-month programme."
  },
  {
    "id": 210,
    "name": "David Henry Waring Court - 31 Apartments",
    "client": "Charity of Elizabeth Jane Jones",
    "location": "David Henry Waring Court, Staines Road, Feltham, Middlesex, TW14 8PE",
    "postcode": "TW14 8PE",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "Fourth Quarter 2026",
    "endDate": "",
    "value": "£2.4m",
    "rolesNeeded": 5,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "Residential",
    "priority": "Priority 3",
    "mainContractor": "TBC (Contractor Not Yet Appointed)",
    "tags": [
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Project Manager"
    ],
    "notes": "31 apartment residential development with associated landscaping, amenity space, access improvements and parking. Small-scale residential scheme with a 14-month programme."
  },
  {
    "id": 211,
    "name": "Xchange Point - Cladding Works",
    "client": "AS Ramsay Building Contractors Limited",
    "location": "Xchange Point, 22 Market Road, Holloway, London, N7 9GS",
    "postcode": "N7 9GS",
    "status": "active",
    "stage": "On Site",
    "startDate": "2026-06-01",
    "endDate": "",
    "value": "£4m",
    "rolesNeeded": 6,
    "contacts": [],
    "opportunityScore": 50,
    "sector": "General Construction",
    "priority": "Priority 3",
    "mainContractor": "AS Ramsay Building Contractors Limited",
    "tags": [
      "Contracts Manager",
      "Site Manager",
      "Project Manager",
      "Quantity Surveyor",
      "Commercial Manager",
      "Cladding Manager"
    ],
    "notes": "Cladding remediation works to an existing building. Project currently on site with AS Ramsay having signed the PCSA and expected to formally secure the main contract. 24-month programme focused on façade and cladding packages."
  },
  {
    "id": 212,
    "name": "Carnarvon Terrace - 28 Flats",
    "client": "Tendring District Council",
    "location": "High Street Car Park, Carnarvon Road, Clacton on Sea, Essex, CO15 6QF",
    "postcode": "CO15 6QF",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-08-01",
    "endDate": "",
    "value": "£15m",
    "rolesNeeded": 7,
    "contacts": [],
    "opportunityScore": 70,
    "sector": "Residential",
    "priority": "Priority 2",
    "mainContractor": "TBC (Contractor To Be Awarded July 2026)",
    "tags": [
      "Project Manager",
      "Site Manager",
      "Assistant Site Manager",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Contracts Manager",
      "Commercial Manager"
    ],
    "notes": "Construction of 28 flats comprising 14 one-bedroom and 14 two-bedroom apartments together with community units, extensive parking provision and associated works following demolition. Public sector design and build project with contractor award expected July 2026."
  },
  {
    "id": 213,
    "name": "Timber Square, Phase 2 - Mixed Development",
    "client": "Land Securities Group / LS Timber Square Developer Limited",
    "location": "Timber Square (Phase 2), 63 Ewer Street, Southwark, London, SE1 0NR",
    "postcode": "SE1 0NR",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-11-01",
    "endDate": "",
    "value": "£103.8m",
    "rolesNeeded": 12,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Hotel & Leisure",
    "priority": "Priority 1",
    "mainContractor": "TBC (Contractor Not Yet Appointed)",
    "tags": [
      "Project Director",
      "Construction Director",
      "Senior Project Manager",
      "Project Manager",
      "Design Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Commercial Manager",
      "Contracts Manager",
      "Site Manager",
      "Package Manager",
      "Building Services Manager"
    ],
    "notes": "Major £103.8m mixed-use regeneration scheme involving refurbishment, remodelling and change of use of existing viaduct arches to create offices, retail, gym, restaurant, cultural space, live music venue, cinema, theatre, leisure facilities and extensive landscaping works. 24-month programme across a 51,895 sq metre development."
  },
  {
    "id": 214,
    "name": "13-31 Dunstable Road - 291 Flats",
    "client": "Comer Homes",
    "location": "13-31 Dunstable Road, Luton, Bedfordshire, LU1 1BG",
    "postcode": "LU1 1BG",
    "status": "active",
    "stage": "Pipeline",
    "startDate": "2026-09-01",
    "endDate": "",
    "value": "£30m",
    "rolesNeeded": 10,
    "contacts": [],
    "opportunityScore": 90,
    "sector": "Residential",
    "priority": "Priority 1",
    "mainContractor": "Comer Homes",
    "tags": [
      "Project Director",
      "Contracts Manager",
      "Construction Manager",
      "Senior Site Manager",
      "Site Manager",
      "Senior Quantity Surveyor",
      "Quantity Surveyor",
      "Assistant Quantity Surveyor",
      "Design Manager",
      "Commercial Manager"
    ],
    "notes": "Construction of 291 apartments across two residential towers up to 21 storeys with amenity space, podium and rooftop gardens, highways works, utilities infrastructure, landscaping and associated parking. Large-scale residential development with a 32-month programme."
  }
];
