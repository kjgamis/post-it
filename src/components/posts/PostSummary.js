import React from 'react'

import {Link} from 'react-router-dom'

import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const PostSummary = (props) => {
  return (
    <div className="post-summary">
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
            {props.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {props.user}
        </Typography>
          <Typography variant="subtitle1" gutterBottom color="textSecondary">
            March16/19
          </Typography>
      </CardContent>
    </div>
  )
}

export default PostSummary