import { GET_POSTS, REQUEST_POSTS } from "../constants"

export function requestPosts() {
    return {
        type: REQUEST_POSTS,
    }
};
export function getPosts(posts) {
    return { type: GET_POSTS, posts }
};
