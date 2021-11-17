import { useSelector, useDispatch } from 'react-redux';




function IngredientsList() {

            // Get ingredients from the store
    const ingredients = useSelector(store => store.ingredients);
    //intialize dispatch 
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({type: 'DELETE_ITEM', payload: item})
      }

    return (
        <>
            <h1> What's in Stock </h1>
            <div className="container">
                <table>
                    <tbody>

                        {ingredients.map(ingredient =>
                            <trow key={ingredient.id}>
                                <td> {ingredient.food_name} </td>
                                <td> </td>
                                <td> <button> Consume </button></td>
                                <td> <button> Edit </button></td>
                                <td> <button onClick={handleDelete}> Delete </button></td>
                            </trow>

                        )}
                    </tbody>
                </table>


            </div>
        </>
    )

}
export default IngredientsList;