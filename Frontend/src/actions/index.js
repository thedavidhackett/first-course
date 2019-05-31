import {
  ADD_POST,
  GET_POSTS,
  GET_PROFILE,
  GET_JOBS
} from "../constants/action-types";

export function addPost(payload) {
  return { type: ADD_POST, payload };
}

export function getPosts() {
  return { type: GET_POSTS };
}

export function getProfile() {
  return { type: GET_PROFILE };
}

export function getJobs() {
  return { type: GET_JOBS };
}
