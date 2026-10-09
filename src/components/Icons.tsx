import React from 'react';

// Vintage Rooster / Hen Brand Logo Icon
export const RoosterEmblem: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M33 12c.5-1.5 2-4 4.5-4s3.5 2.5 3 4c1.8-.5 3.5.5 3.5 2s-1.5 2.5-3 2.5c1.5.5 2.5 2 2 3.5s-2.5 1.5-3.5 1c.5 1-.2 2.5-1.5 2.5H35c-1 0-2-.8-2.5-1.8L31 24c-2 2-4.5 3-7.5 3-2 0-3.8-.5-5.5-1.5-3 3-5 7-5.5 11.5 2.5-1 5.5-1.5 8-1 2 .5 3.5 1.8 5 3 2.5 2 5.5 3.5 9 3.5 6 0 11-4 13-9.5.5-1.5 2-2.5 3.5-2.5 2.5 0 4.5 2 4.5 4.5 0 6.5-4 12.5-10 15.5-2 .9-4.2 1.5-6.5 1.5-3.5 0-6.8-1-9.5-2.8-2 2.2-4.8 3.8-8 4.3v4.5c0 1.1-.9 2-2 2s-2-.9-2-2v-4.6c-4.2-.8-7.8-3.2-10-6.9-.6-1-.3-2.3.7-2.9 1-.6 2.3-.3 2.9.7 1.7 2.9 4.6 4.7 7.9 5.1v-6.5c-4.5-2.5-7.5-7.2-7.5-12.6 0-7.8 5.8-14.3 13.5-15.3 1.8-.3 3.5-.2 5.2.2l1.3-1.8c.8-1.1 2.2-1.6 3.5-1.1l2.5 1c.2-.7.6-1.5 1.1-2.2z" />
    <path d="M42 22l3-2.5-3.5-1 1.5-2-2.5.5-1-2.5-1.5 2.5-2-.5 1 2.5-2 1 2.5 1z" opacity="0.8" />
  </svg>
);

// Circular Quality Guarantee Vintage Seal (matching the footer badge)
export const QualitySealBadge: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg
    viewBox="0 0 160 160"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {/* Outer dashed ring */}
    <circle cx="80" cy="80" r="76" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" />
    {/* Double solid ring */}
    <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="80" cy="80" r="65" fill="none" stroke="currentColor" strokeWidth="1" />
    
    {/* Curvilinear text paths */}
    <path id="sealUpperTextPath" d="M 24 80 A 56 56 0 0 1 136 80" fill="none" />
    <path id="sealLowerTextPath" d="M 136 80 A 56 56 0 0 1 24 80" fill="none" />
    
    <text fontSize="7.5" fontWeight="700" letterSpacing="2.5" fill="currentColor">
      <textPath href="#sealUpperTextPath" startOffset="50%" textAnchor="middle">
        ★ PASTURE RAISED · WHOLE GRAIN FED ★
      </textPath>
    </text>
    
    <text fontSize="7" fontWeight="700" letterSpacing="1.5" fill="currentColor">
      <textPath href="#sealLowerTextPath" startOffset="50%" textAnchor="middle">
        EAT WELL · LIVE WELL
      </textPath>
    </text>

    {/* Center rooster emblem */}
    <g transform="translate(62, 42) scale(0.55)">
      <path d="M33 12c.5-1.5 2-4 4.5-4s3.5 2.5 3 4c1.8-.5 3.5.5 3.5 2s-1.5 2.5-3 2.5c1.5.5 2.5 2 2 3.5s-2.5 1.5-3.5 1c.5 1-.2 2.5-1.5 2.5H35c-1 0-2-.8-2.5-1.8L31 24c-2 2-4.5 3-7.5 3-2 0-3.8-.5-5.5-1.5-3 3-5 7-5.5 11.5 2.5-1 5.5-1.5 8-1 2 .5 3.5 1.8 5 3 2.5 2 5.5 3.5 9 3.5 6 0 11-4 13-9.5.5-1.5 2-2.5 3.5-2.5 2.5 0 4.5 2 4.5 4.5 0 6.5-4 12.5-10 15.5-2 .9-4.2 1.5-6.5 1.5-3.5 0-6.8-1-9.5-2.8-2 2.2-4.8 3.8-8 4.3v4.5c0 1.1-.9 2-2 2s-2-.9-2-2v-4.6c-4.2-.8-7.8-3.2-10-6.9-.6-1-.3-2.3.7-2.9 1-.6 2.3-.3 2.9.7 1.7 2.9 4.6 4.7 7.9 5.1v-6.5c-4.5-2.5-7.5-7.2-7.5-12.6 0-7.8 5.8-14.3 13.5-15.3 1.8-.3 3.5-.2 5.2.2l1.3-1.8c.8-1.1 2.2-1.6 3.5-1.1l2.5 1c.2-.7.6-1.5 1.1-2.2z" />
    </g>

    {/* Center Banner text */}
    <rect x="22" y="94" width="116" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <text x="80" y="106" fontSize="7.5" fontWeight="800" textAnchor="middle" letterSpacing="1" fill="currentColor">
      A GUARANTEE OF QUALITY
    </text>
  </svg>
);

