import React, { useContext } from 'react';

import { MainContext } from '../../store';
import {  toggleMenu } from '../../actions';

import { TrashIcon, CloseIcon } from '../Icons/Icons';

const colors = ['#840032', '#e59500', '#002642'];

const Menu = () => {
  const { dispatch } = useContext(MainContext);

  const updateColor = (color) => {
    console.log(color);
  };

  const onCloseClick = () => {
    dispatch(toggleMenu());
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
        <button type="button" aria-label="close" onClick={onCloseClick}><CloseIcon /></button>
      </div>
    </div>
  );
};

export default Menu;