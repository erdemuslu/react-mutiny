import React, {
  createRef,
  memo,
  useContext,
  useEffect,
} from 'react';

import { MainContext } from '../../store';
import {
  setInputValue,
  updateInputStatus,
  toggleList,
  toggleMenu,
} from '../../actions';

const Form = () => {
  const { state, dispatch } = useContext(MainContext);
  const inputElRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ target: { value: inputValue } }) => {
    dispatch(setInputValue(inputValue));
  };

  const handleFocus = () => {
    dispatch(updateInputStatus({ isFocus: true }));
    dispatch(toggleList(true));
    dispatch(toggleMenu(false));
  };

  useEffect(() => {
    if (inputElRef.current && state.form.inputStatus.isForceFocus) {
      inputElRef.current.focus();
    }
  }, [state]);

  return (
    <div
      role="form"
      className="rm-top-form"
    >
      <form
        className="rm-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          aria-label="item"
          onChange={handleChange}
          value={state.form.value}
          placeholder="type something"
          onFocus={handleFocus}
          ref={inputElRef}
        />
      </form>
    </div>
  );
};

export default memo(Form);
