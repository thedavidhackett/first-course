import { GET_POSTS } from "../constants";

export const socialFeed = (state = [], action) => {
    switch(action.type) {
        case GET_POSTS:
            return action.posts;
        default:
            return state
    }


}
