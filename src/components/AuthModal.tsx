import React, { useState } from 'react';
import { X, User, LogIn, CheckCircle2, Shield, Calendar } from 'lucide-react';
import { UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onLogin: (user: UserProfile) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('claire.schmidt@example.de');
  const [name, setName] = useState('Claire Schmidt');
  const [password, setPassword] = useState('••••••••••');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      name: name.trim() || 'Claire Schmidt',
      email: email.trim(),
      address: 'Königsallee 42, 40212 Düsseldorf',
      phone: '+49 170 555 8192',
      subscriptionActive: true
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 max-w-md w-full p-6 sm:p-8 rounded-xs shadow-2xl relative text-stone-900 dark:text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {currentUser ? (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3 pb-4 border-b border-stone-200 dark:border-stone-800">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 flex items-center justify-center font-bold text-lg font-serif">
                {currentUser.name[0]}
              </div>
              <div>
                <h3 className="font-bold font-serif text-lg">{currentUser.name}</h3>
                <span className="text-xs text-stone-500 font-sans">{currentUser.email}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs font-serif">
              <div className="p-3 bg-[#faf7f2] dark:bg-stone-900 rounded-xs border border-stone-200 dark:border-stone-800">
                <span className="font-bold uppercase tracking-wider text-[10px] text-stone-500 block mb-1">
                  Default Farm Delivery Address
                </span>
                <p className="text-stone-800 dark:text-stone-200">{currentUser.address}</p>
              </div>

              <div className="p-3 bg-emerald-50 dark:bg-stone-900 rounded-xs border border-emerald-200 dark:border-stone-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-emerald-800 dark:text-emerald-400 block">
                    Weekly Breakfast Subscription Active
                  </span>
                  <span className="text-[11px] text-stone-600 dark:text-stone-400">
                    Next delivery: Tuesday 07:00 AM (2 Cartons Pasture-Raised Brown)
                  </span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
            </div>

            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full py-2.5 border border-stone-300 dark:border-stone-700 hover:border-red-600 text-stone-800 dark:text-stone-200 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
            >
              Log Out of Farm Account
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <div className="flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-widest mb-1">
                <LogIn className="w-3.5 h-3.5" />
                <span>Customer Portal</span>
              </div>
              <h3 className="text-2xl font-bold font-serif">
                {mode === 'signin' ? 'Sign In to Your Account' : 'Register Farm Account'}
              </h3>
              <p className="text-xs text-stone-500 font-serif mt-1">
                Manage your morning doorstep recurring deliveries and farm orders.
              </p>
            </div>

            <div className="flex border-b border-stone-200 dark:border-stone-800">
              <button
                type="button"
                onClick={() => setMode('signin')}
                className={`py-2 px-4 text-xs font-bold uppercase tracking-wider border-b-2 cursor-pointer ${
                  mode === 'signin'
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-stone-500'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`py-2 px-4 text-xs font-bold uppercase tracking-wider border-b-2 cursor-pointer ${
                  mode === 'signup'
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-stone-500'
                }`}
              >
                Create Account
              </button>
            </div>

            <div className="space-y-3">
              {mode === 'signup' && (
                <div>
                  <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs"
                  />
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-stone-600 dark:text-stone-400 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#c91a1a] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-[0.18em] rounded-xs shadow-md cursor-pointer"
            >
              {mode === 'signin' ? 'Sign In & View Subscriptions' : 'Create Farm Account'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
