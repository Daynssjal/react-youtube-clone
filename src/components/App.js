import React, { Component } from 'react';
import List from './List';
import Detail from './Detail';
import SearchBar from './SearchBar';

import '../css/App.css';



const API_KEY = 'YOUR_API_KEY_HERE';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search?';
const results = 5;


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: null,
      selected: null,
      keyword: 'fallgrapp'
    }

    this.fetchVideos(this.state.keyword, null, null);
  }


  fetchVideos = (keyword, id, selected) => {
    let url = '';

    keyword ? 
        url = `${BASE_URL}part=snippet&q=${keyword}&maxResults=${results}&type=video&key=${API_KEY}`
        : url = `${BASE_URL}part=snippet&relatedToVideoId=${id}&type=video&maxResults=${results}&key=${API_KEY}`
    
    fetch(url)
      .then(response => {
        if (response.ok) { return response.json(); }
        else { throw new Error("Something went wrong...") }
      }).then(data => {
          this.setState({
            videos: data.items,
            selected: selected || data.items[0]
          });
    }).catch(error => console.log(error));
  }


  onSelect = (id) => {
    let selectedVideo = this.state.videos.find(video => video.id.videoId === id);
    this.fetchVideos(null, id, selectedVideo);
  }

  
  handleUserInput = (keyword) => {
    this.setState({ keyword: keyword}, this.fetchVideos(keyword, null, null));
  }


  render() {
    return (
      <div className="wrapper">
        <SearchBar handleUserInput={this.handleUserInput} />
        <Detail selected={this.state.selected} />
        <List videos={this.state.videos} onSelect={this.onSelect} />
      </div>
    );
  }
}

export default App;
