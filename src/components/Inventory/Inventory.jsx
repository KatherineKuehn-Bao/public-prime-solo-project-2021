import React from 'react';

// import './Figures.css';
import Nav from '../Nav/Nav';
import BackButton from '../BackButton/BackButton';

//This component will map through an array of object and render onto a table on the DOM 

function Inventory() {
    return (<>
       

        <div className="header">
        < BackButton />
            <h1> Inventory Page </h1>
        </div>

        <div className="container">
            <p> TABLE OF INVENTORY </p>
        </div>

        <Nav />
    </>
    );
}

export default Inventory;
