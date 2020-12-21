import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */


    render() {
        return (<div>Welcome, {this.props.user}. The hottest item is {this.props.item.item} for ${this.props.item.price}</div>)

    }
}

export default Landing