import React, { useContext, useEffect, useState } from 'react';

import { MainContext } from '../../store';
import { getSelectedItems } from '../../selectors';

import SelectedItems from './SelectedItems';
import Form from './Form';

const Top = () => {
  const { state } = useContext(MainContext);
  const [items, setItems] = useState({});

  useEffect(() => {
    setItems(getSelectedItems(state.items));
  }, [state]);

  return (
    <div
      role="grid"
      className="rm-top"
    >
      {
        items
        && Object.values(items).length > 0
        && <SelectedItems selectedItems={items} />
      }
      <Form />
    </div>
  );
};

export default Top;
