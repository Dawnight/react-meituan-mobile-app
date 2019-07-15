import * as Types from './types';

const defaultState = {
  orderList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case Types.ORDER_LIST:
    if (Number(action.page) === 1) {
      return {
        ...state,
        orderList: action.payload
      };
    } else {
      let orderList = state.orderList;
      return {
        ...state,
        orderList: orderList.concat(action.payload)
      };
    }
  default:
    return {
      ...state
    };
  }
};

