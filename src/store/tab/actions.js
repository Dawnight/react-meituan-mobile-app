import * as Types from './types';

export const changeTab = ({ activeKey }) => {
  return {
    type: Types.CHANGE_TAB,
    payload: activeKey
  };
};
