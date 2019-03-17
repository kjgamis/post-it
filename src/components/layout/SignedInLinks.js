import React from 'react'

import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const SignedInLinks = () => {
  return (
    <span >
      <Button><Link to='/create'>New Post</Link></Button>
      <Button><Link to='/'>Logout </Link></Button>
      <Fab size="small" color="secondary"><Link to='/'>KJG</Link></Fab>
    </span>
  )
}

export default SignedInLinks