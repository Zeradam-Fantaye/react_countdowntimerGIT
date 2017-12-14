import React, {Component} from 'react';
import './app.css';
import Clock from "./clock"

class App extends Component {
    constructor(props){
        super(props);

        // In react state is always an object
        this.state = {
            deadline: "December 25, 2017"
        };
    }

    changeDeadline(){
        // You must never mutate or change state directly
        this.setState({
            deadline: this.state.newDeadLine
        });
        
    }

    render(){
        return (
            <div className="App">
                <div className="App-title"> 
                    {/* In react, when we refer to a variable in our text, we use bracker {} notation */}
                    Countdown to {this.state.deadline}
                </div>

                <Clock />

                <div>
                    <input type="text" placeholder="new date" onChange={event => this.setState({newDeadLine: event.target.value})}/>

                    {/* In order to avoid loops we will always use anonymous functions. Anonymous function is part of ES6 */}
                    <button onClick={() => this.changeDeadline()}>Submit</button>
                </div>
               
            </div>
        )
    }
}

export default App;