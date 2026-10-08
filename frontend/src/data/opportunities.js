// Enhanced database for FutureEngineers.pk

export const PARTNER_COMPANIES = [
  { name: 'Engro Corp', logo: '🏢', category: 'Fertilizers & Energy', hires: 'Chemical, Mech, Elec' },
  { name: 'Descon Engineering', logo: '⚙️', category: 'EPC & Construction', hires: 'Mech, Civil, Elec, Plant' },
  { name: 'NESPAK', logo: '🏛️', category: 'Consulting & Infra', hires: 'Civil, Structural, Geotech' },
  { name: 'Fauji Fertilizer', logo: '🌾', category: 'Manufacturing', hires: 'Chemical, Mech, Inst' },
  { name: 'Systems Limited', logo: '💻', category: 'Tech & Cloud', hires: 'CS, SE, Data, AI' },
  { name: 'HUBCO Power', logo: '⚡', category: 'Power & Grid', hires: 'Electrical, Thermal' },
  { name: 'PTCL Group', logo: '📡', category: 'Telecom & Network', hires: 'Telecom, CS, EE' },
  { name: 'K-Electric', logo: '🔌', category: 'Distribution & Grid', hires: 'Electrical, Substation' },
  { name: 'Dawlance / Arçelik', logo: '🏭', category: 'Consumer Electronics', hires: 'Mechatronics, Mech' },
  { name: 'Packages Limited', logo: '📦', category: 'Packaging & FMCG', hires: 'Industrial, Chemical' },
  { name: 'Atlas Honda', logo: '🏍️', category: 'Automotive', hires: 'Mechanical, Manufacturing' },
  { name: 'Zong 4G (CMPak)', logo: '📶', category: 'Telecom Infrastructure', hires: 'Telecom, Cloud' }
];

export const ALL_DISCIPLINES = [
  'Mechanical Engineering',
  'Electrical Engineering',
  'Civil & Structural',
  'Software / CS',
  'Mechatronics & Robotics',
  'Chemical & Process',
  'Biomedical Engineering',
  'Industrial & Manufacturing',
  'Petroleum & Gas',
  'Telecom & Networks'
];

export const ALL_LOCATIONS = [
  'Karachi',
  'Lahore',
  'Islamabad / Rawalpindi',
  'Faisalabad',
  'Peshawar',
  'Quetta',
  'Multan',
  'Taxila / Haripur',
  'Remote / Hybrid',
  'Study Abroad'
];

export const LIVE_METRICS = {
  activeListings: 540,
  partnerCompanies: 65,
  universitiesReached: 42,
  monthlyApplicants: '18,500+'
};

