import React, { Component } from 'react';
import './main.css'

export default class Card extends Component {
  state = {
    name : this.props.cardName,
    image: this.props.cardImage
  }

  render() {
    const {name, image} = this.state
    return(
      <div className="card">
        <img src={image} alt={name}></img>
      </div>
    )
  }
}