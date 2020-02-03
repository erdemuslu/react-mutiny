import React from 'react';
import { bool, func, string } from 'prop-types';

const Item = ({
  tagOnClick,
  menuOnClick,
  backgroundColor,
  title,
  selector,
  isSelected,
}) => (
  <div>
    <button
      type="button"
      className="rm-tag"
      onClick={tagOnClick.bind(this, selector)}
      style={{
        backgroundColor,
      }}
    >
      {title}
    </button>
    { isSelected ? <span role="grid" className="rm-label">selected</span> : null }
    <button
      type="button"
      className="rm-btn-details"
      onClick={menuOnClick.bind(this, selector)}
    >
      details
    </button>
  </div>
);

Item.defaultProps = {
  tagOnClick: () => null,
  menuOnClick: () => null,
  backgroundColor: 'black',
  title: 'example',
  selector: '',
  isSelected: false,
};

Item.propTypes = {
  tagOnClick: func,
  menuOnClick: func,
  backgroundColor: string,
  title: string,
  selector: string,
  isSelected: bool,
};

export default Item;
