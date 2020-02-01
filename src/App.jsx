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
      color: '#23395b',
      title: 'TODO',
      selected: false,
      selector: 'todo',
    },
    {
      color: '#f78154',
      title: 'IN PROGRESS',
      selected: false,
      selector: 'in-progress',
    },
    {
      color: '#669d69',
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
