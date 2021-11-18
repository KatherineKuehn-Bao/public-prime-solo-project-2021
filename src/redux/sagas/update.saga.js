// worker Saga: will be fired on "FETCH_USER" actions
function* updateItem(action) {
    try {
        console.log('update item', action.payload);
        //point to the update router
        yield axios.put ('/api/update', action.payload);

       
    } catch (error) {
        console.log('Error in PUT', error);
        
    }
}

function* updateItemSaga() {
    yield takeLatest('UPDATE_ITEM', updateItem);
}

export default updateItemSaga;
