import React from 'react';
import './main.css'

import CardContainer from '../CardContainer';

export default ({allCards, selectedCards, isLoggedIn, addCard, removeCard}) => {

  return(
    <section className='deck-zone'>
      <CardContainer 
        allCards={allCards}
        method={addCard}
      />
      <CardContainer 
        allCards={selectedCards}
        method={removeCard}
      />
    </section>
  )
}