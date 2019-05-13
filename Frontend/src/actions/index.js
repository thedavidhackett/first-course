import { ADD_POST, GET_POSTS } from "../constants/action-types"

export function addPost(payload) {
    return { type: ADD_POST, payload }
  };

export function getPosts() {
  return { type: GET_POSTS}
};
