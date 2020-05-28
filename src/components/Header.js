import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color='inherit' aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.typographyStyles} color='inherit'>
          Occupancy Gym App
        </Typography>
        <SpeedIcon />
      </Toolbar>
    </AppBar>
)};

export default Header;
