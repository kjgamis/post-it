import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // use the signIn() function from line77 with state.email & state.password as arguments
    this.props.signIn(this.state)
  }

  render() {
    const { authError, auth } = this.props
    if (auth.uid) return <Redirect to='/'/>
    
    return (
      <div className="signIn container section">
        <Paper className="paper">
            <Typography variant="h5" component="h5" gutterBottom>
                Sign In
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <div className="red-text center">
                { authError ? <p>{authError}</p> : null}
              </div>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel><br/>
                <Input id="password" name="password" type="password" autoComplete="current-password" onChange={this.handleChange}/>
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign in
              </Button>
            </form>
        </Paper>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const dispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(stateToProps, dispatchToProps)(SignIn)