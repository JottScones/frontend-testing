import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {

  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} lg={3}/>
          <Grid item xs={12} sm={8} lg={6}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={2} lg={3}/>
        </Grid>
      </Grid>
    );
  }
}

export default App;
