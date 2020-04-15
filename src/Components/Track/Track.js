import React from 'react';
import './Track.css';


class Track extends React.Component{

    constructor(props){
        super(props);
        this.addTrack= this.addTrack.bind(this);
        this.removeTrack= this.removeTrack.bind(this);
    }
 
    renderAction(){
        if (this.props.isRemoval === true){
            return(
                <button className= "Track-action"
                onClick = {this.removeTrack}>-</button>
            )
        }else{
            return <button className="Track-action"
            onClick= {this.addTrack}>+</button>
        }
    }

    /* is append the correct action here? Do I actually want to reassign
    the value instead? */
    addTrack(){
        this.props.onAdd.append(this.props.track);
    }

    removeTrack(){
        this.props.onRemove.append(this.props.track);
    }

    render(){


        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist}| {this.props.track.album}</p>
                 </div>
               
            </div>
        
        )
    }
}

/* <button className="Track-action"><!-- + or - will go here --></button>
above line of code lived before the final close div tag of 
the return statement. Copy paste code below before final div tag.


 {this.renderAction}

*/

export default Track;