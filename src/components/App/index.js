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
import Navigation from '../Navigation';
import Signup from '../Sign Up';


export default class App extends Component {

  state = {
    allCards : [],
    selectedCards: [],
    isLoggedIn: false
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/standard_cards')
      .then(response => response.json())
      .then(cards => this.setState({
          allCards: cards
      }))
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

  render() {
    const { allCards, selectedCards, isLoggedIn } = this.state
    return(
      <div className="App">
        <section className="content-wrap">
          <Router>
            <Navigation/>
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route path="/cards" render={(...props) => <CardContainer allCards={allCards}/>} />
              <Route path='/deckbuilder'>
                <DeckBuilder 
                  allCards={allCards} 
                  selectedCards={selectedCards}
                  isLoggedIn={isLoggedIn}
                  addCard={this.addCard}
                  removeCard={this.removeCard}
                />
              </Route>
              <Route path='/signup' component={ Signup }/>
              <Route path='/login' component={ Login } />
            </Switch>
          </Router>
        </section>
        <Footer />
      </div>
    )
  }
}