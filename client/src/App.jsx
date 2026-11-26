import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { AboutUs, Blog, BlogPost, BookAppointment, BookingConfirmation, ContactUs, DentalTreatments, DentistProfile, FAQs, Home, OurDentists, PatientReviews, PrivacyPolicy, SmileGallery, TermsAndConditions, TreatmentDetail,MedicalDisclaimer,NotFound } from './Pages'
import FloatingCallButton from "./components/FloatingCallButton";

const App = () => {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/dentists" element={<OurDentists />} />
      <Route path="/dentists/:slug" element={<DentistProfile />} />
      <Route path="/treatments" element={<DentalTreatments />} />
      <Route path="/treatments/:slug" element={<TreatmentDetail />} />
      <Route path="/smile-gallery" element={<SmileGallery />} />
      <Route path="/reviews" element={<PatientReviews />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/medical-disclaimer" element={<MedicalDisclaimer />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    <FloatingCallButton phoneNumber="+919810000000" displayLabel="Call Clinic" />
    </Layout>
  )
}

export default App