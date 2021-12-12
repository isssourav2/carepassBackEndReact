import React, { useState, useEffect } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LeftMenu from '../Common/LeftMenu';

function Header() {
  const [studentMenus, setStudentMenus] = useState([]);
  const [FacultyMenus, setFacultyMenus] = useState([]);

  useEffect(() => {
    const stdMenu = [
      'Schedule',
      'apprenties',
      'Review',
      'Placement Notification',
      'Telephone Index',
      'Approval',
      'SetUp',
      'Event Creation',
      'Course SetUp',
    ];

    setStudentMenus(stdMenu);

    const facultyMenu = ['Faculty Setup', 'Leave Setup', 'Attendance Sheet'];
    setFacultyMenus(facultyMenu);
  }, [0, 0]);

  return (
    <MuiAppBar>
      <Toolbar>
        {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton> */}
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          <LeftMenu StudentMenus={studentMenus} FacultyMenus={FacultyMenus} />
        </Typography>

        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Avatar alt="Remy Sharp" src={'./assets/icons/RemySharp.png'} />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
}

export default Header;
