import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    padding: 15,
    minWidth: 275,
    justify: 'center'
  },
  title: {
    fontSize: 18,
    padding: 10
  },
  pos: {
    marginBottom: 12,
  }
});

const Post = (props) => {
  const classes = useStyles();

  return (
    <div style={{paddingTop: '10px'}}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textPrimary" gutterBottom>
            {props.title}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            {props.content}
          </Typography>

        </CardContent>
      </Card>
    </div>
  );
}

export default Post;
