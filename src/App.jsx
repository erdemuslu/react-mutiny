import React from 'react';
import { shape } from 'prop-types';

import Store from './store';

import WithOutSideClick from './utils/WithOutSideClick';
import Wrapper from './components/Wrapper/Wrapper';

const App = ({ initialItems }) => (
  <Store>
    <WithOutSideClick>
      <Wrapper
        initialItems={initialItems}
      />
    </WithOutSideClick>
  </Store>
);

App.defaultProps = {
  initialItems: {
    todo: {
      color: '#23395b',
      title: 'TODO',
      selected: false,
      selector: 'todo',
      isHidden: false,
    },
    'in-progress': {
      color: '#f78154',
      title: 'IN PROGRESS',
      selected: false,
      selector: 'in-progress',
    },
    completed: {
      color: '#669d69',
      title: 'COMPLETED',
      selected: false,
      selector: 'completed',
    },
  },
};

App.propTypes = {
  initialItems: shape({}),
};

export default App;
