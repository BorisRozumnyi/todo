import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { postTodos } from './actions';

export function* watchPostTodos() {
  yield takeEvery(postTodos.request, todos);
}

function* todos(action: ReturnType<typeof postTodos.request>): Generator {
  try {
    const response: any = yield call(axios.post, '/api/todo');
    yield console.log(response);
  } catch (err) {
    yield put(postTodos.failure(err));
  }
}
