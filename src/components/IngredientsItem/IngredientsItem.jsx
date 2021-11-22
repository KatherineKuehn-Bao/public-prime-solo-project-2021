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

//button icons 
import { IconButton, Edit } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BackspaceIcon from '@mui/icons-material/Backspace';
import DeleteIcon from '@mui/icons-material/Delete';


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

    //Get the ingredients that are stored for the table 
    let storedIngredients = ingredients.filter(ingredient => {
        // console.log('ingredient status', ingredient.status);
        return ingredient.status === 'storage'

    });

//CASE SWITCH 
const locationClass = (ingredient) => {
    switch (ingredient.location_id){
        case 1:  
            return 'fridge'
        case 2: 
            return 'freezer'
        case 3:
            return 'pantry'
        case 4:
            return 'fresh'
        default: ''
    }
}





    // *******RETURN ************ //
    return (
        <>
            <Table>

                <TableHead>
                    <TableRow>
                        <TableCell>Ingredients</TableCell>
                        <TableCell> </TableCell>
                        <TableCell>Consume</TableCell>
                        {/* <TableCell>Trash</TableCell> */}
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {storedIngredients.map(ingredient =>

                        <TableRow 
                            key={ingredient.id}
                            className={locationClass(ingredient)}
                        >
                            <TableCell> {ingredient.food_name} </TableCell>
                            <TableCell> </TableCell>


                            {/* Consumed food gets updated on DB */}
                            <TableCell>
                                <CheckCircleIcon
                                    className="consumed"
                                    variant="contained"
                                    color="success"
                                    onClick={() => updateIngredient(ingredient)}>
                                    <IconButton>
                                        Consume
                                        {/* <Edit fontSize="small" /> */}
                                    </IconButton>
                                </CheckCircleIcon>
                            </TableCell>

                            {/* //NEED TO ADD LOGIC STILL  */}
                            {/* Update thrown away foods on Database */}
                            {/* <TableCell>
                                <DeleteIcon
                                    className="trash"
                                    variant="contained"
                                    color="info"
                                    onClick={() => updateIngredient(ingredient)}>
                                    <IconButton>
                                        Trash
                                        {/* <Edit fontSize="small" /> */}
                                    {/* </IconButton> */}
                                {/* </DeleteIcon> */}
                            {/* </TableCell> */}



                            {/* //Delete Button works and updates to DB */}
                            <TableCell>
                                <BackspaceIcon
                                    className="Delete"
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(ingredient)}>
                                    <IconButton>
                                        Delete
                                    </IconButton>

                                </BackspaceIcon>
                            </TableCell>
                        </TableRow>

                    )}
                </TableBody>
            </Table>



        </>
    )

}
export default IngredientsItem;