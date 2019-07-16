import React from 'react';
// import Main from './Page/Main';
import Category from './Page/Category';

import history from './store/history';
import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Category/>
    </ConnectedRouter>
  );
}

export default App;
