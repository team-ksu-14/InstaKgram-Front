import React from 'react';
import CommentList from './CommentList'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Input from '@material-ui/core/Input';
import{withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  card: {
    maxWidth: 512,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  input: {
    width: '90%',
    margin: theme.spacing(1),
  },
});

class PostCard extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img src= "https://placing.com/512/512/any"  alt="posting img"></img>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHoriz />
            </IconButton>
          }
          title={this.props.contents}
          subheader="어딘가"
        />
        <CardMedia
          className={classes.media}
          image={this.props.imageUrl}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <BookmarkIcon/>
          </IconButton>
        </CardActions>
        <CardContent  data = {this.props.contents}>
          <CommentList/>
          <Input
            placeholder="댓글 달기..."
            className={classes.input}
            inputProps={{
              'aria-label': 'description',
            }}
          />
        </CardContent>
    </Card>
    );
  }
}

export default withStyles(styles)(PostCard);
