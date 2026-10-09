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

  // Page routing state: 'home' | 'products' | 'wholesale' | 'contact' | 'about'
  const [activeSection, setActiveSection] = useState<'home' | 'products' | 'wholesale' | 'contact' | 'about'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'products', 'wholesale', 'contact', 'about'].includes(hash)) {
        return hash as any;
      }
    }
    return 'home';
  });

  // Listen to hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'products', 'wholesale', 'contact', 'about'].includes(hash)) {
        setActiveSection(hash as any);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  const handleNavigate = (page: string) => {
    const targetPage = (['home', 'products', 'wholesale', 'contact', 'about'].includes(page) ? page : 'home') as any;
    setActiveSection(targetPage);
    window.location.hash = targetPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Main Header (5 Pages: Home, Our Products, Wholesale Orders, Contact Us, About Us) */}
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

      {/* Main Page Content Router */}
      <main id="main-content" className="flex-1">
        
        {/* PAGE 1: HOME */}
        {activeSection === 'home' && (
          <div className="animate-fadeIn">
            {/* Hero Carousel */}
            <Hero onOrderNow={() => handleNavigate('products')} />

            {/* How It Works (Select, Schedule, Delivered) */}
            <HowItWorks />

            {/* Featured Products Section with direct link to Our Products */}
            <OurProducts
              products={PRODUCTS_LIST}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
              searchFilter={searchQuery}
            />

            {/* Split Callout Banner */}
            <FeaturedBanner onReadMore={() => setIsTimelineOpen(true)} />

            {/* Wholesale & Commercial teaser banner linking to Wholesale Orders */}
            <section className="bg-[#f0ebe0] dark:bg-[#1b1916] py-12 px-4 sm:px-6 border-b border-stone-200 dark:border-stone-800">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-red-700 dark:text-red-400">
                    B2B Commercial Distribution
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mt-1">
                    Need Wholesale Supplies for Your Provision Store, Supermarket or Bakery?
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif max-w-2xl mt-1">
                    Enjoy scheduled delivery, volume discounts, zero-breakage replacement guarantee, and flexible payment terms.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigate('wholesale')}
                  className="shrink-0 px-6 py-3 bg-[#c91a1a] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xs shadow-md transition-colors cursor-pointer"
                >
                  View Wholesale Orders &amp; Calculator &rarr;
                </button>
              </div>
            </section>
          </div>
        )}

        {/* PAGE 2: OUR PRODUCTS */}
        {activeSection === 'products' && (
          <div className="animate-fadeIn">
            {/* Breadcrumb banner */}
            <div className="bg-[#ede7d8] dark:bg-[#1c1a17] py-4 px-4 sm:px-6 border-b border-stone-200 dark:border-stone-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-serif text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <button onClick={() => handleNavigate('home')} className="hover:text-red-700 dark:hover:text-red-400 cursor-pointer">
                    Home
                  </button>
                  <span>/</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">Our Products</span>
                </div>
                <span className="text-[11px] text-amber-800 dark:text-amber-400 font-sans font-bold hidden sm:inline">
                  All Crates Contain 30 Fresh Eggs
                </span>
              </div>
            </div>

            {/* Full Products Showcase */}
            <OurProducts
              products={PRODUCTS_LIST}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
              searchFilter={searchQuery}
            />

            {/* Crate Specs & Comparison Table */}
            <section className="w-full bg-[#fbf8f1] dark:bg-[#181614] py-12 px-4 sm:px-6 lg:px-8 border-b border-stone-200 dark:border-stone-800">
              <div className="max-w-5xl mx-auto text-left">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mb-2">
                  Egg Crate Specification &amp; Culinary Guide
                </h3>
                <p className="text-xs text-stone-500 font-serif mb-6">
                  Select the size that best aligns with your household recipes, commercial bakery formulas, or retail shelf preferences.
                </p>

                <div className="overflow-x-auto bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xs shadow-xs">
                  <table className="w-full text-xs text-left font-serif">
                    <thead className="bg-[#f5ede0] dark:bg-stone-800 text-[11px] uppercase font-bold tracking-wider text-stone-800 dark:text-stone-200 border-b border-stone-200 dark:border-stone-700">
                      <tr>
                        <th className="p-3.5">Crate Size</th>
                        <th className="p-3.5">Price Per Crate</th>
                        <th className="p-3.5">Eggs Per Crate</th>
                        <th className="p-3.5">Yolk Characteristics</th>
                        <th className="p-3.5">Recommended Applications</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 dark:divide-stone-800 text-stone-700 dark:text-stone-300">
                      <tr>
                        <td className="p-3.5 font-bold text-stone-900 dark:text-stone-100">Small Size</td>
                        <td className="p-3.5 font-bold text-[#c91a1a]">₦5,500</td>
                        <td className="p-3.5">30 Eggs</td>
                        <td className="p-3.5">Compact yolk, firm white</td>
                        <td className="p-3.5">Household breakfasts, quick boiling, noodles, student meals</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-stone-900 dark:text-stone-100">Medium Size</td>
                        <td className="p-3.5 font-bold text-[#c91a1a]">₦6,500</td>
                        <td className="p-3.5">30 Eggs</td>
                        <td className="p-3.5">Balanced yolk-to-white ratio</td>
                        <td className="p-3.5">Provision stores, supermarkets, fried eggs, canteens</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-bold text-stone-900 dark:text-stone-100">Jumbo Size</td>
                        <td className="p-3.5 font-bold text-[#c91a1a]">₦8,000</td>
                        <td className="p-3.5">30 Eggs</td>
                        <td className="p-3.5">Deep golden yolk, maximum volume</td>
                        <td className="p-3.5">Commercial bakeries, luxury hotels, Shawarma, catering</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-4 bg-amber-50 dark:bg-stone-800/80 rounded-xs border border-amber-200 dark:border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-serif">
                    <strong className="block text-stone-900 dark:text-stone-100">Ordering 10 or more crates?</strong>
                    <span className="text-stone-600 dark:text-stone-400">Take advantage of our commercial bulk wholesale contract rates and scheduled doorstep deliveries.</span>
                  </div>
                  <button
                    onClick={() => handleNavigate('wholesale')}
                    className="shrink-0 px-5 py-2 bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-white text-white dark:text-stone-900 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                  >
                    View Wholesale Pricing
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* PAGE 3: WHOLESALE ORDERS */}
        {activeSection === 'wholesale' && (
          <div className="animate-fadeIn">
            {/* Breadcrumb banner */}
            <div className="bg-[#ede7d8] dark:bg-[#1c1a17] py-4 px-4 sm:px-6 border-b border-stone-200 dark:border-stone-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-serif text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <button onClick={() => handleNavigate('home')} className="hover:text-red-700 dark:hover:text-red-400 cursor-pointer">
                    Home
                  </button>
                  <span>/</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">Wholesale Orders</span>
                </div>
                <span className="text-[11px] text-amber-800 dark:text-amber-400 font-sans font-bold hidden sm:inline">
                  Direct Farm Supply for Commercial Buyers
                </span>
              </div>
            </div>

            {/* Wholesale Hub & Calculator */}
            <WholesaleOrders />

            {/* Delivery Logistics & Handling Information */}
            <DeliveryInfo />
          </div>
        )}

        {/* PAGE 4: CONTACT US */}
        {activeSection === 'contact' && (
          <div className="animate-fadeIn">
            {/* Breadcrumb banner */}
            <div className="bg-[#ede7d8] dark:bg-[#1c1a17] py-4 px-4 sm:px-6 border-b border-stone-200 dark:border-stone-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-serif text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <button onClick={() => handleNavigate('home')} className="hover:text-red-700 dark:hover:text-red-400 cursor-pointer">
                    Home
                  </button>
                  <span>/</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">Contact Us</span>
                </div>
                <span className="text-[11px] text-amber-800 dark:text-amber-400 font-sans font-bold hidden sm:inline">
                  Lokoja Distribution Center · Fast Dispatch
                </span>
              </div>
            </div>

            {/* Contact Form, Phone, Email & WhatsApp */}
            <ContactSection />
          </div>
        )}

        {/* PAGE 5: ABOUT US */}
        {activeSection === 'about' && (
          <div className="animate-fadeIn">
            {/* Breadcrumb banner */}
            <div className="bg-[#ede7d8] dark:bg-[#1c1a17] py-4 px-4 sm:px-6 border-b border-stone-200 dark:border-stone-800">
              <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-serif text-stone-600 dark:text-stone-400">
                <div className="flex items-center gap-2">
                  <button onClick={() => handleNavigate('home')} className="hover:text-red-700 dark:hover:text-red-400 cursor-pointer">
                    Home
                  </button>
                  <span>/</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">About Us</span>
                </div>
                <span className="text-[11px] text-amber-800 dark:text-amber-400 font-sans font-bold hidden sm:inline">
                  Operating Under The Rachy Brand
                </span>
              </div>
            </div>

            {/* About Us Company Profile & History */}
            <AboutUs />

            {/* Quality Standards & Verification */}
            <QualityStandards onOpenTraceability={() => setIsTraceabilityOpen(true)} />
          </div>
        )}

      </main>

      {/* Footer matching exact 5 pages */}
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
          handleNavigate('products');
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
