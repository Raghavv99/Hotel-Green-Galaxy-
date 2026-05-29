import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Restaurant', href: '/restaurant' },
    { name: 'Attractions', href: '/attractions' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-hotel-emerald-dark/95 backdrop-blur-md py-4 shadow-lg'
          : 'bg-gradient-to-b from-black/70 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col text-white" onClick={handleLinkClick}>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-hotel-gold">
            Hotel Green Galaxy
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.2em] font-light uppercase opacity-80">
            Jhansi
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-white hover:text-hotel-gold transition-colors font-sans text-xs tracking-widest uppercase ${location.pathname === link.href ? 'text-hotel-gold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking"
            className="border border-hotel-gold text-hotel-gold px-6 py-2 hover:bg-hotel-gold hover:text-hotel-emerald-dark transition-all duration-300 font-sans tracking-widest text-xs uppercase whitespace-nowrap">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white hover:text-hotel-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, h: 0 }}
            animate={{ opacity: 1, h: 'auto' }}
            exit={{ opacity: 0, h: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-hotel-emerald-dark border-t border-white/10 overflow-hidden shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleLinkClick}
                  className={`text-white/80 hover:text-hotel-gold text-left font-sans text-sm tracking-wider uppercase py-3 border-b border-white/5 ${location.pathname === link.href ? 'text-hotel-gold' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/booking"
                onClick={handleLinkClick}
                className="bg-hotel-gold text-hotel-emerald-dark text-center font-bold px-6 py-4 mt-6 tracking-widest text-sm uppercase">
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
