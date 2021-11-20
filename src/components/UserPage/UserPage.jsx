import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import IngredientsList from '../IngredientsList/IngredientsList';
import LocationChart from '../LocationChart/LocationChart';
import TypeBarChart from '../TypeBarChart/TypeBarChart';

//MUI IMPORT 
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const ingredients = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();
  const history = useHistory();
  //troubleshooting constant fetching 
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      dispatch({ type: 'FETCH_INGREDIENTS' });
      setLoaded(true);
    }
  }), [];

  const viewMore = () => {
    history.push('/inventory');
  }

  console.log('ingredients list', ingredients);

  return (<>

    <h1>Welcome, {user.username}!</h1>

    <div className="container">
      <h2> What's in Stock </h2>

      <div className="top5">
        <IngredientsList />

      </div>
      <div   className="ViewMore">
        <Button
        
          onClick={viewMore}
          variant="contained"
        > View More </Button>
      </div>

      <h3> Charts and Graphs </h3>
      <LocationChart />
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}


    </div>
    {/* Make this NAV BAR  sticky  */}
    <Nav />
  </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
