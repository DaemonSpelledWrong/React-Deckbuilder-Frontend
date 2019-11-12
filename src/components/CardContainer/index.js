import React, { Component } from 'react';
import Card from '../Card'
import './main.css'

export default class CardContainer extends Component {
  state = {
    currentPage: 1,
    cardsPerPage: 20
  }

  decrementButton = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    })
  }

  incrementButton = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  render() {
    const { currentPage, cardsPerPage } = this.state;
    const allCards = this.props.allCards

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

    const renderCards = currentCards.map(card => {
      return(
        <Card 
          key={card.id}
          card={card}
          method={this.props.method}
        />
      )
    })

    return(
      <section className="container-zone">
        <section className={ this.props.deck ? 'deck-card-container' : 'card-container'}>
          {renderCards}
        </section>
        <section className="page-navigation">
          <button onClick={this.decrementButton}>
            Previous Page
          </button>
          {
            this.props.user
            ? 
            <button onClick={this.props.saveNewDeck}>
              Save
            </button>
            : null
          }
          <button onClick={this.incrementButton}>
            Next Page
          </button>
        </section>
      </section>
    )
  }
}
