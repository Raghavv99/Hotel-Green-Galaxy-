import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import Attractions from '../components/Attractions';
import Booking from '../components/Booking';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <Attractions />
      <Booking />
      <Contact />
    </>
  );
}
