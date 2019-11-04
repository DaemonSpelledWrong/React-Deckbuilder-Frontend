import React from 'react';
import {
  Link
} from "react-router-dom";
import './main.css'

const Navigation = () => {
  return(
    <section className="header">
      <nav className="navigation">
        <p className="title">Magic Deckbuilder Deluxe</p>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cards">Cards</Link>
          </li>
          <li>
            <Link to="/deckbuilder">Deck Builder</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navigation;