import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      {/* <Link to="/home">
        <h2 className="nav-title"> back </h2>
      </Link> */}
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>

            <NavBar />

          </>
        )}
      </div>
    </div>
  );
}

export default Nav;




