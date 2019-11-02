import React, { Component } from 'react';
import Card from '../Card'
import './main.css'

export default class CardContainer extends Component {
  state = {
    currentPage: 1,
    cardsPerPage: 21
  }

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }
  
  render() {
    this.handleClick = this.handleClick.bind(this);
    const { currentPage, cardsPerPage } = this.state;
    const allCards = this.props.allCards

    const indexOfLastPage = currentPage * cardsPerPage;
    const indexOfFirstPage = indexOfLastPage - cardsPerPage;
    const currentCards = allCards.slice(indexOfFirstPage, indexOfLastPage);

    const renderCards = currentCards.map((card, index) => {
      return(
        <Card 
          key={card.name}
          name={card.name}
          image={card.image}
        />
      )
    })

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allCards.length / cardsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    })
    return(
      <section className="container-zone">
        <section className="card-container">
          {renderCards}
        </section>
        <ul id='page-numbers'>
          {renderPageNumbers}
        </ul>
      </section>
    )
  }
}
