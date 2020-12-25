import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }

    showAlert = () => {
        alert(`Come in ${this.state.name}, you're ${this.state.age} - that's good enough`)
    }

    handleInputChange = event => {
        const {value, name} = event.target;    
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div>
                <input id="name-input" name="name" onChange={this.handleInputChange}/>
                <input id="age-input" name="age" onChange={this.handleInputChange}/>
                <button onClick={this.showAlert}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;