import React, {
  memo, useContext, useEffect, useState,
} from 'react';

import { MainContext } from '../../store';
import { getUnselectedItems } from '../../selectors';

const Items = () => {
  const { state } = useContext(MainContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getUnselectedItems(state.items));
  }, [state]);

  const handleClick = (selector) => {
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
            <button
              key={index.toString()}
              type="button"
              className="rm-tag"
              onClick={handleClick.bind(this, item.selector)}
              style={{
                backgroundColor: item.color,
              }}
            >
              {item.title}
            </button>
          )) : null
      }
    </div>
  );
};

export default memo(Items);