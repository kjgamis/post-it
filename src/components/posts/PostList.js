import React from 'react'
import PostSummary from './PostSummary'
import Paper from '@material-ui/core/Paper';


const PostList = (props) => {
  return (
    <div className='post-list'>
      <Paper className="paper">
        <PostSummary title={props.title} user={props.user}/>
      </Paper>
    </div>
  )
}

export default PostList