import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FilterButtons from './FilterButtons';
import ProjectCard from './ProjectCard';
import Modal from './Modal'; 
import { cards } from '../data/Cards';

const Projets = () => {
  const selectedFilter = useSelector((state) => state.filter.filter);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animationClass, setAnimationClass] = useState('entering');

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
    <main>
      <div className="projets">
        <h2>Découvrez en un peu plus!</h2>
        <FilterButtons />
        <div className="cards-container">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.name}
              description={project.description}
              details={project.details} 
              className={animationClass}
            />
          ))}
        </div>
        <Modal /> 
      </div>
    </main>
  );
};

export default Projets;
