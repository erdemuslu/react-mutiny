import React, { useContext } from 'react';

import { MainContext } from '../../store';

const SelectedItems = () => {
  const { state } = useContext(MainContext);
  console.log('state', state);
  return (
    <div
      role="grid"
      className="rm-top-items"
    >
      selected items
    </div>
  );
};

export default SelectedItems;
