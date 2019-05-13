import { ADD_POST, POSTS_LOADED } from "../constants/action-types"


const initialState = {
    posts: []
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
    return state;
  };
  export default rootReducer;
