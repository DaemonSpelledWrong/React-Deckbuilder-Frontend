import React from 'react';
import HamburgerMenu from '../../components/HamburgerMenu';
import {
  Link
} from "react-router-dom";
import './main.css'

const Navigation = ({loggedIn, mobile}) => {

  return(
    loggedIn
    ?
    <section className="header">
      <nav className="navigation">
        <p className="title">Magic Deckbuilder Deluxe</p>
        {
          mobile
          ? <HamburgerMenu />
          : 
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cards">Cards</Link>
              </li>
              <li>
                <Link to="/deckbuilder" id='deckbuilder'>Deck Builder</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to='/login'>Logout</Link>
              </li>
            </ul>
        }
      </nav>
    </section>
    : 
    <section className="header">
      <nav className="navigation">
        <p className="title">Magic Deckbuilder Deluxe</p>
        {
          mobile
          ? <HamburgerMenu />
          : 
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cards">Cards</Link>
              </li>
              <li>
                <Link to="/deckbuilder" id='deckbuilder'>Deck Builder</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
        }
      </nav>
    </section>
  )
}

export default Navigation;