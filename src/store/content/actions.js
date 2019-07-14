import * as Types from './types';
import axios from '../../lib/axios';

export const getContentList = page => {
  return dispatch => {
    let params = {};
    params.page = page;
    axios.get('/nearbyMerchants', { params }).then(response => {
      dispatch({
        type: Types.CONTENT_LIST_DATA,
        payload: response.data.data.poilist,
        page
      });
    });
  };
};

