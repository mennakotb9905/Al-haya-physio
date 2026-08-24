import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MedicalStaff from './components/MedicalStaff';
import Services from './components/Services';
import Equipment from './components/Equipment';
import Partners from './components/Partners';
import Stats from './components/Stats';
import BookingForm from './components/BookingForm';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Select both sections and the contact element to observe
    const elementsToObserve = [
      document.getElementById('hero'),
      document.getElementById('about'),
      document.getElementById('staff'),
      document.getElementById('services'),
      document.getElementById('equipment'),
      document.getElementById('partners'),
      document.getElementById('contact'),
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveSection(id);
        }
      });
    }, observerOptions);

    elementsToObserve.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsToObserve.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <MedicalStaff />
        <Services />
        <Equipment />
        <Partners />
        <Stats />
        
        {/* Booking & Contact Section */}
        <section className="booking-section" id="booking">
          <div className="container booking-container">
            <BookingForm />
            <ContactInfo />
          </div>
        </section>
      </main>

      <Footer />
      <AIChatWidget />
    </>
  );
}
