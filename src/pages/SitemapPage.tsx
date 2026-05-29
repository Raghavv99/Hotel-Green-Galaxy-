import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { Link } from 'react-router-dom';

export default function SitemapPage() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Rooms & Suites", path: "/rooms" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Booking", path: "/booking" },
    { name: "Reviews", path: "/reviews" },
    { name: "Local Attractions", path: "/attractions" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Refund Policy", path: "/refund-policy" },
  ];

  return (
    <>
      <HeroBanner 
        title="Sitemap" 
        subtitle="Navigate Our Site"
        image="https://images.unsplash.com/photo-1542314831-c6a4d140b648?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-24 bg-hotel-ivory">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-200 p-8">
            <h2 className="font-serif text-3xl text-hotel-emerald-dark mb-8">All Pages</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-gray-600 font-sans font-light">
              {pages.map((page, index) => (
                <li key={index}>
                  <Link to={page.path} className="hover:text-hotel-gold transition-colors block py-2 border-b border-gray-100">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
