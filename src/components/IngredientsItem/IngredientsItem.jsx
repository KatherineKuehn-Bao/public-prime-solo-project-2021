import { useSelector, useDispatch } from 'react-redux';


function IngredientsItem() {

    // Get ingredients from the store
    const ingredients = useSelector(store => store.ingredients);
    //intialize dispatch 
    const dispatch = useDispatch();

    const handleDelete = (ingredient) => {
        dispatch({ type: 'DELETE_INGREDIENT', payload: ingredient})
    }

    // console.log('ingredinet', ingredient);

    return (
        <>
            {ingredients.map(ingredient =>
                <trow key={ingredient.id}>
                    <td> {ingredient.food_name} </td>
                    <td> </td>
                    <td> <button> Consume </button></td>
                    <td> <button> Edit </button></td>
                    <td> <button onClick={() => handleDelete(ingredient)}> Delete </button></td>
                </trow>

            )}
        </>
    )

}
export default IngredientsItem;