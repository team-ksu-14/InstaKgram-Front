import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class CommentList extends Component {

  render() {
    return (
      <div>
        {this.props.contents != null ? 
          this.props.contents.map((comment) => {
            return <List><ListItem><b>{comment.nickname}</b>{comment.contents}</ListItem></List>
          })
        : null}
      </div>
    );
  }

}

export default CommentList;