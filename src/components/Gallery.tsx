import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { src: '/hotel-exterior.jpg', alt: 'Hotel Exterior' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Luxury Lobby' },
  { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Deluxe Room' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Fine Dining Restaurant' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Suite Living Area' },
  { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', alt: 'Bathroom details' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-hotel-gold-dark font-sans tracking-[0.2em] uppercase text-sm mb-4"
          >
            Visual Journey
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-hotel-emerald-dark"
          >
            Discover True Luxury
          </motion.h2>
        </div>
        <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="text-gray-500 font-sans font-light max-w-sm mt-6 md:mt-0"
        >
          Explore the elegant spaces and pristine environment curated specifically for our esteemed guests.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="relative h-[300px] md:h-[400px] overflow-hidden group bg-black cursor-pointer"
            onClick={() => setSelectedImage(img.src)}
          >
            <img 
               src={img.src} 
               alt={img.alt} 
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 cursor-pointer"
          >
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white"
            >
              <X size={32} />
            </button>
             <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain shadow-2xl" 
              alt="Expanded view" 
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
