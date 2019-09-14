import { takeLatest, put, all } from 'redux-saga/effects';

import { comiSuaMaeSuccess } from './actions';

export function* setarNome({ payload }) {
  yield put(comiSuaMaeSuccess(payload.name));
}

export default all([takeLatest('@auth/NAME_REQUEST', setarNome)]);
