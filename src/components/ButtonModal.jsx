import React from 'react';
import { useSelector } from 'react-redux';

const ButtonModal = ({ items, type }) => {
  const isActive = useSelector((state) => state.button.isActive);

  const filteredItems = type === 'link'
    ? items.filter(item => item.url) 
    : items; 

  return (
    <div className={`button-group ${isActive ? 'active' : ''}`}>
      {filteredItems.length > 0 && (
        filteredItems.map((item, index) => (
          item.url ? (
            <a 
              href={item.url} 
              key={index}
              className={`buttonModal ${type} ${isActive ? 'active' : ''}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <button 
              className={`buttonModal ${type} ${isActive ? 'active' : ''}`} 
              key={index}
            >
              {item.label}
            </button>
          )
        ))
      )}
    </div>
  );
};

export default ButtonModal;

