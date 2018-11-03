import axios from 'axios';
import {
  ADD_ITEM, GET_ALL_REQUEST, GET_ALL_SUCCESS
} from '../constants/ActionTypes';
import {API_URL} from '../utils/config';

export function addItem(itemName) {
  console.log("action add item");
  const values = { text: itemName };
  axios.defaults.baseURL = API_URL;
  const response = axios
    .post('/data', values)
    .then(res => res.data)
    .then(data => {
      console.log('data', data);
      if (data === 'Create a new data') {
        console.log('sucess------');
        return {
          type: ADD_ITEM,
          payload: 'success',
        };
      }
    });
  return response;
}

export function getItem() {
  return dispatch => {
    dispatch({
      type: GET_ALL_REQUEST,
      payload: 'loading',
    })
    axios.defaults.baseURL = API_URL;
    const response = axios.get('/data').then(json => json.data);
    console.log('axios get', response);
    dispatch({
      type: GET_ALL_SUCCESS,
      payload: response,
    });
  }
}
