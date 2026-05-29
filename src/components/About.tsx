import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-hotel-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hotel Staff and Hospitality" 
                referrerPolicy="no-referrer"
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 w-2/3 h-64 bg-hotel-emerald-dark hidden md:block rounded-sm -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury features"
                referrerPolicy="no-referrer"
                className="absolute -bottom-8 -left-8 w-48 h-48 object-cover border-8 border-hotel-ivory shadow-xl hidden md:block"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8 bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] border border-white"
          >
            <div>
              <p className="text-hotel-gold-dark font-sans tracking-[0.2em] uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-hotel-emerald-dark mb-6">
                Premium Hospitality in the Heart of Jhansi
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-600 font-sans font-light leading-relaxed">
              <p>
                Hotel Green Galaxy stands as a beacon of luxury and comfort in the historic city of Jhansi. We believe that true hospitality lies in the details, offering our guests an unforgettable experience that blends modern amenities with classic elegance.
              </p>
              <p>
                Whether you are visiting for business or leisure, our thoughtfully designed spaces, impeccable service, and commitment to excellence provide the perfect sanctuary. Located conveniently near civil lines, we bring the best of Jhansi to your doorstep while ensuring a serene retreat inside.
              </p>
            </div>
            
            <div className="pt-6 grid grid-cols-2 gap-8 border-t border-hotel-gold/30">
              <div>
                <p className="text-3xl font-serif text-hotel-emerald-dark">15+</p>
                <p className="text-sm font-sans tracking-widest uppercase text-gray-500 mt-2">Luxury Rooms</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-hotel-emerald-dark">24/7</p>
                <p className="text-sm font-sans tracking-widest uppercase text-gray-500 mt-2">Room Service</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
