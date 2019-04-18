import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const SignedInLinks = (props) => {
  return (
    <span >
      <Button><Link to='/create'>New Post</Link></Button>
      <Button onClick={props.signOut}>Logout</Button>
      <Fab size="small" color="secondary"><Link to='/'>{props.profile.initials}</Link></Fab>
    </span>
  )
}

const dispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, dispatchToProps)(SignedInLinks)