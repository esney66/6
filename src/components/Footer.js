import React from 'react';
import '../styles/main.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Dr. Anderson Snayder</h3>
            <p>Cirujano con más de 15 años de experiencia, comprometido con la excelencia médica y el cuidado integral del paciente.</p>
          </div>
          <div className="footer-column">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Servicios</h3>
            <ul>
              <li><a href="#services">Cirugía General</a></li>
              <li><a href="#services">Cirugía Laparoscópica</a></li>
              <li><a href="#services">Consultas Médicas</a></li>
              <li><a href="#services">Seguimiento Postoperatorio</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contacto</h3>
            <ul>
              <li>📍 Av. Principal de Los Ruices, Caracas</li>
              <li>📞 0424-944-5268</li>
              <li>✉️ DRanderson@gmail.com</li>
              <li>🕒 Lun-Vie: 8am-12pm, 2pm-5pm</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Dr. Anderson Snayder. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
