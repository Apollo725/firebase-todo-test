import {
  ADD_ITEM, GET_ALL_REQUEST, GET_ALL_SUCCESS, REMOVE_ITEM
} from '../constants/ActionTypes'

const initialState = {
  items: [],
  status:'',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case ADD_ITEM:
          return {...state, status: 'add_success' };
      case GET_ALL_REQUEST:
        return {
          ...state,
          status: action.payload,
        };
      case GET_ALL_SUCCESS:
          return {
            ...state,
            items: action.payload,
            status: 'success'
          };
      case REMOVE_ITEM:
          return {
            ...state,
            items: action.payload,
            status: 'delete_success'
          }
      default:
          return state;
  }
}