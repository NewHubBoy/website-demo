export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  badge?: string;
  images: string[];
  isLarge?: boolean;
}

export const categories = [
  "READY-TO-WEAR",
  "Knitwear",
  "Tops & Shirts",
  "T-Shirts & Sweatshirts",
  "Dresses & Jumpsuits",
  "Pants & Shorts",
  "Denim",
  "Skirts",
  "Swimwear",
  "Coats & Jackets",
  "Outerwear",
  "Leather",
  "Activewear",
];

export const products: Product[] = [
  {
    id: 1,
    name: "Silk Twill Blazer with Bow",
    price: 3200,
    category: "Coats & Jackets",
    badge: "See Now, Buy Now",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 2,
    name: "Wool Cashmere Turtleneck Dress",
    price: 4500,
    category: "Dresses & Jumpsuits",
    badge: "See Now, Buy Now",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 3,
    name: "Stretch Wool Slim Trousers",
    price: 1200,
    category: "Pants & Shorts",
    badge: "See Now, Buy Now",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 4,
    name: "Leather Biker Jacket with Web",
    price: 5800,
    category: "Coats & Jackets",
    badge: "See Now, Buy Now",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 5,
    name: "GG Canvas Jacquard Jacket",
    price: 4200,
    category: "Coats & Jackets",
    badge: "Runway",
    isLarge: true,
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop&q=80",
    ],
  },
  {
    id: 6,
    name: "Cotton Canvas Fabric Pants",
    price: 2300,
    category: "Pants & Shorts",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 7,
    name: "Wool Cashmere Sweater with Crystals",
    price: 3980,
    category: "Knitwear",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cda3a0d?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 8,
    name: "Wool Cashmere Leisure Pants",
    price: 4400,
    category: "Pants & Shorts",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 9,
    name: "Printed Silk Twill Leisure Pants",
    price: 1900,
    category: "Pants & Shorts",
    images: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 10,
    name: "Printed Silk Twill Skirt",
    price: 2500,
    category: "Skirts",
    badge: "Runway",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581044777550-4cfa60707998?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 11,
    name: "GG Cotton Denim Jacquard Jacket",
    price: 4980,
    category: "Denim",
    images: [
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 12,
    name: "Cotton Denim Pants with Horsebit",
    price: 1400,
    category: "Denim",
    images: [
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 13,
    name: "GG Fine Fabric Jacquard Top",
    price: 1100,
    category: "Tops & Shirts",
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 14,
    name: "Fine Knit Wool Sweater with Web",
    price: 1600,
    category: "Knitwear",
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=900&fit=crop&q=80",
    ],
  },
  {
    id: 15,
    name: "GG Cotton Gabardine Zip Jacket",
    price: 3600,
    category: "Coats & Jackets",
    badge: "Runway",
    isLarge: true,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop&q=80",
    ],
  },
  {
    id: 16,
    name: "GG Cotton Denim Jacquard Mini Skirt",
    price: 1300,
    category: "Skirts",
    images: [
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&h=900&fit=crop&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=900&fit=crop&q=80",
    ],
  },
];

export const announcements = [
  "Online Exclusive: Lunetta Crossbody Bag",
  "Complimentary Gift Wrapping on All Orders",
  "Discover the New Women's Collection",
  "Free Shipping & Returns",
];
