import React, {
  memo, createRef, useContext, useEffect, useState,
} from 'react';

import { MainContext } from '../../store';
import { getUnselectedItems } from '../../selectors';

const Items = () => {
  const { state } = useContext(MainContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getUnselectedItems(state.items));
  }, [state]);

  return (
    <div
      role="grid"
      className="rm-list-items"
    >
      {
        items
          ? items.map((item, index) => (
            <div
              key={index.toString()}
              className="rm-tag"
              style={{
                backgroundColor: item.color,
              }}
            >
              {item.title}
            </div>
          )) : null
      }
    </div>
  );
};

export default memo(Items);
