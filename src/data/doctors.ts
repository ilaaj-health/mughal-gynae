/* ============================================================
   DOCTORS
   Reconstructed from public directory listings (oladoc / Marham).
   ⚠️  TODO: confirm names, spellings, qualifications & experience.
   `image: null` renders an elegant branded initials avatar.
   Drop a real photo path (e.g. "/doctors/name.jpg" in /public)
   into `image` to use a real portrait.
   ============================================================ */

export type Doctor = {
  slug: string;
  name: string;
  title: string;            // e.g. "Consultant Gynaecologist & Obstetrician"
  credentials: string;      // e.g. "MBBS, FCPS (Gynae & Obs)"
  department: "Gynaecology & Obstetrics" | "General & Family Medicine";
  experience: number;       // years
  focus: string[];          // areas of focus
  bio: string;
  image: string | null;     // /public path or null for initials avatar
  featured?: boolean;       // shown on the home page
};

export const doctors: Doctor[] = [
  {
    slug: "dr-shumaila-mahboob",
    name: "Dr. Shumaila Mahboob",
    title: "Senior Consultant Gynaecologist & Obstetrician",
    credentials: "MBBS, MRCOG (UK)",
    department: "Gynaecology & Obstetrics",
    experience: 15,
    focus: ["High-risk pregnancy", "Obstetric care", "Gynae surgery"],
    bio: "A UK-trained (MRCOG) consultant with 15 years of experience, Dr. Shumaila Mahboob provides expert care across pregnancy, complex gynaecological conditions and surgery — combining international standards with warm, patient-centred attention.",
    image: null,
    featured: true,
  },
  {
    slug: "dr-mehwish-jameel",
    name: "Dr. Mehwish Jameel",
    title: "Consultant Gynaecologist & Obstetrician",
    credentials: "MBBS, FCPS (Gynae & Obs)",
    department: "Gynaecology & Obstetrics",
    experience: 14,
    focus: ["Antenatal care", "Normal & C-section delivery", "Women's health"],
    bio: "Dr. Mehwish Jameel is an FCPS-qualified gynaecologist with 14 years of experience in antenatal care, safe deliveries and routine women's health — known for clear guidance and a calm, reassuring approach through every stage of pregnancy.",
    image: null,
    featured: true,
  },
  {
    slug: "dr-zunaira-lutfullah",
    name: "Dr. Zunaira Lutfullah",
    title: "Consultant Gynaecologist & Obstetrician",
    credentials: "MBBS, FCPS (Gynae & Obs)",
    department: "Gynaecology & Obstetrics",
    experience: 15,
    focus: ["Infertility", "Menstrual disorders", "Laparoscopy"],
    bio: "With 15 years of experience, Dr. Zunaira Lutfullah focuses on fertility evaluation, menstrual and hormonal disorders, and minimally-invasive gynae procedures — helping women understand their options and choose the right path forward.",
    image: null,
    featured: true,
  },
  {
    slug: "dr-afshan-rashid",
    name: "Dr. Afshan Rashid",
    title: "Consultant Gynaecologist & Obstetrician",
    credentials: "MBBS, FCPS (Gynae & Obs)",
    department: "Gynaecology & Obstetrics",
    experience: 10,
    focus: ["Pregnancy care", "PCOS", "Family planning"],
    bio: "Dr. Afshan Rashid is an FCPS gynaecologist with 10 years of experience and excellent patient feedback for short wait times and attentive care, covering pregnancy management, PCOS and contraception counselling.",
    image: null,
    featured: true,
  },
  {
    slug: "dr-zunaira-ali-ahmed",
    name: "Dr. Zunaira Ali Ahmed",
    title: "Consultant Gynaecologist & Obstetrician",
    credentials: "MBBS, FCPS (Gynae & Obs)",
    department: "Gynaecology & Obstetrics",
    experience: 11,
    focus: ["Obstetrics", "Gynae consultation", "Preventive screening"],
    bio: "A PMDC-verified consultant with 11 years of experience, Dr. Zunaira Ali Ahmed provides comprehensive obstetric and gynaecological care with an emphasis on early screening and preventive women's health.",
    image: null,
  },
  {
    slug: "dr-faizan-rasheed",
    name: "Dr. Faizan Rasheed",
    title: "General & Family Physician",
    credentials: "MBBS, RMP",
    department: "General & Family Medicine",
    experience: 5,
    focus: ["General medicine", "Family care", "Acute illness"],
    bio: "Dr. Faizan Rasheed handles general and family medicine at the centre — from everyday illnesses and infections to ongoing conditions — providing prompt, practical care for the whole family.",
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
