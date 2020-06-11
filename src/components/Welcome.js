import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {Grid} from '@material-ui/core';
import image from './../Sketch.png';
import background from './../background.jpg';
import { blue, red, green} from '@material-ui/core/colors';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import {Typography} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${background}) center center fixed`,
    backgroundSize: "120%",
    backgroundRepear: "repeat",
    width: "100%",
  },
  header: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingLeft: 20
  },
  headerTitle: {
    color: "black"
  },
  container: {
    paddingTop: 20,
    width: "100%",
    height: "auto",
  },
  infoContainer: {
    padding: "20px 5% 0 5%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    color: "#eee"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "10px 0"
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    paddingBottom: 20
  },
  mockupImg: {
    width: "90%",
    height: "auto",
  },
  buttonSeparator: {
    width: "10px",
    height: "10px"
  },
  featureTitle: {
    paddingTop: "5%"
  },
  featureContainer: {
    padding:"20px 5%"
  },
  feature: {
    padding: "5% 2.5% 0 2.5%"
  }
}));

const Welcome = () => {
  const classes = useStyles();

  return (
  <div>
  <div className={classes.root}>
    <Grid container direction="row" alignItems="flex-start" className={classes.container}>

      <Grid item xs={12} md={6} className={classes.infoContainer}>
        <Typography variant="h3">No more waiting at the turnstyle.</Typography>
        <Typography variant="subtitle1">Grafit is a gym capacity tool that empowers you to make a more informed decision on when to go to the gym.</Typography>
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="primary">
            Continue to site
          </Button>
          <div className={classes.buttonSeparator}/>
          <Button variant="contained" color="primary">
            Sign in/up
          </Button>
        </div>
      </Grid>

      <Grid item xs={12} md={6} className={classes.imgContainer}>
        <img src={image} className={classes.mockupImg}/>
      </Grid>

    </Grid>
  </div>
  <div style={{paddingBottom: "5%"}}>
    <Typography variant="h4" align="center" className={classes.featureTitle}>Tools we offer to improve your gym experience</Typography>
    <Grid container className={classes.featureContainer}>
      <Grid item xs={12} md={4} className={classes.feature}>
        <EqualizerIcon fontSize="large" style={{color: blue[900]}}/>
        <Typography variant="h5">Live Gym Analytics</Typography>
        <Typography variant="subtitle1">
          Get access to the current gym capacity and to historic capacity data.
          See what workouts other users are doing at your gym.
          Making decisions about the best time to visit the gym is now as easy as
          opening Grafit!
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.feature}>
        <InfoIcon fontSize="large" style={{color: red[500]}}/>
        <Typography variant="h5">Updates from your Gym</Typography>
        <Typography variant="subtitle1">
          Worried you might miss that awesome deal your gym is offering? Need to know when
          the next pilates class is? Grafit's gym updates feature gives gym users
          the power to find the most up-to-date information from their gyms.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.feature}>
        <ViewCarouselIcon fontSize="large" style={{color: green[500]}}/>
        <Typography variant="h5">Gym Directory</Typography>
        <Typography variant="subtitle1">
          Put your mind at ease, Grafit's gym directory helps subdue the nervousness
          of trying a new workout. We provide expert and clear guides on how to
          perform some of the most effective and popular workouts.

        </Typography>
      </Grid>
    </Grid>
  </div>
  </div>
)};

export default Welcome;
