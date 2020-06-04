import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDrawer from './MenuDrawer';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

const Header = (props) => {
  console.log(props);

  const classes = useStyles();
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <AppBar style={{background: props.darkMode ? '#262424' : '#4e2df0'}} position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} onClick={() => setMenuOpen(!menuOpen)} color='inherit' aria-label="menu">
          <MenuIcon />
        </IconButton>
        <MenuDrawer darkMode={props.darkMode} setDarkMode={props.setDarkMode} setMenuOpen={setMenuOpen} menuOpen={menuOpen} setWindowNo={props.setWindowNo}/>
        <Typography className={classes.typographyStyles} color='inherit'>
          Occupancy Gym App
        </Typography>
      </Toolbar>
    </AppBar>
)};

export default Header;
