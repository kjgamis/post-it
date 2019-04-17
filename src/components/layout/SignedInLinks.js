import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../store/actions/authActions'

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const SignedInLinks = (props) => {
  return (
    <span >
      <Button><Link to='/create'>New Post</Link></Button>
      <Button><a onClick={props.logout}>Logout</a></Button>
      <Fab size="small" color="secondary"><Link to='/'>KJG</Link></Fab>
    </span>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)