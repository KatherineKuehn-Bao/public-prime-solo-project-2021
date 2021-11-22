import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import editIngredientReducer from '../reducers/editIngredient.reducer';

function* editItem(props) {
    try {
        console.log('edit item', action.payload);
        //point to the update router - send over edited ingredient
        yield axios.put(`/api/update/edit/${editIngredient.id}`, editIngredientReducer);
        //rerender table with updated information 
        yield put ({type: 'FETCH_INGREDIENTS'});

    } catch (error) {
        console.log('Error in PUT', error);
        
    }
}



//listen for UPDATE_ITEM dispatch 
function* editItemSaga() {
    yield takeLatest('SET_EDIT_ITEM', editItem);
}

export default editItemSaga;
