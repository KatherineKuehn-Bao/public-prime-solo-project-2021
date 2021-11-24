import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

function IngredientsItem() {

    // Get ingredients from the store
    const ingredients = useSelector(store => store.ingredients);

    //intialize hook 
    const dispatch = useDispatch();
    const history = useHistory();

    //update item in the DB -UPDATE_ITEM
    const updateIngredient = (ingredient) => {
        dispatch({ type: 'UPDATE_ITEM', payload: ingredient });
    }

    //update with waste
    const wasteIngredient = (ingredient) => {
        dispatch({ type: 'WASTE_ITEM', payload: ingredient });
    }

    //Complete and functional Delete 'DELETE_INGREDIENT'
    const handleDelete = (ingredient) => {
        dispatch({ type: 'DELETE_INGREDIENT', payload: ingredient })
    }

    // **********CURRENT PROJECT
    const handleEdit = (ingredient) => {
        dispatch({ type: 'SET_EDIT_ITEM', payload: ingredient })
        history.push(`/edit/${ingredient.id}`);
    }

    //Get the ingredients that are stored for the table 
    let storedIngredients = ingredients.filter(ingredient => {
        return ingredient.status === 'storage'
    });

    //CASE SWITCH  --- CLASS for Location 
    const locationClass = (ingredient) => {
        switch (ingredient.location_id) {
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
    return (<>
        <Table className="table">

            <TableHead>
                <TableRow>
                    <TableCell>Ingredients</TableCell>
                    <TableCell> </TableCell>
                    <TableCell>Eat</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Waste</TableCell>
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
                                className="eat"
                                variant="contained"
                                color="success"
                                onClick={() => updateIngredient(ingredient)}>
                                <IconButton>
                                    Eat
                                    {/* <Edit fontSize="small" /> */}
                                </IconButton>
                            </CheckCircleIcon>
                        </TableCell>

                        {/* //NEED TO ADD LOGIC STILL  */}
                        {/* Update thrown away foods on Database */}
                        <TableCell>
                            <EditIcon
                                className="edit"
                                variant="contained"
                                color="info"
                                onClick={() => handleEdit(ingredient)}>
                                {/* // onClick={() => updateIngredient(ingredient)}> */}
                                <IconButton>
                                    Edit
                                    {/* <Edit fontSize="small" /> */}
                                </IconButton>
                            </EditIcon>
                        </TableCell>

{/* ***** Waste update */}
                        <TableCell>
                            <DeleteIcon
                                className="waste"
                                variant="contained"
                                onClick={() => wasteIngredient(ingredient)}>
                                <IconButton>
                                    Waste
                                </IconButton>

                            </DeleteIcon>
                        </TableCell>


                        {/* //Delete Button works and updates to DB */}
                        <TableCell>
                            <RemoveCircleOutlineOutlinedIcon
                                className="Delete"
                                variant="contained"
                                color="error"

                                onClick={() => handleDelete(ingredient)}>
                                <IconButton>
                                    Delete
                                </IconButton>

                            </RemoveCircleOutlineOutlinedIcon>
                        </TableCell>


                    </TableRow>
               

                )}
            </TableBody>
        </Table>



    </>)
}
export default IngredientsItem;