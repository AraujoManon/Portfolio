import React from 'react';
import { useSelector } from 'react-redux';
import ToggleButton from './ToggleButton';
import lightOwl from '../assets/images/lightOwl.svg';
import darkOwl from '../assets/images/darkOwl.svg';

const Header = () => {
  const isActive = useSelector((state) => state.buttonReducer?.isActive);
  const state = useSelector((state) => state);
  console.log(state); 
  
  return (
    <header>
      <div className="text">
        <h1>Bienvenue !</h1>
        <p className="title-description">
          Vous êtes sur la page d'une développeuse web junior et passionnée qui
        </p>
        <p className="main-description">
          Crée des interfaces élégantes avec React et Redux.
        </p>
        <p className="final-description">Découvrez mes projets !</p>
      </div>
      <div className="container-header-button">
        <div className={`owl ${isActive ? 'active' : ''}`}>
          <img src={lightOwl} alt="Light Owl Icon" />
          <img src={darkOwl} alt="Dark Owl Icon" />
        </div>
        <ToggleButton />
      </div>
    </header>
  );
};

export default Header;
