import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/reducers/ModalSlice';
import closeIcon from '../assets/images/close.svg';
import ButtonModal from './ButtonModal'; 

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, content } = useSelector((state) => state.modal);
  const [closing, setClosing] = useState(false);

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
  
  const githubUrl = content.githubUrl || "#";
  const projectUrl = content.projectUrl || "#";

  // Préparer les items pour ButtonModal
  const technologyItems = technologies.map((tech) => ({ label: tech.trim() }));
  const skillItems = skills.map((skill) => ({ label: skill.trim() }));
  const linkItems = [
    { label: 'Voir sur GitHub', url: githubUrl },
    { label: 'Voir le projet', url: projectUrl }
  ];

  return (
    <div
      className={`modal-overlay ${closing ? 'fade-out-overlay' : 'fade-in-overlay'}`}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${closing ? 'fade-out-content' : 'fade-in-content'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-button"
          onClick={handleClose}
          aria-label="Close Modal"
        >
          <img
            src={closeIcon}
            alt="Close"
            className="modal-close-icon"
          />
        </button>
        <h2>{content.name}</h2>
        <p>{content.description}</p>
        <h3>Mission</h3>
        <p>{content.mission}</p>
        <h3>Technologies Utilisées</h3>
        <ButtonModal items={technologyItems} type="technologie" />
        <h3>Compétences Apportées</h3>
        <ButtonModal items={skillItems} type="compétence" />
        <div className="modal-links">
          <h3>Voir Aussi</h3>
          <ButtonModal items={linkItems} type="link" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
