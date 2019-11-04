import React from 'react';
import './main.css'

export default ({name, image, addCard}) => (
  <div className="card">
    <img 
      src={image} 
      alt={name}
      onClick={addCard}
    ></img>
  </div>
)