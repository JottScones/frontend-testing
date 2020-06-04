import React from 'react';
import SimpleCard from './Card'
import {Grid} from '@material-ui/core';
import Exercise from './ExerciseCard';

const ExerciseDir = () => {
    return (
        <div style={{paddingTop: '30px', paddingBottom: '150px'}}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <SimpleCard title="Exercise Directory" content={exerciseDirDescription}>

                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <Exercise imageURL='https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg' title='Bench Press' mainDescription={benchDescription} hiddenDescription={hiddenBenchDescription}/>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <Exercise imageURL='https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg' title='Bench Press' mainDescription={benchDescription} hiddenDescription={hiddenBenchDescription}/>
                            </Grid>
                        </Grid>


                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <Exercise imageURL='https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg' title='Bench Press' mainDescription={benchDescription} hiddenDescription={hiddenBenchDescription}/>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                              <Exercise imageURL='https://cdn2.coachmag.co.uk/sites/coachmag/files/2017/05/bench-press_0.jpg' title='Bench Press' mainDescription={benchDescription} hiddenDescription={hiddenBenchDescription}/>
                            </Grid>
                        </Grid>

                    </SimpleCard>
                </Grid>
            </Grid>
        </div>
    )};

const exerciseDirDescription =
    `Learn more about the exercises you can do in the gym.`

const benchDescription =
    `The bench press is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench.`

const hiddenBenchDescription =
    `1. Lie on the bench with your eyes under the bar

    2. Grab the bar with a medium grip-width

    3. unrack the bar by straightening your arms

    4   Lower the bar to your mid-chest

    5. Press the bar back up until your arms are straight`

export default ExerciseDir;
