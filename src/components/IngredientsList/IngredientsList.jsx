import { useSelector } from 'react-redux';




function IngredientsList() {

    const ingredients = useSelector(store => store.ingredients);


    console.log('ingredients in ingredients list', ingredients);
    return (

        <div className="container">

            {ingredients.map(ingredient => (
                <div
                    key={ingredient.id}
                >
                    <h3 className="name">{ingredient.food_name}</h3>
                </div>
            ))}

        </div>
    )

}
export default IngredientsList;