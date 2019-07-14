import * as Types from './types';

const defaultState = {
  contentList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.CONTENT_LIST_DATA:
      return {
        ...state,
        contentList: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

