import HomeIcon from '@mui/icons-material/Home';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ArchiveIcon from '@mui/icons-material/Archive';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';


import { Paper } from '@mui/material';
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import React from 'react';

//sticky Nav Set up 
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function FunFile() {
  //set Value & intialize hooks 
  const [navValue, setNavValue] = useState(``);
  const history = useHistory();
  const dispatch = useDispatch();

  //change pages with icons 
  const handleChange = (event, newValue) => {
    console.log(`this is newValue`, newValue);
    setNavValue(newValue);
    if (newValue === `logout`) {
      dispatch({ type: 'LOGOUT' })
    }
    else {
      history.push(newValue);
    }
  }


  return (<>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

      <BottomNavigation
        showLabels
        value={navValue}
        onChange={(event, newValue) => handleChange(event, newValue)
        }
      >
        <BottomNavigationAction
          value="/user"
          label="Home"
          icon={<HomeIcon />} />

        <BottomNavigationAction
          value="/inventory"
          label="Inventory"
          icon={<ArchiveIcon />} />

        <BottomNavigationAction
          value="/form"
          label="Add Food"
          icon={<AddIcon />} />

        <BottomNavigationAction
          value="/figures"
          label="Charts"
          icon={<DonutLargeIcon />} />

        <BottomNavigationAction
          value="logout"
          label="Logout" icon={<LogoutIcon />} />

      </BottomNavigation>
    </Paper>

  </>);
}

export default FunFile;