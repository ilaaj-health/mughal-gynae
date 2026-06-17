/* ============================================================
   SERVICES & DEPARTMENTS
   Icons are Font Awesome 6 class names.
   ============================================================ */

export type Service = {
  slug: string;
  icon: string;        // Font Awesome class, e.g. "fa-solid fa-venus"
  title: string;
  blurb: string;       // short (home/grid)
  description: string; // longer (services page)
  featured?: boolean;  // shown on home page
};

export const services: Service[] = [
  {
    slug: "gynaecology",
    icon: "fa-solid fa-venus",
    title: "Gynaecology Consultation",
    blurb: "Expert care for every stage of a woman's health, in complete privacy.",
    description:
      "Comprehensive evaluation and treatment of gynaecological conditions — from routine check-ups and infections to complex hormonal and reproductive concerns — handled discreetly by experienced female specialists.",
    featured: true,
  },
  {
    slug: "obstetrics-antenatal",
    icon: "fa-solid fa-person-pregnant",
    title: "Obstetrics & Antenatal Care",
    blurb: "Complete pregnancy care that keeps mother and baby safe and healthy.",
    description:
      "Regular antenatal visits, growth monitoring, ultrasounds and nutritional guidance throughout pregnancy, with close monitoring for high-risk cases to ensure a safe journey to delivery.",
    featured: true,
  },
  {
    slug: "delivery",
    icon: "fa-solid fa-baby",
    title: "Normal & C-Section Delivery",
    blurb: "Safe, supported deliveries with 24/7 specialist availability.",
    description:
      "Round-the-clock labour and delivery services — both normal deliveries and caesarean sections — in a clean, well-equipped maternity setting with experienced gynaecologists and support staff on hand.",
    featured: true,
  },
  {
    slug: "family-planning",
    icon: "fa-solid fa-hand-holding-heart",
    title: "Family Planning",
    blurb: "Confidential counselling to help you plan your family with confidence.",
    description:
      "Private, judgement-free guidance on contraception and birth spacing — helping couples choose the safest, most suitable method for their needs and lifestyle.",
    featured: true,
  },
  {
    slug: "infertility",
    icon: "fa-solid fa-dna",
    title: "Infertility Evaluation",
    blurb: "Careful assessment and a clear plan to support your path to parenthood.",
    description:
      "Structured fertility evaluation for couples, including hormonal and ultrasound assessment, diagnosis of underlying causes and a clear, step-by-step management plan.",
    featured: true,
  },
  {
    slug: "pcos-menstrual",
    icon: "fa-solid fa-droplet",
    title: "PCOS & Menstrual Care",
    blurb: "Diagnosis and management of irregular cycles, PCOS and hormonal issues.",
    description:
      "Evaluation and long-term management of polycystic ovary syndrome (PCOS), irregular or painful periods and other hormonal imbalances, with lifestyle and medical guidance tailored to you.",
    featured: true,
  },
  {
    slug: "ultrasound-diagnostics",
    icon: "fa-solid fa-wave-square",
    title: "Ultrasound & Diagnostics",
    blurb: "On-site obstetric and gynae ultrasound with fast, accurate reporting.",
    description:
      "In-house ultrasound including obstetric (pregnancy) and gynaecological scans, plus radiology support — giving your doctor accurate information quickly, without an extra trip elsewhere.",
    featured: true,
  },
  {
    slug: "laboratory",
    icon: "fa-solid fa-vial",
    title: "Laboratory & Pathology",
    blurb: "Reliable lab testing on-site for quicker diagnosis and treatment.",
    description:
      "A full range of pathology and laboratory tests handled on-site, so results reach your doctor faster and your treatment can begin without delay.",
    featured: true,
  },
  {
    slug: "general-medicine",
    icon: "fa-solid fa-stethoscope",
    title: "General & Family Medicine",
    blurb: "Everyday healthcare for the whole family, all under one roof.",
    description:
      "General physician services for common illnesses, infections, fever and chronic conditions — convenient family healthcare alongside our specialist women's services.",
  },
  {
    slug: "laparoscopic-surgery",
    icon: "fa-solid fa-user-doctor",
    title: "Gynae & Laparoscopic Surgery",
    blurb: "Modern surgical care with faster recovery and minimal scarring.",
    description:
      "Gynaecological and minimally-invasive (laparoscopic) surgical procedures performed by experienced consultants, focused on safety, faster recovery and the best possible outcomes.",
  },
  {
    slug: "well-woman",
    icon: "fa-solid fa-shield-heart",
    title: "Well-Woman & Screening",
    blurb: "Preventive check-ups and screening to catch problems early.",
    description:
      "Routine well-woman check-ups, cervical and breast screening and preventive counselling — because early detection is the most powerful tool for long-term health.",
  },
  {
    slug: "emergency-pharmacy",
    icon: "fa-solid fa-truck-medical",
    title: "24/7 Emergency & Pharmacy",
    blurb: "Round-the-clock emergency care and an in-house pharmacy.",
    description:
      "A 24/7 emergency service for obstetric and medical emergencies, backed by an in-house pharmacy so essential medicines are always within reach when you need them most.",
  },
];

export const featuredServices = services.filter((s) => s.featured);

/** Short extra-services chips shown under the main grid. */
export const extraServices: string[] = [
  "Postnatal & newborn care",
  "Menopause management",
  "Hormonal evaluation",
  "Contraception counselling",
  "Antenatal classes",
  "Vaccination",
  "Cervical screening (Pap smear)",
  "Pregnancy ultrasound",
  "ECG",
  "Pre-marital counselling",
  "Diet & lifestyle guidance",
  "Inpatient & day-care",
];
