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
    const response = (yield call(getTodosResponse)) as ToDoItem[];
    yield put(getTodos.success(response));
  } catch (err) {
    yield put(getTodos.failure(err.data));
  }
}
function* todos(action: ReturnType<typeof postTodos.request>): Generator {
  try {
    yield call(postRequest, action.payload);
  } catch (err) {
    yield put(postTodos.failure(err));
  }
}

const getTodosResponse = () =>
  axios.get<ToDoItem[]>('/api/todo').then((res) => res.data);

const postRequest = (todosData: ToDoItem[]) =>
  axios.post('/api/todo', todosData).then((res) => res.data);
