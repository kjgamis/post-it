import React from 'react'

import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const PostSummary = ({post}) => {
  console.log(post)
  return (
    <div className="post-summary">
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {post.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {post.user}
        </Typography>
        <Typography variant="subtitle1" gutterBottom color="textSecondary">
          March16/19
        </Typography>
      </CardContent>
    </div>
  )
}

export default PostSummary