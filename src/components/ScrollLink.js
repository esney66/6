import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ScrollLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // Si el enlace contiene un hash (ej: /#section), manejamos el scroll
    if (to.includes('#')) {
      e.preventDefault();

      // Extraemos la ruta y el hash
      const [path, hash] = to.split('#');

      // Navegamos a la ruta (si es diferente)
      if (path && path !== '/' && window.location.pathname !== path) {
        navigate(path);
      } else if (window.location.pathname !== '/') {
        // Si estamos en una ruta diferente (como /citas), navegamos a la raíz primero
        navigate('/');
      }

      // Esperamos un momento para que la navegación ocurra y luego hacemos scroll
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollLink;
