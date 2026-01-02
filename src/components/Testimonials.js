import React from 'react';
import '../styles/main.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "El Dr. Snayder es un profesional excepcional. Me realizó una cirugía laparoscópica y la recuperación fue mucho más rápida de lo que esperaba. Su atención y cuidado postoperatorio fueron excelentes.",
      author: "María Rodríguez",
      initial: "M"
    },
    {
      text: "Después de años sufriendo con problemas digestivos, el Dr. Snayder me dio una solución definitiva. Su profesionalismo y experiencia son incomparables. Recomiendo sus servicios al 100%.",
      author: "Carlos Mendoza",
      initial: "C"
    },
    {
      text: "La atención del Dr. Snayder y su equipo fue excepcional desde el primer momento. Me sentí seguro y bien cuidado durante todo el proceso quirúrgico. Los resultados superaron mis expectativas.",
      author: "Ana López",
      initial: "A"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Testimonios</h2>
          <p>Lo que nuestros pacientes dicen sobre nuestros servicios</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-text">
                {testimonial.text}
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initial}</div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>Paciente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
