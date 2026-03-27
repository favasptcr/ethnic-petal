export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  colors?: string[];
};

export const CATEGORIES = [
  "All",
  "Anarkali",
  "Salwar Suits",
  "Lehenga",
  "Sharara",
  "Kurta Sets",
  "Co-ords",
];

export const GIRLS_CATEGORIES = [
  "All",
  "Anarkali",
  "Salwar Suits",
  "Lehenga",
  "Sharara",
  "Kurta Sets",
  "Co-ords",
];

export const girlsProducts: Product[] = [
  {
    id: 101,
    name: "Blush Pink Lehenga Set",
    category: "Lehenga",
    price: 89,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    badge: "New",
    colors: ["#f4c2c2", "#d4af37", "#fff"],
  },
  {
    id: 102,
    name: "Royal Blue Anarkali",
    category: "Anarkali",
    price: 75,
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80",
    badge: "Bestseller",
    colors: ["#1a3a6b", "#d4af37", "#fff"],
  },
  {
    id: 103,
    name: "Mint Green Salwar Set",
    category: "Salwar Suits",
    price: 65,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
    colors: ["#a8d5c2", "#fff", "#f4c2c2"],
  },
  {
    id: 104,
    name: "Festive Red Sharara",
    category: "Sharara",
    price: 95,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    badge: "Sale",
    colors: ["#8b1a1a", "#d4af37", "#fff"],
  },
  {
    id: 105,
    name: "Lavender Kurta Set",
    category: "Kurta Sets",
    price: 55,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    badge: "New",
    colors: ["#9b8ec4", "#fff", "#f4c2c2"],
  },
  {
    id: 106,
    name: "Golden Tissue Lehenga",
    category: "Lehenga",
    price: 115,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    badge: "Bestseller",
    colors: ["#d4af37", "#c9a84c", "#fff"],
  },
  {
    id: 107,
    name: "Coral Anarkali Set",
    category: "Anarkali",
    price: 70,
    image: "https://images.unsplash.com/photo-1485518882345-15568b007407?w=600&q=80",
    colors: ["#ff6b6b", "#fff", "#d4af37"],
  },
  {
    id: 108,
    name: "Teal Salwar Suit",
    category: "Salwar Suits",
    price: 60,
    originalPrice: 80,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80",
    badge: "Sale",
    colors: ["#2a9d8f", "#fff", "#d4af37"],
  },
  {
    id: 109,
    name: "Peach Co-ord Set",
    category: "Co-ords",
    price: 72,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    badge: "New",
    colors: ["#ffcba4", "#fff", "#f4c2c2"],
  },
  {
    id: 110,
    name: "White Embroidered Kurta",
    category: "Kurta Sets",
    price: 58,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    colors: ["#fff", "#d4af37", "#f4c2c2"],
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Rose Gold Anarkali Set",
    category: "Anarkali",
    price: 189,
    originalPrice: 240,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    badge: "Sale",
    colors: ["#c9a96e", "#8b1a1a", "#2c5f2e"],
  },
  {
    id: 2,
    name: "Midnight Blue Palazzo Suit",
    category: "Salwar Suits",
    price: 145,
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    badge: "New",
    colors: ["#1a1a5e", "#8b1a1a", "#2c2c2c"],
  },
  {
    id: 3,
    name: "Emerald Embroidered Lehenga",
    category: "Lehenga",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1594938298603-376cf1d3de78?w=600&q=80",
    badge: "Bestseller",
    colors: ["#2c5f2e", "#d4af37", "#8b1a1a"],
  },
  {
    id: 4,
    name: "Ivory Sharara Set",
    category: "Sharara",
    price: 175,
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80",
    colors: ["#f5f0e8", "#c9a96e", "#2c2c2c"],
  },
  {
    id: 5,
    name: "Crimson Floral Kurta Set",
    category: "Kurta Sets",
    price: 99,
    originalPrice: 130,
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80",
    badge: "Sale",
    colors: ["#8b1a1a", "#d4af37", "#f5f0e8"],
  },
  {
    id: 6,
    name: "Dusty Rose Co-ord Set",
    category: "Co-ords",
    price: 135,
    image:
      "https://images.unsplash.com/photo-1631233859262-0d3c98c1e870?w=600&q=80",
    badge: "New",
    colors: ["#d4a5a5", "#2c2c2c", "#f5f0e8"],
  },
  {
    id: 7,
    name: "Golden Tissue Anarkali",
    category: "Anarkali",
    price: 215,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80&sat=-20&hue=30",
    colors: ["#d4af37", "#2c2c2c", "#8b1a1a"],
  },
  {
    id: 8,
    name: "Pastel Floral Salwar Set",
    category: "Salwar Suits",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80&sat=-30",
    badge: "New",
    colors: ["#b8d8d8", "#f5c6c6", "#f5f0e8"],
  },
  {
    id: 9,
    name: "Ruby Red Lehenga Choli",
    category: "Lehenga",
    price: 385,
    originalPrice: 450,
    image:
      "https://images.unsplash.com/photo-1594938298603-376cf1d3de78?w=600&q=80&sat=30",
    badge: "Sale",
    colors: ["#8b1a1a", "#d4af37", "#2c2c2c"],
  },
  {
    id: 10,
    name: "Sage Green Kurta Set",
    category: "Kurta Sets",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80&hue=60",
    colors: ["#7a9e7e", "#f5f0e8", "#2c2c2c"],
  },
  {
    id: 11,
    name: "Lavender Sharara Set",
    category: "Sharara",
    price: 165,
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80&hue=60",
    badge: "New",
    colors: ["#9b8ec4", "#f5f0e8", "#d4af37"],
  },
  {
    id: 12,
    name: "Black Mirror Work Co-ord",
    category: "Co-ords",
    price: 155,
    image:
      "https://images.unsplash.com/photo-1631233859262-0d3c98c1e870?w=600&q=80&sat=-80",
    colors: ["#2c2c2c", "#d4af37", "#8b1a1a"],
  },
];
