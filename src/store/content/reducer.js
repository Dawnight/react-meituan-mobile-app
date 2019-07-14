import * as Types from './types';

const defaultState = {
  contentList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case Types.CONTENT_LIST_DATA:
    if (Number(action.page) === 0) {
      return {
        ...state,
        contentList: action.payload
      };
    } else {
      let contentList = state.contentList;
      return {
        ...state,
        contentList: contentList.concat(action.payload)
      };
    }
  default:
    return {
      ...state
    };
  }
};

