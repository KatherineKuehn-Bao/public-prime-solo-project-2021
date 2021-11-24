import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

// import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import IngredientsList from '../IngredientsList/IngredientsList';
import LocationChart from '../LocationChart/LocationChart';
import WasteGraph from '../WasteGraph/WasteGraph';
import TypeBarChart from '../TypeBarChart/TypeBarChart';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InfoIcon from '@mui/icons-material/Info';

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

      <div className="section1">
        <h2> What's In Stock Today </h2>
        <p> <InfoIcon
          fontSize="extraSmall">
        </InfoIcon> Ingredients are filtered by expiration date</p>

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
      </div>



      <div
        className="userChart">
        <h2> Location of Ingredients  </h2>

        <LocationChart />

      </div>

    </div>
    <Nav />
  </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
