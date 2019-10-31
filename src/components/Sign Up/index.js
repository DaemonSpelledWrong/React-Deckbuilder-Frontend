import React, { Component } from 'react';
import './main.css'

export default class Signup extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
  }

  render() {
    return(
      <section className='signup-zone'>
        <h1>Sign up!</h1>
      </section>
    )
  }
}