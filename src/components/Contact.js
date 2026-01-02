import React, { useState } from 'react';
import '../styles/main.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });


  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contacto</h2>
          <p>Póngase en contacto para agendar una cita o consultar sobre nuestros servicios</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="contact-item">
              <i>📍</i>
              <span>Av. Principal de Los Ruices, Edificio Médico Plaza, Piso 5, Consultorio 502, Bolivar, Venezuela</span>
            </div>
            <div className="contact-item">
              <i>📞</i>
              <span>0424-944-5268</span>
            </div>
            <div className="contact-item">
              <i>✉️</i>
              <span>DRanderson@gmail.com</span>
            </div>
            <div className="contact-item">
              <i>🕒</i>
              <span>Lunes a Viernes: 8:00 am - 12:00 pm, 2:00 pm - 5:00 pm</span>
            </div>
            <div className="contact-item">
              <i>💳</i>
              <span>Aceptamos todos los medios de pago</span>
            </div>

            <h4 className="mt-2">Redes Sociales</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/dranderson/" title="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={35} />
              </a>
              <a href="https://www.facebook.com/dranderson/" title="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={35} />
              </a>
              <a href="https://www.twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={35} />
              </a>
              <a href="https://wa.me/584249445268" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={35} />
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Formulario de Contacto</h3>
            <form id="contactForm" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleContactChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <button type="submit" className="btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
