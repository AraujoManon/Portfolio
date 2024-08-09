import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/reducers/ModalSlice';

const ProjectCard = ({ image, title, description, details, className }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(details));
  };

  return (
    <div className={`project-card ${className}`} onClick={handleClick}>
      <img src={image} alt={title} />
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
