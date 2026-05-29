import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Facilities from '../components/Facilities';

export default function FacilitiesPage() {
  return (
    <>
      <HeroBanner 
        title="Premium Facilities" 
        subtitle="Designed for You"
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <Facilities />
    </>
  );
}
