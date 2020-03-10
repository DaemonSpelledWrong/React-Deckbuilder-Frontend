import React from 'react';
import './main.css'

export default ({card, method}) => {
  
  return(
    <div className="card">
      {
        card.attributes
        ?
          <div className='deck' onClick={() => method(card)}>
            <h1>{card.attributes.name}</h1>
          </div>
        :
          <img 
            src={card.image} 
            alt={card.name}
            onClick={() => method(card)}
          ></img>
      }
  </div>
  )
}