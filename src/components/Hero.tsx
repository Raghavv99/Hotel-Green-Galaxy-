import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Star, CalendarDays } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-hotel-emerald-dark">
      {/* Background Image with Fallback and Parallax */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center w-full h-full bg-fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-c6a4d140b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"), url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' 
        }}
      >
        {/* Premium Dark Overlay (40-60% opacity) */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-hotel-emerald-dark/90 via-hotel-emerald-dark/40 to-transparent" />
      </motion.div>

      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-hotel-gold/30 blur-[1px]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
            }}
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              top: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              left: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Luxury Rating Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-hotel-gold/50" />
            <div className="flex text-hotel-gold space-x-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3 h-3 md:w-4 md:h-4 fill-hotel-gold" />
              ))}
            </div>
            <div className="h-[1px] w-8 md:w-12 bg-hotel-gold/50" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            Experience Luxury & Comfort <br className="hidden md:block" />
            <span className="italic text-hotel-gold drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">at Hotel Green Galaxy</span>
          </h1>
          
          <p className="text-hotel-ivory/90 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Premium Stay Experience in the Heart of Jhansi
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => scrollTo('#booking')}
              className="w-full sm:w-auto bg-hotel-gold hover:bg-white text-hotel-emerald-dark hover:text-hotel-emerald-dark px-10 py-4 font-sans tracking-widest text-sm uppercase transition-all duration-500 group flex items-center justify-center shadow-[0_0_20px_rgba(201,162,39,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Book Your Stay
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto border-2 border-white/80 hover:border-hotel-gold text-white hover:text-hotel-gold hover:bg-hotel-gold/10 backdrop-blur-sm px-10 py-4 font-sans tracking-widest text-sm uppercase transition-all duration-500"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Floating Booking CTA (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-20"
      >
        <button 
          onClick={() => scrollTo('#booking')}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white hover:bg-hotel-gold hover:text-hotel-emerald-dark hover:border-hotel-gold transition-all duration-300 group shadow-lg"
          title="Quick Book"
        >
          <CalendarDays className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-hotel-ivory/60 text-[10px] tracking-[0.3em] uppercase mb-3">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-hotel-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
