import React from 'react';
import Main from './Page/Main';

import history from './store/history';
import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Main/>
    </ConnectedRouter>
  );
}

export default App;
