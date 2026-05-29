import React from 'react';
import { motion } from 'motion/react';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function HeroBanner({ title, subtitle, image }: HeroBannerProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="absolute inset-0 bg-hotel-emerald-dark/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-hotel-gold font-sans tracking-[0.3em] uppercase text-xs md:text-sm mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight drop-shadow-lg">
            {title}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
