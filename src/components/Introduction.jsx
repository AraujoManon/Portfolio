import React from "react";
import { useSelector } from 'react-redux';

const Introduction = () => {
  const isActive = useSelector((state) => state.button.isActive);

  return (
    <div className={`a-propos-text ${isActive ? 'active' : ''}`}>
      <h2 className={isActive ? 'active' : ''}>Qui suis-je...</h2>
      <p className={isActive ? 'active' : ''}>
        Je m'appelle Manon Araujo. Je suis une développeuse web passionnée, diplômée d'un bac+2 d'intégrateur web
        chez OpenClassrooms. Avec une solide expertise en HTML, CSS, JavaScript et des compétences avancées en React
        et Redux, je me spécialise dans la création de sites dynamiques, intuitifs et optimisés pour le SEO. Mon objectif
        est de combiner innovation et performance pour réaliser des projets à fort impact. Curieuse et toujours à la recherche
        de nouvelles idées, je vous invite à explorer mon univers et découvrir mes réalisations à travers ce portfolio !
      </p>
    </div>
  );
};

export default Introduction;

