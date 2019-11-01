import React from 'react';
import Card from '../Card'
import './main.css'


export default ({allCards}) => {
  const cardRender = allCards.map(card => (
      <Card 
        key={card.name}
        name={card.name}
        image={card.image}
      />
  ))

  return(
    <section className="container-zone">
      <section className="card-container">
        {cardRender}
      </section>
    </section>
  )
}