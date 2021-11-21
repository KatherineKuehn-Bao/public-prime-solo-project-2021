import HomeIcon from '@mui/icons-material/Home';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ArchiveIcon from '@mui/icons-material/Archive';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';



import { Paper } from '@mui/material';
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import React from 'react';

//sticky Nav Set up 
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function FunFile() {
  //set Value & intialize hooks 
  const [navValue, setNavValue] = useState(``);
  const history = useHistory();

//change pages with icons 
  const handleChange = (event, newValue) => {
    console.log(`this is newValue`, newValue);
    setNavValue(newValue);
    if (newValue === `logout`) {
      console.log(`log out pop up `);
      setOpen(true);
    }
    // else if (newValue === `settings`) {
    //     console.log(`settings popup`);
    //     setOpen(true);
    // }
    else {
      history.push(newValue);
    }
  }

//ADD BUTTON 
  const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  });




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


//not clicking 
        {/* <StyledFab 
        color="secondary" 
        aria-label="add"
        value="/form">
          <AddIcon />
        </StyledFab> */}

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