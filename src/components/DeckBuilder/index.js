import React, { Component } from 'react';
import './main.css'

import CardContainer from '../CardContainer';

export default class DeckBuilder extends Component {

  state = {
    selectedCards: []
  }

  addCard = () => {
    console.log('clicked!')
  }

  removeCard = () => {
    console.log('removed!')
  }

  render() {
    return(
      <section className='deck-zone'>
        <CardContainer 
          allCards={this.props.allCards}
          addCard={this.addCard}
        />
        <CardContainer 
          allCards={this.state.selectedCards}
          removeCard={this.removeCard}
        />
      </section>
    )
  }
}