import React from 'react';
import logo from './logo.ico';
import './App.css';
import { render } from '@testing-library/react';
import SearchBar from "../Searchbar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {"searchResults": []}
  }
  render(){
  return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />

    <div className="App-playlist">
      <SearchResults searchResults= {this.state.searchResults} />
      <Playlist />

    </div>
  </div>
</div>
  );
}
}


/*
under 1st div
<!-- Add a SearchBar component -->
under 2nd div
<!-- Add a SearchResults component -->
<!-- Add a Playlist component -->

*/


