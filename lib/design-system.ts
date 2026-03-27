// =============================================================
// Ethnic Petal — Design System Tokens
// "Moonlight on silk" — Luxury-Organic aesthetic
// =============================================================

export const colors = {
  // --- Core Brand Palette ---
  cream: {
    50:  "#FDFAF5",   // Page background (warm off-white)
    100: "#F9F3E8",   // Section backgrounds
    200: "#F0E6D3",   // Card backgrounds
    300: "#E4D3B8",   // Borders, dividers
  },
  gold: {
    300: "#E8C87A",   // Subtle gold highlights
    400: "#D4A843",   // Primary gold accent
    500: "#B8891E",   // Deep gold (hover states)
    600: "#8F6A10",   // Dark gold (text on light)
  },
  rose: {
    100: "#F9ECE8",   // Soft rose background
    300: "#E8A898",   // Rose accent light
    500: "#C97060",   // Rose accent (CTAs, tags)
    700: "#9A4535",   // Deep rose (hover)
  },
  jewel: {
    teal:    "#2D6E6E",   // Deep teal (nav, headings)
    burgundy:"#6B2737",   // Burgundy accent
    indigo:  "#3D3560",   // Deep indigo
    forest:  "#2D5016",   // Forest green
  },
  neutral: {
    50:  "#FAFAFA",
    100: "#F5F5F5",
    200: "#E8E8E8",
    400: "#A3A3A3",
    600: "#6B6B6B",
    800: "#2A2A2A",   // Body text
    900: "#141414",   // Headings
  },
  white: "#FFFFFF",
  black: "#0A0A0A",
} as const;

// --- CSS Variable Map (paste into globals.css) ---
// Use these in Tailwind via var(--color-*)
export const cssVariables = `
  :root {
    /* Backgrounds */
    --bg-page:        #FDFAF5;
    --bg-section:     #F9F3E8;
    --bg-card:        #F0E6D3;

    /* Brand */
    --color-gold:     #D4A843;
    --color-gold-dark:#B8891E;
    --color-rose:     #C97060;
    --color-rose-dark:#9A4535;
    --color-teal:     #2D6E6E;
    --color-burgundy: #6B2737;

    /* Text */
    --text-primary:   #141414;
    --text-body:      #2A2A2A;
    --text-muted:     #6B6B6B;
    --text-subtle:    #A3A3A3;

    /* Borders */
    --border-light:   #E4D3B8;
    --border-medium:  #D0BC9A;

    /* Shadows */
    --shadow-sm:  0 1px 3px rgba(180, 140, 60, 0.08);
    --shadow-md:  0 4px 16px rgba(180, 140, 60, 0.12);
    --shadow-lg:  0 8px 32px rgba(180, 140, 60, 0.16);
    --shadow-xl:  0 16px 48px rgba(180, 140, 60, 0.20);
  }
`;

// =============================================================
// Typography
// =============================================================
export const typography = {
  fonts: {
    // Display / Headings — elegant serif
    display: "'Cormorant Garamond', 'Georgia', serif",
    // Body — clean, readable humanist sans
    body:    "'DM Sans', 'Helvetica Neue', sans-serif",
    // Accent — for labels, tags, nav items
    accent:  "'Jost', 'Futura', sans-serif",
  },

  // Google Fonts import string
  googleFonts:
    "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=Jost:wght@300;400;500;600&display=swap",

  scale: {
    xs:   "0.75rem",    // 12px — labels, badges
    sm:   "0.875rem",   // 14px — captions, metadata
    base: "1rem",       // 16px — body text
    lg:   "1.125rem",   // 18px — large body
    xl:   "1.25rem",    // 20px — subheadings
    "2xl":"1.5rem",     // 24px — card headings
    "3xl":"1.875rem",   // 30px — section headings
    "4xl":"2.25rem",    // 36px — page titles
    "5xl":"3rem",       // 48px — hero text
    "6xl":"3.75rem",    // 60px — hero large
    "7xl":"4.5rem",     // 72px — hero XL
  },

  weight: {
    light:   300,
    regular: 400,
    medium:  500,
    semibold:600,
  },

  lineHeight: {
    tight:  1.2,
    snug:   1.35,
    normal: 1.6,
    relaxed:1.75,
  },

  letterSpacing: {
    tight:  "-0.02em",
    normal: "0em",
    wide:   "0.05em",
    wider:  "0.1em",
    widest: "0.2em",   // For all-caps labels
  },
} as const;

// =============================================================
// Spacing
// =============================================================
export const spacing = {
  // Section vertical padding
  section: {
    sm:  "3rem",    // 48px — tight sections
    md:  "5rem",    // 80px — standard sections
    lg:  "7rem",    // 112px — spacious sections
    xl:  "10rem",   // 160px — hero sections
  },
  // Container max-widths
  container: {
    sm:  "640px",
    md:  "768px",
    lg:  "1024px",
    xl:  "1280px",
    "2xl":"1440px",
  },
} as const;

// =============================================================
// Border Radius
// =============================================================
export const radius = {
  none:  "0",
  sm:    "4px",
  md:    "8px",
  lg:    "12px",
  xl:    "16px",
  "2xl": "24px",
  full:  "9999px",
} as const;

// =============================================================
// Animation
// =============================================================
export const animation = {
  duration: {
    fast:   "150ms",
    normal: "300ms",
    slow:   "500ms",
    slower: "800ms",
  },
  easing: {
    default:  "cubic-bezier(0.4, 0, 0.2, 1)",
    spring:   "cubic-bezier(0.34, 1.56, 0.64, 1)",
    smooth:   "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    entrance: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  },
} as const;

// =============================================================
// Product Categories
// =============================================================
export const categories = [
  { slug: "churidars",     label: "Churidars",      color: colors.jewel.teal },
  { slug: "anarkalis",     label: "Anarkalis",      color: colors.jewel.burgundy },
  { slug: "salwar-suits",  label: "Salwar Suits",   color: colors.jewel.indigo },
  { slug: "dupattas",      label: "Dupattas",       color: colors.rose[500] },
  { slug: "new-arrivals",  label: "New Arrivals",   color: colors.gold[500] },
  { slug: "sale",          label: "Sale",           color: colors.rose[700] },
] as const;

// =============================================================
// Sizes
// =============================================================
export const sizes = ["XS", "S", "M", "L", "XL", "XXL", "Custom"] as const;

// =============================================================
// Site Config
// =============================================================
export const siteConfig = {
  name:        "Ethnic Petal",
  tagline:     "Wear Your Heritage",
  description: "Premium South Asian designer dresses for girls and women — Anarkali, Lehenga, Salwar Suits & more.",
  url:         "https://ethnic-petal.vercel.app",
  social: {
    instagram: "https://instagram.com/ethnicpetal",
    facebook:  "https://facebook.com/ethnicpetal",
    whatsapp:  "https://wa.me/1XXXXXXXXXX",
  },
  contact: {
    email:   "hello@ethnicpetal.com",
    phone:   "+1 (832) XXX-XXXX",
    location:"Houston, TX",
  },
  currency: "USD",
  shipping: {
    freeThreshold: 150,   // Free shipping above $150
    standardRate:  5.99,
    expressRate:   12.99,
  },
} as const;
