import React from 'react';
import {Drawer} from '@material-ui/core/';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InfoIcon from '@material-ui/icons/Info';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LockOpenIcon from '@material-ui/icons/LockOpen';


const drawer = () => {
  /*To change/add options ensure that you match the index with the icons*/
  let pages = ['Gym data', 'About', 'Covid-19 Advice', 'Contact us'];
  let icons = [<EqualizerIcon/>, <InfoIcon/>,<NewReleasesIcon/>, <PermContactCalendarIcon/>];
  return (
  <div>
    <Divider />
    <List>
      <ListItem button key={"Sign up/in"}>
        <ListItemText primary={"Sign up/in"}/>
        <ListItemIcon><LockOpenIcon/></ListItemIcon>
      </ListItem>
      <Divider />
      {pages.map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{icons[index]}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
  </div>
)};

const MenuDrawer = (props) => (
  <Drawer anchor="left" variant="temporary" open={props.menuOpen} onClose={() => props.setMenuOpen(false)}>
    {drawer()}
  </Drawer>
);

export default MenuDrawer;
