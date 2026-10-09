/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { OurProducts } from './components/OurProducts';
import { FeaturedBanner } from './components/FeaturedBanner';
import { WholesaleOrders } from './components/WholesaleOrders';
import { DeliveryInfo } from './components/DeliveryInfo';
import { QualityStandards } from './components/QualityStandards';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { AuthModal } from './components/AuthModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { FarmTimelineModal } from './components/FarmTimelineModal';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyModal } from './components/PrivacyModal';
import { TraceabilityModal } from './components/TraceabilityModal';
import { PRODUCTS_LIST } from './data/farmData';
import { Product, CartItem, UserProfile, CookiePreferences } from './types';

export default function App() {
  // Theme state - defaults strictly to light theme
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      // Clear legacy dark settings to guarantee fresh light theme
      localStorage.removeItem('rfe_dark_mode');
      localStorage.removeItem('tme_dark_mode');
      const saved = localStorage.getItem('rfe_theme_mode');
      return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('rfe_theme_mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('rfe_theme_mode', 'light');
    }
  }, [darkMode]);

  // Cart state - initialized with 1 crate of Medium Size Fresh Eggs
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS_LIST[1], quantity: 1 } // 1 crate Medium Size Fresh Eggs (₦6,500)
  ]);
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  // User auth state
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rfe_user_profile');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return null;
        }
      }
    }
    return null;
  });

  // Cookie preferences
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rfe_cookie_prefs');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // ignore
        }
      }
    }
    return {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
      hasConsented: false
    };
  });

  // Active section & search
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTraceabilityOpen, setIsTraceabilityOpen] = useState(false);

  // Cart actions
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleApplyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'RACHY10' || clean === 'LOKOJA' || clean === 'WHOLESALE') {
      setAppliedPromo(clean);
      return { success: true, message: `Promo code ${clean} applied! 10% discount on order.` };
    }
    return { success: false, message: 'Invalid promo code. Use code RACHY10 for 10% off.' };
  };

  const handleOrderSuccess = () => {
    setCartItems([]);
    setAppliedPromo(null);
  };

  const handleLogin = (user: UserProfile) => {
    setCurrentUser(user);
    localStorage.setItem('rfe_user_profile', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('rfe_user_profile');
  };

  const handleSaveCookiePreferences = (prefs: CookiePreferences) => {
    setCookiePreferences(prefs);
    localStorage.setItem('rfe_cookie_prefs', JSON.stringify(prefs));
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] dark:bg-[#151311] text-stone-900 dark:text-stone-100 selection:bg-[#c91a1a] selection:text-white transition-colors duration-200">
      
      {/* Accessibility: Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-red-700 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      {/* Main Header (Exact design: top bar with Rachy Fresh Eggs & The Rachy Brand + dark navigation bar) */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        currentUser={currentUser}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Carousel (Rachy Fresh Eggs, 30 Eggs per crate, retail and wholesale in Lokoja & nationwide) */}
        <Hero 
          onOrderNow={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* 2. HOW IT WORKS (3 steps: SELECT, SCHEDULE, DELIVERED) */}
        <HowItWorks />

        {/* 3. OUR PRODUCTS: Small (₦5,500), Medium (₦6,500), Jumbo (₦8,000) - 30 eggs per crate */}
        <OurProducts
          products={PRODUCTS_LIST}
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          searchFilter={searchQuery}
        />

        {/* 4. Split Featured Banner: Sizzling Pan (Left) + Red Banner (Right) */}
        <FeaturedBanner onReadMore={() => setIsTimelineOpen(true)} />

        {/* 5. WHOLESALE ORDERS (Requested Page: Wholesale Orders) */}
        <WholesaleOrders />

        {/* 6. DELIVERY INFORMATION (Requested Page: Delivery Information) */}
        <DeliveryInfo />

        {/* 7. Quality Standards & Assurance */}
        <QualityStandards onOpenTraceability={() => setIsTraceabilityOpen(true)} />

        {/* 8. ABOUT US (Requested Page: About Us) */}
        <AboutUs />

        {/* 9. CONTACT US (Requested Page: Contact Us) */}
        <ContactSection />
      </main>

      {/* Footer matching design image with exact page navigation */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenCookies={() => {
          setCookiePreferences({ ...cookiePreferences, hasConsented: false });
        }}
        onOpenTraceability={() => setIsTraceabilityOpen(true)}
      />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        appliedPromo={appliedPromo}
        onApplyPromo={handleApplyPromo}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        appliedPromo={appliedPromo}
        onOrderSuccess={handleOrderSuccess}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <FarmTimelineModal
        isOpen={isTimelineOpen}
        onClose={() => setIsTimelineOpen(false)}
        onOrderNow={() => {
          setIsTimelineOpen(false);
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      <TraceabilityModal
        isOpen={isTraceabilityOpen}
        onClose={() => setIsTraceabilityOpen(false)}
      />

      {/* Persistent GDPR, NDPR & CCPA Cookie Banner */}
      <CookieBanner
        preferences={cookiePreferences}
        onSavePreferences={handleSaveCookiePreferences}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />
    </div>
  );
}
