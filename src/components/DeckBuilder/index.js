import React from 'react';
import './main.css'

import CardContainer from '../CardContainer';

export default ({allCards, selectedCards, user, addCard, removeCard, saveNewDeck}) => {

  return(
    <section className='deck-zone'>
      <CardContainer 
        allCards={allCards}
        method={addCard}
        cardPageCount={9}
      />
      <CardContainer 
        allCards={selectedCards}
        method={removeCard}
        user={user}
        deck = 'deck'
        saveNewDeck={saveNewDeck}
        cardPageCount={9}
      />
    </section>
  )
}