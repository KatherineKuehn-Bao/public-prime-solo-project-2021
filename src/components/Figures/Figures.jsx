import React from 'react';

import '../App/App.css';
import Nav from '../Nav/Nav';

//Charts 
import LocationChart from '../LocationChart/LocationChart';
import TypeBarChart from '../TypeBarChart/TypeBarChart';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';


function Figures() {


  return (<>

    <div>
      <h1> Figures Page <DonutLargeIcon></DonutLargeIcon></h1>
    </div>

    {/* < BackButton /> */}

    <div
      className="container">
        <h2> Location of Inventory</h2>
      <LocationChart />

<h2> Types of Foods </h2>
      <TypeBarChart />
    </div>

    <Nav />

  </>);
}

export default Figures;
