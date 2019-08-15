import  React, { Component } from 'react';
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import PostCard from './components/PostCard'
// import NestedGrid from './components/NestedGrid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimarySearchAppBar/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </div>
    );
  }
}

export default App;
