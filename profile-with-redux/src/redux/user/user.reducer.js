import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: {
    id: 0,
    username: 'user',
    firstName: 'User',
    lastName: 'User',
    imageUrl: 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
  },
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
