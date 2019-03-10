import React from 'react'

import {Link} from 'react-router-dom'

const SignedInOutLinks = () => (
  <ul className='right'>
    <li><Link to='/signup'>Signup</Link></li>
    <li><Link to='/signin'>Login</Link></li>
  </ul>
)

export default SignedInOutLinks