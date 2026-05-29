import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-hotel-ivory text-hotel-dark selection:bg-hotel-gold selection:text-white font-sans overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
