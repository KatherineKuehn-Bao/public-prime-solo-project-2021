import { useSelector } from 'react-redux';




function IngredientsList() {

    const ingredients = useSelector(store => store.ingredients);


    // console.log('ingredients in ingredients list', ingredients);

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
                                <td> <button> Trash </button></td>
                            </trow>

                        )}
                    </tbody>
                </table>


            </div>
        </>
    )

}
export default IngredientsList;