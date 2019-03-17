import React from 'react'

import {Link} from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <ul className='right'>
      <li><Link to='/create'>New Post</Link></li>
      <li><Link to='/'>Logout </Link></li>
      <li><Link to='/' className='btn btn-floating pink lighten-1'>KJG</Link></li>
    </ul>
  )
}

export default SignedInLinks