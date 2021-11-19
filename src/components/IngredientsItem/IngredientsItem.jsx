import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';

//Add MUI IMPORTS 
import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        dispatch({ type: 'UPDATE_ITEM', payload: ingredient });
        console.log('clicked, edit item', ingredient);

    }

    //Complete and functional Delete 'DELETE_INGREDIENT'
    const handleDelete = (ingredient) => {
        dispatch({ type: 'DELETE_INGREDIENT', payload: ingredient })
    }

    console.log('ingredients', ingredients);



    let storedIngredients = ingredients.filter(ingredient => {

        console.log('ingredient status', ingredient.status);
        return ingredient.status === 'storage'

    });
    console.log('stored ingredients', storedIngredients);


    // *******RETURN ************ //
    return (
        <>

            {storedIngredients.map(ingredient =>

                <TableRow key={ingredient.id}>
                    <TableCell> {ingredient.food_name} </TableCell>
                    <TableCell> </TableCell>
                    {/* <TableCell> <button> Trash </button></TableCell> */}

                    <TableCell>
                        <button
                            onClick={() => updateIngredient(ingredient)}>
                            Consume
                        </button>
                    </TableCell>

                    {/* //Delete Button works and updates to DB */}
                    <TableCell>
                        <button
                            onClick={() => handleDelete(ingredient)}>
                            Delete
                        </button>
                    </TableCell>
                </TableRow>


            )}



        </>
    )

}
export default IngredientsItem;