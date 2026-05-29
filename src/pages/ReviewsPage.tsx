import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Reviews from '../components/Reviews';

export default function ReviewsPage() {
  return (
    <>
      <HeroBanner 
        title="Guest Testimonials" 
        subtitle="What People Say"
        image="https://images.unsplash.com/photo-1542314831-c6a4d140b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <Reviews />
      <div className="py-24 bg-hotel-ivory text-center">
        <h2 className="text-3xl font-serif text-hotel-emerald-dark mb-6">Leave a Review</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">We value your feedback. Let us know how we can improve or simply share your wonderful experience.</p>
        <button className="border border-hotel-emerald-dark text-hotel-emerald-dark px-8 py-3 uppercase tracking-widest text-sm hover:bg-hotel-emerald-dark hover:text-white transition-colors">
          Submit Feedback
        </button>
      </div>
    </>
  );
}
