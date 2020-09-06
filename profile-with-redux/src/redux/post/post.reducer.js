import PostActionTypes from './post.types';

const INITIAL_STATE = {
  posts: [],
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null
      };
    case PostActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        posts: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