export const LISTINGS_DATA = [
  {
    id: 'job-1',
    categoryType: 'Jobs',
    title: 'Graduate Trainee Electrical Engineer (Power & Substations)',
    company: 'HUBCO Power Services',
    companyLogo: '⚡',
    verified: true,
    location: 'Karachi, Sindh',
    workMode: 'On-site',
    type: 'Full-time',
    discipline: 'Electrical Engineering',
    experience: 'Fresh Graduate (0-1 yr)',
    stipend: 'PKR 70,000 - 85,000 / mo',
    compensationType: 'Paid',
    deadline: '2026-10-28',
    urgency: 'closing-soon',
    postedAt: '2 days ago',
    featured: true,
    description: 'HUBCO is seeking high-potential Electrical engineering graduates for switchgear inspection, protective relay testing, SCADA telemetry, and high-voltage substation maintenance.',
    requirements: [
      'BE / BS in Electrical Engineering from a PEC-accredited institution',
      'Valid PEC Graduate Registration Number',
      'Strong fundamentals in power systems and electrical machine theory',
      'Minimum CGPA 3.0 / 4.0'
    ],
    image: '/assets/img/blog-post-4.webp',
    tags: ['PEC Verified', 'Substation', 'High Voltage', 'Fast Track']
  },
  {
    id: 'job-2',
    categoryType: 'Jobs',
    title: 'Junior Plant Mechanical Engineer (Piping & Turbines)',
    company: 'Descon Engineering Ltd',
    companyLogo: '⚙️',
    verified: true,
    location: 'Lahore, Punjab',
    workMode: 'On-site',
    type: 'Full-time',
    discipline: 'Mechanical Engineering',
    experience: '0-2 years',
    stipend: 'PKR 75,000 - 95,000 / mo',
    compensationType: 'Paid',
    deadline: '2026-11-05',
    urgency: 'active',
    postedAt: '1 day ago',
    featured: true,
    description: 'Assist Senior Construction Managers in thermal stress calculations, static and rotary equipment overhaul, piping isometrics review, and ASME code inspections.',
    requirements: [
      'BS Mechanical Engineering with 3.2+ CGPA',
      'Hands-on proficiency in SolidWorks, AutoCAD & ANSYS',
      'Understanding of industrial safety (OSHA / NEBOSH basics is a plus)'
    ],
    image: '/assets/img/blog-hero-2.webp',
    tags: ['Industrial', 'Plant Overhaul', 'SolidWorks', 'Descon']
  },
  {
    id: 'job-3',
    categoryType: 'Internships',
    title: 'Summer Trainee - Process & Chemical Engineering',
    company: 'Engro Fertilizers',
    companyLogo: '🏢',
    verified: true,
    location: 'Daharki / Karachi',
    workMode: 'On-site',
    type: 'Internship',
    discipline: 'Chemical & Process',
    experience: 'Student / Final Year',
    stipend: 'PKR 45,000 / mo + Boarding',
    compensationType: 'Paid',
    deadline: '2026-10-25',
    urgency: 'closing-soon',
    postedAt: '3 days ago',
    featured: true,
    description: 'Structured 8-week corporate summer internship program in one of the world’s largest single-train urea synthesis plants. Mentorship from certified process engineers.',
    requirements: [
      'Enrolled in 3rd or 4th year Chemical Engineering',
      'Strong grasp of heat transfer, distillation, and mass balance calculations',
      'Active extracurricular or technical club participation'
    ],
    image: '/assets/img/blog-post-3.webp',
    tags: ['Paid Internship', 'Engro', 'Ammonia Plant', 'Summer 2026']
  },
  {
    id: 'job-4',
    categoryType: 'Jobs',
    title: 'Associate Site Civil Engineer (Motorway Infrastructure)',
    company: 'NESPAK / Habib Construction',
    companyLogo: '🏛️',
    verified: true,
    location: 'Islamabad / Rawalpindi',
    workMode: 'On-site',
    type: 'Full-time',
    discipline: 'Civil & Structural',
    experience: 'Fresh Graduate (0-1 yr)',
    stipend: 'PKR 65,000 - 80,000 / mo',
    compensationType: 'Paid',
    deadline: '2026-11-12',
    urgency: 'active',
    postedAt: '4 days ago',
    featured: false,
    description: 'Supervise daily construction activities, structural reinforcement bar inspections, concrete slump testing, and bill of quantities (BOQ) preparation for national highway expansion.',
    requirements: [
      'BS Civil Engineering (PEC Registered)',
      'Working knowledge of Primavera P6, Civil 3D, and AutoCAD',
      'Good on-site team management and surveying basics'
    ],
    image: '/assets/img/blog-post-5.webp',
    tags: ['Infrastructure', 'Highways', 'Civil 3D', 'BOQ']
  },
  {
    id: 'job-5',
    categoryType: 'Jobs',
    title: 'Embedded Systems & Firmware Engineer',
    company: 'National Radio Telecommunication (NRTC)',
    companyLogo: '📡',
    verified: true,
    location: 'Haripur, KP',
    workMode: 'On-site',
    type: 'Full-time',
    discipline: 'Mechatronics & Robotics',
    experience: '0-2 years',
    stipend: 'PKR 90,000 - 115,000 / mo',
    compensationType: 'Paid',
    deadline: '2026-11-20',
    urgency: 'active',
    postedAt: 'Just now',
    featured: false,
    description: 'Design and implement low-level C/C++ firmware on STM32 ARM Cortex-M microcontrollers, FreeRTOS drivers, and RF telemetry systems for industrial defence electronics.',
    requirements: [
      'BS Mechatronics / Computer / Electrical Engineering',
      'Strong programming in Embedded C/C++ and hardware debugging (Oscilloscopes, Logic Analyzers)',
      'Experience with SPI, I2C, UART, CAN bus protocols'
    ],
    image: '/assets/img/blog-post-9.webp',
    tags: ['STM32', 'FreeRTOS', 'Robotics', 'Hardware']
  },
  {
    id: 'job-6',
    categoryType: 'Internships',
    title: 'Software Engineer Intern (Full-Stack / Python & React)',
    company: 'Systems Limited',
    companyLogo: '💻',
    verified: true,
    location: 'Lahore / Hybrid',
    workMode: 'Hybrid',
    type: 'Internship',
    discipline: 'Software / CS',
    experience: 'Student / Final Year',
    stipend: 'PKR 50,000 / mo',
    compensationType: 'Paid',
    deadline: '2026-10-31',
    urgency: 'closing-soon',
    postedAt: '1 day ago',
    featured: true,
    description: 'Join Systems Limited Digital Enterprise team. Build high-performance REST APIs with FastAPI, modern micro-frontends with React/TypeScript, and Postgres data pipelines.',
    requirements: [
      'BS Software Engineering or Computer Science (3rd/4th Year or Fresh Grad)',
      'Sound understanding of Object-Oriented Design, Data Structures & Algorithms',
      'Familiarity with Git, React, and REST APIs'
    ],
    image: '/assets/img/blog-post-1.webp',
    tags: ['Hybrid', 'FastAPI', 'React', 'PPO Opportunity']
  },
  {
    id: 'sch-1',
    categoryType: 'Scholarships',
    title: 'HEC Need Based & Merit Undergraduate Engineering Scholarships',
    company: 'Higher Education Commission (HEC) Pakistan',
    companyLogo: '🎓',
    verified: true,
    location: 'Nationwide Universities',
    workMode: 'Pakistan',
    type: 'Scholarship',
    discipline: 'Multi-disciplinary',
    experience: 'Undergraduate Students',
    stipend: '100% Tuition Fee + PKR 10,000/mo Stipend',
    compensationType: 'Fully Funded',
    deadline: '2026-11-15',
    urgency: 'active',
    postedAt: '3 days ago',
    featured: true,
    description: 'Covers full university tuition, laboratory charges, and provides a monthly living stipend for deserving undergraduate students studying in PEC-accredited engineering programs across Pakistan.',
    requirements: [
      'Enrolled in 1st to 4th year undergraduate engineering program',
      'Demonstrated financial need (household income under threshold) or high academic merit',
      'Institution must be on the HEC partner university roster'
    ],
    image: '/assets/img/blog-post-10.webp',
    tags: ['HEC Pakistan', 'Undergraduate', 'Full Tuition', 'Need & Merit']
  },
  {
    id: 'sch-2',
    categoryType: 'Scholarships',
    title: 'DAAD Germany Study Scholarships for Master in Engineering',
    company: 'German Academic Exchange Service (DAAD)',
    companyLogo: '🇩🇪',
    verified: true,
    location: 'Germany (TU9 Universities)',
    workMode: 'Study Abroad',
    type: 'Scholarship',
    discipline: 'Mechanical, Electrical, Renewable',
    experience: 'Graduating Seniors / MS Aspirants',
    stipend: '€934/month + Health Insurance + Travel Airfare',
    compensationType: 'Fully Funded',
    deadline: '2026-12-01',
    urgency: 'active',
    postedAt: '5 days ago',
    featured: true,
    description: 'Pursue a fully funded 2-year Master of Science (M.Sc.) at premier German technical universities (such as TUM, RWTH Aachen, KIT) taught entirely in English.',
    requirements: [
      '16 years of formal education (BS Engineering) completed within the last 6 years',
      'Minimum CGPA 3.2 / 4.0 or equivalent first-division merit',
      'English proficiency (IELTS 6.5+ or TOEFL equivalent)'
    ],
    image: '/assets/img/blog-post-2.webp',
    tags: ['DAAD Germany', 'TU9 Universities', 'Fully Funded', 'Study in Europe']
  },
  {
    id: 'sch-3',
    categoryType: 'Scholarships',
    title: 'Fulbright Foreign Student Program for Pakistani Engineers (USA)',
    company: 'USEFP / US Department of State',
    companyLogo: '🇺🇸',
    verified: true,
    location: 'United States',
    workMode: 'Study Abroad',
    type: 'Scholarship',
    discipline: 'All Engineering Majors',
    experience: 'Graduates & Young Professionals',
    stipend: 'Full Tuition + Monthly Living + J-1 Visa + Flights',
    compensationType: 'Fully Funded',
    deadline: '2027-04-15',
    urgency: 'active',
    postedAt: '1 week ago',
    featured: false,
    description: 'The world’s most prestigious postgraduate scholarship funding Master’s and Ph.D. programs in the USA for Pakistani scholars committed to returning and contributing to Pakistan.',
    requirements: [
      'Pakistani citizenship residing in Pakistan',
      'Strong academic transcript (16 years education for MS, 18 years for PhD)',
      'GRE General test score (fee vouchers available via USEFP)'
    ],
    image: '/assets/img/blog-post-9.webp',
    tags: ['Fulbright', 'USA Master & PhD', 'Full Coverage', 'Prestigious']
  },
  {
    id: 'course-1',
    categoryType: 'Courses',
    title: 'AutoCAD 2D/3D & Autodesk Revit BIM Complete Masterclass',
    company: 'FutureEngineers Academy & Autodesk Partner',
    companyLogo: '📐',
    verified: true,
    location: 'Online / Self-Paced',
    workMode: 'Remote',
    type: 'Course',
    discipline: 'Civil & Architectural',
    experience: 'Beginner to Intermediate',
    stipend: 'Certificate Included',
    compensationType: 'Free / Sponsored',
    deadline: 'Open Enrollment',
    urgency: 'active',
    postedAt: '2 days ago',
    featured: true,
    description: 'Comprehensive 8-week structured program covering architectural drafting, structural reinforcement sheets, BIM 3D coordination, and export to construction estimation.',
    requirements: [
      'PC/Laptop with minimum 8GB RAM',
      'Free Autodesk Educational License provided to enrolled university students'
    ],
    image: '/assets/img/blog-post-3.webp',
    tags: ['AutoCAD', 'Revit BIM', 'Civil Engineering', 'Certificate']
  },
  {
    id: 'course-2',
    categoryType: 'Courses',
    title: 'Project Management Professional (PMP)® Exam Prep for Engineers',
    company: 'PMI Recognized Chapter',
    companyLogo: '📊',
    verified: true,
    location: 'Weekend Live Sessions + Recorded',
    workMode: 'Remote',
    type: 'Course',
    discipline: 'Multi-disciplinary',
    experience: 'Engineers & Project Leads',
    stipend: '35 Contact Hours (PDUs)',
    compensationType: 'Subsidized',
    deadline: '2026-11-10',
    urgency: 'active',
    postedAt: '4 days ago',
    featured: false,
    description: 'Master CPM scheduling, EVM cost tracking, engineering procurement, risk management matrix, and Agile Scrum hybrids for megaprojects.',
    requirements: [
      'Engineering degree holder or final year student aiming for engineering project management roles'
    ],
    image: '/assets/img/blog-post-7.webp',
    tags: ['PMP', 'PMI', 'Primavera', 'Engineering Leadership']
  },
  {
    id: 'cv-1',
    categoryType: 'CV Templates',
    title: 'ATS-Optimized High-Score Engineering Graduate Resume',
    company: 'FutureEngineers Career Lab',
    companyLogo: '📄',
    verified: true,
    location: 'Instant Download',
    workMode: 'Templates',
    type: 'CV Template',
    discipline: 'All Engineering Fields',
    experience: 'Fresh Graduates & Interns',
    stipend: '100% Free Download',
    compensationType: 'Free',
    deadline: 'Always Available',
    urgency: 'active',
    postedAt: 'Updated this week',
    featured: true,
    description: 'Single-column, high-scoring ATS template featuring sections for PEC registration number, capstone project details, technical tool stack, and quantified internships.',
    requirements: [
      'Compatible with Microsoft Word (.docx), Google Docs, Overleaf LaTeX, and Adobe PDF'
    ],
    image: '/assets/img/blog-post-portrait-4.webp',
    tags: ['ATS 98% Pass', 'PEC Header', 'Word & LaTeX', 'Free']
  }
];

