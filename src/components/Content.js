import React from 'react';
import SimpleCard from './Card'
import {Grid} from '@material-ui/core';
import GymSelect from './GymSelect';
import Capacity from './charts/Capacity';
import WeekGraph from './charts/WeekGraph'
import DayGraph from "./charts/DayGraph";


const content = (dayNumber, setDayNumber) => (
  <div>
    <Grid container direction="column" spacing={2}>
      {/*Choose gym selector*/}
      <Grid item><GymSelect /></Grid>
      <Grid item>
        {/*Card to hold Capacity*/}
        <SimpleCard title="Live capacity" content={capacityDescription}>
          <Grid container direction="row">
            <Grid item xs={1} ms={2} ></Grid>
            <Grid item xs={10} ms={8} >
              <Capacity capacity={70}/>
            </Grid>
            <Grid item xs={1} ms={2} ></Grid>
          </Grid>
        </SimpleCard>
      </Grid>
      <Grid item>
        {/*Card to hold Bar Graph*/}
        <SimpleCard title="Weekly view" content={barChartDescription}>
        <Grid container direction="row">
          <Grid item xs={1} ms={2} ></Grid>
          <Grid item xs={10} ms={8} >
          <WeekGraph barData={barData()} setDayNumber={setDayNumber}/>
          <DayGraph barData={daysData()[dayNumber]} days={days()[dayNumber]}/>
          </Grid>
          <Grid item xs={1} ms={2} ></Grid>
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
      data:[43, 51, 62, 54, 70, 73, 66],
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
);

const mondayData = () => (
  {
    labels: ['10:00', '11:00', '12:00', '13:00'],
    datasets:[{
      data: [35, 70, 50],
      backgroundColor:[
        'rgba(255, 98, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ]
    }]
  }
);

const tuesdayData = () => (
  {
    labels: ['10:00', '11:00', '12:00', '13:00'],
    datasets:[{
      data: [20, 50, 90],
      backgroundColor:[
        'rgba(255, 98, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ]
    }]
  }
);

const wednesdayData = () => (
  {
    labels: ['10:00', '11:00', '12:00', '13:00'],
    datasets:[{
      data: [5, 75, 32],
      backgroundColor:[
        'rgba(255, 98, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ]
    }]
  }
);

const thursdayData = () => (
  {
    labels: ['10:00', '11:00', '12:00', '13:00'],
    datasets:[{
      data: [12, 35, 62],
      backgroundColor:[
        'rgba(255, 98, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ]
    }]
  }
);

const fridayData = () => (
  {
    labels: ['10:00', '11:00', '12:00', '13:00'],
    datasets:[{
      data: [54, 21, 11],
      backgroundColor:[
        'rgba(255, 98, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ]
    }]
  }
);

const saturdayData = () => (
  {
    labels: ['10:00', '11:00', '12:00', '13:00'],
    datasets:[{
      data: [65, 32, 73],
      backgroundColor:[
        'rgba(255, 98, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ]
    }]
  }
);

const sundayData = () => (
  {
    labels: ['10:00', '11:00', '12:00', '13:00'],
    datasets:[{
      data: [11, 56, 81],
      backgroundColor:[
        'rgba(255, 98, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ]
    }]
  }
);

const capacityDescription =
  `Shows the live occupancy of the gym as a percentage.
  It is advised not to go to the gym when the bar is red.
  This data is sourced from physical counts provided by the gyms.`;

const barChartDescription =
  `Shows the average occupancy day by day based on historic data.
  Click on a day to get an hour by hour view of that day.`

const daysData = () => [mondayData(), tuesdayData(), wednesdayData(), thursdayData(), fridayData(), saturdayData(), sundayData()];
const days = () => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function Content() {
  const [dayNumber, setDayNumber] = React.useState("");
  return content(dayNumber, setDayNumber);
}
