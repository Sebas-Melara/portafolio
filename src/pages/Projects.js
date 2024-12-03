import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
  const proyectos = [
    {
      nombre: 'E-commerce Web',
      description: 'Aplicación de compras en línea con React.',
      link: 'https://github.com/usuario/ecommerce'
    },
    {
      nombre: 'Blog Personal',
      description: 'Un blog minimalista creado con React y Markdown.',
      link: 'https://github.com/usuario/blog-personal'
    },
    {
      nombre: 'Gestor de Tareas',
      description: 'Aplicación para gestionar tareas diarias.',
      link: 'https://github.com/usuario/todo-app'
    }
  ];
  return (
    <section className="projects">
      <div className="projects-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="project-card">
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.description}</p>
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;