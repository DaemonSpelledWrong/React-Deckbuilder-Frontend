import React, { useState, useEffect } from 'react';
import './main.css';

const Login = ({loginUser, logoutUser, user}) => {

  const [ email, updateEmail ]       = useState('');
  const [ password, updatePassword ] = useState('');

  useEffect(() => {
    localStorage.removeItem('authToken')
    if(user !== null) {
      logoutUser();
    };
  }, []);

  const logUserIn = (event) => {
    event.preventDefault();
    fetch('https://safe-bayou-71328.herokuapp.com/authenticate', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(token => {
      localStorage.setItem('authToken', token.auth_token);
      loginUser(token);
    })
    .then(
      updateEmail(''),
      updatePassword('')
    );
  };

  return(
    <section className='login-zone'>
      <form id='login-form-submissions' onSubmit={event => logUserIn(event)}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" type="text" placeholder="example@example.com" name="email" 
        onChange={event => updateEmail(event.target.value)} value={email} />

        <label htmlFor="login-password">Password</label>
        <input id="login-password" type="password" placeholder="password" name="password" 
        onChange={event => updatePassword(event.target.value)} value={password} />

        <input className='submitButton' type="submit" value="Login" />
      </form>
    </section>
  )
};

export default Login;