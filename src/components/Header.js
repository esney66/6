import React from 'react';
import { Link } from 'react-router-dom';
import ScrollLink from './ScrollLink';
import '../styles/main.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">Dr. <span>Anderson Snayder</span></div>
        <nav>
          <ul>
            <li><ScrollLink to="/#hero">Inicio</ScrollLink></li>
            <li><ScrollLink to="/#about">Sobre mí</ScrollLink></li>
            <li><ScrollLink to="/#services">Servicios</ScrollLink></li>
            <li><ScrollLink to="/#contact">Contacto</ScrollLink></li>
            <li><Link to="/citas">Citas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
