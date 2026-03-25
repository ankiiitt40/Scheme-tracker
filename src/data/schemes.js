export const schemes = [
 {
  id: 1,
  name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
  images: [
    "/assets/1.png",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.png",
    "/assets/5.jpg",
    "/assets/6.png",
    "/assets/8.png"
  ],
  type: "Central",
  category: "Farmer",
  state: "All India",
  benefits: "₹6,000 per year in three equal installments of ₹2,000 each. Payment is directly credited into the bank accounts of the beneficiaries held under small and marginal landholding farmers. Beneficiaries receive the funds directly via DBT mode, ensuring zero leakage.",
  eligibility: "Landholding farmer families with cultivable landholding in their names. Excludes Institutional Landholders and Former/Current Ministers/MPs/MLAs. Families with income-tax payers are also excluded from the scheme.",
  income_limit: "N/A for landholding families (excluding tax payers)",
  documents: [
    "Aadhaar Card (Mandatory)",
    "Revised Land Records (Khasra Khatauni)",
    "Bank Account Detail with IFSC",
    "Citizenship Certificate",
    "Mobile Number Linked to Aadhaar for OTP verification"
  ],
  apply_link: "https://pmkisan.gov.in/",
  rating: 4.8,
  isRecommended: true,
  difficulty: "Easy",
  time_estimate: "15-20 mins",
  steps: [
    {
      title: "Visit Official Portal",
      description: "Go to PM-KISAN website.",
      image: "/assets/1.png"
    },
    {
      title: "New Farmer Registration",
      description: "Enter Aadhaar and basic details.",
      image: "/assets/2.jpg.jpeg"
    },
    {
      title: "Fill Personal Details",
      description: "Enter name, bank details.",
      image: "/assets/3.jpg.jpeg"
    },
    {
      title: "Fill Land Details",
      description: "Enter land records.",
      image: "/assets/4.png"
    },
    {
      title: "Upload Documents",
      description: "Upload required documents.",
      image: "/assets/5.jpg.jpeg"
    },
    {
      title: "E-KYC Verification",
      description: "Complete OTP verification.",
      image: "/assets/6.png"
    },
    {
      title: "State Approval",
      description: "Wait for verification.",
      image: "/assets/8.png"
    },
   
  ]
},
{
  id: 2,
  name: "Post Matric Scholarship for SC Students",
  images: [
    "/assets/scholarship 1.png",
    "/assets/scholarship 2.png",
    "/assets/scholarship 3.png",
    "/assets/scholarship 4.png",
    "/assets/scholarship 5.png",
    "/assets/scholarship 6.png",
    "/assets/scholarship 7.png",
    "/assets/scholarship 9.png",
    "/assets/scholarship 10.png",
    "/assets/scholarship 11.png"
  ],
  type: "Central",
  category: "Student",
  state: "All India",
  benefits: "Full reimbursement of non-refundable compulsory fees. Maintenance allowance up to ₹1,200 per month for hostellers. Study tour charges, thesis typing/printing charges, and book allowance provided based on course category.",
  eligibility: "Students belonging to Scheduled Castes (SC). Must be studying in recognized Post-matriculation or post-secondary courses. Must have passed the previous final examination with required marks.",
  income_limit: "Annual family income must not exceed ₹2.5 Lakh from all sources.",
  documents: [
    "Caste Certificate (Verified by State Authority)",
    "Educational Marksheets of all previous years",
    "Income Certificate (Current Year)",
    "Institute Bonafide Certificate",
    "Aadhaar Card",
    "Fee Receipt of Current Course"
  ],
  apply_link: "https://scholarships.gov.in/",
  rating: 4.5,
  isRecommended: false,
  difficulty: "Medium",
  time_estimate: "45 mins",
  steps: [
    {
      title: "Portal Registration",
      description: "Register on NSP.",
      image: "/assets/scholarship 1.png"
    },
    {
      title: "Login",
      description: "Login using credentials.",
      image: "/assets/scholarship 2.png"
    },
    {
      title: "Fill Application",
      description: "Enter academic details.",
      image: "/assets/scholarship 3.png"
    },
    {
      title: "Upload Documents",
      description: "Upload required files.",
      image: "/assets/scholarship 4.png"
    },
    {
      title: "Institute Verification",
      description: "College verifies form.",
      image: "/assets/scholarship 5.png"
    },
    {
      title: "Final Submit",
      description: "Submit application.",
      image: "/assets/scholarship 6.png"
    },
    {
      title: "State Approval",
      description: "State checks eligibility.",
      image: "/assets/scholarship 7.png"
    },
    {
      title: "Payment Process",
      description: "PFMS processes payment.",
      image: "/assets/scholarship 9.png"
    },
    {
      title: "Scholarship Credit",
      description: "Amount credited.",
      image: "/assets/scholarship 10.png"
    },
    {
      title: "Status Check",
      description: "Track on portal.",
      image: "/assets/scholarship 11.png"
    }
  ]
},
  {
    id: 3,
    image: ["/assets/Ladlilaxmi1.jpg", "  ", "/assets/Ladlilaxmi3.jpg", "/assets/Ladlilaxmi4.jpg", "/assets/Ladlilaxmi5.jpg", "/assets/Ladlilaxmi6.jpg" ],

    name: "Ladli Laxmi Yojana 2.0",
    type: "State",
    category: "Women",
    state: "Madhya Pradesh",
    benefits: "Cumulative financial assistance of ₹1,18,000. Provides ₹2,000 on entry to 6th, ₹4,000 in 9th, ₹6,000 in 11th, and ₹6,000 in 12th standard. Final payment of ₹1 Lakh is provided at age 21 for higher education or marriage.",
    eligibility: "Parents must be permanent residents of Madhya Pradesh and not income taxpayers. The scheme is for girl children born after January 1, 2006, within two-child families adopting family planning.",
    income_limit: "Non-income taxpayer family status",
    documents: ["Birth Certificate of Girl Child", "Domicile Certificate (MP Residence)", "Identity Cards of Parents", "Ration card (BPL/Yellow)", "Vaccination and Anganwadi records"],
    apply_link: "https://ladlilaxmi.mp.gov.in/",
    rating: 4.7,
    isRecommended: true,
    difficulty: "Medium",
    time_estimate: "1 hour",
    steps: [
      { title: "Anganwadi Submission", description: "Submit details to your local Anganwadi worker for online profiling and data entry into the WCD child registry.", image: "/assets/ladlilaxmi1.png" },
      { title: "NCS Allotment", description: "A digital National Savings Certificate (NCS) is issued by the govt and displayed on your dashboard within 48 hours.", image: "/assets/ladlilaxmi2.png" },
      { title: "Milestone Claims", description: "On entry into 6th grade, the system triggers the first milestone payment as per your verified schooling records.", image: "/assets/Ladlilaxmi3.jpg" },
      { title: "Higher Education Bonus", description: "Receive special grants upon graduation or marriage as confirmed by state databases.", image: "/assets/Ladlilaxmi4.jpg" },
      { title: "Educational Milestone", description: "Special cash incentives on passing class 10th and 12th as per the state policy.", image: "/assets/Ladlilaxmi5.jpg" },
      { title: "Final Grant @ 21", description: "The final payout of ₹1 Lakh is released once the girl child reaches 21 years of age.", image: "/assets/Ladlilaxmi6.jpg" }
    ]
  },
  {
    id: 4,
    name: "Stand-Up India Scheme",
    type: "Central",
    category: "Business",
    state: "All India",
    benefits: "Bank loans between ₹10 lakh and ₹1 crore for setting up a greenfield enterprise in manufacturing, services, or the trading sector. Refinance through SIDBI and Credit Guarantee cover provided.",
    eligibility: "SC/ST and/or women entrepreneurs above 18 years of age. Enterprise should be for first-time ventures only (greenfield). Borrowers must not be in default to any bank or financial institution.",
    income_limit: "N/A (Evaluation based on repayment capacity and project feasibility)",
    documents: ["Detailed Project Report (DPR)", "Identity Proof (PAN/Passport)", "Proof of Business Address/Location", "Pollution Clearance (if industrial)", "Business License/Registration certificate"],
    apply_link: "https://www.standupmitra.in/",
    rating: 4.7,
    isRecommended: true,
    difficulty: "Hard",
    time_estimate: "2-4 hours",
    steps: [
      { title: "Initial Registration", description: "Register on the Stand-Up Mitra official portal as a primary borrower in one of the three categories: Ready Borrower, Trainee Borrower, or Walk-in.", image: "/assets/steps/portal.jpg" },
      { title: "Form Preparation", description: "Prepare the digital application with full business specifications, investment requirements, and machinery details.", image: "/assets/steps/prepare.jpg" },
      { title: "Loan Sanctioning", description: "The designated bank branch evaluates the project's viability and issues a formal sanction letter following the due process.", image: "/assets/steps/sanction.jpg" },
      { title: "Disbursement", description: "After documentation and creation of requested security/collateral, the loan amount is released for business setup.", image: "/assets/steps/disburse_loan.jpg" }
    ]
  },
  {
    id: 5,
    name: "Ayushman Bharat PM-JAY",
    type: "Central",
    category: "Health",
    state: "All India",
    benefits: "Health cover of up to ₹5 Lakh per family per year for secondary and tertiary care hospitalization. This includes pre-hospitalization and post-hospitalization costs (up to 15 days) and covers over 1,300+ medical procedures.",
    eligibility: "Based on Socio-Economic Caste Census (SECC) 2011 data across occupational and deprivation criteria for rural and urban areas. Families identified as poor and vulnerable are automatically eligible.",
    income_limit: "SECC-based classification (Based on deprivation levels)",
    documents: ["Aadhaar Card", "Ration Card (NFSA ID)", "PM Letter (HHD Number)", "Identity Proof (Voter ID/Driving License)"],
    apply_link: "https://setu.pmjay.gov.in/",
    rating: 4.9,
    isRecommended: true,
    difficulty: "Easy",
    time_estimate: "10 mins",
    steps: [
      { title: "Check Eligibility Status", description: "Login to the Mera PMJAY portal (PMAY-Setu) using your mobile number and search your name in the SECC database.", image: "/assets/steps/status.jpg" },
      { title: "Visit Empaneled Hospital", description: "Visit any empaneled hospital and meet the 'Project Ayushman Mitra' (AM) at the designated desk.", image: "/assets/steps/visit_hosp.jpg" },
      { title: "Golden Card Issuance", description: "Provide your Aadhaar and Ration card details for biometric verification and get your smart card (Golden Card) printed instantly.", image: "/assets/steps/card.jpg" }
    ]
  },
  {
    id: 6,
    name: "Mahila Samman Savings Certificate",
    type: "Central",
    category: "Women",
    state: "All India",
    benefits: "A one-time small savings scheme for women and girl children. Offers a fixed interest rate of 7.5% per annum, compounded quarterly. The minimum deposit is ₹1,000 and the maximum is ₹2 Lakh for a 2-year tenure.",
    eligibility: "Available for any woman of any age or a minor girl child (opened by a legal guardian). Multiple accounts can be opened with a time gap of three months between account openings.",
    income_limit: "N/A",
    documents: ["Aadhaar card", "PAN Card", "KYC documents (Address proof)", "Recent passport size photographs (2)"],
    apply_link: "https://www.indiapost.gov.in/",
    rating: 4.6,
    isRecommended: false,
    difficulty: "Easy",
    time_estimate: "15 mins",
    steps: [
      { title: "Fill Application Form", description: "Visit the Post Office or authorized bank and fill out the 'Account Opening Form' (Form-1) for MSSC.", image: "/assets/steps/post_form.jpg" },
      { title: "Document Submission", description: "Submit your KYC documents (Aadhaar/PAN) along with the signed form at the counter for verification.", image: "/assets/steps/submit_mssc.jpg" },
      { title: "Deposit Funds", description: "Deposit your chosen amount (up to ₹2 Lakh) through cash or cheque to activate the certificate maturity cycle.", image: "/assets/steps/pay.jpg" }
    ]
  },

  {
    id: 7,
    name: "Mukhyamantri Amrutum (MA) Yojana",
    type: "State",
    category: "Health",
    state: "Gujarat",
    benefits: "Cashless medical treatment up to ₹3,00,000 per family per year. Covers major illnesses such as cardiovascular diseases, cancer, renal failure, neurological surgery, and burn injuries at empaneled hospitals.",
    eligibility: "Families belonging to the Below Poverty Line (BPL) or having a verified annual income below ₹1.5 Lakh in the state of Gujarat. Families with 'Aadishakti' card are also eligible.",
    income_limit: "Up to ₹1.5 Lakh per annum",
    documents: ["BPL Card (Valid)", "Lower Income Certificate (Tehsildar signed)", "Aadhaar Card of all family members", "Identity Photo"],
    apply_link: "http://www.magujarat.in/",
    rating: 4.8,
    isRecommended: true,
    difficulty: "Easy",
    time_estimate: "20 mins",
    steps: [
      { title: "Biometric Enrollment", description: "Provide fingerprint, facial photo, and identity documents at the nearest Taluka level MA Center or Civic Center.", image: "/assets/steps/bio.jpg" },
      { title: "Smart Card Issue", description: "Receive the 'MA' Smart Card instantly containing the biometric data of all eligible family members for cashless usage.", image: "/assets/steps/bio2.jpg" }
    ]
  },
  {
    id: 8,
    name: "Pradhan Mantri Awas Yojana (PMAY-U)",
    type: "Central",
    category: "Housing",
    state: "All India",
    benefits: "Interest subsidy of up to ₹2.67 Lakh on home loans under the Credit Linked Subsidy Scheme (CLSS). Tenure is allowed up to 20 years. Preference is given to female members as co-beneficiaries or sole owners.",
    eligibility: "Families with no pucca house in their name anywhere in India. Slum dwellers and households belonging to EWS or LIG (Low Income Group) categories are prioritized.",
    income_limit: "EWS (Up to ₹3L), LIG (₹3-6L), MIG I (₹6-12L), MIG II (₹12-18L) per annum",
    documents: ["Aadhaar Card", "Self-declaration of Not owning any Pucca House", "Latest Income Proof", "PAN Card", "Property and Bank details"],
    apply_link: "https://pmay-urban.gov.in/",
    rating: 4.7,
    isRecommended: true,
    difficulty: "Medium",
    time_estimate: "2 weeks",
    steps: [
      { title: "Online Registration", description: "Apply via the PMAY citizen portal (PMAY MIS) under 'Slum Dwellers' or 'Benefit under other 3 components' category.", image: "/assets/steps/house1.jpg" },
      { title: "Field Survey", description: "A government surveyor/ULB representative visits the proposed or current site to verify housing status and financial eligibility.", image: "/assets/steps/house2.jpg" },
      { title: "Demand Draft Allocation", description: "Based on survey results, the subsidy is sanctioned and released directly to the bank which has provided the home loan.", image: "/assets/steps/house3.jpg" }
    ]
  },
  {
    id: 9,
    name: "Atal Pension Yojana (APY)",
    type: "Central",
    category: "Pension",
    state: "All India",
    benefits: "Guaranteed monthly pension between ₹1,000 and ₹5,000 based on age and contribution. Government provides co-contribution for subscribers joining between 2015-16. Pension is transferable to spouse upon death.",
    eligibility: "Any citizen of India between 18 and 40 years of age. Must have a savings bank account with a bank or post office. Must not be a member of any statutory social security scheme or an income tax payer.",
    income_limit: "Excludes existing income tax payers for government contribution benefits.",
    documents: ["Aadhaar Card", "Savings Bank Account Details", "Active Mobile Number", "Nominee Identification Proof"],
    apply_link: "https://www.npscra.nsdl.co.in/scheme-details.php",
    rating: 4.9,
    isRecommended: true,
    difficulty: "Easy",
    time_estimate: "15 mins",
    steps: [
      { title: "Bank Subscription", description: "Visit your local bank branch where you have a savings account and fill out the APY registration form with nominee details.", image: "/assets/steps/apy1.jpg" },
      { title: "Set Auto-debit", description: "Authorize the bank to auto-debit the monthly contribution amount based on your chosen pension slab and entry age.", image: "/assets/steps/apy2.jpg" },
      { title: "PRAN Issuance", description: "You will receive a Permanent Retirement Account Number (PRAN) statement and card for tracking your pension wealth.", image: "/assets/steps/pran_card.jpg" }
    ]
  },
  {
    id: 10,
    name: "Kanya Sumangala Yojana",
    type: "State",
    category: "Women",
    state: "Uttar Pradesh",
    benefits: "Conditional cash transfer of ₹15,000 in six levels: ₹2,000 at birth, ₹1,000 after vaccination, ₹2,000 at 1st standard entry, ₹2,000 at 6th, ₹3,000 at 9th, and ₹5,000 at Post-Graduate/Degree entry.",
    eligibility: "Permanent resident of Uttar Pradesh. Maximum family income up to ₹3 Lakh. Maximum two daughters in a family (relaxable in case of multiple births such as twins).",
    income_limit: "Up to ₹3 Lakh per annum",
    documents: ["Birth Certificate of Girl Child", "Photographs of Daughter and Mother", "Certified Income Certificate", "Ration Card (Self-attested copy)", "Residence Proof"],
    apply_link: "https://mksy.up.gov.in/",
    rating: 4.6,
    isRecommended: true,
    difficulty: "Medium",
    time_estimate: "1 hour",
    steps: [
      { title: "Citizen Portal Signup", description: "Register on the Mukhyamantri Kanya Sumangala portal using your mobile number and create a family login ID.", image: "/assets/steps/upk1.jpg" },
      { title: "Level Application", description: "Fill out the application specific to the girl child's current age/education level (e.g. Level-3 for 1st Standard entry).", image: "/assets/steps/upk2.jpg" },
      { title: "Document Upload", description: "Upload mandatory documents including birth proof and income certificates in PDF format as per specified sizes.", image: "/assets/steps/upk3.jpg" }
    ]
  },
  {
    id: 11,
    name: "Rythu Bandhu Scheme",
    type: "State",
    category: "Farmer",
    state: "Telangana",
    benefits: "Crop investment support of ₹10,000 per acre per year (₹5k for Kharif, ₹5k for Rabi). This assistance is provided to every farmer owner to meet their requirements for seeds, fertilizers, and other farm inputs.",
    eligibility: "All agriculture land-owning farmers in Telangana state who are listed in the official Land Records database (Pattadar Passbooks). No restriction on land size for eligibility.",
    income_limit: "N/A",
    documents: ["Digital Pattadar Passbook", "Aadhaar Card", "Bank Account Details (Linked with IFSC)", "Mobile phone registered for DBT alerts"],
    apply_link: "http://rythubandhu.telangana.gov.in/",
    rating: 4.8,
    isRecommended: true,
    difficulty: "Easy",
    time_estimate: "30 mins",
    steps: [
      { title: "Dharani Portal Sync", description: "Access the Dharani land portal to ensure your Pattadar passbook details are updated and match your identity records.", image: "/assets/steps/tsf1.jpg" },
      { title: "Agriculture Officer Mapping", description: "Coordinate with the local Agriculture Extension Officer (AEO) to verify the current sowing area and active cultivation status.", image: "/assets/steps/tsf2.jpg" },
      { title: "Sanction Listing", description: "Once the village-level listing is verified, the treasury releases the sanctioned amount directly to the farmer's account.", image: "/assets/steps/tsf3.jpg" }
    ]
  },
  {
    id: 12,
    name: "Mukhyamantri Yuva Nestham",
    type: "State",
    category: "Welfare",
    state: "Andhra Pradesh",
    benefits: "Monthly empowerment allowance of ₹1,000 to unemployed youth. Scheme also includes skill training programs, internships, and workshops to enhance job readiness among graduates.",
    eligibility: "Unemployed graduates or diploma holders who are permanent residents of Andhra Pradesh. Age limit is between 22 to 35 years. Only one member of a family can avail the benefits.",
    income_limit: "Household with below poverty line (BPL) credentials (White Ration Card).",
    documents: ["Aadhaar card", "Ration card", "Degree or Diploma Certificate", "State Residence/Domicile Proof", "Unemployment proof certificate"],
    apply_link: "http://yuvanestham.ap.gov.in/",
    rating: 4.3,
    isRecommended: false,
    difficulty: "Medium",
    time_estimate: "45 mins",
    steps: [
      { title: "Portal Registration", description: "Navigate to the official Yuvanestham portal and register using your Aadhaar number and White Ration Card details.", image: "/assets/steps/apyu1.jpg" },
      { title: "Academic Proof", description: "Upload scanned copies of your degree or diploma along with the final marksheet for verification against university databases.", image: "/assets/steps/apyu2.jpg" },
      { title: "Biometric KYC", description: "Complete biometric authentication at the nearest Meeseva center or on the portal to activate the monthly allowance cycle.", image: "/assets/steps/apyu3.jpg" }
    ]
  },
  {
    id: 13,
    name: "Biju Swasthya Kalyan Yojana (BSKY)",
    type: "State",
    category: "Health",
    state: "Odisha",
    benefits: "Cashless healthcare services to around 96 lakh families. Provides health coverage of ₹5 Lakh per male member and ₹10 Lakh for every female member per year in over 200+ empaneled private hospitals.",
    eligibility: "All families covered under Biju Krushak Kalyan Yojana (BKKY), RSBY, or NFSA/SFSA (Food Security Cardholders) in the state of Odisha are automatically eligible for the scheme benefits.",
    income_limit: "Based on BKKY or NFSA status (deprivation-centric)",
    documents: ["NFSA/SFSA (Food Security) Card", "Health Smart Card issued by BSKY", "Aadhaar Card of the patient", "Identity Proof"],
    apply_link: "https://bsky.odisha.gov.in/",
    rating: 4.5,
    isRecommended: true,
    difficulty: "Easy",
    time_estimate: "15 mins",
    steps: [
      { title: "Card Identification", description: "Present your BSKY Smart Health Card at the hospital help desk where you intend to seek treatment for yourself or a family member.", image: "/assets/steps/od_h1.jpg" },
      { title: "Electronic Swiping", description: "The Swasthya Mitra at the hospital swipes your BSKY card and verifies the available balance against the proposed treatment cost.", image: "/assets/steps/od_h2.jpg" },
      { title: "Treatment Approval", description: "Once the card is swiped and treatment is approved electronically, medical services are provided without any cash payment up to your limit.", image: "/assets/steps/od_h3.jpg" }
    ]
  },
  {
    id: 14,
    name: "Mukhyamantri Medhavi Vidyarthi Yojana",
    type: "State",
    category: "Education",
    state: "Madhya Pradesh",
    benefits: "Full tuition fee and non-refundable fees payment for students pursuing higher education (Engineering, Medical, Law) in premier institutes. Covers courses in IITs, NITs, and National Law Universities.",
    eligibility: "Students who have scored 75% or above in the MP Board or 85% and above in CBSE/ICSE board in 12th standard. Parent's annual income must be under ₹6 Lakh.",
    income_limit: "Parents' cumulative annual income must be under ₹6 Lakh.",
    documents: ["12th Standard Marksheet (Mandatory)", "Income Certificate (Tehsildar signed)", "College Admission Letter and Fee Structure", "MP Domicile Certificate", "Aadhaar Card"],
    apply_link: "http://scholarshipportal.mp.nic.in/",
    rating: 4.7,
    isRecommended: true,
    difficulty: "Medium",
    time_estimate: "1 hour",
    steps: [
      { title: "Portal Enrollment", description: "Register as a prospective student on the State Integrated Scholarship portal and provide your academic scores and income details.", image: "/assets/steps/mp_ed1.jpg" },
      { title: "College Verification", description: "Forward your application to the college Nodal Officer who verifies your admission and upload the fee details on the portal.", image: "/assets/steps/mp_ed2.jpg" },
      { title: "Direct Transfer", description: "The Nodal Officer at the collectorate approves the sanction and the fee is transferred directly to the educational institute's account.", image: "/assets/steps/mp_ed3.jpg" }
    ]
  },
  {
    id: 15,
    name: "Delhi Ladli Scheme",
    type: "State",
    category: "Women",
    state: "Delhi",
    benefits: "Financial assistance in the form of fixed deposits for girl children born in Delhi. Total benefit ranges from ₹35,000 to ₹1,00,000 provided at different stages of life (Birth, Grade 1, 6, 9, 10, and 12).",
    eligibility: "Permanent residents of Delhi for the last three years. The girl child must be born in Delhi and the family's annual income must not exceed ₹1 Lakh. Only two girl children per family are eligible.",
    income_limit: "Combined annual family income below ₹1 Lakh.",
    documents: ["Child's Birth Certificate", "Proof of Delhi Residence (3 years minimum)", "Aadhaar Card of Child & Parents", "Voter ID of Parents", "Income Certificate"],
    apply_link: "https://www.edistrict.delhigovt.nic.in/",
    rating: 4.4,
    isRecommended: false,
    difficulty: "Medium",
    time_estimate: "1.5 hours",
    steps: [
      { title: "E-District Application", description: "Login to Delhi's E-District portal or visit the nearest Citizen Service Center (CSC) to apply under the Ladli component.", image: "/assets/steps/del1.jpg" },
      { title: "Verification Submission", description: "Submit the hard copy of the application along with original certificates to the District Social Welfare Office or school for verification.", image: "/assets/steps/del2.jpg" },
      { title: "FD Allotment", description: "After successful verification, a Fixed Deposit (FD) is created in the name of the child via SBI Life Insurance, maturing on her 18th birthday.", image: "/assets/steps/del3.jpg" }
    ]
  },
  {
    id: 16,
    name: "Jai Bhim Mukhyamantri Pratibha Vikas Yojana",
    type: "State",
    category: "Education",
    state: "Delhi",
    benefits: "Coaching for prestigious competitive exams like IAS, IES, Medical, and Engineering for talented students of underprivileged backgrounds. A monthly stipend of ₹2,500 is provided to the student for the duration of coaching.",
    eligibility: "Resident of Delhi belonging to SC, ST, OBC, or EWS categories. Should have obtained at least 50% marks in the qualifying examination. Can avail the scheme benefits only once for a specific course.",
    income_limit: "Parents' cumulative annual income under ₹8 Lakh.",
    documents: ["Caste/Category certificate (Issued by GNCTD)", "Residence proof of Delhi", "10th and 12th standard marksheets", "Recent passport size photographs (3)"],
    apply_link: "https://scstwelfare.delhi.gov.in/",
    rating: 4.8,
    isRecommended: true,
    difficulty: "Medium",
    time_estimate: "30 mins",
    steps: [
      { title: "Coaching Center Registration", description: "Approach any of the empanelled private coaching centers in Delhi and register yourself under the Jai Bhim component.", image: "/assets/steps/del_ed1.jpg" },
      { title: "Stipend Approval", description: "The institute submits your attendance records to the Department of SC/ST Welfare to activate the monthly stipend payments.", image: "/assets/steps/del_ed2.jpg" }
    ]
  },
  {
    id: 17,
    name: "Karma Sathi Prakalpa",
    type: "State",
    category: "Business",
    state: "West Bengal",
    benefits: "Financial grant/loan support of up to ₹2 Lakh for establishing a new business or small-scale unit. The state provides a subsidy of up to ₹25,000 on the loan amount to encourage local startups.",
    eligibility: "Unemployed youth residents of West Bengal between the ages of 18 to 50 years. Minimum educational qualification is the 10th standard pass. Must have a viable project proposal.",
    income_limit: "N/A (Business viability centric)",
    documents: ["Academic Certificates (10th/12th)", "Detailed Project Proposal (DPR)", "Identity Cards (Voter/Aadhaar)", "NOC from local municipality/panchayat"],
    apply_link: "https://karmasathiprakalpa.wb.gov.in/",
    rating: 4.6,
    isRecommended: true,
    difficulty: "Medium",
    time_estimate: "2 hours",
    steps: [
      { title: "Online Business Proposal", description: "Fill out the business model form on the official portal and upload your detailed project report along with ID proofs.", image: "/assets/steps/wb1.jpg" },
      { title: "State Bank Evaluation", description: "The proposal is forwarded to the District Industry Center (DIC) and then to a cooperative bank for loan evaluation and sanctioning.", image: "/assets/steps/wb2.jpg" }
    ]
  },
  {
    id: 18,
    name: "Nijo Griha Nijo Bhumi Scheme",
    type: "State",
    category: "Housing",
    state: "West Bengal",
    benefits: "Grants 5 decimals of land for construction of permanent houses for rural landless families. Includes financial assistance for construction materials and labor through convergence with other rural schemes.",
    eligibility: "Landless agricultural laborers, craftsmen, and rural artisans living in rural Bengal. Families belonging to SC, ST, and BPL categories are specifically prioritized for land allocation.",
    income_limit: "Verified Below Poverty Line (BPL) status through Gram Panchayat records.",
    documents: ["Affidavit of landlessness (Self-declared)", "Voter Identity Card", "BPL Ration Card", "Photographs of family head"],
    apply_link: "https://banglarbhumi.gov.in/",
    rating: 4.2,
    isRecommended: false,
    difficulty: "Hard",
    time_estimate: "1 month",
    steps: [
      { title: "Landless Survey", description: "Register yourself at the local Block Land & Land Reforms Office (BLLRO) for the permanent land survey conducted across rural blocks.", image: "/assets/steps/wb_h1.jpg" },
      { title: "Patta Allocation", description: "After survey and verification, the Land Title (Patta) is issued by the DM's office and physical possession of the plot is handed over.", image: "/assets/steps/wb_h2.jpg" }
    ]
  },
  {
    id: 19,
    name: "Mukhya Mantri Sheheri Awas Yojana",
    type: "State",
    category: "Housing",
    state: "Haryana",
    benefits: "Provision of affordable plots or flats (1/2 BHK) in urban localities of Haryana. Financial subsidy is provided for house construction alongside ready availability of civic infrastructure.",
    eligibility: "Permanent urban residents of Haryana state with a verified Parivar Pehchan Patra (PPP). Families should not own any other house in urban sectors of the state.",
    income_limit: "Verified annual household income below ₹1.8 Lakh in PPP database.",
    documents: ["Parivar Pehchan Patra (PPP) - Mandatory", "Aadhaar Card of all family members", "Income Proof certificate", "Residence Identity proof"],
    apply_link: "https://haryanaawasyojana.in/",
    rating: 4.5,
    isRecommended: true,
    difficulty: "Medium",
    time_estimate: "1 week",
    steps: [
      { title: "PPP Verification", description: "Log in to the Sheheri Awas portal using your Family ID (PPP). The system automatically fetches your income and residence data for eligibility.", image: "/assets/steps/hr_h1.jpg" },
      { title: "Plot Selection", description: "After successful verification, select your preferred urban sector and apply for the plot/flat lottery conducted by the development authority.", image: "/assets/steps/hr_h2.jpg" }
    ]
  },
  {
    id: 20,
    name: "Mukhya Mantri Parivar Samridhi Yojana",
    type: "State",
    category: "Welfare",
    state: "Haryana",
    benefits: "Annual grant of ₹6,000 to families who can use it for various purposes including health insurance, crop insurance, and pension contributions. Total social security coverage for all family members.",
    eligibility: "Families registered in the Haryana state Family Information Data Repository with an annual income below ₹1.8 Lakh. Beneficiaries must have a seeded bank account.",
    income_limit: "Total annual family income below ₹1,80,000 (from all sources).",
    documents: ["Verified PPP Family ID Card", "Aadhaar Card linked to Mobile", "Active Bank Account with IFSC", "Voter card or Residence Proof"],
    apply_link: "https://mmpsy.haryana.gov.in/",
    rating: 4.7,
    isRecommended: true,
    difficulty: "Easy",
    time_estimate: "20 mins",
    steps: [
      { title: "Scheme Choice", description: "Log in via PPP and choose your requested social security components (e.g. choosing crop insurance over life insurance).", image: "/assets/steps/hr_w1.jpg" },
      { title: "Consent Approval", description: "Provide e-consent for auto-premium payments and the remaining cash balance is transferred to your account annually.", image: "/assets/steps/hr_w2.jpg" }
    ]
  },
  {
    id: 21,
    name: "Mukhyamantri Kanya Utthan Yojana",
    type: "State",
    category: "Women",
    state: "Bihar",
    benefits: "A cumulative award scheme for girl children to promote higher education. ₹2,000 at birth, ₹1,000 on vaccination, ₹10,000 for Matriculation, ₹25,000 for Intermediate, and ₹50,000 for Graduation.",
    eligibility: "Permanent residents of Bihar state. The scheme is only applicable for the first two girls of a family to encourage demographic control and gender balance.",
    income_limit: "Preference given to Economically Weaker Section (EWS) families.",
    documents: ["Child's Birth certificate", "Class 10th or 12th Result/Marksheet", "Domicile Certificate (Bihar)", "Bank account in girl's name", "Aadhaar Card"],
    apply_link: "http://edudbt.bih.nic.in/",
    rating: 4.3,
    isRecommended: false,
    difficulty: "Medium",
    time_estimate: "1.5 hours",
    steps: [
      { title: "Medhasoft Registration", description: "Individual girls and their parents register on the Medhasoft portal and link their bank account with their Student ID.", image: "/assets/steps/br_w1.jpg" },
      { title: "Principal Approval", description: "The head of the institution verifies the student's result and enrollment digitally for the award sanctioning.", image: "/assets/steps/br_w2.jpg" }
    ]
  },
  {
    id: 22,
    name: "Post Matric Scholarship (OBC/EBC)",
    type: "State",
    category: "Education",
    state: "Bihar",
    benefits: "Full reimbursement of tuition fees and various course-related allowances for students studying in professional and technical colleges across the country.",
    eligibility: "Students must belong to Bihar state and categorize under OBC or EBC. Parent's annual income must not exceed the specified threshold (currently ₹1,50,000).",
    income_limit: "Parents' cumulative annual income under ₹1.5 Lakh.",
    documents: ["Bihar Nivas (Residence) Certificate", "Caste Certificate (Valid OBC/EBC)", "Current Income Certificate", "Bonafide from the Educational Institute"],
    apply_link: "https://pmsonline.bih.nic.in/",
    rating: 4.4,
    isRecommended: false,
    difficulty: "Medium",
    time_estimate: "45 mins",
    steps: [
      { title: "Scholarship Portal Login", description: "Register as a prospective applicant on the Bihar Post Matric Scholarship (PMS) portal using your Aadhaar number.", image: "/assets/steps/br_ed1.jpg" },
      { title: "Institute Verification", description: "The educational institute confirms the student's regular attendance and submits the valid fee structure to the state portal.", image: "/assets/steps/br_ed2.jpg" }
    ]
  },
  {
    id: 23,
    name: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    type: "Central",
    category: "Welfare",
    state: "All India",
    benefits: "Zero balance savings account with RuPay Debit Card. Accidental insurance of ₹2 Lakh, life insurance of ₹30k, and accidental overdraft facility (up to ₹10k) available to the account holder.",
    eligibility: "Any individual Indian citizen above 10 years of age can open this account at any bank branch or Business Correspondent (Bank Mitra) outlet.",
    income_limit: "N/A",
    documents: ["Aadhaar card (Sole document needed if it has current address)", "PAN Card (Optional)", "Two recent passport size photographs"],
    apply_link: "https://www.pmjdy.gov.in/",
    rating: 4.9,
    isRecommended: true,
    difficulty: "Easy",
    time_estimate: "20 mins",
    steps: [
      { title: "Branch Enrollment", description: "Visit any commercial bank or Post Office and fill out the simple JS-1 application form for a basic savings account.", image: "/assets/steps/jan1.jpg" },
      { title: "Rupay Card Provisioning", description: "Receive your free RuPay card and set up your MPIN for digital/ATM usage instantly once the account is activated.", image: "/assets/steps/jan2.jpg" }
    ]
  },
  {
    id: 24,
    name: "Sanjay Gandhi Niradhar Anudan Yojana",
    type: "State",
    category: "Welfare",
    state: "Maharashtra",
    benefits: "Monthly cash assistance of ₹1,000 for destitute and helpless persons. For families with two children, a monthly grant of ₹1,200 is provided to cover essential living costs and schooling.",
    eligibility: "Permanent residents of Maharashtra with no stable income source. Destitute individuals above 65 years (men) or 60 years (women) or those with 40%+ disability.",
    income_limit: "Parents' annual household income below ₹21,000.",
    documents: ["Age Verification Certificate", "Income Certificate (Signed by Tehsildar)", "Medical/Disability certificate signed by Civil Surgeon", "Residence Proof"],
    apply_link: "http://maharashtra.gov.in/",
    rating: 4.2,
    isRecommended: false,
    difficulty: "Hard",
    time_estimate: "3-4 hours",
    steps: [
      { title: "File Submission", description: "Collect the application from the local collector office or tehsildar office and submit the completed file with all self-attested documents.", image: "/assets/steps/mh_w1.jpg" },
      { title: "Verification Enquiry", description: "The local revenue officer (Talathi) visits the applicant's residence to verify their standard of living and confirmed destitution.", image: "/assets/steps/mh_w2.jpg" }
    ]
  },
  {
    id: 25,
    name: "Mukhyamantri Teerth Yatra Yojana",
    type: "State",
    category: "Welfare",
    state: "Delhi",
    benefits: "Free pilgrimage for senior citizens (60+) including round-trip train travel, food, and stay at religious sites (Ayodhya, Vaishno Devi, Rameshwaram, etc.). Medical insurance included.",
    eligibility: "Must be a senior citizen (60+) residing in Delhi. Should not have any regular government service pension exceeding a specific limit. Must be medically fit for the journey.",
    income_limit: "Annual family income under ₹3 Lakh.",
    documents: ["Aadhaar card of Delhi residence", "Medical Fitness Certificate from Govt Hospital", "Voter Identity card as proof of Delhi residence", "Attendant ID card proof"],
    apply_link: "https://edistrict.delhigovt.nic.in/",
    rating: 4.7,
    isRecommended: false,
    difficulty: "Medium",
    time_estimate: "1 hour",
    steps: [
      { title: "Health Checkup", description: "Obtain a medical fitness physical certificate from any Delhi state-run hospital or recognized PHC.", image: "/assets/steps/del_w1.jpg" },
      { title: "E-District Application", description: "Submit the pilgrimage application via the E-District portal at least 45 days before the intended travel date.", image: "/assets/steps/del_w2.jpg" }
    ]
  }
];
