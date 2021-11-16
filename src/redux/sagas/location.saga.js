import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_LOCATION" actions
function* fetchLocation() {
    try {
        const location = yield axios.get('/api/type/location');
        console.log('get location', location.data);
        yield put({ type: 'SET_LOCATION', payload: location.data });
    } catch (error) {
        console.log('location get request failed', error);
    }
}

function* locationSaga() {
    yield takeLatest('FETCH_LOCATION', fetchLocation);
}

export default locationSaga;
