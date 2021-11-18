import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import IngredientsList from '../IngredientsList/IngredientsList';

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

    <h2 className="header">Welcome, {user.username}!</h2>

    <div className="container">

      <IngredientsList />
      <Button 
      onClick={viewMore}
      variant="contained"
      > View More </Button>

      <p> and some charts and graphs down here </p>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}


    </div>
    {/* Make this guy sticky  */}
    <Nav />
  </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
