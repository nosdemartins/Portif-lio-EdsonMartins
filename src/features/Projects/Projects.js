import React from 'react';
import './Projects.css';

const projectData = [
  { 
    id: 1, 
    title: 'Projeto 1', 
    description: 'Desenvolvimento de uma arquitetura escalável utilizando React e integração de APIs inteligentes.', 
    image: 'https://via.placeholder.com/400x250' 
  },
  { 
    id: 2, 
    title: 'Projeto 2', 
    description: 'Processamento de dados e automação de fluxos de negócio construídos com Python.', 
    image: 'https://via.placeholder.com/400x250' 
  },
  { 
    id: 3, 
    title: 'Projeto 3', 
    description: 'Construção de microsserviços seguros e eficientes utilizando o ecossistema Node.js.', 
    image: 'https://via.placeholder.com/400x250' 
  },
];

const Projects = () => {
  return (
    
    <section id="projetos" className="projects-section">
      <div className="projects-container">
        
       
        <div className="projects-topo">
          <h2 className="secao-titulo-centralizado">Projetos</h2>
        </div>
        
        
        <div className="projects-grid">
          {projectData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-box">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;