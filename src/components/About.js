import React from 'react';
import '../styles/main.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>Sobre mí</h2>
          <p>Conozca más sobre mi experiencia y formación profesional</p>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src="https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg" alt="Dr. Anderson Snayder" />
          </div>
          <div className="about-text">
            <h3>Dr. Anderson Snayder</h3>
            <h4>Cirujano General</h4>
            <p>Soy un cirujano general con más de 15 años de experiencia en el campo médico. Me especializo en cirugías generales y procedimientos quirúrgicos avanzados.</p>
            <p>Mi enfoque se centra en brindar atención médica de alta calidad con un trato humano y personalizado a cada uno de mis pacientes.</p>

            <div className="skills">
              <h4>Especialidades:</h4>
              <div className="skills-container">
                <div className="skill">Cirugía General</div>
                <div className="skill">Cirugía Laparoscópica</div>
                <div className="skill">Cirugía de Emergencia</div>
                <div className="skill">Cirugía Digestiva</div>
              </div>
            </div>

            <div className="mt-2">
              <h4>Educación:</h4>
              <p>Graduado de la Universidad Central de Venezuela con honores.</p>
              <p>Especialización en Cirugía General en el Hospital Universitario de P.Ordaz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
