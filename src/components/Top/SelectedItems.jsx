import React, {
  memo, createRef, useContext, useEffect, useState,
} from 'react';

import { MainContext } from '../../store';
import {
  setInputValue, makeItemSelected, updateInputStatus, toggleMenu,
} from '../../actions';
import { getSelectedItems } from '../../selectors';

const SelectedItems = () => {
  const { state, dispatch } = useContext(MainContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const topItemsRef = createRef();

  const tagOnClick = (selector) => {
    dispatch(makeItemSelected({ selector }));
    dispatch(setInputValue(''));
    dispatch(updateInputStatus({ isForceFocus: true }));
  };

  const menuOnClick = (selector) => {
    dispatch(updateInputStatus({ isForceFocus: false }));
    dispatch(toggleMenu({
      isOpened: true,
      selector,
    }));
  };

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
          ? Object.values(selectedItems).map((item, index) => (
            <div
              key={index.toString()}
              className="rm-tag"
              style={{
                backgroundColor: item.color,
              }}
            >
              <button
                type="button"
                onClick={tagOnClick.bind(this, item.selector)}
              >
                {item.title}
              </button>
              <button
                type="button"
                className="rm-btn-details"
                onClick={menuOnClick.bind(this, item.selector)}
              >
                <span role="contentinfo" />
              </button>
            </div>
          )) : null
      }
    </div>
  );
};

export default memo(SelectedItems);
