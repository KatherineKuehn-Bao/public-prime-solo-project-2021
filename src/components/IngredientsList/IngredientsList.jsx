// import { useSelector, useDispatch } from 'react-redux';
import IngredientsItem from '../IngredientsItem/IngredientsItem';

//import from MUI 
import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';



function IngredientsList() {


    return (
        <>
            <TableContainer component={Paper}>
               
                        {/* Array of objects that are in storage  */}
                        <IngredientsItem />

            </TableContainer>
        </>
    )

}
export default IngredientsList;