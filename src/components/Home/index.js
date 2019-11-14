import React from 'react';
import './main.css'

const Home = ({user}) => {
  return(
    <section className="home-container">
      {
        user !== null
        ?
          <p>
            Welcome back, {user.data.attributes.email}!
          </p>
        :
          <p>
            Welcome to MTG Deckbuilder Deluxe!
          </p>
      }
      <img src='http://i.imgur.com/KKKaooM.gif?1' alt='Mana Types'></img>
    </section>
  )
}

export default Home;