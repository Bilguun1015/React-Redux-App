import axios from 'axios';

export const FETCH_CURRENCY_DATA_START = 'FETCH_CURRENCY_DATA_START';
export const FETCH_CURRENCY_DATA_SUCCESS = 'FETCH_CURRENCY_DATA_SUCCESS';
export const FETCH_CURRENCY_DATA_FAILURE = 'FETCH_CURRENCY_DATA_FAILURE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_CURRENCY_DATA_START });
    axios
      .get('https://api.exchangeratesapi.io/latest')
      .then(res => {
          console.log(res)
        dispatch({type: FETCH_CURRENCY_DATA_SUCCESS, payload: res.data})
      })
      .catch(err => {
        console.log('err',err)
      });
  };
};