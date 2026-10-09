import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Lock, Truck, CreditCard, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  appliedPromo: string | null;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  appliedPromo,
  onOrderSuccess
}) => {
  const [formData, setFormData] = useState({
    name: 'Musa Ibrahim',
    email: 'musa.ibrahim@example.ng',
    address: 'Plot 14, Lokongoma Phase 2',
    postalCode: '260101',
    city: 'Lokoja, Kogi State',
    phone: '+234 803 555 1234',
    deliveryDay: 'Morning Shift (07:00 AM – 11:30 AM)',
    notes: 'Call before arriving at the gate / provision store entrance',
    paymentMethod: 'transfer'
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const totalCrates = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const deliveryFee = totalCrates >= 5 ? 0 : 1000;
  const total = Math.max(0, subtotal - discount + deliveryFee);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const generatedOrder = `RFE-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);
      setIsProcessing(false);
      setOrderComplete(true);
      onOrderSuccess();

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white dark:bg-[#181614] border border-stone-200 dark:border-stone-800 max-w-2xl w-full p-6 sm:p-8 rounded-xs shadow-2xl relative my-8 text-stone-900 dark:text-stone-100 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {orderComplete ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 dark:text-emerald-400">
              Rachy Fresh Eggs Order Confirmed!
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif">
              Thank You, {formData.name}!
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 font-serif max-w-md mx-auto">
              Your {totalCrates} {totalCrates === 1 ? 'crate' : 'crates'} of fresh eggs (30 eggs/crate) have been scheduled for dispatch in Lokoja. Our logistics team will call <strong>{formData.phone}</strong> before arrival.
            </p>

            <div className="p-4 bg-amber-50 dark:bg-stone-800 rounded-xs border border-amber-200 dark:border-stone-700 max-w-sm mx-auto text-xs font-serif text-left space-y-1">
              <div><strong>Order Number:</strong> {orderNumber}</div>
              <div><strong>Delivery Shift:</strong> {formData.deliveryDay}</div>
              <div><strong>Location:</strong> {formData.address}, {formData.city}</div>
              <div><strong>Total Due:</strong> ₦{total.toLocaleString()}</div>
              <div><strong>Payment Mode:</strong> {formData.paymentMethod === 'transfer' ? 'Bank Transfer' : formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Debit Card / Paystack'}</div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#c91a1a] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xs"
              >
                Back to Farm Store
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="space-y-6 text-left">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest">
                <Truck className="w-4 h-4" />
                <span>Rachy Fresh Eggs Delivery Checkout</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100 mt-1">
                Confirm Egg Crate Delivery
              </h3>
            </div>

            {/* Recipient Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                1. Customer &amp; Delivery Destination
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name / Store Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (WhatsApp Active)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Street / Compound Address (e.g. Ganaja Road)"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="sm:col-span-2 px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs"
                />
                <input
                  type="text"
                  required
                  placeholder="City / Area (e.g. Lokoja)"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs"
                />
              </div>
            </div>

            {/* Delivery Window */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                2. Preferred Dispatch Shift
              </h4>
              <select
                value={formData.deliveryDay}
                onChange={(e) => setFormData({ ...formData, deliveryDay: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xs"
              >
                <option value="Morning Shift (07:00 AM – 11:30 AM)">Morning Shift (07:00 AM – 11:30 AM) — Ideal for Bakeries &amp; Stores</option>
                <option value="Afternoon Shift (01:00 PM – 05:30 PM)">Afternoon Shift (01:00 PM – 05:30 PM) — Ideal for Households &amp; Canteens</option>
                <option value="Next Day Priority Dispatch">Next Day Priority Early Dispatch</option>
              </select>
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
                3. Payment Option
              </h4>
              <div className="grid grid-cols-3 gap-3 text-xs">
                {[
                  { id: 'transfer', label: 'Bank Transfer' },
                  { id: 'cod', label: 'Pay on Delivery' },
                  { id: 'card', label: 'Debit Card' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: item.id })}
                    className={`py-2 px-2 border rounded-xs uppercase tracking-wider font-semibold cursor-pointer text-center text-[11px] ${
                      formData.paymentMethod === item.id
                        ? 'border-red-600 bg-red-50/50 dark:bg-red-950/30 text-red-700 dark:text-red-400'
                        : 'border-stone-300 dark:border-stone-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Order Summary & Submit */}
            <div className="p-4 bg-[#faf7f2] dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xs flex items-center justify-between">
              <div>
                <span className="text-xs text-stone-500 font-serif block">
                  Total for {totalCrates} {totalCrates === 1 ? 'Crate' : 'Crates'}:
                </span>
                <span className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                  ₦{total.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="px-6 py-3 bg-[#c91a1a] hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs uppercase tracking-[0.16em] rounded-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Booking Crates...
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    Confirm Crate Order
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
