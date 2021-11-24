import React from 'react';

import Nav from '../Nav/Nav';
import IngredientsList from '../IngredientsList/IngredientsList';
import ArchiveIcon from '@mui/icons-material/Archive';

import '../App/App.css';

//View Page for Ingredients Table 
function Inventory() {
    return (<>

        <div>
            <h1>Your Inventory <ArchiveIcon></ArchiveIcon></h1>
        </div>
        
        <IngredientsList />
        <Nav />
    </>
    );
}

export default Inventory;
