import React from 'react';
import SimpleCard from './Card'
import {Grid} from '@material-ui/core';
import GymSelect from './GymSelect';
import Capacity from './charts/Capacity';
import BarGraph from './charts/BarGraph'


const Content = () => (
  <div>
    <Grid container direction="column" spacing={2}>
      {/*Choose gym selector*/}
      <Grid item><GymSelect /></Grid>
      <Grid item>
        {/*Card to hold Capacity*/}
        <SimpleCard title="Live capacity">
          <Grid container direction="row">
            <Grid item xs={1} ms={2} lg={3}></Grid>
            <Grid item xs={10} ms={8} lg={6}>
              <Capacity capacity={54}/>
            </Grid>
            <Grid item xs={1} ms={2} lg={6}></Grid>
          </Grid>
        </SimpleCard>
      </Grid>
      <Grid item>
        {/*Card to hold Bar Graph*/}
        <SimpleCard title="Weekly view">
        <Grid container direction="row">
          <Grid item xs={1} ms={2} lg={3}></Grid>
          <Grid item xs={10} ms={8} lg={6}>
            <BarGraph barData={barData()}/>
          </Grid>
          <Grid item xs={1} ms={2} lg={3}></Grid>
        </Grid>
        </SimpleCard>
      </Grid>
    </Grid>
  </div>
);

const barData = () => (
  {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets:[{
      label:'Av capacity',
      data:[
        43,
        51,
        62,
        54,
        70,
        73,
        66
      ],
      backgroundColor:[
        'rgba(255, 98, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ]
    }]
  }
)
export default Content;
