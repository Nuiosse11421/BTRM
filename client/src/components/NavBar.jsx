import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton, Drawer } from '@mui/material';
import { Home, Person, TrendingUp, History, Assignment, ContactMail, GroupAdd, ExitToApp, Menu } from '@mui/icons-material';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profile
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)} sx={{width: '33.3333vw', flexShrink: 0}}>
        <List>
        <ListItem button component={Link} to="/">
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/profile">
            <ListItemIcon><Person /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/chart">
            <ListItemIcon><TrendingUp /></ListItemIcon>
            <ListItemText primary="RoleScoreChart" />
          </ListItem>
          <ListItem button component={Link} to="/history">
            <ListItemIcon><History /></ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
          <ListItem button component={Link} to="/form">
            <ListItemIcon><Assignment /></ListItemIcon>
            <ListItemText primary="FormComponent" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemIcon><ContactMail /></ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={Link} to="/createteam">
            <ListItemIcon><GroupAdd /></ListItemIcon>
            <ListItemText primary="CreateTeamPage" />
          </ListItem>
          
          <ListItem button component={Link} to="/logout">
            <ListItemIcon><ExitToApp /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default NavBar;
