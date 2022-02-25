import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
} from '../constants/User.constant';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  userData: {},
  token: '',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userData: action.payload || '',
        token: action.payload.token || '',
      };
    case USER_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        userData: {},
        token: '',
      };
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
