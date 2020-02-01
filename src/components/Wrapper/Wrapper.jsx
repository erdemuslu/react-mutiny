import React, { useContext, useEffect } from 'react';
import { shape } from 'prop-types';

import { MainContext } from '../../store';
import { createInitial } from '../../actions';

import Top from '../Top/Top';
import List from '../List/List';

const Wrapper = ({ initialItems }) => {
  const { state, dispatch } = useContext(MainContext);
  useEffect(() => dispatch(createInitial(initialItems)), []);

  const isListRendered = () => state.form.inputStatus.isFocus;

  return (
    <div
      role="grid"
      className="rm rm--dark"
    >
      <Top />
      {
        isListRendered() && <List />
      }
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
