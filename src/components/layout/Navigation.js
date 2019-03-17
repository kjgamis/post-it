import React from 'react'

import {Link} from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';

const Navigation = () => {
  return (
    <AppBar className="navbar">
      <div className="container">
      <Link to='/' className='brand-logo'>PostIt</Link>
        <div className='right hide-on-med-and-down'>
          <SignedInLinks/>
          <SignedOutLinks/>
        </div>
      </div>
    </AppBar>
  )
}

export default Navigation