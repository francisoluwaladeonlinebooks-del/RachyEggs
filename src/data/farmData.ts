import { Product } from '../types';

export const BUSINESS_INFO = {
  name: 'Rachy Fresh Eggs',
  parentBrand: 'The Rachy Brand',
  fullName: 'Rachy Fresh Eggs (under The Rachy Brand)',
  location: 'Phase 2, Lokoja, Kogi State, Nigeria',
  address: 'No. 20 Queensland Hotel, Phase 2, Lokoja, Kogi State, Nigeria',
  streetAddress: 'No. 20 Queensland Hotel, Phase 2',
  phone: '+234-803-000-7224',
  whatsapp: '+2348030007224',
  email: 'orders@rachyfresheggs.com',
  operatingHours: 'Monday – Saturday: 07:00 AM – 06:00 PM (Sunday Deliveries by Special Booking)',
  tagline: 'Farm-Fresh Quality Eggs for Every Home and Business',
  coreOffering: 'Supply and distribution of fresh eggs (retail and wholesale).',
  expansion: 'Based in Lokoja with rapid Kogi State supply, national corridors (Abuja, Lagos, Benin, Minna), and international export vision.'
};

export const HERO_SLIDES = [
  {
    id: 'hero-jumbo',
    title: 'RACHY FRESH EGGS*',
    subtitle: 'Supply and distribution of premium farm-fresh eggs (retail and wholesale). Wholesome nutrition gathered daily in Lokoja, Kogi State.',
    highlight: '30 Eggs Per Crate · Available in Small, Medium & Jumbo Sizes',
    badge: 'UNDER THE RACHY BRAND',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Retail & Wholesale Supply · Lokoja, Kogi State'
  },
  {
    id: 'hero-wholesale',
    title: 'WHOLESALE CRATES*',
    subtitle: 'Direct farm supply for retailers, provision stores, supermarkets, hotels, restaurants, and commercial bakeries across Nigeria.',
    highlight: 'Guaranteed Unbroken Egg Policy · Same-Day Lokoja Dispatch',
    badge: 'BULK SUPPLY PARTNER',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Trusted by Market Traders & Bakeries'
  },
  {
    id: 'hero-household',
    title: 'FOR EVERY HOME*',
    subtitle: 'From family breakfast tables to community catering, experience rich golden yolks and strong natural eggshell integrity.',
    highlight: 'Small (₦5,500) · Medium (₦6,500) · Jumbo (₦8,000)',
    badge: 'NATURAL NOURISHMENT',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=1600&q=80',
    tagline: 'Freshly Collected · Lokoja, Nigeria'
  }
];

export const PRODUCTS_LIST: Product[] = [
  {
    id: 'product-small',
    name: 'Small Size Fresh Eggs',
    category: 'Fresh Eggs',
    size: 'Small',
    quantityPerCrate: '30 eggs per crate',
    price: 5500,
    rating: 4.9,
    reviewCount: 86,
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80',
    badge: 'Popular for Daily Meals',
    subtitle: 'Compact, nutrient-dense farm eggs ideal for everyday household meals',
    latinSubtitle: 'High-protein farm harvest · 30 eggs per crate',
    description: 'Our Small Size Fresh Eggs offer outstanding value for daily family cooking, fast boiling, and quick breakfasts. Gathered fresh from healthy layers with clean, intact shells and rich, vibrant yolks.',
    bestFor: 'Households, student hostels, small bakeries, boiling, and daily family breakfast.',
    nutrition: {
      calories: 55,
      protein: '5.2g',
      choline: '125mg',
      omega3: '140mg',
      vitaminD: '32 IU'
    },
    features: [
      '30 fresh eggs per standard crate',
      'Sizes Available: Small',
      'Category: Fresh Eggs',
      'Daily morning collection in Lokoja',
      'Cleaned, sorted, and securely paper-crated'
    ],
    inStock: true
  },
  {
    id: 'product-medium',
    name: 'Medium Size Fresh Eggs',
    category: 'Fresh Eggs',
    size: 'Medium',
    quantityPerCrate: '30 eggs per crate',
    price: 6500,
    rating: 5.0,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80',
    badge: 'Top Seller in Lokoja',
    subtitle: 'Standard commercial grade eggs loved by retailers and families alike',
    latinSubtitle: 'The balanced standard · 30 eggs per crate',
    description: 'Medium Size Fresh Eggs represent the most sought-after crate size in Lokoja markets, provision stores, and supermarkets. Beautiful golden yolks, excellent frying consistency, and thick albumen for culinary balance.',
    bestFor: 'Provision stores, supermarkets, canteen operators, fast-food spots, and family kitchens.',
    nutrition: {
      calories: 68,
      protein: '6.1g',
      choline: '145mg',
      omega3: '175mg',
      vitaminD: '38 IU'
    },
    features: [
      '30 fresh eggs per standard crate',
      'Sizes Available: Medium',
      'Category: Fresh Eggs',
      'Optimal yolk-to-white ratio for boiling & frying',
      'Available in single retail crates or 50+ wholesale crates'
    ],
    inStock: true
  },
  {
    id: 'product-jumbo',
    name: 'Jumbo Size Fresh Eggs',
    category: 'Fresh Eggs',
    size: 'Jumbo',
    quantityPerCrate: '30 eggs per crate',
    price: 8000,
    rating: 5.0,
    reviewCount: 198,
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80',
    badge: 'Chef & Bakery Choice',
    subtitle: 'Extra-large premium eggs with deep golden yolks and maximum volume',
    latinSubtitle: 'Maximum volume & deep yolk · 30 eggs per crate',
    description: 'Our flagship Jumbo Size Fresh Eggs are selected for their commanding weight and generous size. Preferred by commercial bakeries, 5-star hotels, luxury restaurants, and caterers who demand maximum batter volume and deep yellow yolk coloring.',
    bestFor: 'Industrial bakeries, hotels, event caterers, Shawarma/Burger spots, luxury restaurants, and gift hampers.',
    nutrition: {
      calories: 82,
      protein: '7.3g',
      choline: '168mg',
      omega3: '220mg',
      vitaminD: '46 IU'
    },
    features: [
      '30 fresh eggs per heavy-duty crate',
      'Sizes Available: Jumbo',
      'Category: Fresh Eggs',
      'Highest yolk volume and baking expansion',
      'Reinforced stacking trays for interstate shipping'
    ],
    inStock: true
  }
];

