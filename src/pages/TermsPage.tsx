import React from 'react';
import HeroBanner from '../components/HeroBanner';

export default function TermsPage() {
  return (
    <>
      <HeroBanner 
        title="Terms & Conditions" 
        subtitle="Please Read Carefully"
        image="https://images.unsplash.com/photo-1542314831-c6a4d140b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-24 bg-hotel-ivory">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-gray font-sans font-light text-gray-600">
          <h2 className="font-serif text-3xl text-hotel-emerald-dark mb-6">Agreement to Terms</h2>
          <p className="mb-6">By accessing our website and using our booking services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
          
          <h2 className="font-serif text-3xl text-hotel-emerald-dark mb-6 mt-10">Booking & Registration</h2>
          <p className="mb-6">All reservations are subject to availability. Guests must be at least 18 years old to make a booking. Valid government-issued photo identification is required upon check-in.</p>
          
          <h2 className="font-serif text-3xl text-hotel-emerald-dark mb-6 mt-10">Hotel Rules</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Smoking is strictly prohibited in rooms and indoor public areas.</li>
            <li>Guests are responsible for any damages caused to hotel property.</li>
            <li>Management reserves the right to refuse service to anyone demonstrating inappropriate behavior.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
