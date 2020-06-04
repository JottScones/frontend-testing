import React from 'react';
import SimpleCard from './Card'
import {Grid} from '@material-ui/core';
import GymSelect from './GymSelect';
import Capacity from './charts/Capacity';
import WeekGraph from './charts/WeekGraph'
import DayGraph from "./charts/DayGraph";
import Post from './Post'
import IconLabelTabs from "./IconLabelTabs";
import ExerciseDir from './ExerciseDir';

function content(dayNumber, setDayNumber, windowNo) {
    if (windowNo === 0) {
        return windowNo0(dayNumber, setDayNumber);
    } else if (windowNo === 1) {
        return windowNo1();
    } else if (windowNo === 2) {
        return windowNo2();
    }
}

const windowNo0 = (dayNumber, setDayNumber) => (
    <div style={{paddingBottom: '250px'}}>
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <GymSelect/>
            </Grid>
            <Grid item>
                <IconLabelTabs elementsToDisplay={[capacityElement(), barChartElement(dayNumber, setDayNumber)]}/>
            </Grid>
        </Grid>
    </div>
);

const windowNo1 = () => (
    <div style={{paddingTop: '30px', paddingBottom: '150px'}}>
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <SimpleCard title="Updates From Gym" content={updatesDescription}>

                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={1} ms={2}></Grid>

                        <Grid item xs={10} ms={8}>
                            <Post title="Update 2" content="This is an update!"/>
                            <Post title="Update 1" content="This is an update!"/>
                        </Grid>

                        <Grid item xs={1} ms={2}></Grid>
                    </Grid>

                </SimpleCard>
            </Grid>
        </Grid>
    </div>
);

const windowNo2 = () => (
  <ExerciseDir/>
);


const barData = () => (
    {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Av capacity',
            data: [43, 51, 62, 54, 70, 73, 66],
            backgroundColor: [
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
        datasets: [{
            data: [35, 70, 50],
            backgroundColor: [
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
        datasets: [{
            data: [20, 50, 90],
            backgroundColor: [
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
        datasets: [{
            data: [5, 75, 32],
            backgroundColor: [
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
        datasets: [{
            data: [12, 35, 62],
            backgroundColor: [
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
        datasets: [{
            data: [54, 21, 11],
            backgroundColor: [
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
        datasets: [{
            data: [65, 32, 73],
            backgroundColor: [
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
        datasets: [{
            data: [11, 56, 81],
            backgroundColor: [
                'rgba(255, 98, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)'
            ]
        }]
    }
);

const capacityElement = () => {
    return (
        <SimpleCard title="Live capacity" content={capacityDescription}>
            <Grid container direction="row">
                <Grid item xs={1} ms={2}></Grid>
                <Grid item xs={10} ms={8}>
                    <Capacity capacity={70}/>
                </Grid>
                <Grid item xs={1} ms={2}></Grid>
            </Grid>
        </SimpleCard>
    )
}

const capacityDescription =
    `Shows the live occupancy of the gym as a percentage.
  It is advised not to go to the gym when the bar is red.
  This data is sourced from physical counts provided by the gyms.`


const barChartElement = (dayNumber, setDayNumber) => {
    return (
        <SimpleCard title="Weekly view" content={barChartDescription}>
            <Grid container direction="row">
                <Grid item xs={1} ms={2}></Grid>
                <Grid item xs={10} ms={8}>
                    <WeekGraph barData={barData()} setDayNumber={setDayNumber}/>
                    <DayGraph barData={daysData()[dayNumber]} days={days()[dayNumber]} dayNumber={dayNumber}/>
                </Grid>
                <Grid item xs={1} ms={2}></Grid>
            </Grid>
        </SimpleCard>
    )
}

const barChartDescription =
    `Shows the average occupancy day by day based on historic data.
  Click on a day to get an hour by hour view of that day.`

const updatesDescription =
    `Recent updates from your selected gym.`

const daysData = () => [sundayData(), mondayData(), tuesdayData(), wednesdayData(), thursdayData(), fridayData(), saturdayData()];
const days = () => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function Content(props) {
    const [dayNumber, setDayNumber] = React.useState(new Date().getDay());
    return content(dayNumber, setDayNumber, props.windowNo);
}
