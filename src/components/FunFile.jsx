import HomeIcon from '@mui/icons-material/Home';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ArchiveIcon from '@mui/icons-material/Archive';
import LogoutIcon from '@mui/icons-material/Logout';
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import React from 'react';

function FunFile () {

  return(<>
  <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Inventory" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="Charts" icon={<DonutLargeIcon />} />
          <BottomNavigationAction label="Logout" icon={<LogoutIcon />} />

        </BottomNavigation>
      </Paper>



  </>);
}

export default FunFile;