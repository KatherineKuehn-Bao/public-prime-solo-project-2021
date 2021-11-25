import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import NavBar from '../NavBar';

//MUI  -- not used 
// import HomeIcon from '@mui/icons-material/Home';



function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
  
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




