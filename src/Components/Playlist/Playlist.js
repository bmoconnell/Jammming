import React from 'react';
import TrackList from '../TrackList/TrackList.js';
import './Playlist.css';
import Track from '../Track/Track.js'

class Playlist extends React.Component{
    render(){
        return(
            <div className="Playlist">
                 <input defaultValue={'New Playlist'} />
                 <TrackList tracks= {this.props.playlistTracks} 
                    onRemove= {this.props.onRemove}
                    isRemoval= {true}/> 
            
               
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}


export default Playlist;
/*import TrackList component under the input element*/