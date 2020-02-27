import React from 'react';
// import {
//   Link
// } from "react-router-dom";
import './main.css'

function testMenu() {
  console.log('Hit');
}

const HamburgerMenu = () => {
  return(
    <div>
      <i className="fa fa-bars" onClick={testMenu}></i>
    </div>
  )
}

export default HamburgerMenu;