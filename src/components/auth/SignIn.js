import React, { Component } from 'react'
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
    username: '',
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
    return (
      <div className="signIn container section">
        <Paper className="paper">
            <Typography variant="h5" component="h5" gutterBottom>
                Sign In
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" name="username" autoComplete="username" autoFocus onChange={this.handleChange}/>
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

export default SignIn