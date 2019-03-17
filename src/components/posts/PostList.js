import React from 'react'
import PostSummary from './PostSummary'


const PostList = (props) => {
  return (
    <div className='post-list'>
      <PostSummary title={props.title} user={props.user}/>
    </div>
  )
}

export default PostList