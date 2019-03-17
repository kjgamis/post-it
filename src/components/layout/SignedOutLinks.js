import React from 'react'

import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const SignedInOutLinks = () => {
  return (
    <span>
      <Button><Link to='/signup'>Signup</Link></Button>
      <Button><Link to='/signin'>Login</Link></Button>
    </span>
  )
}

export default SignedInOutLinks