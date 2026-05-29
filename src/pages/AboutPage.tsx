import React from 'react';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage() {
  return (
    <>
      <HeroBanner 
        title="Our Story" 
        subtitle="Heritage & Hospitality"
        image="https://images.unsplash.com/photo-1551882547-ff40c0d5b9af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <About />
      <WhyChooseUs />
    </>
  );
}
