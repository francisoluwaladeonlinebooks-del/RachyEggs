import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../data/farmData';

interface HeroProps {
  onOrderNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] lg:h-[620px] overflow-hidden bg-stone-900 select-none">
      {/* Background Image Carousel with subtle zoom & crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          {/* Authentic warm vignette & contrast darkening for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/40 to-stone-950/70" />
          <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply" />
        </motion.div>
      </AnimatePresence>

      {/* Subtle farm stamp watermarks in background */}
      <div className="absolute top-4 left-6 hidden md:block text-white/40 text-xs tracking-widest uppercase font-serif">
        Rachy Fresh Eggs · Lokoja, Kogi State
      </div>
      <div className="absolute top-4 right-6 hidden md:block text-white/40 text-xs tracking-widest uppercase font-serif">
        Under The Rachy Brand · Retail &amp; Wholesale
      </div>

      {/* Left Slider Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all hover:scale-110 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Slider Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-all hover:scale-110 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Framed Box (Exact reproduction of white-bordered box in design image) */}
      <div className="relative z-10 h-full max-w-5xl mx-auto px-6 flex items-center justify-center">
        <motion.div
          key={`content-${slide.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl w-full mx-auto"
        >
          {/* Framed White Box with semi-transparent background and crisp white border */}
          <div className="border border-white/90 bg-stone-900/60 backdrop-blur-md px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14 text-center shadow-2xl relative">
            {/* Corner vintage notches */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-amber-300" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-amber-300" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-amber-300" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-amber-300" />

            {/* Subtle top kicker */}
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold mb-2">
              <Sparkles className="w-3 h-3" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Headline (Exact "ORGANIC EGG*" typography from design) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-brand tracking-[0.12em] text-white uppercase drop-shadow-sm mb-3">
              {slide.title}
            </h2>

            {/* Subtitle Latin / Farm Story paragraph */}
            <p className="text-stone-200 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-lg mx-auto mb-6">
              {slide.subtitle}
            </p>

            <div className="text-[11px] sm:text-xs text-amber-200/90 tracking-wider uppercase font-medium mb-6">
              {slide.highlight}
            </div>

            {/* Vivid Red Button: "ORDER NOW!" (matching design image) */}
            <div>
              <button
                onClick={onOrderNow}
                className="inline-block bg-[#c91a1a] hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs sm:text-sm tracking-[0.2em] px-8 sm:px-10 py-3 uppercase shadow-lg hover:shadow-red-900/50 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                ORDER NOW!
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === idx 
                ? 'w-8 h-2 bg-amber-400' 
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
