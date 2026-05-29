import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Star, ArrowRight, MessageSquare, Anchor, HelpCircle, Navigation } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import PremiumContactForm from '../components/PremiumContactForm';

export default function ContactPage() {
  const faqs = [
    { q: "What are your check-in and check-out times?", a: "Standard check-in is at 2:00 PM, and check-out is at 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges." },
    { q: "Do you offer airport transfer services?", a: "Yes, we provide luxury airport transfers. Please request this service at least 24 hours prior to your arrival through our inquiry form." },
    { q: "Are pets allowed in the hotel?", a: "While we love animals, to ensure a comfortable stay for all our guests (especially those with allergies), pets are not permitted on the premises." },
    { q: "Is parking available at the hotel?", a: "We offer complimentary secure valet parking for all our registered guests." }
  ];

  return (
    <>
      <HeroBanner 
        title="Get In Touch With Hotel Green Galaxy" 
        subtitle="Our hospitality team is ready to assist you with reservations, room inquiries, special requests, event bookings, and any questions regarding your stay."
        image="https://images.unsplash.com/photo-1542314831-c6a4d140b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Main Contact Section */}
      <section className="py-24 bg-hotel-ivory relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-x-0 top-0 h-64 bg-hotel-emerald-dark/5" style={{ backgroundImage: 'radial-gradient(#18372b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid xl:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            
            {/* Contact Information Panel */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Star className="text-hotel-gold w-6 h-6 fill-hotel-gold" />
                  <div className="h-px bg-hotel-gold w-12"></div>
                </div>
                <h2 className="text-4xl font-serif text-hotel-emerald-dark mb-6">Experience<br />Exceptional Service</h2>
                <p className="text-gray-600 font-light leading-relaxed">
                  Whether anticipating your arrival or addressing your post-stay inquiries, our dedicated concierge team is at your complete disposal.
                </p>
              </div>

              <div className="space-y-8 bg-white p-8 border border-gray-100 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)] relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-hotel-ivory border-b border-l border-gray-100 rounded-bl-3xl"></div>
                <h3 className="text-xl font-serif text-hotel-emerald-dark mb-8 border-b border-gray-100 pb-4">Hotel Green Galaxy</h3>
                
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-hotel-ivory flex items-center justify-center shrink-0 group-hover:bg-hotel-gold group-hover:text-white transition-colors duration-300">
                    <MapPin size={20} className="text-hotel-emerald-dark group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      994, 1, Prathvipur,<br />Civil Lines, Cantt,<br />Jhansi, Uttar Pradesh 284001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-hotel-ivory flex items-center justify-center shrink-0 group-hover:bg-hotel-gold group-hover:text-white transition-colors duration-300">
                    <Phone size={20} className="text-hotel-emerald-dark group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-500 font-light text-sm">+91 9235060018</p>
                  </div>
                </div>

                 <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-hotel-ivory flex items-center justify-center shrink-0 group-hover:bg-hotel-gold group-hover:text-white transition-colors duration-300">
                    <Clock size={20} className="text-hotel-emerald-dark group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">
                      Front Desk: 24/7 Open<br />
                      Reservations: 8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href="tel:+919235060018" className="flex items-center justify-between w-full p-4 border border-hotel-emerald-dark hover:bg-hotel-emerald-dark hover:text-white transition-colors duration-300 group">
                  <span className="font-sans tracking-wide text-sm font-medium">CALL CONCIERGE DIRECTLY</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/919235060018" target="_blank" rel="noreferrer" className="flex items-center justify-between w-full p-4 bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors duration-300 group shadow-lg shadow-[#25D366]/20">
                  <span className="font-sans tracking-wide text-sm font-medium">CHAT ON WHATSAPP</span>
                  <MessageSquare size={18} className="transform group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* The Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <PremiumContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Additional Premium Sections */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <ShieldCheck className="w-12 h-12 text-hotel-gold mx-auto mb-4" />
              <h4 className="font-serif text-xl text-hotel-emerald-dark mb-2">Secure Communication</h4>
              <p className="text-sm text-gray-500 font-light">Your data is protected with enterprise-grade encryption and privacy controls.</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-hotel-gold mx-auto mb-4" />
              <h4 className="font-serif text-xl text-hotel-emerald-dark mb-2">Swift Response</h4>
              <p className="text-sm text-gray-500 font-light">Our concierge team guarantees a response within 2 hours of your inquiry.</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-hotel-gold mx-auto mb-4" />
              <h4 className="font-serif text-xl text-hotel-emerald-dark mb-2">Guest Satisfaction</h4>
              <p className="text-sm text-gray-500 font-light">Rated 5-stars by our guests for exceptional hospitality and service.</p>
            </div>
            <div className="text-center p-6">
              <Navigation className="w-12 h-12 text-hotel-gold mx-auto mb-4" />
              <h4 className="font-serif text-xl text-hotel-emerald-dark mb-2">Prime Location</h4>
              <p className="text-sm text-gray-500 font-light">Centrally located in Jhansi with easy access to all major attractions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs & Map Section */}
      <section className="py-24 bg-hotel-ivory">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="text-hotel-gold w-6 h-6" />
              <p className="text-hotel-gold-dark font-sans tracking-[0.2em] uppercase text-sm">Guest Support</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-hotel-emerald-dark mb-10">Frequently Asked<br/>Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 border-l-2 border-hotel-gold shadow-sm">
                  <h4 className="font-medium text-hotel-emerald-dark mb-2">{faq.q}</h4>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-hotel-gold w-6 h-6" />
              <p className="text-hotel-gold-dark font-sans tracking-[0.2em] uppercase text-sm">Location & Directions</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-hotel-emerald-dark mb-10">Find Your Way<br/>To Luxury</h2>
            
            <div className="h-[400px] w-full bg-gray-200 flex-1 min-h-[400px] rounded-sm shadow-xl overflow-hidden border border-gray-100">
              <iframe 
                src="https://maps.google.com/maps?q=Hotel+Green+Galaxy,+994,+1,+Prathvipur,+Civil+Lines,+Jhansi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                title="Google Maps Hotel Location"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
