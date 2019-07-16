import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import history from './history';

const store = createStore(
  reducers(history),
  compose(
    composeWithDevTools(
      applyMiddleware(
        thunk,
        logger,
        routerMiddleware(history)
      )
    )
  )
);

export default store;
