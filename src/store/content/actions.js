import * as Types from './types';
import axios from '../../lib/axios';

export const getContentList = () => {
  return dispatch => {
    axios.get('/nearbyMerchants').then(response => {
      dispatch({
        type: Types.CONTENT_LIST_DATA,
        payload: response.data.data.poilist
      });
    });
  };
};