export const CV_TEMPLATES = [
  {
    id: 'cv-ats-1',
    title: 'ATS High-Impact Fresh Graduate Resume',
    discipline: 'Universal / All Majors',
    format: '.DOCX, .PDF, LaTeX',
    downloads: '18,400+',
    score: '98/100 ATS Score',
    accentColor: '#2563EB',
    previewImg: '/assets/img/blog-post-portrait-4.webp',
    highlight: 'Optimized for multinational applicant tracking systems (Workday, Taleo, Greenhouse).'
  },
  {
    id: 'cv-mech-2',
    title: 'Mechanical & Manufacturing Engineer CV',
    discipline: 'Mechanical / Industrial',
    format: '.DOCX, .PDF',
    downloads: '11,200+',
    score: '96/100 ATS Score',
    accentColor: '#10B981',
    previewImg: '/assets/img/blog-post-6.webp',
    highlight: 'Emphasizes SolidWorks/ANSYS simulations, plant overhaul internships, and HSE standards.'
  },
  {
    id: 'cv-elec-3',
    title: 'Electrical, Power & Electronics Engineer CV',
    discipline: 'Electrical / Electronics',
    format: '.DOCX, .PDF',
    downloads: '14,800+',
    score: '97/100 ATS Score',
    accentColor: '#F59E0B',
    previewImg: '/assets/img/blog-post-9.webp',
    highlight: 'Focuses on power systems, MATLAB/Simulink, PLC programming, and substation projects.'
  },
  {
    id: 'cv-civil-4',
    title: 'Civil & Structural Site Engineer Resume',
    discipline: 'Civil / Geotechnical',
    format: '.DOCX, .PDF',
    downloads: '12,900+',
    score: '95/100 ATS Score',
    accentColor: '#8B5CF6',
    previewImg: '/assets/img/blog-post-portrait-1.webp',
    highlight: 'Highlights Primavera P6, ETABS, concrete structural testing, and site execution milestones.'
  }
];

