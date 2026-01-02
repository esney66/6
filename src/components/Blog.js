import React from 'react';
import '../styles/main.css';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Las mejores cirugías',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      content: 'La cirugía puede ser una experiencia transformadora que mejora significativamente la calidad de vida de los pacientes. En este artículo, exploramos los beneficios de las cirugías modernas y cómo pueden ayudar a resolver problemas de salud de manera efectiva.',
      author: 'Dr. Anderson Snayder',
      date: '1 de Enero, 2026'
    }
  ];

  return (
    <section className="blog">
      <div className="container">
        <div className="section-title">
          <h2>Blog Médico</h2>
          <p>Artículos informativos sobre salud y cirugía</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <div className="blog-meta">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
