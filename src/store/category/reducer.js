import * as Types from './types';

const defaultState = {
  categoryList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case Types.HEADER_DATA:
    return {
      ...state,
      categoryList: action.payload
    };
  default:
    return {
      ...state
    };
  }
};

