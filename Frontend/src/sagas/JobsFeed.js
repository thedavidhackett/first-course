import { takeEvery, call, put } from "redux-saga/effects";
import { GET_JOBS, JOBS_LOADED, API_ERRORED } from "../constants/action-types";

export default function* socialFeedSaga() {
  yield takeEvery(GET_JOBS, fetchJobs);
}

function* fetchJobs() {
  try {
    const payload = yield call(apiGetJobs);
    yield put({ type: JOBS_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERRORED, payload: e });
  }
}

function apiGetJobs() {
  return fetch("http://localhost:3001/api/jobs").then(response =>
    response.json()
  );
}
