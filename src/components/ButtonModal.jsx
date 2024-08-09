import React from 'react';

const ButtonModal = ({ items, type }) => {
  return (
    <div className="button-group">
      {items.length > 0 && (
        items.map((item, index) => (
          item.url ? (
            <a 
              href={item.url} 
              key={index}
              className={`buttonModal ${type}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <button className={`buttonModal ${type}`} key={index}>
              {item.label}
            </button>
          )
        ))
      )}
    </div>
  );
};

export default ButtonModal;
