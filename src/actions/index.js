import { GET_USER } from "../constants"

export function getUser(payload) {
    return { type: GET_USER, payload }
};
