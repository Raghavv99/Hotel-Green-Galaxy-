import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, Mail } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'Deluxe Room',
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking action
    alert("Thank you for your reservation inquiry. Our team will contact you shortly to confirm your booking.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-24 bg-hotel-emerald-dark text-hotel-ivory relative border-t border-white/10">
       <div 
        className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
      />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-hotel-gold font-sans tracking-[0.2em] uppercase text-sm mb-4">Reservation</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Book Your Luxury Stay
            </h2>
            <p className="text-white/70 font-sans font-light leading-relaxed mb-8 max-w-md">
              Secure your reservation today and prepare for an unforgettable experience at Hotel Green Galaxy. For immediate assistance, feel free to call our reception.
            </p>
            
            <div className="flex gap-6 mt-12 bg-white/5 p-6 border border-white/10 rounded-sm">
              <div className="w-12 h-12 bg-hotel-gold text-hotel-emerald-dark flex items-center justify-center shrink-0">
                <Phone />
              </div>
              <div>
                <p className="text-sm tracking-widest text-white/50 uppercase font-sans mb-1">Direct Booking</p>
                <p className="text-xl font-serif text-hotel-gold">+91 9235060018</p>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white text-hotel-emerald-dark p-8 md:p-10 shadow-2xl rounded-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Check In</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="checkIn"
                      required
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full bg-hotel-ivory border border-gray-200 px-4 py-3 focus:outline-none focus:border-hotel-gold-dark font-sans"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Check Out</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="checkOut"
                      required
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full bg-hotel-ivory border border-gray-200 px-4 py-3 focus:outline-none focus:border-hotel-gold-dark font-sans"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Guests</label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-hotel-ivory border border-gray-200 px-4 py-3 appearance-none focus:outline-none focus:border-hotel-gold-dark font-sans"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">Family (4+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Room Type</label>
                  <select 
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full bg-hotel-ivory border border-gray-200 px-4 py-3 appearance-none focus:outline-none focus:border-hotel-gold-dark font-sans"
                  >
                    <option value="Deluxe Room">Deluxe Room</option>
                    <option value="Executive Room">Executive Room</option>
                    <option value="Family Suite">Family Suite</option>
                    <option value="Luxury Suite">Luxury Suite</option>
                  </select>
                </div>
              </div>

              <hr className="border-gray-100 my-4" />

              <div className="space-y-6">
                 <div>
                  <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-hotel-ivory border border-gray-200 px-4 py-3 focus:outline-none focus:border-hotel-gold-dark font-sans"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-hotel-ivory border border-gray-200 px-4 py-3 focus:outline-none focus:border-hotel-gold-dark font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-gray-500 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-hotel-ivory border border-gray-200 px-4 py-3 focus:outline-none focus:border-hotel-gold-dark font-sans"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-hotel-emerald-dark hover:bg-black text-hotel-gold py-4 font-sans tracking-widest text-sm uppercase transition-all duration-300 mt-4"
              >
                Confirm Reservation Request
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
