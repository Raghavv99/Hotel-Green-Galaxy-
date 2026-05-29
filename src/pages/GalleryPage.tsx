import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <>
      <HeroBanner 
        title="Visual Journey" 
        subtitle="Explore Our Spaces"
        image="https://images.unsplash.com/photo-1542314831-c6a4d140b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <Gallery />
    </>
  );
}
