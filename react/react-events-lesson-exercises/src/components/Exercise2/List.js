import React, { Component } from 'react';

class List extends Component {
  //should recieve the prop "contact"
  
  render() {
    console.log(this.props.contacts);
    return (
      <div >
        {this.props.contacts.map((c, i) => <Contact key={i} name={c} displayConvo={this.props.displayConvo}/>)}
      </div>
    );
  }
}

export default List;
