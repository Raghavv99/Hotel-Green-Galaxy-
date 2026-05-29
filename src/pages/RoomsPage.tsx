import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Rooms from '../components/Rooms';

export default function RoomsPage() {
  return (
    <>
      <HeroBanner 
        title="Rooms & Suites" 
        subtitle="Unparalleled Comfort"
        image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <Rooms />
    </>
  );
}
