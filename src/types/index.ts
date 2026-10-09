export interface Product {
  id: string;
  name: string;
  category: 'Fresh Eggs';
  size: 'Small' | 'Medium' | 'Jumbo';
  quantityPerCrate: string; // "30 eggs per crate"
  price: number; // in Naira ₦
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  subtitle: string;
  latinSubtitle: string;
  description: string;
  nutrition: {
    calories: number;
    protein: string;
    choline: string;
    omega3: string;
    vitaminD: string;
  };
  features: string[];
  inStock: boolean;
  bestFor: string;
}

export interface CartItem {
  product: Product;
  quantity: number; // number of crates
  isWholesaleTier?: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  address?: string;
  phone?: string;
  businessType?: string; // household, supermarket, bakery, hotel, etc.
  subscriptionActive?: boolean;
}

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  hasConsented: boolean;
}

export interface WholesaleQuote {
  name: string;
  businessName: string;
  businessType: string;
  phone: string;
  email: string;
  location: string;
  sizePreference: 'Small' | 'Medium' | 'Jumbo' | 'Mixed Assortment';
  estimatedWeeklyCrates: number;
  additionalNotes: string;
}
