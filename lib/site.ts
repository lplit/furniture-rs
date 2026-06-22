export const SITE = {
  domain: "https://atelier-rack.example.com",
  brand: "Atelier Rack",
  tagline: "Technology that belongs in your life.",
  description:
    "Premium 8U 19\" ATX rack styled as luxury walnut furniture. Soft-close glass doors, brass hardware, silent airflow — designed for your living room, not your basement.",
  keywords: [
    "walnut computer case",
    "wooden PC case",
    "ATX rack furniture",
    "luxury PC case",
    "living room server rack",
    "8U rack",
    "custom wooden computer furniture",
  ],
  author: "Atelier Rack",
  email: "hello@atelier-rack.example.com",
  social: {
    twitterHandle: "@atelierrack",
  },
  themeColor: "#050506",
  product: {
    name: "Atelier Rack",
    fullName: "Atelier Rack — 8U Walnut ATX Rack",
    price: "2200.00",
    currency: "USD",
    availability: "https://schema.org/PreOrder",
    condition: "https://schema.org/NewCondition",
    priceValidUntil: "2027-06-14",
    category: "Furniture > Computer Furniture",
    images: {
      og: "/products/og/og-hero.jpg",
      hero: "/products/1.jpg",
      gallery: ["/products/1.jpg", "/products/2.jpeg", "/products/3.jpeg"],
      ogDirectory: [
        "/products/og/og-hero.jpg",
        "/products/og/lifestyle-wide.jpg",
        "/products/og/detail-craftsmanship.jpg",
        "/products/og/interior-rails.jpg",
        "/products/og/cable-management.jpg",
        "/products/og/watercooling-detail.jpg",
        "/products/og/lifestyle-vertical.jpg",
        "/products/og/newsletter-waitlist.jpg",
      ],
    },
    alt: {
      hero: "Atelier Rack — walnut and glass ATX rack, front view",
      interior: "Open walnut ATX rack showing 8U rails and cable channels",
      detail: "Brass hardware and soft-close glass door detail on Atelier Rack",
      lifestyle: "Walnut ATX rack in a living room setting",
    },
  },
  newsletter: {
    heading: "Be first in line",
    subheading: "Join the waitlist. No spam, just progress.",
    cta: "Join waitlist",
    placeholder: "you@example.com",
    successMessage: "You're on the list. We'll be in touch.",
    errorMessage: "Please enter a valid email address.",
  },
} as const;

export const canonicalUrl = (path = "/") => `${SITE.domain}${path}`;

export const absoluteImageUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE.domain}${path}`;
