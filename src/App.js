import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ScrollEffects from './components/ScrollEffects';
import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollEffects />
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <Contact />
              <Testimonials />
              <Gallery />
              <Blog />
              <Footer />
            </>
          } />
          <Route path="/citas" element={
            <>
              <AppointmentForm />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
