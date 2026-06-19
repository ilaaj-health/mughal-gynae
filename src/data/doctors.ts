/* ============================================================
   DOCTORS  —  real roster, photos & full profiles
   Only doctors with a real photo are listed (per request).
   Photos live in /public/doctors/.
   ⚠️ Name flags: "Ishrat Faisal" (site said "Faizan") and
   "Zunaira Lutfullah" (site said "Zunaira Ali Ahmad") — confirm.
   ============================================================ */

export type Doctor = {
  slug: string;
  name: string;
  title: string;
  credentials: string;        // short — shown on cards
  qualifications?: string;    // full — shown on profile
  specialization?: string;
  department: "Gynaecology & Obstetrics" | "Diagnostics & General Medicine";
  focus: string[];
  bio: string;
  image: string | null;
  experience?: number;        // years
  pmdc?: string;
  phone?: string;             // doctor's direct line
  hospitals?: string[];
  availability?: string;
  featured?: boolean;         // shown on the home page (3)
};

export const doctors: Doctor[] = [
  {
    slug: "dr-shumaila-mahboob",
    name: "Dr Shumaila Mahboob",
    title: "Chief Consultant Gynaecologist & CEO",
    credentials: "MBBS, MRCOG (UK)",
    qualifications: "MBBS, RMP, MRCOG (UK), MRCPI (Ireland), BLS, ACLS, CIBAHI, CQI",
    specialization: "Consultant Gynaecologist",
    department: "Gynaecology & Obstetrics",
    focus: ["High-risk pregnancy", "Infertility", "Gynae surgery"],
    bio: "Dr Shumaila Mahboob leads Mughal Medical & Gynae Centre as Chief Consultant and CEO. UK- and Ireland-qualified (MRCOG, MRCPI) with international experience at the Armed Forces Hospital in Saudi Arabia, she offers expert, compassionate care and online consultations for patients across the world.",
    image: "/doctors/dr-shumaila-mahboob.jpg",
    experience: 15,
    pmdc: "62346-P",
    hospitals: ["Mughal Medical & Gynae Centre", "Armed Forces Hospital, Saudi Arabia"],
    availability: "24/7 — online consultation only",
    featured: true,
  },
  {
    slug: "dr-zunaira-lutfullah",
    name: "Dr Zunaira Lutfullah",
    title: "Consultant Gynaecologist & Obstetrician",
    credentials: "MBBS, FCPS, MRCOG-2",
    qualifications: "MBBS, FCPS, MRCOG (Part 2)",
    specialization: "Consultant Gynaecologist",
    department: "Gynaecology & Obstetrics",
    focus: ["Infertility", "Menstrual disorders", "Gynae surgery"],
    bio: "An FCPS-qualified consultant gynaecologist and obstetrician with 8 years of experience, Dr Zunaira Lutfullah cares for women through fertility, menstrual and hormonal concerns and gynaecological surgery — with experience at National Hospital, CMH and Omer Hospital, Lahore.",
    image: "/doctors/dr-zunaira-lutfullah.jpg",
    experience: 8,
    pmdc: "72943-P",
    hospitals: ["National Hospital", "CMH Hospital", "Omer Hospital", "Mughal Medical & Gynae Centre"],
    availability: "24/7 availability",
    featured: true,
  },
  {
    slug: "dr-sobia-sarwar",
    name: "Dr Sobia Sarwar",
    title: "Consultant Gynaecologist",
    credentials: "MBBS, FCPS",
    qualifications: "MBBS, FCPS (Gynaecology & Obstetrics)",
    specialization: "Consultant Gynaecologist",
    department: "Gynaecology & Obstetrics",
    focus: ["Early pregnancy care", "Gynae consultation", "Women's wellness"],
    bio: "Dr Sobia Sarwar is an FCPS consultant gynaecologist offering early-pregnancy assessment, gynaecological consultation and women's wellness care — with a focus on confidential, compassionate treatment at every visit.",
    image: "/doctors/dr-sobia-sarwar.jpg",
    hospitals: ["Mughal Medical & Gynae Centre"],
    availability: "By appointment",
    featured: true,
  },
  {
    slug: "dr-mahwish",
    name: "Dr Mahwish",
    title: "Consultant Gynaecologist & Obstetrician",
    credentials: "MBBS, FCPS",                              // TODO: confirm
    qualifications: "MBBS, FCPS (Gynaecology & Obstetrics)", // TODO: confirm
    specialization: "Consultant Gynaecologist",
    department: "Gynaecology & Obstetrics",
    focus: ["Pregnancy care", "Gynae consultation", "Family planning"], // TODO: confirm
    bio: "Dr Mahwish is a consultant gynaecologist and obstetrician at Mughal Medical & Gynae Centre, caring for women through pregnancy and across every gynaecological concern with a warm, reassuring approach at every visit.", // TODO: confirm
    image: "https://res.cloudinary.com/dpaz2mhy6/image/upload/v1776350887/ged3x1h29plfzzblkrwh.png",
    pmdc: "66026-P",
  },
  {
    slug: "dr-ishrat-faisal",
    name: "Dr Ishrat Faisal",
    title: "Consultant Radiologist & Senior Ultrasound Specialist",
    credentials: "MBBS, RMP",
    qualifications: "MBBS, RMP",
    specialization: "Senior Ultrasound Specialist",
    department: "Diagnostics & General Medicine",
    focus: ["Obstetric ultrasound", "Anomaly & growth scans", "Diagnostic imaging"],
    bio: "Dr Ishrat Faisal is a senior ultrasound specialist with 15 years of experience across leading Lahore hospitals and fertility centres. She performs all kinds of obstetric and gynaecological ultrasound — anomaly scans, growth scans and early-pregnancy imaging — capturing life's first moments with precision and care.",
    image: "/doctors/dr-ishrat-faisal.jpg",
    experience: 15,
    pmdc: "43630-S",
    hospitals: ["Australian Concept Fertility Centre", "Mughal Medical & Gynae Centre", "Surriya Azeem Hospital", "Sheikh Zayed Hospital"],
    availability: "Available all day",
  },
  {
    slug: "dr-faizan-rasheed",
    name: "Dr Faizan Rasheed",
    title: "General Physician",
    credentials: "MBBS, RMP",
    qualifications: "MBBS, RMP",
    specialization: "General Physician",
    department: "Diagnostics & General Medicine",
    focus: ["General medicine", "Family care", "Acute & chronic illness"],
    bio: "Dr Faizan Rasheed handles general and family medicine at the centre — from everyday illnesses and infections to ongoing conditions — providing prompt, practical care for the whole family. He has experience at Services Hospital, Lahore.",
    image: "/doctors/dr-faizan-rasheed.jpg",
    experience: 5,
    hospitals: ["Services Hospital", "Mughal Medical & Gynae Centre"],
    availability: "24/7 availability",
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

/* ============================================================
   OPERATING / SURGICAL SUPPORT TEAM
   Non-consulting staff (operation theatre & surgical support).
   Rendered as simple cards on the Doctors page — no booking/profile.
   ============================================================ */

export type TeamMember = {
  name: string;
  role: string;
  image: string | null;
};

export const operatingTeam: TeamMember[] = [
  {
    name: "Muhammad Mahboob Alam",
    role: "Operating Theatre Staff", // TODO: confirm exact designation
    image: "/doctors/muhammad-mahboob-alam.jpeg",
  },
];
