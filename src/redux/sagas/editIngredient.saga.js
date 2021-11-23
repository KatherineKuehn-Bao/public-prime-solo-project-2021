import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* editIngredient(action) {
    try {
        console.log('edit item action.payload', action.payload);
        //point to the update router - send over edited ingredient
        yield axios.put(`/api/update/edit/${action.payload.id}`, action.payload);
        //rerender table with updated information 
        yield put ({type: 'FETCH_INGREDIENTS'});
        yield put ({type:  'CLEAR_EDIT', payload: '' })

    } catch (error) {
        console.log('Error in PUT', error);
    }
}

function* clearEdit(action){
    try{
        console.log('clear edit', action.payload);
    }
    catch(error) {
        console.log('error in clear', error);
        
    }
}



//listen for UPDATE_ITEM dispatch 
function* editIngredientSaga() {
    // yield takeLatest('SET_EDIT_ITEM', editIngredient);
    yield takeLatest('CLEAR_EDIT', clearEdit);
    yield takeLatest('SET_EDIT_SUBMIT', editIngredient);
}

export default editIngredientSaga;
