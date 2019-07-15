import { combineReducers } from 'redux';
import tab from './tab/reducer';
import category from './category/reducer';
import content from './content/reducer';
import order from './order/reducer';

export default combineReducers({
  tab,
  category,
  content,
  order
});
