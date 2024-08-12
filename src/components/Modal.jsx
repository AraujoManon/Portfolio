import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/reducers/ModalSlice';
import closeIcon from '../assets/images/close.svg';
import ButtonModal from './ButtonModal';

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state) => state.modal);
  const [closing, setClosing] = useState(false);
  const isActive = useSelector((state) => state.button.isActive); 

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      dispatch(closeModal());
      setClosing(false);
    }, 500);
  };

  if (!isOpen && !closing) return null;

  const technologies = content.technologies ? content.technologies.split(',') : [];
  const skills = content.skills ? content.skills.split(',') : [];
  
  const githubUrl = content.githubUrl || "";
  const projectUrl = content.projectUrl || "";

  const technologyItems = technologies.map((tech) => ({ label: tech.trim() }));
  const skillItems = skills.map((skill) => ({ label: skill.trim() }));
  const linkItems = [
    githubUrl ? { label: 'Voir sur GitHub', url: githubUrl } : null,
    projectUrl ? { label: 'Voir le projet', url: projectUrl } : null
  ].filter(Boolean); 

  return (
    <div
      className={`modal-overlay ${closing ? 'fade-out-overlay' : 'fade-in-overlay'} ${isActive ? 'active' : ''}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${closing ? 'fade-out-content' : 'fade-in-content'} ${isActive ? 'active' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`modal-close-button ${isActive ? 'active' : ''}`}
          onClick={handleClose}
          aria-label="Close Modal"
        >
          <img
            src={closeIcon}
            alt="Close"
            className={`modal-close-icon ${isActive ? 'active' : ''}`}
          />
        </button>
        <h3 className={isActive ? 'active' : ''}>Mission</h3>
        <p className={isActive ? 'active' : ''}>{content.mission}</p>
        <h3 className={isActive ? 'active' : ''}>Technologies Utilisées</h3>
        <ButtonModal items={technologyItems} type="technologie" />
        <h3 className={isActive ? 'active' : ''}>Compétences Apportées</h3>
        <ButtonModal items={skillItems} type="compétence" />
        <div className={`modal-links ${isActive ? 'active' : ''}`}>
          <h3 className='see-more'>Voir Aussi</h3>
          <ButtonModal items={linkItems} type="link" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
