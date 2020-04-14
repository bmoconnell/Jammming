import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track.js';

export class TrackList extends React.Component{
    render(){
        return(
            <div class="TrackList">
                this.props.tracks.map((track) =>{
                    <Track track= {track}  key= "track.id"/>

                })
                    
            </div>
        )
    }
}

/*<!-- You will add a map method that 
renders a set of Track components  -->
directly under the opening div in the
return statement of the Tracklist component class*/