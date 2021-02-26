import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { getTodos, postTodos } from './actions';
import { ToDoItem } from './types';

export function* watchGetTodos() {
  yield takeEvery(getTodos.request, workGetTodos);
}
export function* watchPostTodos() {
  yield takeEvery(postTodos.request, todos);
}

function* workGetTodos(): Generator {
  try {
    const response: any = yield call(getRequest);
    yield put(getTodos.success(response.data));
  } catch (err) {
    yield put(getTodos.failure(err.data));
  }
}
function* todos(action: ReturnType<typeof postTodos.request>): Generator {
  try {
    const response: any = yield call(postRequest, action.payload);
    yield console.log(response);
  } catch (err) {
    yield put(postTodos.failure(err));
  }
}

function getRequest() {
  return axios({
    method: 'GET',
    url: '/api/todo',
  });
}
function postRequest(todosData: ToDoItem[]) {
  return axios({
    method: 'POST',
    url: '/api/todo',
    data: todosData,
  });
}
