import React, { createContext, useReducer } from 'react';
import { node } from 'prop-types';

import itemReducer from '../reducers/itemReducer';

const INITIAL_STORE = {
  items: {},
  itemsProps: {
    width: '0',
  },
};

export const MainContext = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, INITIAL_STORE);
  const value = { state, dispatch };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
};

Store.defaultProps = { children: null };

Store.propTypes = { children: node };

export default Store;
