import * as Types from './types';
import axios from '../../lib/axios';

export const getCategoryList = () => {
  return dispatch => {
    axios.get('/categoryList').then(response => {
      dispatch({
        type: Types.HEADER_DATA,
        payload: response.data.data
      });
    });
  };
};

