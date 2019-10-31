import React from 'react';
import Card from '../Card'
import './main.css'

const CardContainer = (props) => {
  const cardRender = () => {
    return props.allCards.map(card => {
      return (
        <Card 
          key={card.name}
          cardName={card.name}
          cardImage={card.image}
        />
      )
    })
  }
  return(
    <section className="container-zone">
      <section className="card-container">
        {cardRender()}
      </section>
    </section>
  )
}

export default CardContainer