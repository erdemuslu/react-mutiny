import React from 'react';

import SelectedItems from './SelectedItems';
import Form from './Form';

const Top = () => (
  <div
    role="grid"
    className="rm-top"
  >
    <SelectedItems />
    <Form />
  </div>
);

export default Top;
