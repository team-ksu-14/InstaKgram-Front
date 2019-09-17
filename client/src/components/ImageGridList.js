import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 30,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 'auto',
  }
}));


 
export default function ImageGridList() {
  const classes = useStyles();

  const tileData = [
    {
      img: "https://placeimg.com/512/512/1",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/2",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/3",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/4",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/5",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/6",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/7",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/8",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/9",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/10",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/11",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/12",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/13",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/14",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/15",
      title: 'Image',
      author: 'author',
    },
    {
      img: "https://placeimg.com/512/512/16",
      title: 'Image',
      author: 'author',
    }
  ]

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}