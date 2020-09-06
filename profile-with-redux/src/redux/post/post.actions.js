import axios from 'axios';
import PostActionTypes from './post.types';

export const getPostsStart = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:5000/api/posts');
    const posts = response.data;
    dispatch(getPostsSuccess(posts));
  } catch (error) {
    dispatch(getPostsFailure(error));
  }
};

export const getPostsSuccess = posts => ({
  type: PostActionTypes.GET_POSTS_SUCCESS,
  payload: posts
});

export const getPostsFailure = error => ({
  type: PostActionTypes.GET_POSTS_FAILURE,
  payload: error
});
