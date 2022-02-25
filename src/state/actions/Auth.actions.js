import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
} from '../constants/User.constant';

export const loginHandle = (username, password) => dispatch => {
  dispatch({type: USER_LOGIN_REQUEST});

  // Login axios function
};

export const logoutHandle = () => dispatch => {
  dispatch({type: USER_LOGOUT});
};
