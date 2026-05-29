import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Rahul Sharma",
    subtitle: "Business Traveler",
    text: "The stay was incredibly comfortable. The executive room had everything I needed to work and relax. The staff's attention to detail is truly 5-star standard.",
    rating: 5
  },
  {
    id: 2,
    author: "Sneha Patel",
    subtitle: "Family Vacation",
    text: "We booked the family suite and it was perfect. Clean, spacious, and the restaurant food was amazing. Highly recommend Green Galaxy for anyone visiting Jhansi.",
    rating: 5
  },
  {
    id: 3,
    author: "Amit Singh",
    subtitle: "Weekend Getaway",
    text: "Excellent location right near the fort. The interior design is very luxurious and the hospitality exceeded our expectations. Will definitely return.",
    rating: 5
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));
  const prev = () => setCurrentIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));

  return (
    <section className="py-24 bg-hotel-emerald text-hotel-ivory relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border border-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Quote className="w-16 h-16 text-hotel-gold/30 mx-auto mb-8" />
        
        <div className="h-[280px] sm:h-[200px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-hotel-gold fill-hotel-gold" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif font-medium leading-relaxed max-w-3xl mb-8">
                "{reviews[currentIndex].text}"
              </p>
              <div>
                <p className="font-sans font-bold text-white tracking-wide uppercase text-sm">
                  {reviews[currentIndex].author}
                </p>
                <p className="text-white/60 font-sans text-xs tracking-widest uppercase mt-1">
                  {reviews[currentIndex].subtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev} className="p-3 border border-white/20 text-white hover:bg-hotel-gold hover:text-hotel-emerald hover:border-hotel-gold transition-all rounded-full">
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-3">
            {reviews.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-hotel-gold w-6' : 'bg-white/30'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <button onClick={next} className="p-3 border border-white/20 text-white hover:bg-hotel-gold hover:text-hotel-emerald hover:border-hotel-gold transition-all rounded-full">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
