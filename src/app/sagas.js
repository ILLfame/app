import { all } from 'redux-saga/effects';

import { fetchDataWatcher } from './controllers/services/actions';

export default function* rootSaga() {
  yield all([
    fetchDataWatcher(),
  ]);
}
