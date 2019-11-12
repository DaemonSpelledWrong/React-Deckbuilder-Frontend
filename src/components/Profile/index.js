import React from 'react';
import './main.css'

export default ({ user }) => (
  
  <section className='profile'>
    <h1>{user.email}</h1>
  </section>

)