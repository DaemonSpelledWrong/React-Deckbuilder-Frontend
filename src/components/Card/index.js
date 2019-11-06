import React from 'react';
import './main.css'

export default ({card, method}) => {

  const handleClick = () => {
    method(card)
  }

  return(
    <div className="card">
      <img 
        src={card.image} 
        alt={card.name}
        onClick={handleClick}
      ></img>
  </div>
  )
}