// Vintage Stamp Icon 1: SELECT (Rooster in ring)
export const SelectStampIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <div className={`rounded-full border-2 border-stone-800 dark:border-stone-200 flex items-center justify-center p-3 relative ${className}`}>
    <div className="absolute inset-1 rounded-full border border-stone-400 dark:border-stone-500 border-dashed" />
    <RoosterEmblem className="w-9 h-9 text-stone-800 dark:text-stone-100" />
  </div>
);

// Vintage Stamp Icon 2: SCHEDULE (Egg basket in ring)
export const ScheduleStampIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <div className={`rounded-full border-2 border-stone-800 dark:border-stone-200 flex items-center justify-center p-3 relative ${className}`}>
    <div className="absolute inset-1 rounded-full border border-stone-400 dark:border-stone-500 border-dashed" />
    <svg viewBox="0 0 48 48" className="w-9 h-9 text-stone-800 dark:text-stone-100" fill="currentColor">
      {/* Eggs in basket */}
      <path d="M16 19c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
      {/* Eggs */}
      <ellipse cx="19" cy="21" rx="4" ry="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="29" cy="21" rx="4" ry="5.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="24" cy="18" rx="4.5" ry="6" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Basket */}
      <path d="M12 24l3 14h18l3-14H12z" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="18" y1="24" x2="20" y2="38" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="24" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" />
      <line x1="30" y1="24" x2="28" y2="38" stroke="currentColor" strokeWidth="1.5" />
      <line x1="13.5" y1="31" x2="34.5" y2="31" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </div>
);

// Vintage Stamp Icon 3: DELIVERED (Farm truck / delivery in ring)
export const DeliveredStampIcon: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <div className={`rounded-full border-2 border-stone-800 dark:border-stone-200 flex items-center justify-center p-3 relative ${className}`}>
    <div className="absolute inset-1 rounded-full border border-stone-400 dark:border-stone-500 border-dashed" />
    <svg viewBox="0 0 48 48" className="w-9 h-9 text-stone-800 dark:text-stone-100" fill="currentColor">
      {/* House/Barn with Farm Gate & Delivery Van */}
      <path d="M10 24V36h28V24H10z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M8 24l16-10 16 10" fill="none" stroke="currentColor" strokeWidth="2" />
      {/* Gate slats */}
      <line x1="17" y1="26" x2="17" y2="36" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="26" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5" />
      <line x1="31" y1="26" x2="31" y2="36" stroke="currentColor" strokeWidth="1.5" />
      {/* Sun rising at dawn */}
      <circle cx="24" cy="9" r="3" fill="currentColor" />
    </svg>
  </div>
);

// Payment method badges
export const VisaBadge: React.FC = () => (
  <span className="inline-flex items-center justify-center px-2 py-0.5 bg-blue-900 text-white rounded text-[11px] font-bold tracking-wider shadow-sm">
    VISA
  </span>
);

export const MastercardBadge: React.FC = () => (
  <span className="inline-flex items-center justify-center px-1.5 py-0.5 bg-stone-900 text-white rounded text-[10px] font-bold shadow-sm">
    <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block -mr-1 opacity-90"></span>
    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
  </span>
);

export const PaypalBadge: React.FC = () => (
  <span className="inline-flex items-center justify-center px-2 py-0.5 bg-blue-700 text-white rounded text-[10px] font-bold italic shadow-sm">
    PayPal
  </span>
);
