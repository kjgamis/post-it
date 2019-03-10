import React, { Component } from 'react'

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard container">
        <p>This is the Dashboard</p>
        <div className="row">
          <div className="col s12 m6">
            This is for Post List
          </div>
          <div className="col s12 m5 offset-m1">
            This is for Notifications
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard