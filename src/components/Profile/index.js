import React from 'react';
import './main.css'
import CardContainer from '../CardContainer';

export default ({ user, decks, method }) => (
  
  ( user !== null
    ?
    <section className='profile'>
      <h1>{user.email}</h1>
      { user !== null ? <CardContainer allCards={decks.data} method={method} edit='edit'/> : null }
    </section>
    :
    null
  )
)