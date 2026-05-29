import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Attractions from '../components/Attractions';

export default function AttractionsPage() {
  return (
    <>
      <HeroBanner 
        title="Local Attractions" 
        subtitle="Discover Jhansi"
        image="https://images.unsplash.com/photo-1599388837330-8d5ba1863be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <Attractions />
    </>
  );
}
