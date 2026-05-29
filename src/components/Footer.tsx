import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0b1612] text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-serif text-2xl font-bold tracking-wider text-hotel-gold mb-6">
              Hotel Green Galaxy
            </h3>
            <p className="font-sans font-light text-sm leading-relaxed max-w-sm">
              Experience unparalleled luxury and dedicated service in the historic heart of Jhansi. Perfect for business travelers, families, and couples seeking comfort and elegance.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-hotel-gold hover:text-[#0b1612] hover:border-hotel-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-hotel-gold hover:text-[#0b1612] hover:border-hotel-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-hotel-gold hover:text-[#0b1612] hover:border-hotel-gold transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 font-sans font-light text-sm flex flex-col">
              <li><Link to="/" className="hover:text-hotel-gold transition-colors block">Home</Link></li>
              <li><Link to="/about" className="hover:text-hotel-gold transition-colors block">About Us</Link></li>
              <li><Link to="/rooms" className="hover:text-hotel-gold transition-colors block">Our Rooms</Link></li>
              <li><Link to="/facilities" className="hover:text-hotel-gold transition-colors block">Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-hotel-gold transition-colors block">Gallery</Link></li>
              <li><Link to="/sitemap" className="hover:text-hotel-gold transition-colors block">Sitemap</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-sans text-sm tracking-[0.2em] uppercase text-white mb-6">Contact Info</h4>
             <ul className="space-y-4 font-sans font-light text-sm">
              <li>
                <span className="block text-white/50 text-xs tracking-widest uppercase mb-1">Address</span>
                994, 1, Prathvipur, Civil Lines, Cantt, Jhansi 284001
              </li>
               <li>
                <span className="block text-white/50 text-xs tracking-widest uppercase mb-1">Phone</span>
                +91 9235060018
              </li>
              <li className="mt-6">
                <div className="flex flex-col space-y-2 mt-4">
                  <span className="block text-white/50 text-xs tracking-widest uppercase mb-1">Newsletter</span>
                  <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 px-3 py-2 text-white focus:outline-none focus:border-hotel-gold text-sm" />
                  <button className="bg-hotel-gold hover:bg-white text-hotel-emerald-dark px-4 py-2 font-sans tracking-widest text-xs uppercase transition-all duration-300">Subscribe</button>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans font-light tracking-wide">
          <p>© {new Date().getFullYear()} Hotel Green Galaxy. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-hotel-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-hotel-gold transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="hover:text-hotel-gold transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
