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

        // this will show the case where props can recognize the "deadline" variable that's been passed to it from the <Clock />
        /*console.log("this.props = ", this.props);*/
    }

    //NOTE:
        //In react, whenever a component renders on the screen, we refer
        //to those events as "mounting onto" or "unmounting from" the application
            
        //React provides special methods for each component based off of this events
        //in order to allow us to run code for application, and react calls them LifeCycle hooks   

        //Here we will use two hooks( or methods)
            //1. componentWillMount()
                    //This runs before the component completely renders onto the application. 
                    
                    //We will use this method because we want to calculate the past props data and the current days, hours, minutes, and seconds we will need before we render our data onto the screen.
                    
                    //So, once we have our data, we will update the state of our application so that the proper stuff gets rendered
            
            //2. componentDidMount()
                    //This one runs after the component completely rendered onto the application

    componentWillMount() {
        this.getTimeUntil(this.props.deadline)
    }

    getTimeUntil(deadline){
        // For variables that don't need updating, we use "const", and for those who need updating we use "let"
        const time = Date.parse(deadline) - Date.parse(new Date());

        const seconds = Math.floor((time/1000) % 60);

        const minutes = Math.floor((time/1000/60) % 60);

        const hours = Math.floor(time / (1000 * 60 * 60) % 24);

        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({day: days, hour: hours, minute: minutes, second: seconds });
        
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