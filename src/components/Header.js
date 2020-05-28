import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';
import {makeStyles} from '@material-ui/styles';

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
        <Typography className={classes.typographyStyles}>
          Occupancy Gym App
        </Typography>
        <SpeedIcon />
      </Toolbar>
    </AppBar>
)};

export default Header;
