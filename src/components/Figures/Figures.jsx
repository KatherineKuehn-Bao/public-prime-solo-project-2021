import React from 'react';

import './Figures.css';
import Nav from '../Nav/Nav';
import BackButton from '../BackButton/BackButton';



function Figures() {
  return (<>

    <div
    
      className="header">
      <h1> Figures Page </h1>
    </div>

    < BackButton />

    <div
      className="container">
      <p> charts and graphs will populate this page </p>
    </div>

    <Nav />

  </>
  );
}

export default Figures;
