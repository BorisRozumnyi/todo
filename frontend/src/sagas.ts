import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { postTodos } from './actions';
import { ToDoItem } from './types';

export function* watchPostTodos() {
  yield takeEvery(postTodos.request, todos);
}

function* todos(action: ReturnType<typeof postTodos.request>): Generator {
  try {
    const response: any = yield call(postRequest, action.payload);
    yield console.log(response);
  } catch (err) {
    yield put(postTodos.failure(err));
  }
}

function postRequest(todosData: ToDoItem[]) {
  return axios({
    method: 'POST',
    url: '/api/todo',
    data: todosData,
  });
}
