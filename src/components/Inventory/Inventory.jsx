import React from 'react';

// import './Figures.css';
import Nav from '../Nav/Nav';
import IngredientsList from '../IngredientsList/IngredientsList';
// import BackButton from '../BackButton/BackButton';
import ArchiveIcon from '@mui/icons-material/Archive';

import '../App/App.css';

//This component will map through an array of object and render onto a table on the DOM 
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
