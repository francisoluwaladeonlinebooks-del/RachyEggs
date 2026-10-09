import React, { useState } from 'react';
import { 
  LogIn, 
  User, 
  ShoppingCart, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { RoosterEmblem } from './Icons';
import { UserProfile } from '../types';
import { BUSINESS_INFO } from '../data/farmData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAuth: () => void;
  currentUser: UserProfile | null;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenWholesaleModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenAuth,
  currentUser,
  darkMode,
  onToggleDarkMode,
  activeSection,
  onNavigate,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  // Exact website pages requested:
  // Home, Our Products, Wholesale Orders, Contact Us, About Us
  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'products', label: 'OUR PRODUCTS' },
    { id: 'wholesale', label: 'WHOLESALE ORDERS' },
    { id: 'contact', label: 'CONTACT US' },
    { id: 'about', label: 'ABOUT US' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-[#fcf9f2] dark:bg-[#1a1816] border-b border-stone-200 dark:border-stone-800 transition-colors duration-200">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#1f1d1a] dark:bg-[#0f0e0d] text-stone-300 text-[11px] py-1.5 px-4 tracking-wider uppercase flex justify-between items-center border-b border-stone-800">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-amber-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            Fresh Farm Supply &amp; Distribution
          </span>
          <span className="hidden md:inline text-stone-500">|</span>
          <span className="hidden md:inline text-stone-400">
            Lokoja, Kogi State · Retail &amp; Wholesale Crates
          </span>
        </div>
        <div className="flex items-center gap-4 text-stone-400">
          <a 
            href={`tel:${BUSINESS_INFO.phone}`} 
            className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            title="Call orders desk"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">{BUSINESS_INFO.phone}</span>
          </a>
          <span>•</span>
          <span className="text-amber-300 font-bold hidden sm:inline">The Rachy Brand</span>
        </div>
      </div>

      {/* Main Brand & Utility Row (Matching image exact structure) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Login, My Account, My Cart */}
          <div className="flex items-center gap-3 sm:gap-5 text-xs font-semibold tracking-wider text-stone-700 dark:text-stone-300">
            {currentUser ? (
              <button 
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 text-stone-800 dark:text-stone-200 hover:text-red-700 dark:hover:text-red-400 transition-colors uppercase cursor-pointer"
                aria-label="User Profile"
              >
                <User className="w-3.5 h-3.5 text-red-600" />
                <span className="truncate max-w-[90px] sm:max-w-none">{currentUser.name.split(' ')[0]}</span>
              </button>
            ) : (
              <button 
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 hover:text-red-700 dark:hover:text-red-400 transition-colors uppercase cursor-pointer"
                aria-label="Login"
              >
                <LogIn className="w-3.5 h-3.5 text-red-600" />
                <span>LOGIN</span>
              </button>
            )}

            <button 
              onClick={onOpenAuth}
              className="hidden sm:flex items-center gap-1.5 hover:text-red-700 dark:hover:text-red-400 transition-colors uppercase cursor-pointer"
              aria-label="My Account"
            >
              <User className="w-3.5 h-3.5 text-red-600" />
              <span>MY ACCOUNT</span>
            </button>

            <button 
              onClick={onOpenCart}
              className="flex items-center gap-1.5 hover:text-red-700 dark:hover:text-red-400 transition-colors uppercase cursor-pointer relative"
              aria-label={`My Cart with ${cartCount} crates`}
            >
              <ShoppingCart className="w-3.5 h-3.5 text-red-600" />
              <span>MY CART</span>
              {cartCount > 0 && (
                <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Center Brand Identity (Exact design: EST. 2017 / Rooster / RACHY FRESH EGGS) */}
          <div className="flex flex-col items-center justify-center text-center select-none cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex items-center justify-center gap-2 mb-0.5">
              <span className="text-[10px] tracking-widest text-stone-500 dark:text-stone-400 font-serif">UNDER</span>
              <RoosterEmblem className="w-6 h-6 sm:w-7 sm:h-7 text-stone-900 dark:text-stone-100" />
              <span className="text-[10px] tracking-widest text-stone-500 dark:text-stone-400 font-serif">THE RACHY BRAND</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-brand tracking-[0.14em] sm:tracking-[0.18em] text-stone-900 dark:text-stone-100 uppercase">
              RACHY FRESH EGGS
            </h1>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-stone-500 dark:text-stone-400 uppercase -mt-0.5 font-sans">
              Lokoja, Kogi State · Nigeria
            </span>
          </div>

          {/* Right: Search, Cart Icon Bubble, Dark Mode Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop / Tablet Search */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search crate size, wholesale..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-44 lg:w-56 pl-3 pr-8 py-1.5 text-xs bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-sm text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                aria-label="Search site products and crates"
              />
              <button 
                type="button" 
                aria-label="Submit search"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className="md:hidden p-2 text-stone-600 dark:text-stone-300 hover:text-red-700"
              aria-label="Toggle search input"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Red Shopping Cart Button (Matching red circle in design mockup) */}
            <button
              onClick={onOpenCart}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#c91a1a] hover:bg-red-700 text-white flex items-center justify-center transition-transform hover:scale-105 shadow-sm relative cursor-pointer"
              aria-label={`Open shopping cart (${cartCount} crates)`}
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-400 text-stone-900 text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center border border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-1.5 sm:p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-stone-700 dark:text-stone-300 hover:text-red-600 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Search Input dropdown when opened */}
        {showSearchInput && (
          <div className="md:hidden pt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Small, Medium, Jumbo crates..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-3 pr-8 py-2 text-xs bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-sm text-stone-800 dark:text-stone-100"
                autoFocus
              />
              <Search className="w-4 h-4 text-stone-400 absolute right-3 top-2.5" />
            </div>
          </div>
        )}
      </div>

      {/* Main Navigation Bar (Exact dark bar in design mockup with user's requested pages) */}
      <nav 
        className="w-full bg-[#23201d] dark:bg-[#121110] border-t border-stone-700/50 shadow-inner"
        aria-label="Primary Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="hidden md:flex items-center justify-center space-x-6 lg:space-x-10 py-3">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5' 
                        : 'text-stone-300 hover:text-white hover:tracking-[0.16em]'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1f1d1a] border-t border-stone-800 px-4 py-4 space-y-2 animate-fadeIn">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`block w-full text-left py-2 px-3 rounded text-xs font-semibold tracking-widest uppercase transition-colors ${
                  activeSection === item.id
                    ? 'bg-stone-800 text-amber-400'
                    : 'text-stone-300 hover:bg-stone-800/60 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
