import React from 'react';

import { TrashIcon, CloseIcon } from '../Icons/Icons';

const colors = ['#840032', '#e59500', '#002642'];

const Menu = () => {
  const updateColor = (color) => {
    console.log(color);
  };

  return (
    <div className="rm-menu" role="grid">
      <input type="text" aria-label="name" placeholder="Type something" />
      <div className="rm-menu-colors" role="grid">
        {
          colors.map((color, index) => <input key={index.toString()} type="button" aria-label="color" onClick={updateColor.bind(this, color)} style={{ backgroundColor: color }} />)
        }
      </div>
      <div className="rm-menu-cta" role="grid">
        <button type="button" aria-label="trash"><TrashIcon /></button>
        <button type="button" aria-label="close"><CloseIcon /></button>
      </div>
    </div>
  );
};

export default Menu;
