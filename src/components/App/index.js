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
    fetch('http://localhost:3000/standard_cards')
      .then(response => response.json())
      .then(cards => this.setState({
          allCards: cards
      }))
  }

  render() {
    return(
      <div className="App">
        <Router>
          <Navigation/>
          <Switch>
            <Route path="/home" component={ Home }/>
            <Route path="/cards" render={(...props) => <CardContainer allCards={this.state.allCards}/>} />
            <Route path='/deckbuilder' component={ DeckBuilder }/>
            <Route path='/signup' component={ Signup }/>
            <Route path='/login' component={ Login } />
          </Switch>
        </Router>
      </div>
    )
  }
}