import React, { Component } from 'react';
import './main.css'

export default class Signup extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: ''
  }
  signUserUp = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/registration', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      })
    })
    .then(
      this.setState({
        email: '',
        password: '',
        password_confirmation: ''
      })
    )
    // .then(
    //   this.props.loadLoginPage(event)
    // )
  }

  updateEmail = (event) => {
    this.setState({
      email: event.target.value
    })  
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  updatePasswordconfirmation = (event) => {
    this.setState({
      password_confirmation: event.target.value
    })
  }

  render() {
    return(
      <section className='signup-zone'>
        <form id="signup-form-submissions" onSubmit={event => this.signUserUp(event)}>
          <label htmlFor="signup-email">Email</label>
          <input id="signup-email" type="text" placeholder="example@example.com"name="email"
          onChange={event => this.updateEmail(event)} value={this.state.email}/>

          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" placeholder="password" name="password"
          onChange={event => this.updatePassword(event)} value={this.state.password}/>

          <label htmlFor="signup-password_confirmation">Password Confirmation</label>
          <input id="signup-password_confirmation" type="password" placeholder="password_confirmation" name="password_confirmation"
          onChange={event => this.updatePasswordconfirmation(event)} value={this.state.password_confirmation}/>
          
          <input className='submitButton'type="submit" value="Sign up"/>
        </form>
      </section>
    )
  }
}