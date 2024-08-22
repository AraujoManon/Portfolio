import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../redux/reducers/ModalSlice';
import Modal from './Modal';
const ProjectCards = ({ image, title, description, details, className, isActive }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openModal(details));
  };


  const cardClasses = `project-card ${className} ${isActive ? 'active' : ''}`;

  return (
    <div className={cardClasses} onClick={handleClick}>
      <img src={image} alt={title} />
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCards;
