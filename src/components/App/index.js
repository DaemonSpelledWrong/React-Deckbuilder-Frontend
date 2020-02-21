import React, {Component} from 'react';
import '../App/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

import CardContainer from '../CardContainer';
import DeckBuilder from '../DeckBuilder';
import Footer from '../Footer'
import Home from '../Home';
import Login from '../Login';
import Profile from '../Profile';
import Navigation from '../Navigation';
import Signup from '../Sign Up';


export default class App extends Component {

  state = {
    allCards : [],
    selectedCards: [],
    user: null,
    decks: null,
    deck_id: null,
    isMobile: false
  }

  componentDidMount = () => {
    fetch('https://safe-bayou-71328.herokuapp.com/standard_cards')
      .then(response => response.json())
      .then(cards => this.setState({
          allCards: cards
      }))

    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }


  updatePredicate = () => {
    this.setState({
      isMobile: window.innerWidth < 481
    })
  }

  loginUser = token => {
    return (
      localStorage.getItem('authToken') === 'null'
      ? null
      : localStorage.getItem('authToken') === 'undefined'
        ? null
        : this.setState({ user: token.user, decks: token.decks })
    )
  }

  logoutUser = () => {
    this.setState({
      user: null
    })
  }

  addCard = card => {
    return this.state.selectedCards.includes(card)
    ? null
    : this.setState({
      selectedCards: this.state.selectedCards.concat(card)
    })
  }

  removeCard = card => {
    return this.state.selectedCards.includes(card)
    ? this.setState({
      selectedCards: this.state.selectedCards.filter(thisCard => {
        return thisCard !== card
      })
    })
    : null
  }

  viewCard = card => {
    console.log('to be added!', card)
  }

  editDeck = deck => {
    this.setState({
      selectedCards: deck.attributes.standard_cards,
      deck_id: deck.attributes.id
    })
  }

  saveDeck = () => {
    this.state.deck_id !== null
    ?
      fetch(`http://localhost:3000/decks/${this.state.deck_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Deck',
          user_id: this.state.user.data.attributes.id,
          cards: this.state.selectedCards
        })
      })
    :
      fetch('https://safe-bayou-71328.herokuapp.com/decks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: this.state.user.data.attributes.id,
          name: 'Deck',
          cards: this.state.selectedCards
        })
      })
  }

  resetDeck = () => {
    return (
      this.setState({
        deck_id: null
      })
    )
  }

  render() {
    const { allCards, selectedCards, user, decks, isMobile } = this.state
    return(
      <div className="App">
        <section className="content-wrap">
          <Router>
            <Navigation loggedIn={user} reset={this.resetDeck} mobile={isMobile}/>
            <Switch>
              <Route exact path="/">
                <Home user={user}/>
              </Route>
              <Route path="/cards" render={(...props) => <CardContainer allCards={allCards} method={this.viewCard} cardPageCount={27}/>} />
              <Route path='/deckbuilder'>
                <DeckBuilder 
                  allCards={allCards} 
                  selectedCards={selectedCards}
                  user={user}
                  addCard={this.addCard}
                  removeCard={this.removeCard}
                  saveNewDeck={this.saveDeck}
                />
              </Route>
              <Route path='/signup' component={ Signup }/>
              <Route path='/login'>
                <Login loginUser={this.loginUser} logoutUser={this.logoutUser} user={user}/>
              </Route>
              <Route path='/profile'>
                <Profile user={user} decks={decks} method={this.editDeck}/>
              </Route>
            </Switch>
          </Router>
        </section>
        <Footer />
      </div>
    )
  }
}