import React from 'react';
import './main.css'

export default ({card, method}) => {

  const handleClick = () => {
    method(card)
  }
  
  return(
    <div className="card">
      {
        card.attributes
        ?
          <div className='deck' onClick={handleClick}>
            <h1>{card.attributes.name}</h1>
          </div>
        :
          <img 
            src={card.image} 
            alt={card.name}
            onClick={handleClick}
          ></img>
      }
  </div>
  )
}