import React from 'react';
import logo from './logo.ico';
import './App.css';
import { render } from '@testing-library/react';
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      "searchResults": [{
        name: "Lose It",
        artist: "Eminem",
        album: "Curtain Call",
        id: "dunnoId"
        
    }],
      
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

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => 
      savedTrack.id === track.id)) {
      return;
    }else{
      this.state.playlistTracks.append(track);
    }
  }

  removeTrack(track){
    const playlist = this.state.playlistTracks
    if(this.state.playlistTracks.find(savedTrack =>
      savedTrack.id === track.id)){
       playlist.remove(track)
      }else{
        return;
      }
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


