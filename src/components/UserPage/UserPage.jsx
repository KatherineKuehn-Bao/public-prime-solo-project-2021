import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import IngredientsList from '../IngredientsList/IngredientsList';
import LocationChart from '../LocationChart/LocationChart';
import TypeBarChart from '../TypeBarChart/TypeBarChart';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

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

    <h1>Welcome, {user.username}! <EmojiPeopleIcon></EmojiPeopleIcon></h1>

    <div className="container">
      <h2> <FilterAltIcon></FilterAltIcon>Today's Top Picks </h2>

      <div className="top5">
        <IngredientsList />
      </div>

      <div
        className="ViewMore">
        <Button
          onClick={viewMore}
          variant="contained"
        > 
        View More </Button>
      </div>

      <div
        className="userChart">

        <h3> Location of Food </h3>
        <LocationChart />
      </div>

    </div>
    <Nav />
  </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
