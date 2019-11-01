import React from 'react';
import './main.css'

export default ({name, image}) => (
  <div className="card">
    <img src={image} alt={name}></img>
  </div>
)