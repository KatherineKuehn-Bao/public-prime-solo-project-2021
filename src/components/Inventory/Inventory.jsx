import React from 'react';

// import './Figures.css';
import Nav from '../Nav/Nav';
import BackButton from '../BackButton/BackButton';
import './Inventory.css';

//This component will map through an array of object and render onto a table on the DOM 
function Inventory() {
    return (<>

            {/* //inherited from UserPage.css */}
        <div 
            className="header">
              <h1>Inventory Page </h1>

        </div>
        
        < BackButton/>

        <div className="container">
            <p> TABLE OF INVENTORY </p>
        </div>

        <Nav />
    </>
    );
}

export default Inventory;
