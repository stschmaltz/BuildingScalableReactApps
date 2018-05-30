import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { requestLinksSucceeded, requestLinksFailed } from './actions';

function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then((response) => response.json());
}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    console.log('LINKS FROM SERVER: ', links);
    yield put(requestLinksSucceeded(links));
  } catch (err) {
    yield put(requestLinksFailed(err.message));
  }
}

// Individual exports for testing
export function* defaultSaga() {
  
}

// All sagas to be loaded
export default [
  defaultSaga,
];
