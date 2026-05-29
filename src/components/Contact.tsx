import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-hotel-ivory">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-hotel-gold-dark font-sans tracking-[0.2em] uppercase text-sm mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-serif text-hotel-emerald-dark mb-10">Contact Us</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm mr-6">
                  <MapPin className="text-hotel-gold-dark" size={24} />
                </div>
                <div>
                  <h4 className="text-hotel-emerald-dark font-serif text-xl mb-2">Address</h4>
                  <p className="text-gray-600 font-sans font-light leading-relaxed">
                    994, 1, Prathvipur,<br />
                    Civil Lines, Cantt,<br />
                    Jhansi, Uttar Pradesh 284001
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm mr-6">
                  <Phone className="text-hotel-gold-dark" size={24} />
                </div>
                <div>
                  <h4 className="text-hotel-emerald-dark font-serif text-xl mb-2">Phone</h4>
                  <p className="text-gray-600 font-sans font-light leading-relaxed">
                    +91 9235060018
                  </p>
                </div>
              </div>

               <div className="flex">
                <div className="w-12 h-12 bg-white flex items-center justify-center shrink-0 border border-gray-100 shadow-sm mr-6">
                  <Clock className="text-hotel-gold-dark" size={24} />
                </div>
                <div>
                  <h4 className="text-hotel-emerald-dark font-serif text-xl mb-2">Reception Hours</h4>
                  <p className="text-gray-600 font-sans font-light leading-relaxed">
                    24/7 Available for help and bookings
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-gray-200">
               <a 
                href="https://wa.me/919235060018" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-sans tracking-wide transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-[400px] lg:h-[480px] bg-gray-200 w-full rounded-sm overflow-hidden shadow-inner border border-gray-100"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Hotel+Green+Galaxy,+994,+1,+Prathvipur,+Civil+Lines,+Jhansi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer"
              title="Google Maps Hotel Location"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
