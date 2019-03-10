import React from 'react'

import {Link} from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navigation = () => (
  <nav className="nav-wrapper grey darken-3">
    <div className="container">
      <Link to='/' className='brand-logo'>PostIt</Link>
      <div className='right hide-on-med-and-down'>
        <SignedInLinks/>
        <SignedOutLinks/>
      </div>
    </div>
  </nav>
)

export default Navigation