import React, { Component } from 'react';

class SpotCheck1 extends Component {
    logHover(){
        console.log("I was hovered")
    }
    //add another method called logHover, 
    //which prints "I was hovered!" when the *mouse enters* the button
    logClick() {
        console.log("I was clicked!")
    }
    render() {
        return (
            <button id="logger" onMouseEnter={this.logHover} onClick={this.logClick}>Click me</button>
        );
    }
}

export default SpotCheck1;
