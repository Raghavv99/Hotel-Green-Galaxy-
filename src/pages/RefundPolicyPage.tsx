import React from 'react';
import HeroBanner from '../components/HeroBanner';

export default function RefundPolicyPage() {
  return (
    <>
      <HeroBanner 
        title="Cancellation & Refund Policy" 
        subtitle="Reservation Guidelines"
        image="https://images.unsplash.com/photo-1542314831-c6a4d140b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-24 bg-hotel-ivory">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-gray font-sans font-light text-gray-600">
          <h2 className="font-serif text-3xl text-hotel-emerald-dark mb-6">Cancellation Policy</h2>
          <p className="mb-4">We understand that plans can change. Our cancellation policy is designed to be fair to both our guests and our business.</p>
          <ul className="list-disc pl-6 mb-8">
            <li><strong>Up to 48 Hours Before Check-in:</strong> Cancellations made at least 48 hours before the scheduled check-in time will receive a full refund.</li>
            <li><strong>Within 48 Hours:</strong> Cancellations made within 48 hours of the check-in time will incur a cancellation fee equivalent to one night's stay.</li>
            <li><strong>No-Shows:</strong> Guests who fail to arrive on the scheduled date without prior notice will be charged for the entire duration of the booking.</li>
          </ul>

          <h2 className="font-serif text-3xl text-hotel-emerald-dark mb-6">Refund Process</h2>
          <p className="mb-6">Eligible refunds will be processed back to the original method of payment within 5-7 business days. Please note that it may take additional time for the funds to reflect in your account depending on your bank or credit card provider.</p>
        </div>
      </section>
    </>
  );
}