export const UPSKILL_TRACKS = [
  {
    id: 'track-1',
    title: 'Engineering Project Management (PMP & Agile)',
    icon: '📊',
    duration: '6 Weeks',
    level: 'Intermediate',
    freeStatus: 'Free Audit Available',
    modulesCount: '8 Modules',
    skills: ['Primavera P6', 'EVM Cost Analysis', 'Critical Path Method', 'Agile Scrum'],
    instructor: 'Engr. Sarah Nadeem, PMP',
    enrolled: '3,200+ Engineers'
  },
  {
    id: 'track-2',
    title: '3D CAD, BIM & Structural Simulation',
    icon: '📐',
    duration: '8 Weeks',
    level: 'Beginner to Advanced',
    freeStatus: 'Free Student License',
    modulesCount: '12 Modules',
    skills: ['AutoCAD 2026', 'Autodesk Revit', 'SolidWorks FEA', 'ANSYS Mechanical'],
    instructor: 'Engr. Tariq Mehmood (Senior BIM Lead)',
    enrolled: '5,800+ Engineers'
  },
  {
    id: 'track-3',
    title: 'Industrial PLC & SCADA Plant Automation',
    icon: '⚡',
    duration: '10 Weeks',
    level: 'Intermediate',
    freeStatus: 'Certificate Track',
    modulesCount: '10 Modules',
    skills: ['Siemens TIA Portal', 'Ladder Logic (LAD)', 'HMI Design', 'Modbus / SCADA'],
    instructor: 'Engr. Bilal Farooq (Automation Consultant)',
    enrolled: '2,900+ Engineers'
  },
  {
    id: 'track-4',
    title: 'Python for Computational Mechanics & Data',
    icon: '🐍',
    duration: '6 Weeks',
    level: 'Beginner Friendly',
    freeStatus: '100% Free',
    modulesCount: '7 Modules',
    skills: ['NumPy & SciPy', 'Differential Equations', 'Matplotlib Engineering', 'Data Automation'],
    instructor: 'Dr. Usman Ali (PhD Computational Eng)',
    enrolled: '4,400+ Engineers'
  }
];

