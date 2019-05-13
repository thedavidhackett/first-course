import { takeEvery, call, put } from "redux-saga/effects";
import { GET_POSTS, POSTS_LOADED, API_ERRORED } from "../constants/action-types";


export default function* socialFeedSaga() {
  yield takeEvery(GET_POSTS, fetchPosts);
}

function* fetchPosts() {
  try {
    const payload = yield call(apiGetPosts);
    yield put({ type: POSTS_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
}

function apiGetPosts() {
    return fetch("http://localhost:3001/api/posts").then(response =>
      response.json()
    );
  }
