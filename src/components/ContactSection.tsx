import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/farmData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'wholesale-supply',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.phone && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          phone: '',
          topic: 'wholesale-supply',
          message: ''
        });
        setSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#fbf8f1] dark:bg-[#161413] py-16 sm:py-20 border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-red-700 dark:text-red-400 text-xs font-bold tracking-[0.2em] uppercase block mb-1">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-brand tracking-[0.14em] text-stone-900 dark:text-stone-100 uppercase">
            CONTACT RACHY FRESH EGGS
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mt-2 mb-4" />
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif">
            Headquartered in Lokoja, Kogi State. Reach our customer service and wholesale dispatch desk via phone, email, or WhatsApp.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Farm Info */}
          <div className="lg:col-span-5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 sm:p-8 rounded-xs text-left shadow-sm">
            <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100 mb-6">
              Rachy Fresh Eggs Hub &amp; Dispatch Desk
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-stone-900 dark:text-stone-100">Distribution Location</span>
                  <span>{BUSINESS_INFO.address}</span>
                  <span className="block text-stone-500">Lokoja, Kogi State, Nigeria</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 dark:text-stone-100">Telephone Lines</span>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-red-700 dark:hover:text-red-400 font-sans">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <div>
                  <span className="font-bold block text-stone-900 dark:text-stone-100">Orders &amp; Inquiries</span>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-red-700 dark:hover:text-red-400 font-sans truncate">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-stone-200 dark:border-stone-800">
                <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-stone-900 dark:text-stone-100">Hours of Dispatch</span>
                  <span>Monday – Saturday: 07:00 AM – 06:00 PM</span>
                  <span className="block text-stone-400">Sunday Deliveries by Advance Booking</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello Rachy Fresh Eggs, I would like to make an inquiry about egg crates in Lokoja.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Chat Directly on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 sm:p-8 rounded-xs shadow-sm">
            <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100 mb-2">
              Send an Inquiry or Book an Order
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mb-6 font-serif">
              Fill in your details below and our sales desk will reach out promptly.
            </p>

            {submitted ? (
              <div className="py-12 text-center text-emerald-700 dark:text-emerald-400 space-y-2">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-600" />
                <h4 className="text-lg font-bold font-serif">Inquiry Successfully Received!</h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 max-w-sm mx-auto font-serif">
                  Thank you for reaching out to Rachy Fresh Eggs (under The Rachy Brand). We will contact you immediately.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1">
                      Your Name / Business *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Danladi"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 803..."
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-red-600"
                    >
                      <option value="wholesale-supply">Wholesale Bulk Supply (Retailer / Bakery / Hotel)</option>
                      <option value="household-crates">Household Egg Crates Delivery in Lokoja</option>
                      <option value="distributor-partnership">Commercial Distributor Partnership</option>
                      <option value="interstate-delivery">Interstate Freight Inquiry (Abuja, Lagos, etc.)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1">
                    Your Message / Order Requirement *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Specify crate size (Small ₦5,500, Medium ₦6,500, Jumbo ₦8,000), quantity needed, and delivery location in Lokoja."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-[#faf7f2] dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-red-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#c91a1a] hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Order Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
