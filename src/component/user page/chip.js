import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
    width:"117px",
    border:"2px solid rgb(246, 88, 144)",
    color:"rgb(246, 88, 144)",
  },
}));

export default function SmallOutlinedChips(props) {
  const classes = useStyles();

  
 

  return (
    // <div className={classes.root}>
        
      <Chip variant="outlined"  size="large" label={props.name} className={classes.chip} clickable  />
      
     
    // </div>
  );
}