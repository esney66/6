import React from 'react';
import '../styles/main.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Dr. Anderson Snayder</h1>
        <p>Cirujano con más de 15 años de experiencia</p>
        <a href="#contact" className="btn">Agendar cita</a>
      </div>
    </section>
  );
};

export default Hero;
