import React, { createRef, useContext, useEffect } from 'react';

import { MainContext } from '../../store';
import { toggleMenu, updateItem, hideItem } from '../../actions';

import { TrashIcon, CloseIcon } from '../Icons/Icons';

const colors = ['#840032', '#e59500', '#002642'];

const Menu = () => {
  const { state, dispatch } = useContext(MainContext);
  const inputElRef = createRef();

  const updateColor = (color) => {
    dispatch(updateItem({
      selector: state.menu.selector,
      color,
    }));
  };

  const updateTitle = ({ target: { value: title } }) => {
    dispatch(updateItem({
      selector: state.menu.selector,
      title,
    }));
  };

  const onCloseClick = () => {
    dispatch(toggleMenu({ isOpened: false, selector: '' }));
  };

  const onDeleteItem = () => {
    dispatch(hideItem({ selector: state.menu.selector }));
  };

  useEffect(() => {
    if (inputElRef.current && state.menu.selector) {
      inputElRef.current.focus();
    }
  }, [state.menu.selector]);

  return (
    <div className="rm-menu" role="grid">
      <input ref={inputElRef} type="text" aria-label="name" placeholder={state.items[state.menu.selector].title} onChange={updateTitle} />
      <div className="rm-menu-colors" role="grid">
        {
          colors.map((color, index) => <input key={index.toString()} type="button" aria-label="color" onClick={updateColor.bind(this, color)} style={{ backgroundColor: color }} />)
        }
      </div>
      <div className="rm-menu-cta" role="grid">
        <button type="button" aria-label="trash" onClick={onDeleteItem}><TrashIcon /></button>
        <button type="button" aria-label="close" onClick={onCloseClick}><CloseIcon /></button>
      </div>
    </div>
  );
};

export default Menu;
