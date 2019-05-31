import {
  ADD_POST,
  POSTS_LOADED,
  PROFILE_LOADED,
  JOBS_LOADED
} from "../constants/action-types";

const initialState = {
  posts: [],
  jobs: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }
  if (action.type === POSTS_LOADED) {
    return Object.assign({}, state, {
      posts: action.payload
    });
  }
  if (action.type === PROFILE_LOADED) {
    return Object.assign({}, state, {
      user: action.payload
    });
  }
  if (action.type === JOBS_LOADED) {
    return Object.assign({}, state, {
      jobs: action.payload
    });
  }
  return state;
}
export default rootReducer;
