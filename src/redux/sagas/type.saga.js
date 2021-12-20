import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_TYPE" actions
function* fetchType() {
    try {
        const type = yield axios.get('/api/type');
        console.log('get type', type.data);
        yield put({ type: 'SET_TYPE', payload: type.data });
    } catch (error) {
        console.log('type get request failed', error);
    }
}

function* typeSaga() {
    yield takeLatest('FETCH_TYPE', fetchType);
}

export default typeSaga;
