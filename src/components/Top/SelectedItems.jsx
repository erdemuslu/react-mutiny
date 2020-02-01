import React, {
  memo, createRef, useContext, useEffect, useState,
} from 'react';

import { MainContext } from '../../store';
import { getSelectedItems } from '../../selectors';

const SelectedItems = () => {
  const { state } = useContext(MainContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const topItemsRef = createRef();

  useEffect(() => {
    setSelectedItems(getSelectedItems(state.items));
  }, [state]);

  return (
    <div
      role="grid"
      className="rm-top-items"
      ref={topItemsRef}
    >
      {
        selectedItems
          ? selectedItems.map((item, index) => (
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

export default memo(SelectedItems);
