import React from 'react';
import './main.css'

export default ({card, method}) => {

  const handleClick = () => {
    method(card)
  }

  console.log(card)
  return(
    <div className="card">
      {
        card.attributes
        ?
          <div className='deck' onClick={handleClick}>
            <h1>{card.attributes.name}</h1>
            <img src={card.attributes.image} alt='Coming Soon!'></img>
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