import React, { useState } from 'react';
import './main.css';

const SignUp = () => {

  const [ email, updateEmail ]                                = useState('');
  const [ password, updatePassword ]                          = useState('');
  const [ password_confirmation, updatePasswordConfirmation ] = useState('');

  const signUserUp = (event) => {
    event.preventDefault();
    fetch('https://safe-bayou-71328.herokuapp.com/registration', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        password_confirmation: password_confirmation
      })
    })
    .then(
      updateEmail(''),
      updatePassword(''),
      updatePasswordConfirmation('')
    );
  };

  return(
    <section className='signup-zone'>
      <form id="signup-form-submissions" onSubmit={event => signUserUp(event)}>
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" type="text" placeholder="example@example.com"name="email"
        onChange={event => updateEmail(event.target.value)} value={email}/>

        <label htmlFor="signup-password">Password</label>
        <input id="signup-password" type="password" placeholder="password" name="password"
        onChange={event => updatePassword(event.target.value)} value={password}/>

        <label htmlFor="signup-password_confirmation">Password Confirmation</label>
        <input id="signup-password_confirmation" type="password" placeholder="password_confirmation" name="password_confirmation"
        onChange={event => updatePasswordConfirmation(event.target.value)} value={password_confirmation}/>
        
        <input className='submitButton'type="submit" value="Sign up"/>
      </form>
    </section>
  );
};

export default SignUp;