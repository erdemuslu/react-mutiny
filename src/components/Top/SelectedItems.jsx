import React, {
  memo, createRef, useContext,
} from 'react';
import { shape, arrayOf } from 'prop-types';

import { MainContext } from '../../store';
import {
  setInputValue, makeItemSelected, updateInputStatus, toggleMenu,
} from '../../actions';

const SelectedItems = ({
  selectedItems = {},
}) => {
  const { dispatch } = useContext(MainContext);
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

  return (
    <div
      role="grid"
      className="rm-top-items"
      ref={topItemsRef}
    >
      {
        Object.values(selectedItems).map((item, index) => (
          <div
            key={index.toString()}
            style={{
              backgroundColor: item.color,
            }}
          >
            <button
              type="button"
              className="rm-tag"
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
        ))
      }
    </div>
  );
};

SelectedItems.defaultProps = {
  selectedItems: {},
};

SelectedItems.propTypes = {
  selectedItems: arrayOf(shape({})),
};

export default memo(SelectedItems);
