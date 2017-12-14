import React, {Component} from 'react';
import "./app.css";

class Clock extends Component{
    constructor(probs){ 
        super (probs);
        this.state = {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }

    render(){
        return(
            <div>
                <div className="clock-days">{this.state.day} days </div>
                <div className="clock-hours"> {this.state.hour} hours </div>
                <div className="clock-minutes"> {this.state.minute}  minutes </div>
                <div className="clock-seconds"> {this.state.second}  seconds </div>
            </div>
        );
    }

}

export default Clock;