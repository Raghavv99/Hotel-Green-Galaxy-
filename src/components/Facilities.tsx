import React from 'react';
import { motion } from 'motion/react';
import { Wifi, Wind, Utensils, Bell, Car, Video, Zap, Clock, Users } from 'lucide-react';

const facilities = [
  { name: 'Free WiFi', icon: Wifi },
  { name: 'AC Rooms', icon: Wind },
  { name: 'Restaurant', icon: Utensils },
  { name: 'Room Service', icon: Bell },
  { name: 'On-site Parking', icon: Car },
  { name: 'CCTV Security', icon: Video },
  { name: 'Power Backup', icon: Zap },
  { name: '24/7 Reception', icon: Clock },
  { name: 'Family Friendly', icon: Users },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-hotel-ivory relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-hotel-gold-dark font-sans tracking-[0.2em] uppercase text-sm mb-4"
          >
            Our Offerings
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-hotel-emerald-dark mb-6"
          >
            Hotel Facilities
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12">
          {facilities.map((fac, index) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-20 h-20 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-full mb-4 group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300">
                  <Icon className="w-8 h-8 text-hotel-gold-dark" strokeWidth={1.5} />
                </div>
                <h4 className="text-hotel-emerald-dark font-sans font-medium text-sm tracking-wider uppercase text-center">
                  {fac.name}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
