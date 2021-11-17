import { useSelector, useDispatch } from 'react-redux';
import IngredientsItem from '../IngredientsItem/IngredientsItem';

function IngredientsList() {


    return (
        <>
            <h1> What's in Stock </h1>
            <div className="container">
                <table>
                    <tbody>

                        <IngredientsItem />
                    </tbody>
                </table>


            </div>
        </>
    )

}
export default IngredientsList;