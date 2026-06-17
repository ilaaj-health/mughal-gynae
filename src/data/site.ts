/* ============================================================
   SITE CONFIG
   ⚠️  TODO: CONFIRM all contact details with the client.
   These are PLACEHOLDERS reconstructed from public directory
   listings (oladoc / Marham). Replace before going live.
   Search the project for "TODO: confirm".
   ============================================================ */

export const site = {
  name: "Mughal Medical & Gynae Centre",
  shortName: "Mughal Gynae",
  legalName: "Mughal Medical & Gynae Centre",
  tagline: "Compassionate Women's Healthcare in Lahore",
  description:
    "Mughal Medical & Gynae Centre, Johar Town Lahore — trusted gynaecology, maternity, diagnostics and family healthcare under one roof, led by experienced female specialists.",

  // ---- Contact (TODO: confirm) ----
  phoneDisplay: "042-3237 7001",      // TODO: confirm primary landline
  phoneHref: "tel:+924232377001",     // TODO: confirm
  whatsappDisplay: "0311-1222398",    // TODO: confirm WhatsApp number
  whatsappNumber: "923111222398",     // TODO: confirm (intl, no +)
  emergencyDisplay: "042-3237 7001",  // TODO: confirm 24/7 emergency line
  emergencyHref: "tel:+924232377001", // TODO: confirm
  email: "info@mughalgynaehospital.com", // TODO: confirm
  emailHref: "mailto:info@mughalgynaehospital.com",

  // ---- Location ----
  addressLine: "663 P Block Road, Block Q Phase 2",
  addressArea: "Johar Town, Lahore, 54782",
  addressFull: "663 P Block Road, Block Q Phase 2, Johar Town, Lahore, Pakistan",
  mapQuery: "Mughal Medical and Gynae Centre, Johar Town, Lahore",

  // ---- Hours ----
  hoursEmergency: "24 / 7",
  hoursOpd: "9:00 AM – 11:00 PM",
  hoursShort: "24/7 Emergency · OPD 9 AM – 11 PM",

  // ---- Socials (TODO: confirm) ----
  socials: {
    facebook: "https://www.facebook.com/mughal.medical.gynae.clinic/", // confirmed (public FB)
    instagram: "#", // TODO: confirm
    youtube: "#",   // TODO: confirm
  },
} as const;

/** Build a WhatsApp deep link with an optional prefilled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Google Maps embed + directions URLs. */
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;
export const mapDirections = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;

export const nav: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Contact", href: "/contact" },
];
