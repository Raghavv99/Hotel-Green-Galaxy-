import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    price: '₹4,500',
    description: 'A comfortable and elegantly furnished room perfect for business travelers or couples. Features a king-size bed and modern amenities.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: ['King Bed', 'Free WiFi', 'AC', 'City View'],
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    price: '₹6,000',
    description: 'Spacious and sophisticated, our Executive Room offers premium comfort with an appended sitting area and luxury bath products.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: ['King Bed', 'Lounge Area', 'Coffee Maker', 'Premium WiFi'],
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    price: '₹9,500',
    description: 'Designed for families, this suite includes two interconnected rooms, ensuring privacy while keeping loved ones close.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: ['2 Bedrooms', 'Living Space', '2 Bathrooms', 'Dining Area'],
  },
  {
    id: 'luxury-suite',
    name: 'Luxury Suite',
    price: '₹14,000',
    description: 'The pinnacle of luxury at Green Galaxy. Expansive suite offering panoramic views, a separate parlor, and uncompromised elegance.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    amenities: ['Master Bedroom', 'Parlor', 'Bathtub', 'Butler Service'],
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-hotel-emerald-dark text-hotel-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-hotel-gold font-sans tracking-[0.2em] uppercase text-sm mb-4"
          >
            Accommodations
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Elegant Rooms & Suites
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-hotel-gold mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {rooms.map((room, index) => (
             <motion.div 
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-hotel-emerald-dark border border-white/10 hover:border-hotel-gold/50 transition-colors duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 bg-hotel-emerald-dark/90 backdrop-blur-sm px-4 py-2 font-serif text-hotel-gold font-medium">
                  {room.price} <span className="text-xs font-sans text-white/70 font-light tracking-wide uppercase">/ Night</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-white mb-3">{room.name}</h3>
                <p className="text-white/60 font-sans font-light text-sm mb-6 flex-grow leading-relaxed">
                  {room.description}
                </p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-xs font-sans text-white/80 uppercase tracking-wider">
                  {room.amenities.map(amenity => (
                    <span key={amenity} className="flex items-center">
                      <span className="w-1 h-1 bg-hotel-gold rounded-full mr-2"></span>
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                   <Link 
                    to={`/rooms/${room.id}`}
                    className="w-full py-3 border border-white/20 text-white hover:bg-white/10 text-center font-sans tracking-widest text-sm uppercase transition-all duration-300 flex items-center justify-center"
                  >
                    Details
                  </Link>
                  <Link 
                    to="/booking"
                    className="w-full py-3 border border-hotel-gold text-hotel-gold hover:bg-hotel-gold hover:text-hotel-emerald-dark text-center font-sans tracking-widest text-sm uppercase transition-all duration-300 flex items-center justify-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
