import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} onClick={() => setMenuOpen(!menuOpen)} color='inherit' aria-label="menu">
          <MenuIcon />
        </IconButton>
        <MenuDrawer setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
        <Typography className={classes.typographyStyles} color='inherit'>
          Occupancy Gym App
        </Typography>
        <SpeedIcon />
      </Toolbar>
    </AppBar>
)};

export default Header;
