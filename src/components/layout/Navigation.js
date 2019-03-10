import React from 'react'

import {Link} from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navigation = () => (
  <div className="navigation">
    <Link to='/create'>Create Post</Link><br/>
    <Link to='/signin'>Sign In</Link><br/>
    <Link to='/signup'>Sign Up</Link><br/>

    <SignedInLinks/>
    <SignedOutLinks/>
  </div>
)

export default Navigation