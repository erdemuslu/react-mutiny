import React, {
  createRef,
  memo,
  useContext,
  useEffect,
} from 'react';

import { MainContext } from '../../store';
import {
  addItem,
  setInputValue,
  updateInputStatus,
  toggleList,
  toggleMenu,
  showError,
} from '../../actions';

import createRandomColor from '../../utils/index';

const Form = () => {
  const { state, dispatch } = useContext(MainContext);
  const inputElRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTagKey = state.form.value.toLowerCase().split(' ').join('-');
    const tagIsExist = Object.keys(state.items)
      .some((key) => key === newTagKey);

    if (tagIsExist) {
      dispatch(showError(true));

      setTimeout(() => {
        dispatch(showError(false));
      }, 1200);
      return false;
    }

    const newTag = {
      color: createRandomColor(),
      title: state.form.value,
      selected: false,
      selector: newTagKey,
      isHidden: false,
    };

    dispatch(setInputValue(''));
    return dispatch(addItem(newTag));
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
