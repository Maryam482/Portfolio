import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from './pages/Home';
import Qualification from './pages/Qualification';
import Contact from './pages/Contact';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  

}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, set] = useState(true)
  const mystyle = {
    color:"white",
    float:"Right",
    justifyContent:"between",
    marginRight:70,
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div className={classes.root}>
      <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className = {classes.title}>Porfolio</Typography>
      
        <Button color="inherit"><Link className = "link" to='/'>Home</Link> </Button>
          <Button color="inherit"><Link className="link" to='/Qualification'>Qualification</Link></Button>
        <Button color="inherit"> <Link className="link" to='/Contact'>Contact</Link></Button> 
        </Toolbar>
      </AppBar>
 
    <Switch>
    <Route path = "/Contact">
          <Contact/>
        </Route>
        <Route path = "/Qualification">
        {/* style={{backgroundColor:"#b19cd9",width:"50%",margin:"auto"}} */}
        <Qualification style={{marginTop:"10px"}}open={open} onClick={() => set((state) => !state)}>
        <span><u>QUALIFICATION</u></span><br/>
         <span>2018 - Present</span><br/>
        <span>BACHELOR IN SOFTWARE ENGINEERING</span>
      
    </Qualification>
        </Route>
         <Route path = "/">
        <Home/>
      </Route>
    </Switch>
    </Router>
    </div>
  );
}
