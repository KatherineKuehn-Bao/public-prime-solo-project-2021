
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateItem(action) {
    try {
        console.log('update item', action.payload);
        //point to the update router - send over ingredient
        yield axios.put('/api/update', action.payload);
        //rerender table with updated information 
        yield put ({type: 'FETCH_INGREDIENTS'});

    } catch (error) {
        console.log('Error in PUT', error);
        
    }
}

function* wasteItem(action) {
    try{
        console.log('waste item', action.payload);
        yield axios.put('/api/update/waste', action.payload);
        yield put ({type: 'FETCH_INGREDIENTS'});
    }
    catch (error){
        console.log('error in PUT waste', error);
    }
}




//listen for UPDATE_ITEM dispatch 
function* updateItemSaga() {
    yield takeLatest('UPDATE_ITEM', updateItem);
    yield takeLatest('WASTE_ITEM', wasteItem);
}

export default updateItemSaga;
