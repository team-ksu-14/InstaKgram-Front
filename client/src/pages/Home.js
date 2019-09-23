import React, { Component } from 'react';
import PostCard from '../components/PostCard'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles';


const styles = (theme) =>({
    progress: {
      margin : theme.spacing.unit *2
    },
});
class Home extends Component{

    state = {
        posts: "",
        completed: 0
      }

    componentDidMount(){
        this.timer = setInterval(this.progress, 20);
        this.callApi()
        .then(res => this.setState({posts: res}))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/posts');
        const body = await response.json();
        return body;
    }

    progress = () => {
        const { completed } = this.state;
        this.setState({ completed : completed >= 100 ?0 : completed + 1});
    }

    render(){
        const{ classes } = this.props;
        return(
            <div>
            {
                this.state.posts ? this.state.posts.map(c => {
                  return(
                    <PostCard
                     key = {c.idx}
                     contents = {c.contents}
                     imageUrl = {c.imageUrl}
                     member = {c.member}/>
                  )
                }) : <CircularProgress className = {classes.progress} variant = "determinate" value = {this.state.completed}/>
            }
            </div>
        );
    }

}

export default withStyles(styles)(Home);