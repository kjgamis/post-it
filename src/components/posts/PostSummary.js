import React from 'react'
import moment from 'moment'

import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const PostSummary = ({post}) => {
  return (
    <div className="post-summary">
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {post.title}
        </Typography>
        <Typography gutterBottom variant="h4" component="h2">
          {post.content}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {post.userFirstname} {post.userLastname}
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="textSecondary">
          {moment(post.createdAt.toDate()).calendar()}
        </Typography>
      </CardContent>
    </div>
  )
}

export default PostSummary