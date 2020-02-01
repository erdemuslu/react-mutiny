import React from 'react';
import { func, string } from 'prop-types';

const Item = ({
  tagOnClick,
  menuOnClick,
  backgroundColor,
  title,
  selector,
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
};

Item.propTypes = {
  tagOnClick: func,
  menuOnClick: func,
  backgroundColor: string,
  title: string,
  selector: string,
};

export default Item;
