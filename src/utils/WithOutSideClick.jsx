import React, { useRef, useContext, useEffect } from 'react';
import { element } from 'prop-types';

import { MainContext } from '../store';
import { toggleList, toggleMenu } from '../actions';

const useOutSideClick = (ref) => {
  const { dispatch } = useContext(MainContext);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(toggleList(false));
      dispatch(toggleMenu(false));
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

const WithOutSideClick = ({ children }) => {
  const wrapperRef = useRef(null);
  useOutSideClick(wrapperRef);

  return (
    <div
      role="grid"
      ref={wrapperRef}
    >
      {children}
    </div>
  );
};

WithOutSideClick.propTypes = {
  children: element.isRequired,
};

export default WithOutSideClick;
