import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    padding: '10px 20px 20px 20px'
  },
  title: {
    padding: '10px 20px'
  },
  closeButton: {
    padding: '10px 20px',
    right: -1,
    position: 'absolute',
    color: '#333'
  }
}));

const LearnMore = (props) => {
  const classes = useStyles();
  return (
  <Dialog open={props.openDialog} onClose={() => props.setOpenDialog(false)}>
    <Grid container direction="row">
      <Grid item xs={10} sm={11}>
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item xs={2} sm={1}>
        <IconButton aria-label="close" className={classes.closeButton} onClick={()=> props.setOpenDialog(false)}>
        <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
    <Typography gutterBottom className={classes.root}>
      {props.content}
    </Typography>
  </Dialog>
)};

export default LearnMore;
