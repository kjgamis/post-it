import React from 'react'
import PostSummary from './PostSummary'
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom'


const PostList = ({posts}) => {
  // console.log(posts)
  return (
    <div className='post-list'>

      {posts &&  posts.map(post => {
        return (
          <Link to={`/details/${post.id}`}>
            <Paper className="paper" key={post.id}>
              <PostSummary post={post} key={post.id}/>
            </Paper>
          </Link>
        )
      })} 

    </div>
  )
}

export default PostList