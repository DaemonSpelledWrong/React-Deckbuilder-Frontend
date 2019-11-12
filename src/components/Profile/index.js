import React from 'react';
import './main.css'
import CardContainer from '../CardContainer';

export default ({ user, viewCard }) => (
  
  ( user !== null
    ?
    <section className='profile'>
      <h1>{user.email}</h1>
      { user !== null ? <CardContainer allCards={user.data.attributes.decks} method={viewCard}/> : null }
    </section>
    :
    null
  )
)