import React from 'react'
import PostSummary from './PostSummary'
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom'


const PostList = ({posts}) => {
  return (
    <div className='post-list'>

      {posts &&  posts.map(post => {
        return (
          <Link to={`/details/${post.id}`} key={post.id}>
            <Paper className="paper">
              <PostSummary post={post}/>
            </Paper>
          </Link>
        )
      })} 

    </div>
  )
}

export default PostList