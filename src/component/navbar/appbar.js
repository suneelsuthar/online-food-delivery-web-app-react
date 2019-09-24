import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './appbar.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {logout} from './../../store/action'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed"style={{backgroundColor:"rgb(7, 177, 196)", padding:"5px"}} >
        
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
            <img src="https://img.icons8.com/bubbles/50/000000/food.png" />

          </IconButton>
          <span variant="h6" color="inherit" className="resName">
            RESTAURANT
          </span>
          <span className="iconDiv">
          <ExitToAppIcon style={{fontSize:"35px",marginRight:"2%"}} onClick={()=>logout()} />
        <AccountCircleIcon style={{fontSize:"35px",marginRight:"2%"}} />
        </span>
        </Toolbar>
        
       
      </AppBar>
    </div>
  );
}
// style={{fontSize:"35px",marginRight:"2%"}}