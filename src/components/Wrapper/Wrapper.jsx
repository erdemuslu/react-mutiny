import React, { useContext, useEffect } from 'react';
import { shape } from 'prop-types';

import { MainContext } from '../../store';
import { createInitial } from '../../actions';
import { getUnselectedItems } from '../../selectors';

import Top from '../Top/Top';
import List from '../List/List';
import Menu from '../Menu/Menu';
import Error from '../Error/Error';

const Wrapper = ({ initialItems }) => {
  const { state, dispatch } = useContext(MainContext);
  useEffect(() => {
    const updatedInitialItems = Object.keys(initialItems).reduce((payload, key) => {
      const obj = payload;

      if (!('isHidden' in initialItems[key])) {
        const newItem = { ...initialItems[key], isHidden: false };
        obj[key] = newItem;
      } else {
        obj[key] = initialItems[key];
      }

      return obj;
    }, {});

    return dispatch(createInitial(updatedInitialItems));
  }, []);

  const isListRendered = () => getUnselectedItems([state.items, state.form.value]);

  return (
    <div
      role="grid"
      className="rm rm--dark"
    >
      <div
        className="rm-inner"
      >
        <Top />
        {
          isListRendered().length > 0
          && state.list.isOpened
          && <List />
        }
        {
          state.menu.isOpened
          && <Menu />
        }
        {
          state.list.isTagExist && <Error />
        }
      </div>
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
