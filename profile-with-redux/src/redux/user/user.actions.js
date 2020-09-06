import axios from 'axios';

import UserActionTypes from './user.types';

// export const signInStart = function (token) {
//   return async function (dispatch) {
//     try {
//       console.log('Call API with token', token);
//       const response = await axios.get('http://localhost:5000/api/users/me');
//       const user = response.data;
//       dispatch(signInSuccess(user));
//     } catch (error) {
//       dispatch(signInFailure(error));
//     }
//   };
// };

export const signInStart = token => async dispatch => {
  try {
    console.log('Call API with token', token);
    const response = await axios.get('http://localhost:5000/api/users/me');
    const user = response.data;
    dispatch(signInSuccess(user));
  } catch (error) {
    dispatch(signInFailure(error));
  }
};

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});
