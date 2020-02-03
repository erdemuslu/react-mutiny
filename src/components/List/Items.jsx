import React, {
  memo, useContext, useEffect, useState,
} from 'react';

import { MainContext } from '../../store';
import { getUnselectedItems } from '../../selectors';
import {
  addItem,
  setInputValue,
  updateInputStatus,
  toggleMenu,
} from '../../actions';

import Item from './Item';

const Items = () => {
  const { state, dispatch } = useContext(MainContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getUnselectedItems([state.items, state.form.value]));
  }, [state]);

  const tagOnClick = (selector) => {
    dispatch(addItem({ selector }));
    dispatch(setInputValue(''));
    dispatch(updateInputStatus({ isForceFocus: true }));
  };

  const menuOnClick = (selector) => {
    dispatch(toggleMenu({
      isOpened: true,
      selector,
    }));
  };

  return (
    <div
      role="grid"
      className="rm-list-items"
    >
      {
        items
          ? Object.values(items).map((item, index) => (
            <Item
              key={index.toString()}
              tagOnClick={tagOnClick}
              menuOnClick={menuOnClick}
              backgroundColor={item.color}
              title={item.title}
              selector={item.selector}
              isSelected={state.menu.selector === item.selector}
            />
          )) : null
      }
    </div>
  );
};

export default memo(Items);
