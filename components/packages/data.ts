export type PackageItem = {
  slug: string;
  dates: string;
  title: string;
  description: string;
  badges: string[];
  highlights: string[];
  price: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
};

export type OfferItem = {
  title: string;
  discount: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
};

export const pilgrimagePackages: PackageItem[] = [
  {
    slug: "umrah-basic",
    dates: "12 Jan 2026 - 24 Jan 2026",
    title: "Umrah Basic Package",
    description:
      "Ideal for first-time pilgrims seeking guided worship with reliable accommodations and smooth travel arrangements.",
    badges: ["Guided Support", "Inclusive Comfort", "Shared Transport"],
    highlights: [
      "Subh Noor Hotel (5-star)",
      "Medina Zaman Cuisine",
      "Sightseeing & Economy Class",
    ],
    price: "$1,300",
    imageSrc: "/why-choose-us.png",
    imageAlt: "Pilgrims gathered inside a mosque",
    imagePosition: "center",
  },
  {
    slug: "umrah-plus",
    dates: "22 Jan 2026 - 31 Jan 2026",
    title: "Umrah Plus Package",
    description:
      "Perfect for pilgrims wanting balanced comfort, closer accommodation, and organized spiritual guidance.",
    badges: ["Comfort Hotels", "Guided Support", "Direct Flight"],
    highlights: [
      "Manarah Grand Suite (5-star)",
      "International Halal Menu",
      "Jeddah to Economy Class",
    ],
    price: "$1,500",
    imageSrc: "/qibla-hero.png",
    imageAlt: "Mosque minaret rising above the holy city",
    imagePosition: "center 36%",
  },
  {
    slug: "umrah-premium",
    dates: "08 Feb 2026 - 19 Feb 2026",
    title: "Umrah Premium Package",
    description:
      "Designed for those seeking enhanced privacy, premium lodging, and personalized pilgrimage assistance.",
    badges: ["Executive Comfort", "Private Team", "Personalized Service"],
    highlights: [
      "Royal Clock Towers (5-star)",
      "Premium Asian Dining",
      "Private transfers on arrival",
    ],
    price: "$1,800",
    imageSrc: "/about-kaaba.png",
    imageAlt: "Grand mosque courtyard prepared for pilgrims",
    imagePosition: "center",
  },
  {
    slug: "hajj-standard",
    dates: "25 May 2026 - 15 Jun 2026",
    title: "Hajj Standard Package",
    description:
      "A well-structured package offering comfortable Hajj guidance with dependable facilities and group coordination.",
    badges: ["Group Coordinator", "Ritual Guidance", "Essential Facilities"],
    highlights: [
      "Zamzam View Suites (5-star)",
      "Traditional Meal Menu",
      "Jeddah to Economy Class",
    ],
    price: "$8,000",
    imageSrc: "/about-kaaba.png",
    imageAlt: "Pilgrims gathered around the Kaaba",
    imagePosition: "center 42%",
  },
  {
    slug: "hajj-comfort",
    dates: "22 May 2026 - 14 Jun 2026",
    title: "Hajj Comfort Package",
    description:
      "Prioritise upgraded accommodations and smoother logistics for a more relaxed and focused Hajj experience.",
    badges: ["Improved Facilities", "Smooth Logistics", "Guided Experience"],
    highlights: [
      "Al Noor Elite Residency (5-star)",
      "Balance Asian Cuisine",
      "Jeddah to Economy Class",
    ],
    price: "$9,500",
    imageSrc: "/qibla-hero.png",
    imageAlt: "Kaaba and mosque architecture at golden hour",
    imagePosition: "center bottom",
  },
  {
    slug: "hajj-executive",
    dates: "01 Jun 2026 - 24 Jun 2026",
    title: "Hajj Executive Package",
    description:
      "Crafted for pilgrims needing exclusive services, premium facilities, and personalized spiritual assistance.",
    badges: ["Private Assistance", "VIP Experience", "Premium Facilities"],
    highlights: [
      "Royal Clock Towers (5-star)",
      "Premium Meal Dining",
      "Personalized hajj service desk",
    ],
    price: "$11,600",
    imageSrc: "/why-choose-us.png",
    imageAlt: "Pilgrims resting in a peaceful mosque interior",
    imagePosition: "center 30%",
  },
];

export const sacredOffers: OfferItem[] = [
  {
    title: "Early Umrah Saver",
    discount: "Up To 25% Off",
    description:
      "Book early and enjoy reduced pricing with complete pilgrimage services included.",
    imageSrc: "/qibla-hero.png",
    imageAlt: "Sunset view of a mosque courtyard",
    imagePosition: "center 38%",
  },
  {
    title: "Family Booking Deal",
    discount: "Up To 40% Off",
    description:
      "Reserve family travel together with arranged stays, transfers, and guided support.",
    imageSrc: "/why-choose-us.png",
    imageAlt: "Decorated mosque interior prepared for worshippers",
    imagePosition: "center 34%",
  },
];
