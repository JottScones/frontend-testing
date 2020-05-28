import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LearnMore from './LearnMore'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justify: 'center'
  },
  title: {
    fontSize: 24,
    padding: 10
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    padding: 10,
    width: '100%'
  }
});

const SimpleCard = (props) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.title}
        </Typography>
      </CardContent>
      {props.children}
      <CardActions style={{justifyContent: 'center'}}>
        <Button className={classes.button} size="medium" onClick={() => setOpenDialog(!openDialog)}>Learn More</Button>
        <LearnMore openDialog={openDialog} setOpenDialog={setOpenDialog} title={props.title} content={props.content}/>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;
