import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_POSTS } from "../constants";
import { getPosts } from '../actions';
import { api, transformApiException } from '../api';

function apiFetchPosts() {
    return api.get('/api/posts', null);
}

function* fetchPosts(action) {
    try {
        let posts = yield call(apiFetchPosts);
        yield put(getPosts(posts));
    } catch (e) {
        console.log(transformApiException(e));
    }
}

function* socialFeedSaga() {
    yield takeLatest(GET_POSTS, fetchPosts);
}

export default socialFeedSaga;
