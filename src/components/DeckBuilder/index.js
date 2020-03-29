import React, { useState, useEffect } from 'react';
import './main.css'

import CardContainer from '../CardContainer';

export default ({allCards, user, deck_id}) => {

  const [ selectedCards, setSelectedCards ] = useState([]);

  useEffect(() => {
    if (deck_id) {
      fetch(`https://safe-bayou-71328.herokuapp.com/decks/${deck_id}`)
        .then(response => response.json())
        .then(deck => setSelectedCards(deck.standard_cards))
    }
  }, [deck_id]);

  const addCard = card => {
    return (
      selectedCards.includes(card)
    ? null
    : setSelectedCards([...selectedCards, card])
    );
  };

  const removeCard = card => {
    return selectedCards.includes(card)
    ? setSelectedCards(selectedCards.filter(thisCard => {
        return thisCard !== card;
      }))
    : null
  };

  const saveDeck = () => {
    deck_id !== null
    ?
      fetch(`https://safe-bayou-71328.herokuapp.com/decks/${deck_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Deck',
          user_id: user.data.attributes.id,
          cards: selectedCards
        })
      })
    :
      fetch('https://safe-bayou-71328.herokuapp.com/decks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: user.data.attributes.id,
          name: 'Deck',
          cards: selectedCards
        })
      })
  };

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
        saveNewDeck={saveDeck}
        cardPageCount={9}
      />
    </section>
  )
}