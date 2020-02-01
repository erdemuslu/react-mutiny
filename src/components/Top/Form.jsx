import React, { useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = ({ target: { value: inputValue } }) => {
    setValue(inputValue);
  };

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
          value={value}
        />
      </form>
    </div>
  );
};

export default Form;
