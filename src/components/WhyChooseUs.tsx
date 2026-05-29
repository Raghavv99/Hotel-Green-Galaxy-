import React from 'react';
import { motion } from 'motion/react';
import { MapPin, SmilePlus, ShieldCheck, Heart, Sparkles } from 'lucide-react';

const reasons = [
  {
    title: "Best Location in Jhansi",
    desc: "Conveniently located near civil lines with easy access to major attractions and transit points.",
    icon: MapPin
  },
  {
    title: "Premium Hospitality",
    desc: "Experience service that anticipates your needs and exceeds expectations with a personal touch.",
    icon: SmilePlus
  },
  {
    title: "Comfortable Rooms",
    desc: "Immaculately clean, spacious, and equipped with modern comforts for a perfect rest.",
    icon: BedDouble
  },
  {
    title: "Affordable Luxury",
    desc: "5-star elegance and quality at rates that offer exceptional value for your stay.",
    icon: Sparkles
  },
  {
    title: "Safe & Secure Stay",
    desc: "24/7 security, stringent cleanliness protocols, and a family-friendly welcoming environment.",
    icon: ShieldCheck
  }
];

function BedDouble(props: any) {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg>;
}

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-hotel-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="md:w-1/3">
             <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-hotel-gold-dark font-sans tracking-[0.2em] uppercase text-sm mb-4"
            >
              Why Us
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-hotel-emerald-dark mb-6"
            >
              The Green Galaxy Difference
            </motion.h2>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 font-sans font-light leading-relaxed mb-8"
            >
              We are dedicated to providing more than just a place to sleep. We offer an environment where every detail is tailored to your utmost comfort and satisfaction.
            </motion.p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 rounded-sm"
              >
                <div className="w-12 h-12 bg-hotel-ivory rounded-full flex items-center justify-center mb-6">
                   <reason.icon className="w-6 h-6 text-hotel-gold-dark" />
                </div>
                <h4 className="text-xl font-serif text-hotel-emerald-dark mb-3">
                  {reason.title}
                </h4>
                <p className="text-gray-500 font-sans font-light text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
