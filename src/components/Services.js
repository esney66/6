import React from 'react';
import '../styles/main.css';

const Services = () => {
  const services = [
    {
      icon: '🔪',
      title: 'Cirugía General',
      description: 'Procedimientos quirúrgicos generales con los más altos estándares de calidad y seguridad.'
    },
    {
      icon: '🏥',
      title: 'Cirugía Laparoscópica',
      description: 'Técnicas mínimamente invasivas para una recuperación más rápida y menos dolorosa.'
    },
    {
      icon: '⚕️',
      title: 'Cirugía de Emergencia',
      description: 'Atención quirúrgica inmediata para casos de emergencia las 24 horas.'
    },
    {
      icon: '🩺',
      title: 'Consultas Médicas',
      description: 'Evaluación y diagnóstico profesional para determinar el mejor tratamiento.'
    },
    {
      icon: '💊',
      title: 'Seguimiento Postoperatorio',
      description: 'Control y monitoreo después de la cirugía para una recuperación óptima.'
    },
    {
      icon: '📋',
      title: 'Segunda Opinión',
      description: 'Evaluación profesional de diagnósticos y recomendaciones quirúrgicas.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>Ofrecemos una amplia gama de servicios quirúrgicos de alta calidad</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
