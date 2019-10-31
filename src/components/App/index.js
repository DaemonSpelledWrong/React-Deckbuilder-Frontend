import React, {Component} from 'react';
import '../App/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

import CardContainer from '../CardContainer';
import DeckBuilder from '../DeckBuilder';
import Home from '../Home';
import Login from '../Login';
import Navigation from '../Navigation';
import Signup from '../Sign Up';


export default class App extends Component {

  state = {
    allCards : [],
    isLoggedIn: false
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/standard_cards', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(cards => {
      this.setState({
        allCards: cards
      })
    })
  }

  render() {
    return(
      <div className="App">
        <Router>
          <Navigation/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/cards">
              <CardContainer allCards={this.state.allCards}/>
            </Route>
            <Route path='/deckbuilder'>
              <DeckBuilder />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}