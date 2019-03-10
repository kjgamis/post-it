import React, { Component } from 'react';

import {
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './components/layout/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import Create from './components/posts/CreatePost'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Dashboard/>
        <Switch>
          <Route path='/create' component={Create} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
