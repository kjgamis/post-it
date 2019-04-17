import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class SignUp extends Component {
  state = {
    firstname: '',
    lastname: '',
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
    console.log(this.state)
  }

  render() {
    const { auth } = this.props
    if (auth.id) return <Redirect to='/dashboard'/>
    
    return (
      <div className="signIn container section">
        <Paper className="paper">
            <Typography variant="h5" component="h5" gutterBottom>
                Sign Up
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="firstname">First Name</InputLabel>
                <Input id="firstname" name="firstname" autoComplete="firstname" autoFocus onChange={this.handleChange}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                <Input id="lastname" name="lastname" autoComplete="lastname" autoFocus onChange={this.handleChange}/>
              </FormControl>
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
                Sign Up
              </Button>
            
            </form>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp)