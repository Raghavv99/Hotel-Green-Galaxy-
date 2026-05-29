import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/hotel-exterior.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-hotel-emerald-dark/80 via-hotel-emerald-dark/50 to-hotel-emerald-dark/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-hotel-gold font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-6">
            Welcome to Jhansi
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Experience Luxury & Comfort <br className="hidden md:block" />
            <span className="italic text-hotel-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">at Hotel Green Galaxy</span>
          </h1>
          <p className="text-white/90 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            A premium hotel offering comfortable stays, elegant rooms, quality hospitality, and memorable guest experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => scrollTo('#booking')}
              className="w-full sm:w-auto bg-hotel-gold hover:bg-white text-hotel-emerald-dark hover:text-hotel-emerald-dark px-10 py-4 font-sans tracking-widest text-sm uppercase transition-all duration-500 group flex items-center justify-center"
            >
              Book Your Stay
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto border-2 border-white hover:border-hotel-gold text-white hover:text-hotel-gold px-10 py-4 font-sans tracking-widest text-sm uppercase transition-all duration-500"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-hotel-gold"
        />
      </motion.div>
    </section>
  );
}
