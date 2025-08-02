import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Therapists from './components/Therapists';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import InsuranceInfo from './components/InsuranceInfo';
import TestimonialForm from './components/TestimonialForm';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Therapists />
        <InsuranceInfo />
        <Testimonials />
        <FAQ />
        <TestimonialForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;