import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Reservation = () => {
  const [formData, setFormData] = useState({ date: '', time: '', guests: '2' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState({ date: '', time: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { date: '', time: '' };
    if (!formData.date) { newErrors.date = 'Please select a date'; hasError = true; }
    if (!formData.time) { newErrors.time = 'Please select a time'; hasError = true; }
    setErrors(newErrors);
    if (hasError) return;
    setStatus('submitting');
    setTimeout(() => { setStatus('success'); }, 1500);
  };

  return (
    <section id="reservation" className="py-24 md:py-32 bg-white border-t border-prussian/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-16">
                  <span className="text-coral uppercase tracking-widest text-sm font-medium mb-4 block">Reservations</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-prussian mb-4">Your table is waiting.</h2>
                  <p className="text-prussian/60 font-light">Join us for an unforgettable dining experience.</p>
                </div>

                <div className="border border-prussian/10 p-8 md:p-12 relative">
                  {/* Left accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-raspberry"></div>

                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
                    <div>
                      <label htmlFor="date" className="block text-xs uppercase tracking-widest text-prussian/50 mb-2">Date</label>
                      <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={(e) => {
                          setFormData({ ...formData, date: e.target.value });
                          if (errors.date) setErrors({ ...errors, date: '' });
                        }}
                        className={`w-full bg-white border ${errors.date ? 'border-cherry' : 'border-prussian/20'} text-prussian p-4 focus:outline-none focus:border-prussian transition-colors`}
                      />
                      {errors.date && <p className="text-cherry text-xs mt-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-xs uppercase tracking-widest text-prussian/50 mb-2">Time</label>
                      <select
                        id="time"
                        value={formData.time}
                        onChange={(e) => {
                          setFormData({ ...formData, time: e.target.value });
                          if (errors.time) setErrors({ ...errors, time: '' });
                        }}
                        className={`w-full bg-white border ${errors.time ? 'border-cherry' : 'border-prussian/20'} text-prussian p-4 focus:outline-none focus:border-prussian transition-colors appearance-none`}
                      >
                        <option value="" disabled>Select time</option>
                        <option value="17:00">5:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                      {errors.time && <p className="text-cherry text-xs mt-1">{errors.time}</p>}
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-xs uppercase tracking-widest text-prussian/50 mb-2">Guests</label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-white border border-prussian/20 text-prussian p-4 focus:outline-none focus:border-prussian transition-colors appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-3 pt-4">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-raspberry hover:bg-cherry text-white py-4 font-medium transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center h-14 uppercase tracking-wider text-sm"
                      >
                        {status === 'submitting' ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          'Reserve a Table'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-raspberry/10 text-raspberry flex items-center justify-center mx-auto mb-8">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-3xl font-serif text-prussian mb-4">Reservation Confirmed</h3>
                <p className="text-prussian/60 mb-10 max-w-md mx-auto font-light">
                  We look forward to hosting you on {formData.date} at {formData.time} for {formData.guests} guests.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ date: '', time: '', guests: '2' });
                  }}
                  className="px-8 py-3 border border-prussian/20 hover:border-prussian text-prussian font-medium transition-colors uppercase tracking-wider text-sm"
                >
                  Make Another Booking
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
