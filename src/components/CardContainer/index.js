import React, { Component } from 'react';
import Card from '../Card'
import './main.css'


export default class CardContainer extends Component {
  cardRender = () => {
    return this.props.allCards.map(card => {
      return (
        <Card 
          key={card.name}
          cardName={card.name}
          cardImage={card.image}
        />
      )
    })
  }
  render(){
    return(
      <section className="container-zone">
        <section className="card-container">
          {this.cardRender()}
        </section>
      </section>
    )
  }
}