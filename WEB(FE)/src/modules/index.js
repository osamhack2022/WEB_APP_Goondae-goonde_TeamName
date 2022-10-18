import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import location, { locationSaga } from './location';
import locations, { locationsSaga } from './locations';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import markers, { markersSaga } from './markers';
import reviews, { reviewsSaga } from './reviews';

import loading from './loading';

const rootReducer = combineReducers({
  auth,
  location,
  locations,
  write,
  post,
  posts,
  loading,
  user,
  markers,
  reviews,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    locationSaga(),
    locationsSaga(),
    writeSaga(),
    markersSaga(),
    postSaga(),
    postsSaga(),
    reviewsSaga(),
  ]);
}

export default rootReducer;
