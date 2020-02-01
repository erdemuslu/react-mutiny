import React, {
  createRef,
  useContext,
  useEffect,
} from 'react';

import { MainContext } from '../../store';
import {
  setInputValue,
  updateInputStatus,
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

  const handleFocus = () => dispatch(
    updateInputStatus({ isFocus: true }),
  );
  // const handleBlur = () => dispatch(updateInputStatus({ isFocus: false, isBlur: true }));

  useEffect(() => {
    if (inputElRef.current) {
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
          // onBlur={handleBlur}
        />
      </form>
    </div>
  );
};

export default Form;
