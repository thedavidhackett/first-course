import { GET_POSTS } from "../constants"

export function getPosts(payload) {
    return { type: GET_POSTS, payload }
};
