import React from 'react'
import PostSummary from './PostSummary'
import Paper from '@material-ui/core/Paper';


const PostList = ({posts}) => {
  // console.log(posts)
  return (
    <div className='post-list'>

      {posts &&  posts.map(post => {
        return (
          <Paper className="paper" key={post.id}>
            <PostSummary post={post} key={post.id}/>
          </Paper>
        )
      })} 

    </div>
  )
}

export default PostList