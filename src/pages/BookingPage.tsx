import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Booking from '../components/Booking';

export default function BookingPage() {
  return (
    <>
      <HeroBanner 
        title="Reservations" 
        subtitle="Plan Your Stay"
        image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <Booking />
    </>
  );
}
