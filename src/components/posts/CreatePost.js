import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postActions'
import { Redirect } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class CreatePost extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    console.log(this.props)
    event.preventDefault()
    // console.log(this.state)
    this.props.createPost(this.state)
  }

  render() {
    const { auth } = this.props
    if (!auth.uid) return <Redirect to='/signin'/>

    console.log(auth)
    return (
      <div className="createPost container section">
        <Paper className="paper">
            <Typography variant="h5" component="h5" gutterBottom>
                Create Post
            </Typography>
            <form onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>

                <TextField
                  id="title"
                  label="Post Title"
                  multiline
                  onChange={this.handleChange}
                  margin="normal"
                />
                <TextField
                  id="content"
                  label="Post content"
                  multiline
                  onChange={this.handleChange}
                  margin="normal"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            
            </form>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

// the first parameter of connect is 'mapStateToProps()' but because it's not needed here, 'null' is used to take its place
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)