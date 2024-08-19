import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FilterButtons from './FilterButtons';
import ProjectCards from './ProjectCards';
import Modal from './Modal'; 
import { cards } from '../data/Cards';

const Projects = () => {
  const selectedFilter = useSelector((state) => state.filter.filter);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animationClass, setAnimationClass] = useState('entering');
  const isActive = useSelector((state) => state.button.isActive);

  useEffect(() => {
    setAnimationClass('exiting');

    const timer = setTimeout(() => {
      setFilteredProjects(
        cards.filter(
          (project) =>
            selectedFilter === 'all' || project.tags.includes(selectedFilter)
        )
      );
      setAnimationClass('entering');
    }, 1000);

    return () => clearTimeout(timer);
  }, [selectedFilter]);

  return (
    <main className={isActive ? "active" : ""}>
      <div id="mes-projets" className="projets">
        <h2>Mes projets</h2>
        <FilterButtons />
        <div className="cards-container">
          {filteredProjects.map((project) => (
            <ProjectCards
              key={project.id}
              image={project.image}
              title={project.name}
              description={project.description}
              details={project.details} 
              className={animationClass}
              isActive={isActive}
            />
          ))}
        </div>
        <Modal /> 
      </div>
    </main>
  );
};

export default Projects;
