import React from 'react';
import { motion } from 'motion/react';
import HeroBanner from '../components/HeroBanner';
import { Utensils, Coffee, Wine } from 'lucide-react';

export default function RestaurantPage() {
  return (
    <>
      <HeroBanner 
        title="Fine Dining" 
        subtitle="Culinary Excellence"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-24 bg-hotel-ivory text-hotel-emerald-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-serif mb-6">A Taste of Perfection</h2>
              <p className="text-gray-600 font-sans font-light leading-relaxed mb-6">
                Our on-site restaurant offers a premium dining experience that perfectly balances traditional local flavors with international cuisine. Every dish is carefully crafted by our expert chefs using only the freshest, locally sourced ingredients.
              </p>
              <p className="text-gray-600 font-sans font-light leading-relaxed mb-8">
                Whether you're looking for a hearty breakfast to start your day, a business lunch, or an intimate dinner, our elegant dining room provides the perfect ambiance.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                   <p className="text-xs font-sans tracking-widest uppercase text-gray-500 mb-1">Breakfast</p>
                   <p className="font-serif">7:00 AM - 10:30 AM</p>
                </div>
                <div>
                   <p className="text-xs font-sans tracking-widest uppercase text-gray-500 mb-1">Dinner</p>
                   <p className="font-serif">7:00 PM - 11:00 PM</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Restaurant Dining"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-sm shadow-xl"
              />
            </motion.div>
          </div>

          <div className="mt-32 text-center">
            <h2 className="text-3xl font-serif mb-12">Our Culinary Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Coffee, title: "Breakfast Buffet", desc: "Start your day with our expansive breakfast buffet featuring continental and Indian options." },
                { icon: Utensils, title: "À La Carte Dining", desc: "Enjoy a refined menu of exquisite dishes prepared with seasonal ingredients." },
                { icon: Wine, title: "Curated Beverages", desc: "Pair your meal with our selection of fine wines, premium spirits, and mocktails." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 border border-gray-100 flex flex-col items-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-hotel-ivory flex items-center justify-center mb-6">
                    <item.icon className="text-hotel-gold-dark" size={32} />
                  </div>
                  <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                  <p className="text-gray-500 font-sans font-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
