import { useSelector, useDispatch } from 'react-redux';
// import { useState } from 'react';

//Add MUI IMPORTS 
import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

//button icons 
import { IconButton, Edit } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
        // console.log('clicked, edit item', ingredient);

    }

    //Complete and functional Delete 'DELETE_INGREDIENT'
    const handleDelete = (ingredient) => {
        dispatch({ type: 'DELETE_INGREDIENT', payload: ingredient })
    }

    // console.log('ingredients', ingredients);


    //Get the ingredients that are stored for the table 
    let storedIngredients = ingredients.filter(ingredient => {

        // console.log('ingredient status', ingredient.status);
        return ingredient.status === 'storage'

    });
    // console.log('stored ingredients', storedIngredients);


    // *******RETURN ************ //
    return (
        <>
            <Table>

                <TableHead>
                    <TableRow>
                        <TableCell>Ingredients</TableCell>
                        <TableCell> </TableCell>
                        <TableCell>Consume</TableCell>
                        <TableCell>Trash</TableCell>

                    </TableRow>
                </TableHead>

                <TableBody>
                    {storedIngredients.map(ingredient =>

                        <TableRow key={ingredient.id}>
                            <TableCell> {ingredient.food_name} </TableCell>
                            <TableCell> </TableCell>
                            {/* <TableCell> <button> Trash </button></TableCell> */}

                            <TableCell>
                                <CheckCircleIcon
                                    className="consumed"
                                    variant="contained"
                                    color="success"
                                    onClick={() => updateIngredient(ingredient)}>
                                    <IconButton style={{ padding: 8 }}
                                    >
                                        Consume
                                        {/* <Edit fontSize="small" /> */}
                                    </IconButton>
                                </CheckCircleIcon>

                                {/* <Button
                                    className="consumed"
                                    variant="contained"
                                    color="success"
                                    onClick={() => updateIngredient(ingredient)}
                                >
                                    Consume
                                </Button> */}
                            </TableCell>

                            {/* //Delete Button works and updates to DB */}
                            <TableCell>
                                <Button
                                    className="Delete"
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(ingredient)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>

                    )}
                </TableBody>
            </Table>



        </>
    )

}
export default IngredientsItem;