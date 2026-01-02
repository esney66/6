import React from 'react';
import '../styles/main.css';

const Gallery = () => {
  const galleryImages = [
    {
      src: 'https://gruppogmv.com/wp-content/uploads/2022/07/AdobeStock_3266185-683x1024.jpeg',
      alt: 'Herramientas médicas'
    },
    {
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      alt: 'Equipo quirúrgico'
    },
    {
      src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      alt: 'Consultorio médico'
    },
    {
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      alt: 'Personas en operación'
    },
    {
      src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      alt: 'Equipo médico'
    },
    {
      src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      alt: 'Sala de operaciones'
    }
  ];

  return (
    <section className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>Imágenes de nuestro consultorio y equipo médico</p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
