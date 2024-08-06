import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/Features';
import TestimonialsSection from './components/Testimonials';
import FooterSection from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <hr />
      <TestimonialsSection />
      <hr />
      <FooterSection />
    </div>
  );
};

export default App;
