import React from 'react';
import './main.css'
import CardContainer from '../CardContainer';

const Profile = ({ user, decks, setDeckId}) => {

  const editDeck = deck => {
    setDeckId(deck.attributes.id);
    document.getElementById('deckbuilder').click();
  };

  return ( 
    user !== null
    ?
    <section className='profile'>
      <h1>Email: {user.data.attributes.email}</h1>
      <CardContainer allCards={decks.data} method={editDeck} edit='edit'/>
    </section>
    :
    null
  )
};

export default Profile;