import React from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Nav from '../Nav/Nav';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>

      <p> There will be a table here</p>
      <p> and some charts and graphs down here </p>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}

      <Nav />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
