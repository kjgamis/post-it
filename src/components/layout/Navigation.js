import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';

const Navigation = (props) => {
  const { auth, profile } = props
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
  return (
    <AppBar className="navbar">
      <div className="container">
      <Link to='/' className='brand-logo'>PostIt</Link>
        <div className='right hide-on-med-and-down'>          
          { links }
        </div>
      </div>
    </AppBar>
  )
}

const stateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(stateToProps)(Navigation)