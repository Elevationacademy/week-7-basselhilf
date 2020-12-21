import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (<div>{this.props.item.item}: ${this.props.item.price}</div>)

    }
    render() {
        const {price, discount, item} = this.props.item
        return <div>{item}: ${this.props.shouldDiscount ? price * (1 - discount) : price}</div>
    }
}

export default Item