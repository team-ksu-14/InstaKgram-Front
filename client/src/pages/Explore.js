import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    maxWidth: 700,
    height: 200,
    marginTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  avatar:{
    margin: 10,
    width: 100,
    height: 100,
  },
}));

export default function Explore() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp">
              <img img src= "https://placing.com/512/512/any"  alt="user img" className={classes.avatar}></img>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="User ID"
          secondary={
            <React.Fragment>
              <Typography
                component="li"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}