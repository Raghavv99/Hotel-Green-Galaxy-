import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const attractions = [
  {
    name: "Jhansi Fort",
    distance: "2.5 km away",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Jhansi_Fort.jpg",
    desc: "Explore the historic fortress and symbol of courage of Rani Lakshmibai."
  },
  {
    name: "Rani Mahal",
    distance: "3 km away",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Rani_Mahal%2C_a_royal_palace_in_the_city_of_Jhansi%2C_Uttar_Pradesh_23.jpg",
    desc: "The former palace of the Queen of Jhansi, now converted into a museum."
  },
  {
    name: "Jhansi Railway Station",
    distance: "1 km away",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Jhansi_junction_railway_station.jpg",
    desc: "Highly accessible from the main railway junction for easy transit."
  }
];

export default function Attractions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-hotel-gold-dark font-sans tracking-[0.2em] uppercase text-sm mb-4">Location</p>
          <h2 className="text-4xl md:text-5xl font-serif text-hotel-emerald-dark mb-6">Nearby Attractions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attractions.map((attraction, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden mb-6 rounded-sm">
                 <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-4 left-4 flex items-center text-hotel-gold text-sm font-sans tracking-wide">
                  <MapPin size={16} className="mr-2" />
                  {attraction.distance}
                </div>
              </div>
              <h3 className="text-2xl font-serif text-hotel-emerald-dark mb-2 group-hover:text-hotel-gold-dark transition-colors">{attraction.name}</h3>
              <p className="text-gray-500 font-sans font-light">{attraction.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
