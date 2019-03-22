import axios from 'axios';
import { ADD_CALCULATION } from './types';

// eslint-disable-next-line
// export const fetchName = name => async dispatch => {
//   try {
//     const res = await axios.get(`/api/name/${name}`);
//     dispatch({ type: FETCH_NAME, payload: res.data });
//   } catch (err) {
//     console.log('error fetching name:', err);
//     dispatch({ type: FETCH_NAME, payload: null });
//   }
// };

// eslint-disable-next-line
export const addCalculation = calculation => async dispatch => {
  try {
    console.log(calculation);
    const url = '/api/calculation/';
    const res = await axios.post(url, calculation);
    dispatch({ type: ADD_CALCULATION, payload: res.data });
  } catch (err) {
    console.log('error adding calculation:', err);
    dispatch({ type: ADD_CALCULATION, payload: null });
  }
};
