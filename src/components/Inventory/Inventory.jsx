import React from 'react';

// import './Figures.css';
import Nav from '../Nav/Nav';
import BackButton from '../BackButton/BackButton';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

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
