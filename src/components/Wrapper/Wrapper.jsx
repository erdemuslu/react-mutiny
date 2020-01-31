import React, { useContext, useEffect } from 'react';
import { arrayOf, shape } from 'prop-types';

import { MainContext } from '../../store';
import { createInitial } from '../../actions';

import Top from '../Top/Top';

const Wrapper = ({ initialItems }) => {
  const { dispatch } = useContext(MainContext);
  useEffect(() => dispatch(createInitial(initialItems)), []);

  return (
    <div
      role="grid"
      className="rm"
    >
      <Top />
    </div>
  );
};

Wrapper.defaultProps = {
  initialItems: [],
};

Wrapper.propTypes = {
  initialItems: arrayOf(shape({})),
};

export default Wrapper;
