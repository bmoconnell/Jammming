import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

class TrackList extends React.Component{
    render(){
        const tracks= this.props.tracks
        return(
            <div className="TrackList">
                
                {tracks.map(track => {
                    
                return <Track track= {track}  key= {track.id}
                onAdd= {this.props.onAdd} 
                onRemove= {this.props.onRemove}
                isRemoval= {this.props.isRemoval}/>
                })
             }
                    
            </div>
        )
    }
}

export default TrackList;

/*<!-- You will add a map method that 
renders a set of Track components  -->
directly under the opening div in the
return statement of the Tracklist component class*/


/* check whether definition of tracks variable is in the correct place*/