export const WHOLESALE_TIERS = [
  {
    tier: 'Retail / Starter Bundle',
    crates: '1 – 9 Crates',
    priceNote: 'Standard crate pricing',
    discount: 'Full retail support & doorstep drop in Lokoja',
    features: [
      'Immediate pickup or same-day dispatch',
      'Mix and match Small, Medium, Jumbo',
      'Perfect for households & small retailers'
    ]
  },
  {
    tier: 'Commercial Retailer & Bakery',
    crates: '10 – 49 Crates',
    priceNote: '5% Wholesale Discount',
    discount: 'Priority dispatch & scheduled weekly supply',
    features: [
      'Free delivery within Lokoja metropolis',
      'Crate replacement guarantee for cracked shells',
      'Dedicated delivery route scheduling'
    ]
  },
  {
    tier: 'Distributor & Bulk Supermarket',
    crates: '50+ Crates (Van / Truckload)',
    priceNote: 'Wholesale Contract Rate',
    discount: 'Custom wholesale pricing & interstate transit',
    features: [
      'Lowest distributor unit price',
      'Interstate logistics coordination (Abuja, Lagos, etc.)',
      'Monthly payment terms for verified institutional partners'
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'SELECT',
    detail: 'Choose your desired egg crate size: Small (₦5,500), Medium (₦6,500), or Jumbo (₦8,000). All crates contain 30 freshly gathered eggs in sturdy trays.'
  },
  {
    number: '02',
    title: 'SCHEDULE',
    detail: 'Specify your delivery preference: fast doorstep delivery anywhere in Lokoja, or schedule recurring weekly bulk drops for your provision store, restaurant, or bakery.'
  },
  {
    number: '03',
    title: 'DELIVERED',
    detail: 'Carefully handled and transported with our Zero-Crack Guarantee directly to your store, kitchen, or depot in pristine condition.'
  }
];

export const EDITORIAL_CARDS = [
  {
    title: 'Commercial Baking with Jumbo Eggs',
    subtitle: 'Why Bakeries Demand Rachy Fresh Eggs',
    description: 'Learn how our Jumbo size eggs (30 eggs/crate) provide superior emulsion, moisture retention, and golden color in cakes, bread, and pastries.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read',
    category: 'Commercial Bakery Insights'
  },
  {
    title: 'The Nutritional Power of Fresh Eggs',
    subtitle: 'Nourishing Nigerian Families Daily',
    description: 'High-quality protein, essential choline for brain development, and vitamins that fuel growing children, students, and busy workers.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read',
    category: 'Family Health & Vitality'
  }
];

export const DELIVERY_ZONES = [
  {
    zone: 'Lokoja Metro - Express Delivery',
    areas: 'Ganaja Village, Lokongoma Phase 1 & 2, Felele, Adankolo, Army Barracks Road, Kabawa, Old Market, Nataco.',
    timing: 'Same-day delivery (within 2 to 4 hours for orders placed before 12 noon)',
    fee: '₦1,000 flat (Free for 5+ crates)',
    coverage: 'Local Delivery'
  },
  {
    zone: 'Kogi State Regional Hubs',
    areas: 'Kabba, Okene, Ajaokuta, Anyigba, Idah, Ankpa, Koton-Karfe.',
    timing: 'Next-day scheduled drops via regional dispatch vehicles',
    fee: 'Standard regional freight',
    coverage: 'Statewide Distribution'
  },
  {
    zone: 'Interstate Corridors (Expansion)',
    areas: 'Abuja FCT, Lagos, Benin City (Edo), Makurdi (Benue), Minna (Niger).',
    timing: 'Scheduled bulk transport runs (Min. 50 crates)',
    fee: 'Waybill / Dedicated logistics arrangement',
    coverage: 'National Supply'
  }
];

export const TIMELINE_EVENTS = [
  {
    time: '05:30 AM',
    title: 'Morning Farm Gathering',
    desc: 'Eggs are collected promptly at first light to prevent heat exposure and maintain natural freshness.'
  },
  {
    time: '07:00 AM',
    title: 'Weight Grading & Quality Inspection',
    desc: 'Every single egg is graded into Small, Medium, or Jumbo sizes. Defective or hairline-cracked shells are removed.'
  },
  {
    time: '08:30 AM',
    title: 'Crating in 30-Egg Molded Trays',
    desc: 'Eggs are nested in shock-absorbing paper pulp crates of 30 eggs each and strapped for transport stability.'
  },
  {
    time: '09:30 AM',
    title: 'Lokoja Dispatch & Regional Transit',
    desc: 'Our dispatch riders and supply vans roll out across Lokoja neighborhoods and Kogi State commercial centers.'
  }
];
