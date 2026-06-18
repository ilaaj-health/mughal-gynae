/* ============================================================
   DOCTORS  —  real roster (from mughalgynaehospital.com / our-doctors)
   ⚠️ TODO: confirm exact spellings, credentials & photos.
   `image: null` renders an elegant branded initials avatar.
   Real photos live in /public/doctors/.
   ============================================================ */

export type Doctor = {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  department: "Gynaecology & Obstetrics" | "Medicine, Diagnostics & Rehabilitation";
  focus: string[];
  bio: string;
  image: string | null;
  experience?: number; // optional — omit when unknown
  featured?: boolean;   // shown on the home page (3)
};

export const doctors: Doctor[] = [
  {
    slug: "dr-shumaila-mahboob",
    name: "Dr Shumaila Mahboob",
    title: "Chief Consultant Gynaecologist & CEO",
    credentials: "MBBS, MRCOG (UK)",
    department: "Gynaecology & Obstetrics",
    focus: ["High-risk pregnancy", "Infertility", "Gynae surgery"],
    bio: "Dr Shumaila Mahboob leads Mughal Medical & Gynae Centre as Chief Consultant and CEO. UK-qualified with the MRCOG, she brings international training and a calm, patient-first approach to pregnancy, infertility and gynaecological surgery.",
    image: "/doctors/dr-shumaila-mahboob.jpg", // real clinic photo (masked)
    featured: true,
  },
  {
    slug: "dr-zunaira-ali-ahmad",
    name: "Dr Zunaira Ali Ahmad",
    title: "Consultant Gynaecologist & Obstetrician",
    credentials: "MBBS, FCPS (Gynae & Obs)",
    department: "Gynaecology & Obstetrics",
    focus: ["Antenatal care", "Safe deliveries", "Women's health"],
    bio: "An FCPS-qualified consultant gynaecologist and obstetrician, Dr Zunaira Ali Ahmad provides comprehensive antenatal care, safe deliveries and routine women's health — known for clear guidance and genuine, attentive care.",
    image: null,
    featured: true,
  },
  {
    slug: "dr-mahwish-jamil",
    name: "Dr Mahwish Jamil",
    title: "Consultant Gynaecologist & Obstetrician",
    credentials: "MBBS, FCPS (Gynae & Obs)",
    department: "Gynaecology & Obstetrics",
    focus: ["Pregnancy care", "Gynae consultation", "Family planning"],
    bio: "Dr Mahwish Jamil is a consultant gynaecologist and obstetrician (FCPS), caring for women through pregnancy and across every gynaecological concern with a warm, reassuring manner at every visit.",
    image: null,
    featured: true,
  },
  {
    slug: "dr-muqaddas-illyas",
    name: "Dr Muqaddas Illyas",
    title: "Specialist Gynaecologist & Obstetrician",
    credentials: "MBBS, FCPS (Gynae & Obs)",
    department: "Gynaecology & Obstetrics",
    focus: ["Obstetrics", "PCOS & menstrual care", "Preventive screening"],
    bio: "Dr Muqaddas Illyas is a specialist gynaecologist and obstetrician (FCPS), focused on obstetric care, menstrual and hormonal health, and preventive screening for women of all ages.",
    image: null,
  },
  {
    slug: "dr-ishrat-faizan",
    name: "Dr Ishrat Faizan",
    title: "Consultant Radiologist & Ultrasound Specialist",
    credentials: "MBBS, FCPS (Radiology)",
    department: "Medicine, Diagnostics & Rehabilitation",
    focus: ["Obstetric ultrasound", "Anomaly scans", "Diagnostic imaging"],
    bio: "Dr Ishrat Faizan is a consultant radiologist and senior ultrasound specialist, providing obstetric and gynaecological ultrasound, anomaly scans and diagnostic imaging with precision and care.",
    image: null,
  },
  {
    slug: "dr-faizan-rasheed",
    name: "Dr Faizan Rasheed",
    title: "General & Family Physician",
    credentials: "MBBS, RMP",
    department: "Medicine, Diagnostics & Rehabilitation",
    focus: ["General medicine", "Family care", "Acute illness"],
    bio: "Dr Faizan Rasheed handles general and family medicine at the centre — from everyday illnesses and infections to ongoing conditions — providing prompt, practical care for the whole family.",
    image: "/doctors/dr-faizan-rasheed.jpg", // real photo (cropped from poster)
  },
  {
    slug: "dr-shahtaj-bajwa",
    name: "Dr Shahtaj Bajwa",
    title: "Physiotherapist (Women's Health)",
    credentials: "DPT (Doctor of Physiotherapy)",
    department: "Medicine, Diagnostics & Rehabilitation",
    focus: ["Postnatal rehab", "Women's physiotherapy", "Pain management"],
    bio: "Dr Shahtaj Bajwa is a qualified physiotherapist (DPT) supporting women through postnatal recovery, pain management and rehabilitation with personalised, hands-on treatment plans.",
    image: null,
  },
];

export const featuredDoctors = doctors.filter((d) => d.featured);

/** Initials for the branded avatar fallback (e.g. "SM"). */
export function initials(name: string): string {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}
