import React, { createRef, useContext, useEffect } from 'react';

import { MainContext } from '../../store';
import { toggleMenu, updateItem, hideItem } from '../../actions';

import { TrashIcon, CloseIcon } from '../Icons/Icons';

const Menu = () => {
  const { state, dispatch } = useContext(MainContext);
  const inputElRef = createRef();

  const onColorChange = ({ target: { value: color } }) => {
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
        <input type="color" name="color" aria-label="color" onChange={onColorChange} />
        <span role="contentinfo">Color</span>
      </div>
      <div className="rm-menu-cta" role="grid">
        <button type="button" aria-label="trash" onClick={onDeleteItem}><TrashIcon /></button>
        <button type="button" aria-label="close" onClick={onCloseClick}><CloseIcon /></button>
      </div>
    </div>
  );
};

export default Menu;
