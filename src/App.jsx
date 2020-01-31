import React from 'react';
import { arrayOf, shape } from 'prop-types';

import Store from './store';

import Wrapper from './components/Wrapper/Wrapper';

const App = ({ initialItems }) => (
  <Store>
    <Wrapper
      initialItems={initialItems}
    />
  </Store>
);

App.defaultProps = {
  initialItems: [
    {
      color: '#3fa7d6',
      title: 'TODO',
      selected: true,
      selector: 'todo',
    },
    {
      color: '#f1bb87',
      title: 'IN PROGRESS',
      selected: true,
      selector: 'in-progress',
    },
    {
      color: '#abe188',
      title: 'COMPLETED',
      selected: true,
      selector: 'completed',
    },
  ],
};

App.propTypes = {
  initialItems: arrayOf(shape({})),
};

export default App;
