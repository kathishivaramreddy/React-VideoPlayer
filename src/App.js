import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Video} from './Video';
import {Menu} from './Menu'

const VIDEOS = {
  fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
  slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
  cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};

class App extends Component {

  constructor(props){
    super(props);

    this.state = {src : VIDEOS.fast}
    this.chooseVideo =this.chooseVideo.bind(this);
  }

  chooseVideo(newVideo){
    this.setState( {src : VIDEOS[newVideo]})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Video Player</h1>
        </header>
        <br/>
        <body>
          <Menu chooseVideo={this.chooseVideo}/>
          <Video src = {this.state.src}/>
        </body>
        </div>
    );
  }
}

export default App;
