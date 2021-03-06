import React, { useState, useEffect } from 'react';
import '../App/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CardContainer from '../CardContainer';
import DeckBuilder from '../DeckBuilder';
import Footer from '../Footer'
import Home from '../Home';
import Login from '../Login';
import Profile from '../Profile';
import Navigation from '../Navigation';
import Signup from '../Sign Up';

import { useHttp } from '../../hooks/http';

const App = () => {

  const [ user, setUser ]                   = useState(null);
  const [ decks, setDecks ]                 = useState(null);
  const [ deck_id, setDeckId ]              = useState(null);
  const [ isMobile, setIsMobile ]           = useState(false);


  const [ fetchedData ] = useHttp('https://safe-bayou-71328.herokuapp.com/standard_cards', null);

  useEffect(() => {
    updatePredicate();
    window.addEventListener("resize", updatePredicate())
  }, []);

  const updatePredicate = () => {
    setIsMobile(window.innerWidth < 481);
  };

  const loginUser = token => {
    return (
      localStorage.getItem('authToken') === 'null'
      ? null
      : localStorage.getItem('authToken') === 'undefined'
        ? null
        : (setUser(token.user), setDecks(token.decks))
    );
  };

  const logoutUser = () => {
    setUser(null);
  };

  const viewCard = card => {
    console.log(deck_id);
  };

  return(
    <div className="App">
      <section className="content-wrap">
        <Router>
          <Navigation loggedIn={user} mobile={isMobile}/>
          <Switch>
            <Route exact path="/">
              <Home user={user}/>
            </Route>
            <Route path="/cards" render={(...props) => <CardContainer allCards={fetchedData} method={viewCard} cardPageCount={27}/>} />
            <Route path='/deckbuilder'>
              <DeckBuilder 
                allCards={fetchedData} 
                user={user}
                deck_id={deck_id}
              />
            </Route>
            <Route path='/signup' component={ Signup }/>
            <Route path='/login'>
              <Login loginUser={loginUser} logoutUser={logoutUser} user={user}/>
            </Route>
            <Route path='/profile'>
              <Profile user={user} decks={decks} setDeckId={setDeckId}/>
            </Route>
          </Switch>
        </Router>
      </section>
      <Footer />
    </div>
  )
};

export default App;