import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const [ingredientsList, setIngredientsList] = useState([]);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch({ type: 'FETCH_INGREDIENTS' });
}), [];

console.log('ingredients list', ingredientsList);

  return (<>
 
      <h2 className="header">Welcome, {user.username}!</h2>

      <div className="container">

      <p> There will be a table here</p>
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
