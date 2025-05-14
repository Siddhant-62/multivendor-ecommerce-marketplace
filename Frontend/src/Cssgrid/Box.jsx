import React from 'react';
import './Box.css';

const Box = () => {
  const items = Array.from({ length: 36 }, (_, i) => `Box ${i + 1}`);

  return (
    <div className="box-container">
      {items.map((item, index) => (
        <div className="box-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Box;
