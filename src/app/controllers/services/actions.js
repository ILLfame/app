import { takeLatest, put, select } from 'redux-saga/effects';
import { GET_DATA_SUCCESS, GET_DATA_FAILURE, GET_DATA } from './constants';


export const getData = () => ({ type: GET_DATA });

export function* fetchDataWatcher() {
  yield takeLatest(GET_DATA, fetchData);
}

function* fetchData() {
  try {
    const { items, nextLink } = yield select(state => state.data);

    if (items && !nextLink) {
      return;
    }

    const data = yield fetch(`/ajax${nextLink || '/v3/items?per-page=34&vip_count=6'}`, { mode: 'no-cors' })
      .then(res => res.json());

    yield put({ type: GET_DATA_SUCCESS, data });
  } catch (error) {
    yield put({ type: GET_DATA_FAILURE, error });
  }
}
