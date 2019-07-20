import * as Types from './types';
import axios from '../../lib/axios';

export const changeTab = obj => ({
  type: Types.CHANGE_TAB,
  payload: obj.activeKey
});

export const getFilterData = params => {
  return async dispatch => {
    let result = await axios.get('/filterData', {
      params
    });
    dispatch({
      type: Types.GET_FILTER_DATA,
      payload: result.data
    });
  };
};

