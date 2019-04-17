import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
// import Typography from '@material-ui/core/Typography';

const Navigation = (props) => {
  const { auth } = props
  const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navigation)