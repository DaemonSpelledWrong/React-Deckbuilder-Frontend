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
    user: null
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/standard_cards')
      .then(response => response.json())
      .then(cards => this.setState({
          allCards: cards
      }))
  }

  loginUser = user => {
    console.log(user)
    return (
      localStorage.getItem('authToken') === 'null'
      ? null
      : localStorage.getItem('authToken') === 'undefined'
        ? null
        : this.setState({ user })
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

  saveNewDeck = () => {
    fetch('http://localhost:3000/decks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        name: null,
        cards: this.state.selectedCards
      })
    })
  }

  saveExistingDeck = () => {
    console.log('hit this too!')
  }

  render() {
    const { allCards, selectedCards, user } = this.state
    return(
      <div className="App">
        <section className="content-wrap">
          <Router>
            <Navigation loggedIn={user}/>
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route path="/cards" render={(...props) => <CardContainer allCards={allCards} method={this.viewCard}/>} />
              <Route path='/deckbuilder'>
                <DeckBuilder 
                  allCards={allCards} 
                  selectedCards={selectedCards}
                  user={user}
                  addCard={this.addCard}
                  removeCard={this.removeCard}
                  saveNewDeck={this.saveNewDeck}
                />
              </Route>
              <Route path='/signup' component={ Signup }/>
              <Route path='/login'>
                <Login loginUser={this.loginUser} logoutUser={this.logoutUser} user={user}/>
              </Route>
              <Route path='/profile'>
                <Profile user={user}/>
              </Route>
            </Switch>
          </Router>
        </section>
        <Footer />
      </div>
    )
  }
}