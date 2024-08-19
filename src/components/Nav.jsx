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
          className={activeLink === '#qui-suis-je' ? 'active-link' : ''}
          onClick={() => handleLinkClick('#qui-suis-je')}
        >
          <p>Qui suis-je</p>
        </a>
        <a
          href="#mes-projets"
          className={activeLink === '#mes-projets' ? 'active-link' : ''}
          onClick={() => handleLinkClick('#mes-projets')}
        >
          <p>Mes projets</p>
        </a>
        <a
          href="#contact"
          className={activeLink === '#contact' ? 'active-link' : ''}
          onClick={() => handleLinkClick('#contact')}
        >
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default Nav;
