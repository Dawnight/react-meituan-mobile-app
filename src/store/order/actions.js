import * as Types from './types';
import axios from '../../lib/axios';

export const getOrderList = page => {
  return dispatch => {
    let params = {};
    params.page = page;
    axios.get('/orderList', { params }).then(response => {
      dispatch({
        type: Types.ORDER_LIST,
        payload: response.data,
        page
      });
    });
  };
};
