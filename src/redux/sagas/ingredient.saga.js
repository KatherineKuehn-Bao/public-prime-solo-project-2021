import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchIngredients() {
    try {
        const ingredients= yield axios.get('/api/type/ingredients');
        console.log('get ingredients', ingredients.data);
        yield put({ type: 'SET_INGREDIENTS', payload: ingredients.data });
    } catch (error) {
        console.log('ingredients get request failed', error);
    }
}

function* ingredientsSaga() {
    yield takeLatest('FETCH_INGREDIENTS', fetchIngredients);
}

export default ingredientsSaga;