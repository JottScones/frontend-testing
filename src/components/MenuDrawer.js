import React from 'react';
import {Drawer, Switch} from '@material-ui/core/';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InfoIcon from '@material-ui/icons/Info';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';

import FormControlLabel from '@material-ui/core/FormControlLabel';


const drawer = (darkMode, setDarkMode, setWindowNo) => {
  return (
  <div>
    <Divider />
    <List>
      <ListItem button key={"Sign up/in"}>
        <ListItemText primary={"Sign up/in"}/>
        <ListItemIcon><LockOpenIcon/></ListItemIcon>
      </ListItem>

      <Divider />

      <ListItem button key={"Gym data"} onClick={() => setWindowNo(0)}>
        <ListItemIcon><EqualizerIcon/></ListItemIcon>
        <ListItemText primary={"Gym data"}/>
      </ListItem>

      <ListItem button key={"Gym Updates"} onClick={() => setWindowNo(1)}>
        <ListItemIcon><InfoIcon/></ListItemIcon>
        <ListItemText primary={"Gym Updates"}/>
      </ListItem>

      <ListItem button key={"Exercises"} onClick={() => setWindowNo(2)}>
        <ListItemIcon><ViewCarouselIcon/></ListItemIcon>
        <ListItemText primary={"Exercises"}/>
      </ListItem>

      <Divider />

      <ListItem>
        <FormControlLabel
          control= {<Switch  checked={darkMode} onChange={() => setDarkMode(prevMode => !prevMode)}/>}
          label="Dark Mode"
        />
      </ListItem>
    </List>
    <Divider />


  </div>
)};

const MenuDrawer = (props) => (
  <Drawer anchor="left" variant="temporary" open={props.menuOpen} onClose={() => props.setMenuOpen(false)}>
    {drawer(props.darkMode, props.setDarkMode, props.setWindowNo)}
  </Drawer>
);

export default MenuDrawer;
