import React from 'react';

import '../App/App.css';
import Nav from '../Nav/Nav';

//Charts 
import LocationChart from '../LocationChart/LocationChart';
import TypeBarChart from '../TypeBarChart/TypeBarChart';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import WasteGraph from '../WasteGraph/WasteGraph';


function Figures() {


  return (<>

    <div>
      <h1> Charts & Graphs <DonutLargeIcon></DonutLargeIcon></h1>
    </div>

    {/* < BackButton /> */}

    <div
      className="container">

      <div className="typesChart">

        <h2> Types of foods In Stock</h2>
        <TypeBarChart />

      </div>

      {/* <h2> Location of Inventory</h2>
      <LocationChart /> */}

      <div className="foodWasted">
        <h2>Wasted Foods </h2>
        <WasteGraph />
      </div>
      
    </div>
    <Nav />

  </>);
}

export default Figures;
