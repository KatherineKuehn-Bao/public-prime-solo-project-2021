import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import editIngredientReducer from '../reducers/editIngredient.reducer';

function* editIngredient(action) {
    try {
        console.log('edit item', action.payload);
        //point to the update router - send over edited ingredient
        yield axios.put(`/api/update/edit/${action.payload.id}`, action.payload);
        //rerender table with updated information 
        yield put ({type: 'FETCH_INGREDIENTS'});

    } catch (error) {
        console.log('Error in PUT', error);
        
    }
}



//listen for UPDATE_ITEM dispatch 
function* editItemSaga() {
    yield takeLatest('SET_EDIT_ITEM', editIngredient);
}

export default editIngredientSaga;
