import React, { Component } from 'react'
import Notifications from './Notifications'
import PostList from '../posts/PostList'
import { connect } from 'react-redux'
 

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { posts } = this.props
    const { notifications } = this.props

    return(
      <div className="dashboard container section">
        <div className="row">
          <div className="col s12 m6">
            <PostList posts={posts}/>
            <PostList title="Post Text 2" user="Kage"/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
    notifications: state.notification.notifications
  }
}

export default connect(mapStateToProps)(Dashboard)