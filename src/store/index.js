import React, { createContext, useReducer } from 'react';
import { node } from 'prop-types';

import itemReducer from '../reducers/itemReducer';

export const MainContext = createContext();

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, []);
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
