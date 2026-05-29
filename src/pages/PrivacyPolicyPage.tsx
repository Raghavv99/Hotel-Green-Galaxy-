import React from 'react';
import HeroBanner from '../components/HeroBanner';

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroBanner 
        title="Privacy Policy" 
        subtitle="Your Information Matters"
        image="https://images.unsplash.com/photo-1542314831-c6a4d140b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-24 bg-hotel-ivory">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-gray font-sans font-light text-gray-600">
          <h2 className="font-serif text-3xl text-hotel-emerald-dark mb-6">Introduction</h2>
          <p className="mb-6">At Hotel Green Galaxy, we are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.</p>
          
          <h2 className="font-serif text-3xl text-hotel-emerald-dark mb-6 mt-10">Information We Collect</h2>
          <p className="mb-4">We may collect personal information such as:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Name, email address, phone number, and physical address.</li>
            <li>Booking details and preferences.</li>
            <li>Payment information for processing reservations.</li>
          </ul>

          <h2 className="font-serif text-3xl text-hotel-emerald-dark mb-6 mt-10">How We Use Your Information</h2>
          <p className="mb-4">Your information is used for:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Processing bookings and providing requested services.</li>
            <li>Communicating with you regarding your stay and special offers.</li>
            <li>Improving our website and guest experience.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
