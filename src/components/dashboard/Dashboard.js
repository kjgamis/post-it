import React, { Component } from 'react'
import Notifications from './Notifications'
import PostList from '../posts/PostList'

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard container section">
        <div className="row">
          <div className="col s12 m6">
            <PostList title="Post Text 1" user="KJG"/>
            <PostList title="Post Text 2" user="Kage"/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard