import React from 'react'

import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const PostSummary = () => (
  <div className="post-summary">
    <CardContent>
      <Typography gutterBottom variant="h4" component="h2">
          Post Text
      </Typography>
      <Typography variant="subtitle1" gutterBottom>Posted by KJG</Typography>
        <Typography variant="subtitle1" gutterBottom color="textSecondary">
          March16/19
        </Typography>
    </CardContent>
  </div>
)

export default PostSummary