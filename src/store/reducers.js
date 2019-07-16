import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import tab from './tab/reducer';
import category from './category/reducer';
import content from './content/reducer';
import order from './order/reducer';
import header from './header/reducer';

export default history => combineReducers({
  router: connectRouter(history),
  tab,
  category,
  content,
  order,
  header
});
