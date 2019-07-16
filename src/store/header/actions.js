import * as Types from './types';

export const changeTab = obj => ({
  type: Types.CHANGE_TAB,
  payload: obj.activeKey
});
