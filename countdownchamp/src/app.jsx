//When we create react component we use .jsx extension
//The jsx file looks like a HTML file, but it's actually a js file

//We need to import React and its component features

import React, {Component} from 'react';
import './app.css';
import Clock from "./clock";
import {Form, FormControl, Button} from "react-bootstrap";

class App extends Component {

    //State:
        //It is the data that is pertinent to the application
        //it helps to add reactivity in order for the user to react with it
        //Each "Component" has its own local state
    
    
    //This will allow us to have a state within the component
    //This will also allow us to have a local state in our class
    constructor(props){
        super(props);

        this.state = {   //In react, state is always an object
            deadline: "December 25, 2017"
        };
    }

    //Updating the "state"
    // In order to update our local class' data, we use React's "setState" method
    //NOTE: NEVER CHANGE/MUTATE STATE DIRECTLY like this.state.deadline = "asdfasdf"
    changeDeadline(){
        // You must never mutate or change state directly
        this.setState({
            deadline: this.state.newDeadLine
        });
        
    }

    //This method will allow us to return any jsx that we would like
    //This method has to be there all the time
    render(){
        return (

            //The "() =>" is ES6's anonymous function
            //In react to represent a variable, we use a { } notation, like {this.state.deadline}
            <div className="App">
                <div className="App-title"> 
                    {/* In react, when we refer to a variable in our text, we use bracker {} notation */}
                    Countdown to {this.state.deadline}
                </div>

                {/* Here, in the clock tag, we are passing the current state's "deadline" variable into the Clock template. When it gets to the Clock template, it will be recognized as "props" within the constructor method. */}
                <Clock 
                    deadline={this.state.deadline}    
                />

                <Form inline={true}>
                    <FormControl className="Deadline-input" placeholder="new date" onChange={event => this.setState({newDeadLine: event.target.value})}/>

                    {/* In order to avoid loops we will always use anonymous functions. Anonymous function is part of ES6 */}
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
               
            </div>
        )
    }
}

//This is how we export to other modules that we later import it
//Let's call it the "default" component
export default App;