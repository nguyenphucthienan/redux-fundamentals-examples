import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import postReducer from './post/post.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer
});

export default rootReducer;
