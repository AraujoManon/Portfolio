import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('');
  const isActive = useSelector((state) => state.button.isActive);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={`nav ${isActive ? 'is-active' : ''}`}>
      <div className="textNav">
        <a
          href="#qui-suis-je"
          className={`${activeLink === '#qui-suis-je' ? 'active-link' : ''} ${isActive ? 'is-active' : ''}`}
          onClick={() => handleLinkClick('#qui-suis-je')}
        >
          <p className={isActive ? 'is-active' : ''}>Qui suis-je</p>
        </a>
        <a
          href="#mes-projets"
          className={`${activeLink === '#mes-projets' ? 'active-link' : ''} ${isActive ? 'is-active' : ''}`}
          onClick={() => handleLinkClick('#mes-projets')}
        >
          <p className={isActive ? 'is-active' : ''}>Mes projets</p>
        </a>
        <a
          href="#contact"
          className={`${activeLink === '#contact' ? 'active-link' : ''} ${isActive ? 'is-active' : ''}`}
          onClick={() => handleLinkClick('#contact')}
        >
          <p className={isActive ? 'is-active' : ''}>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default Nav;
