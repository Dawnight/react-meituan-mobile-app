import * as Types from './types';
import { TABKEY } from '../../config';

const defaultState = {
  tabs: [
    { name: '首页', key: TABKEY.home },
    { name: '订单', key: TABKEY.order },
    { name: '我的', key: TABKEY.my },
  ],
  activeKey: TABKEY.home
};

export default (state = defaultState, action) => {
  switch (action.type) {
  default:
    return {
      ...state
    };
  }
};

