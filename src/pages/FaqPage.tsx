import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: "What are the check-in and check-out times?", answer: "Check-in time is 2:00 PM, and check-out time is 11:00 AM." },
  { question: "Is parking available at the hotel?", answer: "Yes, we offer complimentary on-site parking for all our registered guests." },
  { question: "Do you provide Wi-Fi?", answer: "Yes, complimentary high-speed Wi-Fi is available in all rooms and public areas." },
  { question: "Is breakfast included in the room rate?", answer: "This depends on the specific room package you book. Please check your reservation details." },
  { question: "What is your cancellation policy?", answer: "Cancellations made 48 hours prior to the arrival date will receive a full refund. Cancellations made within 48 hours will incur a one-night charge." }
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <HeroBanner 
        title="Frequently Asked Questions" 
        subtitle="Need Help?"
        image="https://images.unsplash.com/photo-1542314831-c6a4d140b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-24 bg-hotel-ivory">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 bg-white">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleOpen(index)}
                >
                  <span className="font-serif text-hotel-emerald-dark text-lg">{faq.question}</span>
                  <ChevronDown className={`transform transition-transform duration-300 text-hotel-gold ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-500 font-sans font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
