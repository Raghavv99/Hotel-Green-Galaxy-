import React from 'react';
import { useParams, Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import Booking from '../components/Booking';

const roomsData: Record<string, any> = {
  'deluxe-room': {
    name: 'Deluxe Room',
    price: '₹4,500',
    description: 'A comfortable and elegantly furnished room perfect for business travelers or couples. Features a king-size bed and modern amenities.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    amenities: ['King Bed', 'Free WiFi', 'AC', 'City View', 'Mini Bar', 'Safe'],
    area: '350 sq.ft',
    occupancy: '2 Adults',
  },
  'executive-room': {
    name: 'Executive Room',
    price: '₹6,000',
    description: 'Spacious and sophisticated, our Executive Room offers premium comfort with an appended sitting area and luxury bath products.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    amenities: ['King Bed', 'Lounge Area', 'Coffee Maker', 'Premium WiFi', 'Bathtub'],
    area: '450 sq.ft',
    occupancy: '2 Adults + 1 Child',
  },
  'family-suite': {
    name: 'Family Suite',
    price: '₹9,500',
    description: 'Designed for families, this suite includes two interconnected rooms, ensuring privacy while keeping loved ones close.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    amenities: ['2 Bedrooms', 'Living Space', '2 Bathrooms', 'Dining Area', 'Kitchenette'],
    area: '700 sq.ft',
    occupancy: '4 Adults',
  },
  'luxury-suite': {
    name: 'Luxury Suite',
    price: '₹14,000',
    description: 'The pinnacle of luxury at Green Galaxy. Expansive suite offering panoramic views, a separate parlor, and uncompromised elegance.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    amenities: ['Master Bedroom', 'Parlor', 'Jacuzzi', 'Butler Service', 'Premium View'],
    area: '950 sq.ft',
    occupancy: '2 Adults',
  },
};

export default function RoomDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const room = id ? roomsData[id] : null;

  if (!room) {
    return (
      <div className="py-32 text-center h-[60vh] flex flex-col justify-center items-center">
        <h2 className="text-4xl font-serif text-hotel-emerald-dark mb-4">Room Not Found</h2>
        <Link to="/rooms" className="text-hotel-gold underline">Return to Rooms</Link>
      </div>
    );
  }

  return (
    <>
      <HeroBanner 
        title={room.name} 
        subtitle="Unparalleled Comfort"
        image={room.image}
      />
      <section className="py-24 bg-hotel-ivory text-hotel-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-serif text-hotel-emerald-dark mb-6">Overview</h2>
                <p className="text-gray-600 font-sans font-light leading-relaxed text-lg">
                  {room.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 border-y border-gray-200 py-8">
                 <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-gray-500 mb-1">Room Size</p>
                  <p className="font-serif text-xl text-hotel-emerald-dark">{room.area}</p>
                 </div>
                 <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-gray-500 mb-1">Max Occupancy</p>
                  <p className="font-serif text-xl text-hotel-emerald-dark">{room.occupancy}</p>
                 </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-hotel-emerald-dark mb-6">Room Amenities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {room.amenities.map((amenity: string) => (
                    <div key={amenity} className="flex items-center text-gray-600 font-sans font-light">
                      <span className="w-1.5 h-1.5 bg-hotel-gold rounded-full mr-3 shrink-0"></span>
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-hotel-emerald-dark text-white p-8 sticky top-32 rounded-sm shadow-xl border border-hotel-gold/20">
                <p className="text-xs font-sans tracking-widest uppercase text-hotel-gold mb-2">Starting From</p>
                <div className="font-serif text-4xl mb-6">{room.price} <span className="text-sm font-sans tracking-widest uppercase text-white/50">/ Night</span></div>
                <hr className="border-white/10 mb-6" />
                <p className="text-white/70 font-sans font-light text-sm mb-8">
                  Experience ultimate luxury with exclusive amenities and personalized service.
                </p>
                <a href="#book-form" className="block text-center w-full bg-hotel-gold hover:bg-white text-hotel-emerald-dark py-4 font-sans tracking-widest text-sm uppercase transition-all duration-300">
                  Reserve Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="book-form">
        <Booking />
      </div>
    </>
  );
}
