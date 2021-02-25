import { takeEvery, all } from 'redux-saga/effects';

function* addTodo(action: any) {
  const { data } = action;
  yield console.log('test:', data);
}
// function* incrementWorker(action: any) {
//   // yield put({ type: 'INCREMENT' });
//   yield put(actions.increment);
// }
// function* decrementWorker(action: any) {
//   yield put({ type: 'DECREMENT' });
// }

export function* mainSaga() {
  yield all([
    // takeEvery(actions.add, addTodo),
    takeEvery('ADD', addTodo),
    // takeEvery('INCREMENT', incrementWorker),
    // takeEvery('DECREMENT', decrementWorker),
  ]);
}
