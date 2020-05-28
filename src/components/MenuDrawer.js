import React from 'react';
import {Drawer} from '@material-ui/core/';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const drawer = (
  <div>
    <Divider />
    <List>
      {['Gym data', 'About', 'Covid-19 Advice', 'Contact us'].map((text) => (
        <ListItem button key={text}>
          <ListItemIcon>{/*need to choose icon*/}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
  </div>
);

const MenuDrawer = (props) => (
  <Drawer anchor="left" variant="temporary" open={props.menuOpen} onClose={() => props.setMenuOpen(false)}>
    {drawer}
  </Drawer>
);

export default MenuDrawer;
