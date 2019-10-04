import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return (
        <i className=
          {`Die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`}></i>
    );                     // could also write ${this.props.rolling && 'shaking'}
  }
}

export default Die;
