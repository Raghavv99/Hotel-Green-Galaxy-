import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailsPage from './pages/RoomDetailsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import RestaurantPage from './pages/RestaurantPage';
import BookingPage from './pages/BookingPage';
import ReviewsPage from './pages/ReviewsPage';
import AttractionsPage from './pages/AttractionsPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import SitemapPage from './pages/SitemapPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="rooms/:id" element={<RoomDetailsPage />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="restaurant" element={<RestaurantPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="attractions" element={<AttractionsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-and-conditions" element={<TermsPage />} />
          <Route path="refund-policy" element={<RefundPolicyPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
