import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
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
}));

export default function PostCard() {
  const classes = useStyles();
  const datas = [
    {
      nickname: '민경환',
      contents: '첫번째 댓글',
    },
    {
      nickname: '박동현',
      contents: '두번째 댓글',
    },
  ]

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src="https://placeimg.com/64/64/2" alt="posting img"></img>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHoriz />
          </IconButton>
        }
        title="게시글 제목"
        subheader="어딘가"
      />
      <CardMedia
        className={classes.media}
        image="https://placeimg.com/512/512/any"
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
        <CardContent>
          <CommentList data={datas}/>
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
