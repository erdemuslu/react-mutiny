import React, {
  memo, useContext, useEffect, useState,
} from 'react';

import { MainContext } from '../../store';
import { getUnselectedItems } from '../../selectors';
import { addItem } from '../../actions';

import Item from './Item';

const Items = () => {
  const { state, dispatch } = useContext(MainContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getUnselectedItems(state.items));
  }, [state]);

  const tagOnClick = (selector) => {
    dispatch(addItem({ selector }));
  };

  const menuOnClick = (selector) => {
    console.log(selector);
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
            />
          )) : null
      }
    </div>
  );
};

export default memo(Items);
