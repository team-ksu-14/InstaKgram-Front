import  React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/LinkedCameraOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/PermIdentity';
import MailIcon from '@material-ui/icons/OfflineBoltOutlined';
import NotificationsIcon from '@material-ui/icons/FavoriteBorder';
import { withStyles, fade } from '@material-ui/core/styles';
import Home from './pages/Home'
import Explore from './pages/Explore'
import User from './pages/User'
// import NestedGrid from './components/NestedGrid'

const styles = theme =>({
  progress: {
    margin : theme.spacing.unit *2
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class App extends Component {

  state = {
    pages: 'Home',
  }

  handleHomeButton = () =>{
    this.setState({
      pages: 'Home'
    });
  }

  handleExploreButton = () =>{
    this.setState({
      pages: 'Explore'
    });
  }

  handleUserButton = () =>{
    this.setState({
      pages: 'User'
    });
  }


  render() {
    const{ classes } = this.props;
    return (
      <div className="App">
        <div className = {classes.grow}>
          <AppBar position="static" color="white">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                key = 'Home'
                onClick={this.handleHomeButton}
              >
              <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                InstaKgram
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton aria-label="show 4 new mails" color="inherit" key = 'Explore' onClick = {this.handleExploreButton}>
                  <MailIcon />
                </IconButton>
                <IconButton
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <NotificationsIcon />
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit" key = 'User' onClick = {this.handleUserButton}>
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-label="show 4 new mails" color="inherit" key = 'Explore' onClick = {this.handleExploreButton}>
                  <MailIcon />
                </IconButton>
                <IconButton
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <NotificationsIcon />
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="inherit" key = 'User'onClick = {this.handleUserButton}>
                  <AccountCircle />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        {
          (() => {
            if (this.state.pages === 'Home') return <Home/>
            if (this.state.pages === 'Explore') return <Explore/>
            if (this.state.pages === 'User') return <User/>
          })()
        }
      </div>
    );
  }
}

export default withStyles(styles)(App);
