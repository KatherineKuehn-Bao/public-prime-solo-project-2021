// import { useSelector, useDispatch } from 'react-redux';
import IngredientsItem from '../IngredientsItem/IngredientsItem';

//import from MUI 
import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';



function IngredientsList() {


    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>

{/* Array of objects that are in storage  */}
                        <IngredientsItem />

                    </TableBody>
                </Table>

                </TableContainer>
        </>
    )

}
export default IngredientsList;