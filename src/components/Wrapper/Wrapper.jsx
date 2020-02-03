import React, { useContext, useEffect } from 'react';
import { shape } from 'prop-types';

import { MainContext } from '../../store';
import { createInitial } from '../../actions';
import { getUnselectedItems } from '../../selectors';

import Top from '../Top/Top';
import List from '../List/List';

const Wrapper = ({ initialItems }) => {
  const { state, dispatch } = useContext(MainContext);
  useEffect(() => dispatch(createInitial(initialItems)), []);

  const isListRendered = () => getUnselectedItems([state.items, state.form.value]);

  return (
    <div
      role="grid"
      className="rm rm--dark"
    >
      <Top />
      {
        isListRendered().length > 0
        && state.list.isOpened
        && <List />
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
