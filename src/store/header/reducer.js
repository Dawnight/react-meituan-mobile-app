import * as Types from './types';
import { CATEGORY_KEY } from 'src/config';

let tabs = {};

tabs[CATEGORY_KEY.cate] = {
  key: CATEGORY_KEY.cate,
  text: '全部分类',
  obj: {}
};

tabs[CATEGORY_KEY.type] = {
  key: CATEGORY_KEY.type,
  text: '综合排序',
  obj: {}
};

tabs[CATEGORY_KEY.filter] = {
  key: CATEGORY_KEY.filter,
  text: '筛选',
  obj: {}
};

const defaultState = {
  tabs: tabs,
  activeKey: CATEGORY_KEY.cate,
  filterData: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case Types.CHANGE_TAB:
    return {
      ...state,
      activeKey: action.payload
    };
  case Types.GET_FILTER_DATA:
    return {
      ...state,
      filterData: action.payload
    };
  default:
    return {
      ...state
    };
  }
};

