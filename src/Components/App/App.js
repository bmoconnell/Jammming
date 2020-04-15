import React from 'react';
//import logo from './logo.ico';
import './App.css';
import { render } from '@testing-library/react';
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      searchResults: [{name: "Lose It", artist: "Eminem",
      album: "Curtain Call",id: "dunnoId"
        }, 
        {name: "name2", artist: "artist2", album: "album2", id: "id2"}
      ],
      
    "playlistName": "defaultplaylistName",

      "playlistTracks": [
        {
        name:"playlistEnya",
        artist: "playlistEnyaName",
        album: "playlistEnyaAlbum",
        id: "dunnoEnyaId"
      }   
      ]
    }

    this.addTrack= this.addTrack.bind(this);
    this.removeTrack= this.removeTrack.bind(this);
  }

  /*do not understand why setState step is needed to add tracks to our
  playlistTracks state when we have already pushed the relevant value
  to the state. */
  addTrack(track){
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => 
      savedTrack.id === track.id)) {
      return;
    }else{
      tracks.push(track);
      this.setState({ playlistTracks: tracks})
    }
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks= tracks.filter(currentTrack => {
      return currentTrack.id !== track.id;
    })
    this.setState({playlistTracks: tracks});
  }

  render(){
  return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />

    <div className="App-playlist">
      <SearchResults searchResults= {this.state.searchResults} 
      onAdd= {this.addTrack}/>
      <Playlist playlistName= {this.state.playlistName} 
      playlistTracks= {this.state.playlistTracks}
      onRemove= {this.removeTrack}/>

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


