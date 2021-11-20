import React from 'react';

import '../App/App.css';
import Nav from '../Nav/Nav';

//Charts 
import LocationChart from '../LocationChart/LocationChart';
import TypeBarChart from '../TypeBarChart/TypeBarChart';

function Figures() {


  return (<>

    <div>
      <h1> Figures Page </h1>
    </div>

    {/* < BackButton /> */}

    <div
      className="container">
      <LocationChart />

      <TypeBarChart />
    </div>

    <Nav />

  </>);
}

export default Figures;