export const ATS_TIPS = [
  {
    title: '1. Put PEC Registration First',
    desc: 'Pakistani employers filter out unaccredited candidates early. Place your PEC Reg # right next to your contact info.'
  },
  {
    title: '2. Quantify Your FYP Metrics',
    desc: 'Instead of "Built an electric vehicle", write "Engineered 48V Li-ion battery pack achieving 85% thermal efficiency and 45km range".'
  },
  {
    title: '3. Use Standard Engineering Action Verbs',
    desc: 'Incorporate technical verbs: Simulated, Fabricated, Commissioned, Calibrated, Modeled, Overhauled, and Benchmarked.'
  },
  {
    title: '4. Keep It to Single-Column Clean Format',
    desc: 'Multi-column tables and complex graphic bars often get scrambled by ATS parsers. Stick to clean, top-down hierarchy.'
  }
];

export const FAQS = [
  {
    q: 'How does FutureEngineers.pk verify job and internship listings?',
    a: 'Our editorial team independently verifies employer PEC registrations, company domain emails, and active HR portals before publishing any job or internship to prevent ghost jobs and scams.'
  },
  {
    q: 'Are all CV templates on FutureEngineers.pk free to download?',
    a: 'Yes! All resume and CV templates are 100% free to download in Microsoft Word (.docx), LaTeX, and PDF formats, formatted according to international ATS standards.'
  },
  {
    q: 'Can employers submit their engineering job openings for free?',
    a: 'Yes! Verified Pakistani engineering companies, startups, and public sector organizations can post openings via our "Post an Opportunity" portal.'
  },
  {
    q: 'How often are scholarships and deadline alerts updated?',
    a: 'Our scholarship database is refreshed on a weekly basis, highlighting HEC notices, Erasmus, DAAD, Fulbright, Turkiye Burslari, and university-level financial aid packages.'
  }
];

// Export convenient aliases
export const JOBS_DATA = LISTINGS_DATA.filter(item => item.categoryType === 'Jobs' || item.categoryType === 'Internships');
export const SCHOLARSHIPS_DATA = LISTINGS_DATA.filter(item => item.categoryType === 'Scholarships');
export const COURSES_DATA = LISTINGS_DATA.filter(item => item.categoryType === 'Courses');
export const CV_TEMPLATES_DATA = CV_TEMPLATES;
export const RECENTLY_ADDED = LISTINGS_DATA.slice(0, 6);
