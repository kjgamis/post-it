import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

const PostDetails = (props) => {
  const { post } = props
  const id = props.match.params.id

  if (post) {
    return (
      <div className="post-details container section">
        <Paper className="paper">
          <Typography gutterBottom variant="h4" component="h2" className="title">
            {post.title}
          </Typography>
          <Typography variant="h5" component="p" className="content">
            {post.content} - {id}
          </Typography>
          <CardActions>
            <CardActionArea>
              <Typography variant="subtitle1" gutterBottom>Posted by {post.user}</Typography>
              <Typography variant="subtitle1" gutterBottom color="textSecondary">
                April 14
              </Typography>
            </CardActionArea>
          </CardActions>
        </Paper>
      </div>
    )
  } else {
    return (
      <div className="post-details container section center">
        {/* <Typography component="p" className="content"> */}
          <p>Loading Post...</p>
        {/* </Typography> */}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const posts = state.firestore.data.posts
  const post = posts ? posts[id] : null
  return {
    post: post
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(PostDetails)