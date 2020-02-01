import React, { useContext, useEffect } from 'react';
import { shape } from 'prop-types';

import { MainContext } from '../../store';
import { createInitial } from '../../actions';

import Top from '../Top/Top';
import List from '../List/List';

const Wrapper = ({ initialItems }) => {
  const { dispatch } = useContext(MainContext);
  useEffect(() => dispatch(createInitial(initialItems)), []);

  return (
    <div
      role="grid"
      className="rm rm--dark"
    >
      <Top />
      <List />
    </div>
  );
};

Wrapper.defaultProps = {
  initialItems: [],
};

Wrapper.propTypes = {
  initialItems: shape({}),
};

export default Wrapper;
