import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '360px',
  },
  user:{
    transform: "uppercase"
  }
}));

const Turn = ({ userTurn }) => {
  const classes = useStyles();
  return (
    <List dense className={classes.root}>
          <ListItem key={userTurn} button>
            <ListItemText className={classes.user} primary={userTurn} />
          </ListItem>
    </List>
        );
}
      
export default Turn;


