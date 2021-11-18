import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';


function IngredientsItem() {

    // Get ingredients from the store
    const ingredients = useSelector(store => store.ingredients);


    // use state for Form Mode & editID 
    // const [formMode, setFormMode] = useState('add');
    // const [editId, setEditId] = useState(null);

    //intialize hook 
    const dispatch = useDispatch();

    //EDIT Button 
    // const editIngredient = (ingredient) => {
    //     setFormMode('edit');
    //     setEditId(ingredient.id);
    //     console.log('ingredient id' , ingredient.id);
    //     console.log('mode', formMode);
    // }

 //update item in the DB -
    const updateIngredient = (ingredient) => {
        //sagas 
        dispatch({ type: 'UPDATE_ITEM', payload: ingredient.id });
        console.log('clicked, edit item', ingredient);
    }

    //Complete and functional Delete 'DELETE_INGREDIENT'
    const handleDelete = (ingredient) => {
        dispatch({ type: 'DELETE_INGREDIENT', payload: ingredient })
    }


// *******RETURN ************ //
    return (
        <>
            {ingredients.map(ingredient =>
                <trow key={ingredient.id}>
                    <td> {ingredient.food_name} </td>
                    <td> </td>
                    <td> <button> Consume </button></td>

                    <td> <button onClick={() => updateIngredient(ingredient)}> Edit </button></td>

                    {/* //Delete Button works and updates to DB */}
                    <td> <button onClick={() => handleDelete(ingredient)}> Delete </button></td>
                </trow>

            )}
        </>
    )

}
export default IngredientsItem;