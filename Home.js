import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
        <Paper className={classes.paper}><div className="text1"><h1><i><u>MARYAM JAMIL</u></i></h1><p><i>An undergraduate with plenty of work experience </i></p>
  <p><i> to draw upon a variety of professional settings,</i></p> 
  <p><i>I'm currently studying software engineering and seeking different development courses to polish my skills.</i></p></div></Paper>
 </Grid>
        <Grid item xs={6}>
        <Paper className={classes.paper}><img className="img" src="https://miro.medium.com/max/2800/1*ZIr-H-xQ5RcJMheccooZrA.jpeg"/></Paper>
         
        </Grid>
      </Grid>
    </div>
  );
}
